const User = require('../models/User');

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
    router.get('/verify/:verificationHash', function(req, res) {
        User.findOne({verificationHash: req.params.verificationHash}, function(err, match) {
            if(match && match.verificationExpiry > Date.now()) {
                verifyUser(req, res, match);
            } else {
                res.status(404).send({
                    description: "No user found for this url."
                });
            }
        });
    });

    return router;
};