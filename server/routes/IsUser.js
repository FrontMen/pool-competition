module.exports = function(router) {
    router.get('/is-user', function(req, res) {
        if (req.session.email){
            res.status(204).send();
        } else {
            res.status(401).send();
        }
    });

    return router;
};