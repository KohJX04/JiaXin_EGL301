const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    movieId:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Movies", 
        required: true 
    },
    userId:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Users", 
        required: true 
    },
    rating:{ 
        type: Number, 
        min: 0, 
        max: 5, 
        required: true 
    },
    review:{ 
        type: String, 
        required: true 
    },
    createdAt:{ 
        type: Date, 
        default: Date.now 
    }
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
