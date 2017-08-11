module.exports = function(router) {
    router.get('/is-user', function(req, res) {
        User.find({ _id: req.session._id}, function(user){
            if (user) {
                res.status(204).send();
            } else {
                res.status(401).send();
            }
        });
    });

    return router;
};