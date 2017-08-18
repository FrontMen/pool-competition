const User = require('../models/User');

module.exports = {
    user: function(req, res, next) {
        console.log(req.session);
        User.findById(req.session.userId, function(err, user){
           if (user){
               return next();
           }

           return res.sendStatus(401);
        });
    }
};