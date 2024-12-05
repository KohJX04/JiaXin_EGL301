const express = require('express');
const connectDB = require('./db/connection');
const movieRoutes = require('./src/routes/movies');
const reviewRoutes = require("./src/routes/review");

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use('/api/movies', movieRoutes);
app.use("/api/reviews", reviewRoutes);

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
});
