const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

//Create a movie
router.post('/', async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).json({ success: true, movie });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

//Retrieve all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json({ success: true, movies });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

//Retrieve a specific movie
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ success: false, message: 'Movie not found' });
        res.status(200).json({ success: true, movie });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

//Update a movie
router.put('/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!movie) return res.status(404).json({ success: false, message: 'Movie not found' });
        res.status(200).json({ success: true, movie });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

//Delete a movie
router.delete('/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) return res.status(404).json({ success: false, message: 'Movie not found' });
        res.status(200).json({ success: true, message: 'Movie deleted' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
