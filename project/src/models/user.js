const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    googleId: String,
    facebookId: String,
    username: {type: String, unique: true},
    email: String,
    password: String,
    image: {type: String, default:""},
    points: {type: Number, default: 0},
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
