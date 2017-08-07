const bcrypt = require("bcryptjs");
const User = require('../models/User');

module.exports = function(router) {
    router.post('/login', function(req, res) {
        User.findOne({ email: req.body.email }, function(err, user){
            if (user && bcrypt.compareSync(req.body.password, user.password)){
                req.session.regenerate(function(){
                    if ( req.body.rememberme ) {
                        req.session.cookie.maxAge = 2592000000;
                    }
                    req.session.email = user.email;
                    res.status(200).send();
                });
            }
        })
    });

    return router;
};