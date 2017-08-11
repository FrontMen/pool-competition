const RandomHash = require('random-hash').RandomHash;
const bcrypt = require("bcryptjs");
const mailer = require("../utils/mailer");
const auth = require("../utils/Auth");
const User = require('../models/User');
const generateHash = new RandomHash({
    length: 12,
    charset: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
});
function createHash(password){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

function createUser(email, username, password, res) {
    const verificationExpiry = Date.now() + (1000 * 60 * 60 * 48);
    User.create({
        email: email,
        username: username,
        password: createHash(password),
        verificationHash: generateHash(),
        verificationExpiry: verificationExpiry
    }, function(err, user) {
        mailer.verify({
            email: user.email,
            hash: user.verificationHash
        });
        res.status(204).send();
    });
}

module.exports = function(router) {
    router.post('/users', function(req, res) {
        let username = req.body.username || false,
            email = req.body.email || false,
            password = req.body.password || false;

        if (!username || !email || !password){
            res.status(400).send({
                description: "Missing data."
            });

            return;
        }

        User.findOne({$or:[
                {'username': username},
                {'email': email}
            ]}, function(err, user) {
            if(user) {
                let field = username === user.username ? "Username" : "Email";
                res.status(409).send({
                    description: `${field} already taken.`
                });
            } else {
                createUser(email, username, password, res);
            }
        });
    });
    router.get('/users', auth.user, function(req, res) {
        User.find({}, function(err, users) {
            return res.status(200).send(users);
        });
    });

    router.get('/users/me', auth.user, function(req, res) {
        User.findOne({ _id: req.session._id}, function(user){
            if (user){
                res.status(200).send({
                    username: user.username,
                    email: user.email
                });
            }
        })
    });

    router.put('/users/me', auth.user, function(req, res) {
        User.findOne({_id: req.session._id}, function(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                let changes = {};
                Object.keys(req.body).forEach((key) => {
                    if(key !== "email" && key !== "password") {
                        if(key === "newPassword") {
                            changes.password = createHash(password);
                        } else {
                            changes[key] = req.body[key];
                        }
                    }
                });
                user.update(changes, function() {
                    res.send(204);
                });
            }
        });
    });

    router.delete('/users/me', auth.user, function(req, res) {
        User.findOne({_id: req.session._id}, function(user){
            if (bcrypt.compareSync(req.body.password, user.password)) {
                User.remove({ _id: req.session.id }, function(){
                    res.send(204);
                });
            }
        });
    });

    return router;
};