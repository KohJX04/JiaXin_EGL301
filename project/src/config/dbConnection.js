const mongoose = require('mongoose');

const connectdb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to database');
    } catch (error) {
        console.log(`Error connecting to db, ${error.message}`);
        process.exit(1);
    }
}

module.exports  = connectdb;