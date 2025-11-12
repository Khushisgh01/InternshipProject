import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.js'; 

const app = express();
const PORT = 3001;

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