'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let UserSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationHash: {
        type: String
    },
    verificationExpiry: {
        type: Number
    },
    password: {
        type: String,
        required: true
    },
    rank: {
        type: Number
    },
    challengedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    accessToken: {
        type: String
    },
    accessTokenExpiry: {
        type: Number
    }
});

module.exports = mongoose.model('Users', UserSchema);
