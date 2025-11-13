// New file: backend/models/Community.js
import mongoose from 'mongoose';

const CommunityPostSchema = new mongoose.Schema({
    text: { type: String, required: true },
    tags: { type: [String], default: [] },
    timestamp: { type: Number, default: Date.now },
    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
    author: { type: String, default: "Anonymous" },
}, { timestamps: true });

const CommunityGroupSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    members: { type: Number, default: 0 },
    tag: { type: String },
});

// Explicitly name collections to match previous mock data conventions (posts, groups)
export const CommunityPost = mongoose.model('CommunityPost', CommunityPostSchema, 'posts'); 
export const CommunityGroup = mongoose.model('CommunityGroup', CommunityGroupSchema, 'groups');