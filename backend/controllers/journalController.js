// khushisgh01/internshipproject/InternshipProject-cbc12df567540c298725777ce3956a030bf171e4/backend/controllers/journalController.js

import JournalEntry from '../models/JournalEntry.js'; // 💡 NEW IMPORT - Model

const getJournalEntries = async (req, res) => {
    try {
        // Find all entries, sort by latest creation date, and send
        const entries = await JournalEntry.find().sort({ createdAt: -1 });
        res.json(entries);
    } catch (error) {
        console.error("Error fetching journal entries:", error);
        res.status(500).json({ message: "Failed to fetch journal entries" });
    }
};

const createJournalEntry = async (req, res) => {
    const newEntryData = req.body;
    
    try {
        // Create a new document in the MongoDB collection
        const newEntry = await JournalEntry.create(newEntryData);
        
        res.status(201).json(newEntry);
    } catch (error) {
        console.error("Error creating journal entry:", error);
        res.status(500).json({ message: "Failed to create journal entry" });
    }
};

export default {
    getJournalEntries,
    createJournalEntry,
};