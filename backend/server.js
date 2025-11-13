// khushisgh01/internshipproject/InternshipProject-cbc12df567540c298725777ce3956a030bf171e4/backend/server.js
import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.js'; 
import connectDB from './config/db.js'; // 💡 NEW IMPORT
import 'dotenv/config'; // 💡 LOAD ENVIRONMENT VARIABLES

const app = express();
const PORT = 3001;

// 1. Connect to Database (Must run before Express listens for requests)
connectDB(); 

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Mount the centralized API routes under the /api prefix
app.use('/api', apiRoutes);

// Simple default route for health check
app.get('/', (req, res) => {
    res.send('MindfulSpace Backend API is running!');
});

app.listen(PORT, () => {
    console.log(`MindfulSpace Backend server running on http://localhost:${PORT}`);
});