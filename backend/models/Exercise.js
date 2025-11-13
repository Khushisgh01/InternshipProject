// New file: backend/models/Exercise.js
import mongoose from 'mongoose';

const ExerciseSchema = new mongoose.Schema({
    imageSrc: { type: String },
    title: { type: String, required: true },
    duration: { type: Number },
    category: { type: String, required: true },
    difficulty: { type: String },
    benefits: { type: String },
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

export default Exercise;