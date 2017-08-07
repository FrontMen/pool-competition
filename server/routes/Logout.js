const User = require('../models/User');

module.exports = function(router) {
    router.post('/logout', function(req, res) {
        if (req.session){
            delete req.session;
            res.status(200).send();
        } else {
            res.status(409).send({
                description: "No active session."
            });
        }
    });

    return router;
};