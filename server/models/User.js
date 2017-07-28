'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationHash: {
        type: String
    },
    password: {
        type: String
    },
    salt: {
        type: String
    },
    rank: {
        type: Number
    },
    challengedBy: {
        type: Schema.Types.ObjectId,
        ref: 'Story'
    },
});

module.exports = mongoose.model('Users', UserSchema);
