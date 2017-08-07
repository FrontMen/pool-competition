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
        User.findOne({$or:[
                {'username': req.body.username},
                {'email': req.body.email}
            ]}).count(function(err, user) {
            if(!user) {
                createUser(req.body.email, req.body.username, req.body.password, res);
            } else {
                let field = req.body.username === user.username ? "Username" : "Email";
                res.status(409).send({
                    error: {
                        email: true,
                        message: `${field} already taken.`
                    }
                });
            }
        })

    });
    router.get('/users', auth.user, function(req, res) {
        User.find({ }, function(err, users) {
            return res.status(200).send(users);
        });
    });

    router.get('/users/me', auth.user, function(req, res) {
        User.findOne({ username: req.params.username }, function(user){
            if (user.username === req.session.username){
                res.status(200).send({
                    username: user.username,
                    email: user.email
                });
            }
        })
    });

    router.put('/users/me', auth.user, function(req, res) {
        User.findOne({username: req.session.username}, function(user) {
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
        User.findOne({username: req.session.username}, function(user){
            if (bcrypt.compareSync(req.body.password, user.password)) {
                User.remove({ username: req.session.username }, function(){
                    res.send(204);
                });
            }
        });
    });

    return router;
};