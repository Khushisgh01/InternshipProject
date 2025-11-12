import { loadData, saveData } from '../utils/fileHandler.js'; // Must use named import { }

const FILENAME = 'journal.json';

const getJournalEntries = (req, res) => {
    const entries = loadData(FILENAME);
    res.json(entries.reverse());
};

const createJournalEntry = (req, res) => {
    const newEntry = req.body;
    const entries = loadData(FILENAME);
    
    newEntry.id = Date.now();
    entries.push(newEntry);
    
    saveData(FILENAME, entries);

    res.status(201).json(newEntry);
};

export default {
    getJournalEntries,
    createJournalEntry,
};