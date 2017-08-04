const RandomHash = require('random-hash').RandomHash;
const bcrypt = require("bcryptjs");

let User = require('../models/User');
const generateHash = new RandomHash({
    length: 12,
    charset: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
});

module.exports = function(router) {
    router.post('/', function(req, res) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const verificationExpiry = Date.now() + (1000 * 60 * 60 * 48);
        User.create({
            email: req.body.email,
            password: hash,
            verificationHash: generateHash(),
            verificationExpiry: verificationExpiry
        });
    });
    router.get('/', function(req, res) {
        User.find({}, function(err, users) {
            return res.send(users);
        });
    });

    router.get('/verify/:verificationHash', function(req,res){
        let match = User.find({ verificationHash: req.params.verificationHash });
        if (match.verificationExpiry > Date.now()){
            match.verified = true;
            match.verificationExpiry = undefined;
            match.verificationHash = undefined;
            match.save(function(){
                res.send(200);
            })

        }
    });

    return router;
};