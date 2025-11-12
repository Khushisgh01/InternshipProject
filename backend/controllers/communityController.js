import { loadData, saveData } from '../utils/fileHandler.js'; // Must use named import { }

const FILENAME = 'community.json';

const getCommunityData = (req, res) => {
    const data = loadData(FILENAME);
    res.json(data);
};

const createNewPost = (req, res) => {
    const { text, tags, author = "Anonymous" } = req.body;
    const communityData = loadData(FILENAME);
    
    const newPost = {
        id: Date.now(),
        text,
        tags: tags || [],
        timestamp: Date.now(),
        likes: 0,
        comments: 0,
        author,
    };

    communityData.posts.unshift(newPost); 
    saveData(FILENAME, communityData);

    res.status(201).json(newPost);
};

export default {
    getCommunityData,
    createNewPost,
};