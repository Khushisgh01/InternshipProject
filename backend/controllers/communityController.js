// khushisgh01/internshipproject/InternshipProject-cbc12df567540c298725777ce3956a030bf171e4/backend/controllers/communityController.js

import { CommunityPost, CommunityGroup } from '../models/Community.js'; // 💡 NEW IMPORTS - Models

const getCommunityData = async (req, res) => {
    try {
        // Fetch posts and groups separately
        const posts = await CommunityPost.find().sort({ createdAt: -1 });
        const groups = await CommunityGroup.find();
        
        res.json({ posts, groups }); // 💡 Return combined data structure
    } catch (error) {
        console.error("Error fetching community data:", error);
        res.status(500).json({ message: "Failed to fetch community data" });
    }
};

const createNewPost = async (req, res) => {
    const { text, tags, author = "Anonymous" } = req.body;
    
    try {
        const newPost = await CommunityPost.create({
            text,
            tags: tags || [],
            author,
        });

        res.status(201).json(newPost);
    } catch (error) {
        console.error("Error creating new post:", error);
        res.status(500).json({ message: "Failed to create new post" });
    }
};

export default {
    getCommunityData,
    createNewPost,
};