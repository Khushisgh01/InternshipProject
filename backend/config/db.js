// New file: backend/config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Reads MONGO_URI from the .env file
    const MONGO_URI = process.env.MONGO_URI; 

    if (!MONGO_URI) {
        throw new Error("MONGO_URI not defined in environment variables. Check your .env file.");
    }
    
    // Connect to the database
    await mongoose.connect(MONGO_URI);

    console.log(`MongoDB connected successfully!`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;