import React, { useState } from 'react';
import ChatMessage from './ChatMessage'; // New component
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const initialMessages = [
    { type: 'bot', text: "Hello! I'm here to listen and support you. How are you feeling today?", time: '18:44' },
    { type: 'user', text: "hi", time: '18:45' },
    { type: 'bot', text: "I'm here to listen and support you. Can you tell me more about what you're experiencing?", time: '18:45' },
];

const AIChatWindow = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            // Simulate sending a message
            const newMessage = { 
                type: 'user', 
                text: input.trim(), 
                time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) 
            };
            setMessages([...messages, newMessage]);
            setInput('');
            
            // In a real app, this is where you'd send the message to the AI backend
            // For now, let's simulate an auto-reply after a short delay
            setTimeout(() => {
                const botReply = {
                    type: 'bot',
                    text: "Thank you for sharing that. It sounds like you're dealing with a lot. Remember to be kind to yourself.",
                    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
                };
                setMessages(prev => [...prev, botReply]);
            }, 1500);
        }
    };

    return (
        <div className="flex flex-col h-[75vh] bg-white rounded-2xl shadow-xl overflow-hidden">
            
            {/* Chat Messages Area */}
            <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                {messages.map((msg, index) => (
                    <ChatMessage 
                        key={index} 
                        type={msg.type} 
                        text={msg.text}
                        time={msg.time} 
                    />
                ))}
            </div>

            {/* Chat Input Area */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
                <form onSubmit={handleSend} className="flex items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Share what's on your mind..."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-violet-500 focus:border-violet-500 text-gray-700"
                    />
                    <button
                        type="submit"
                        disabled={input.trim() === ''}
                        className={`ml-3 p-3 rounded-full transition-colors ${
                            input.trim() === '' 
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                            : 'bg-violet-600 text-white hover:bg-violet-700'
                        }`}
                    >
                        <PaperAirplaneIcon className="w-5 h-5 rotate-320 transform" />
                    </button>
                </form>
                <p className="text-xs text-gray-500 mt-2 text-center">
                    Press Enter to send • This conversation is private and secure
                </p>
            </div>
        </div>
    );
};

export default AIChatWindow; 