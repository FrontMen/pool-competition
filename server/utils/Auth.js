module.exports = {
    user: function(req, res, next) {
        if (req.session && req.session.user){
            return next();
        } else {
            return res.sendStatus(401);
        }
    },
    admin: function(req,res, next) {
        if (req.session && req.session.user && req.session.admin){
            return next();
        } else {
            return res.sendStatus(401);
        }
    }
};