const User = require('../models/User');

module.exports = function(router) {
    router.post('/logout', function(req, res) {
        if (req.session.userId){
            req.session.regenerate(function(){
                res.status(200).send();
            });
        } else {
            res.status(409).send({
                description: "No active session."
            });
        }
    });

    return router;
};