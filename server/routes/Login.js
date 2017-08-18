const bcrypt = require("bcryptjs");
const User = require('../models/User');

module.exports = function(router) {
    router.post('/login', function(req, res) {
        User.findOne({ username: req.body.username }, function(err, user){
            if (user && bcrypt.compareSync(req.body.password, user.password)){
                req.session.regenerate(function(){
                    if ( req.body.remember ) {
                        req.session.cookie.maxAge = 2592000000;
                    }
                    req.session.userId = user._id;
                    console.log("LOGIN:", req.session);
                    req.session.save(function(err) {
                        console.log("SAVE:",err);
                        res.status(204).send();
                    });
                });
            } else {
                res.status(401).send();
            }
        })
    });

    return router;
};