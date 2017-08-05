const RandomHash = require('random-hash').RandomHash;
const bcrypt = require("bcryptjs");
const mailer = require("../utils/mailer");
const auth = require("../utils/Auth");

let User = require('../models/User');
const generateHash = new RandomHash({
    length: 12,
    charset: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
});

function createUser(email, password, res) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const verificationExpiry = Date.now() + (1000 * 60 * 60 * 48);
    User.create({
        email: email,
        password: hash,
        verificationHash: generateHash(),
        verificationExpiry: verificationExpiry
    }, function(err, user) {
        mailer.verify({
            email: user.email,
            hash: user.verificationHash
        });
        res.status(200).send();
    });
}

function verifyUser(req, res, user) {
    user.verified = true;
    user.verificationExpiry = undefined;
    user.verificationHash = undefined;
    user.save(function(err, user) {
        console.log(user);
        req.session.user = user.email;
        res.status(200).send();
    })
}

module.exports = function(router) {
    router.post('/users', function(req, res) {
        User.find({email: req.body.email}).count(function(err, count) {
            if(count === 0) {
                createUser(req.body.email, req.body.password, res);
            } else {
                res.status(409).send({
                    error: {
                        email: true,
                        message: "Email already taken."
                    }
                });
            }
        })

    });
    router.get('/users', auth.user, function(req, res) {
        User.find({}, function(err, users) {
            return res.status(200).send(users);
        });
    });

    router.get('/verify/:verificationHash', function(req, res) {
        User.findOne({verificationHash: req.params.verificationHash}, function(err, match) {
            if(match && match.verificationExpiry > Date.now()) {
                verifyUser(req, res, match);
            } else {
                res.status(404).send({
                    error: {
                        hash: true,
                        message: "No user found for this url."
                    }
                });
            }
        });
    });

    router.post('/users/login', function(req, res) {
        User.findOne({ email: req.params.email, password: req.params.password }, function(err, match){
            if (user){
                req.session.user = user.email;
                res.status(200).send();
            }
        })
    });

    return router;
};