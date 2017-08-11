const User = require('../models/User');
const moment = require("moment");
const auth = require('../utils/Auth');
const Games = require('../models/Game');
module.exports = function(router) {
    router.post('/games', auth.user, function(req, res) {
        Games.findOne({ title: req.body.title }, function(err, game){
            if (game){
                res.status(403).send({
                    description: "That title is already taken."
                });
            } else {
                Games.create({
                    title: req.body.title,
                    creator: req.session.userId,
                    expiration: req.body.expiration || moment().add(1, "y").valueOf()
                }, function(err){
                    console.log(err);
                });
                res.status(200).send();
            }
        });
    });
    router.get('/games', auth.user, function(req, res) {
        Games.find({}).populate('creator', 'username').lean().exec(function(err, games){
            res.status(200).send(games.map(game => {
                let response = Object.assign({}, game);
                response.totalMembers = response.ranking.length;
                delete response.ranking;
                return response;
            }));
        });
    });

    router.get('/games/:title', auth.user, function(req, res) {
        Games.findOne({ title: req.params.title })
            .populate('creator', 'username')
            .populate('ranking', 'username position').exec(function(err, game){
                console.log(game);
            if (game){
                res.status(200).send(game);
            } else {
                res.status(404).send({
                    description: "That game does not exist"
                });
            }
        })
    });

    router.post('/games/:title/join', auth.user, function(req,res){
        Games.findOne({ title: req.params.title}, (err, game) => {
            game.ranking.push({ user: req.session.userId });
            game.save(() => {
                res.status(200).send();
            });
        });
    });
    router.post('games/:title/challenge/:user', auth.user, function(req,res){
        // TODO challenge another person from this competition
        // Payload should contain the challenged person.
    });

    router.post('games/:title/challenge/:challengeId', function(req,res){
        // TODO resolve a challenge with a winning user
        // The winner/loser will swap position if the winner has a lower ranking
    });

    router.delete('/games/:title', auth.user, function(req, res) {
        Games.findOne({title: req.params.title}, function(err, user){
            if (bcrypt.compareSync(req.body.password, user.password)) {
                User.remove({ username: req.session.username }, function(){
                    res.send(204);
                });
            }
        });
    });

    return router;
};