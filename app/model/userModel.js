/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let userSchema = new Schema({
    userId: {
        type: String,
        unique: true
    },
    userName: {
        type: String,
        unique: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    profilePicUrl: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})