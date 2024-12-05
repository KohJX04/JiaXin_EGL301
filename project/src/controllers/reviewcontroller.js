const Review = require("../models/review");

const createReview = async (req, res) => {
    try {
        const {movieId, userId, rating, review } = req.body;

        if (!movieId || !userId || !rating || !review) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const newReview = await Review.create({movieId, userId, rating, review});
        res.status(201).json({success: true, message: "Review created successfully", data: newReview});
    } catch (error) {
        res.status(500).json({success: false, message: "Internal Server Error", error: error.message});
    }
};

const getReviews = async (req, res) => {
    try {
        const {movieId} = req.params;

        const reviews = await Review.find({ movieId }).populate("userId", "username").populate("movieId", "title");
        res.status(200).json({success: true, data: reviews});
    } catch (error) {
        res.status(500).json({success: false, message: "Internal Server Error", error: error.message});
    }
};

const updateReview = async (req, res) => {
    try {
        const {reviewId} = req.params;
        const {rating, review} = req.body;

        const updatedReview = await Review.findByIdAndUpdate(
            reviewId, 
            {rating, review}, 
            {new: true}
        );

        if (!updatedReview) {
            return res.status(404).json({success: false, message: "Review not found"});
        }

        res.status(200).json({success: true, message: "Review updated successfully", data: updatedReview});
    } catch (error) {
        res.status(500).json({success: false, message: "Internal Server Error", error: error.message});
    }
};

const deleteReview = async (req, res) => {
    try {
        const {reviewId} = req.params;

        const deletedReview = await Review.findByIdAndDelete(reviewId);

        if (!deletedReview) {
            return res.status(404).json({success: false, message: "Review not found"});
        }

        res.status(200).json({success: true, message: "Review deleted successfully"});
    } catch (error) {
        res.status(500).json({success: false, message: "Internal Server Error", error: error.message});
    }
};

module.exports = {createReview, getReviews, updateReview, deleteReview};
