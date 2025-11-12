import express from 'express';
const router = express.Router();

// Import controllers using the mandatory .js file extension
import journalController from '../controllers/journalController.js';
import chatController from '../controllers/chatController.js';
import exerciseController from '../controllers/exerciseController.js';
import therapistController from '../controllers/therapistController.js';
import communityController from '../controllers/communityController.js';

// --- JOURNAL Routes (/api/journal) ---
router.get('/journal', journalController.getJournalEntries);
router.post('/journal', journalController.createJournalEntry);

// --- EXERCISES Routes (/api/exercises) ---
router.get('/exercises', exerciseController.getExercises);

// --- FIND THERAPIST Routes (/api/therapists) ---
router.get('/therapists', therapistController.getTherapistListings);

// --- COMMUNITY SUPPORT Routes (/api/community) ---
router.get('/community', communityController.getCommunityData);
router.post('/community/post', communityController.createNewPost);

// --- AI CHAT Route (/api/ai-chat) ---
router.post('/ai-chat', chatController.getAIChatReply);


export default router;