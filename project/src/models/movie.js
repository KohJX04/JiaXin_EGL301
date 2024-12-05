const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title:{type: String, required: true },
    description:{type: String, required: true},
    releaseDate:{type: Date, required: true},
    genre:{type: [String], required: true},
    rating:{type: Number, required: true, min: 0, max: 10},
    poster:{type: String, required: true}, 
    cast:[{name: String, role: String}],  
    director:{type: String, required: true},
    runtime:{type: Number, required: true}, 
    language:{type: String, required: true},
}, {
    timestamps: true,
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
