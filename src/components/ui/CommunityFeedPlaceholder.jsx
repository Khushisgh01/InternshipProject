import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline'; 

const CommunityFeedPlaceholder = () => {
    
    // Internal component simulating the share box
    const ShareBox = () => (
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6">
            <div className="flex items-center text-gray-800 mb-4">
                <span className="mr-2 text-xl">🔗</span>
                <h3 className="font-semibold text-lg">Share Your Journey</h3>
            </div>
            
            <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 text-gray-700 placeholder-gray-400 h-20 resize-none"
                placeholder="Share something positive, a coping strategy that worked, or words of encouragement for others..."
            ></textarea>
            
            <div className='flex justify-between items-center mt-3'>
                <p className='text-sm text-gray-500'>Posts are anonymous and moderated for safety</p>
                <button 
                    className="flex items-center px-4 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors"
                >
                    <PlusIcon className="w-5 h-5 mr-1" />
                    Share Anonymously
                </button>
            </div>
        </div>
    );

    // Internal component simulating a community post
    const PostCard = ({ initials, name, tag, time, text, hashtags, likes, comments, postTagColor }) => (
        <div className="bg-white p-5 border-b border-gray-100">
            <div className='flex items-center mb-2'>
                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-violet-100 text-violet-700 font-bold mr-3'>{initials}</div>
                <div>
                    <p className='font-semibold text-gray-800'>{name}</p>
                    <p className='text-xs text-gray-500'>{time} ago</p>
                </div>
                <span className={`ml-auto px-2 py-0.5 text-xs font-medium rounded-full ${postTagColor}`}>{tag}</span>
            </div>
            <p className='text-gray-700 mb-3 ml-12'>{text}</p>
            <div className='flex flex-wrap gap-2 mb-3 ml-12'>
                {hashtags.map(hash => (
                    <span key={hash} className="text-xs font-medium bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                        #{hash}
                    </span>
                ))}
            </div>
            <div className='flex items-center gap-4 ml-12 text-gray-500'>
                <div className='flex items-center'>
                    <span className="mr-1 text-red-500">❤️</span>
                    <span>{likes}</span>
                </div>
                <div className='flex items-center'>
                    <span className="mr-1 text-gray-400">💬</span>
                    <span>{comments}</span>
                </div>
            </div>
        </div>
    );

    const TagFilter = ({ tag }) => (
        <button className='px-4 py-2 rounded-full text-sm font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors'>{tag}</button>
    );

    return (
        <div className="max-w-4xl mx-auto">
            <ShareBox />
            
            <h3 className='text-lg font-semibold text-gray-700 mb-4'>Recent Posts</h3>

            {/* Tags for filtering */}
            <div className="flex flex-wrap gap-3 mb-6 border-b pb-4">
                <button className='px-4 py-2 rounded-full text-sm font-semibold bg-violet-600 text-white'>All</button>
                <TagFilter tag="Gratitude" />
                <TagFilter tag="Breathing" />
                <TagFilter tag="Support" />
                <TagFilter tag="Mindfulness" />
                <TagFilter tag="Progress" />
            </div>

            {/* Simulated Posts (from images) */}
            <div className="bg-white rounded-lg shadow-md divide-y divide-gray-100">
                <PostCard 
                    initials="HS"
                    name="Hope Seeker"
                    tag="Support"
                    time="6 hours"
                    text="To anyone struggling today: you are not alone. Your feelings are valid, and it's okay to not be okay. Take it one breath at a time. Sending virtual hugs 💙"
                    hashtags={['support', 'community', 'encouragement']}
                    likes={67}
                    comments={18}
                    postTagColor="bg-blue-100 text-blue-700"
                />
                 <PostCard 
                    initials="PM"
                    name="Peaceful Mind"
                    tag="Mindfulness"
                    time="8 hours"
                    text="Tried the 5-4-3-2-1 grounding technique during a panic attack today. It really works! For anyone new to this: notice 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste."
                    hashtags={['grounding', 'mindfulness', 'techniques']}
                    likes={41}
                    comments={12}
                    postTagColor="bg-green-100 text-green-700"
                />
                <PostCard 
                    initials="MJ"
                    name="Mindful Journey"
                    tag="Breathing"
                    time="4 hours"
                    text="Box breathing has been a game-changer for my anxiety. Sharing this technique with anyone who needs it - inhale 4, hold 4, exhale 4, hold 4. Simple but powerful."
                    hashtags={['breathing', 'anxiety', 'techniques']}
                    likes={23}
                    comments={5}
                    postTagColor="bg-red-100 text-red-700"
                />
            </div>
        </div>
    );
};

export default CommunityFeedPlaceholder;