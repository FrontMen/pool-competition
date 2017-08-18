'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GameSchema = new Schema({
        title: {
            type: String
        },
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
        ranking: [{
            position: Number,
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Users'
            },
            challenge: {
                by: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Users'
                },
                expiration: Number
            }
        }],
        expiration: {
            type: Number
        }
    },
    {
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    });

GameSchema.virtual('playerCount')
    .get((function() {
        return this.ranking.length;
    }));

GameSchema.pre("validate", function(next) {
    let doc = this;
    doc.ranking.forEach((rank) => {
        if (typeof rank.position !== "number"){
            rank.position = doc.playerCount - 1;
        }
    });
    next();

    // If 'position' is not filled in, fill it in.
    // Not using !position because 0 might be a valid value.
    // obj.ranking.forEach(function(rank){
    //     if (typeof rank.position !== "number"){
    //         rank.position = obj.ranking
    //     }
    // });
    // if(typeof position !== "number") {
    //     // Count the number of Items *
    //     mongoose.model("Item").count(function(err, num) {
    //         // If there was an error, pass it to next().
    //         if(err)
    //             return next(err);
    //
    //         // Update the position, then call next();
    //         doc.position = num;
    //         return next();
    //     });
    // } else {
    //     //  There is no need to count, so call next().
    //     next();
    // }
});


module.exports = mongoose.model('Games', GameSchema);
