const User = require('../models/User');

module.exports = {
    user: function(req, res, next) {
        User.findById(req.session.userId, function(err, user){
           if (user){
               return next();
           }

           return res.sendStatus(401);
        });
    }
};