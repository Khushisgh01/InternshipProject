import { loadData } from '../utils/fileHandler.js'; // Must use named import { }

const FILENAME = 'exercises.json';

const getExercises = (req, res) => {
    const exercises = loadData(FILENAME);
    res.json(exercises);
};

export default {
    getExercises,
};