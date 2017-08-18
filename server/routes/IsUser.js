const User = require('../models/User');

module.exports = function(router) {

    router.get('/is-user', function(req, res) {
        console.log("IS USER:", req.session);
        User.findById(req.session.userId, function(err, user){
            if (user){
                res.status(204).send();
            } else {
                res.status(401).send();
            }
        });
    });

    return router;
};