// khushisgh01/internshipproject/InternshipProject-cbc12df567540c298725777ce3956a030bf171e4/backend/controllers/exerciseController.js

import Exercise from '../models/Exercise.js'; // 💡 NEW IMPORT - Model

const getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find(); // 💡 Use Mongoose find()
        res.json(exercises);
    } catch (error) {
        console.error("Error fetching exercises:", error);
        res.status(500).json({ message: "Failed to fetch exercises" });
    }
};

export default {
    getExercises,
};