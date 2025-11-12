import fs from 'fs';
import path from 'path';
// Required Node.js utilities for finding file paths in ES Module scope
import { fileURLToPath } from 'url'; 
import { dirname } from 'path';

// Define __dirname equivalent for ES Modules (Critical for file access)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Base directory for all mock data files
const DATA_DIR = path.join(__dirname, '..', 'data');

/**
 * Reads and parses data from a specified mock JSON file.
 */
const loadData = (filename) => {
    const filePath = path.join(DATA_DIR, filename);
    try {
        if (!fs.existsSync(filePath)) {
            console.log(`Creating initial mock data file: ${filename}`);
            const initialData = filename === 'community.json' ? '{"posts": [], "groups": []}' : '[]';
            fs.writeFileSync(filePath, initialData, 'utf8');
            return JSON.parse(initialData);
        }
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error loading data from ${filename}:`, error.message);
        return filename === 'community.json' ? { posts: [], groups: [] } : [];
    }
};

/**
 * Writes the current data back to the specified mock JSON file.
 */
const saveData = (filename, data) => {
    const filePath = path.join(DATA_DIR, filename);
    try {
        if (!fs.existsSync(DATA_DIR)) {
             fs.mkdirSync(DATA_DIR, { recursive: true });
        }
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error(`Error saving data to ${filename}:`, error.message);
    }
};

// Explicitly export functions by name (Critical for named imports in controllers)
export { loadData, saveData };