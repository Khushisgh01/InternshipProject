const getAIChatReply = (req, res) => {
    const { message } = req.body;
    let botResponse = "I hear you, and I'm here for you. Remember to take a moment for yourself today.";
    
    if (message.toLowerCase().includes('stress') || message.toLowerCase().includes('anxiety')) {
        botResponse = "Dealing with stress is tough. Have you considered trying a 5-minute breathing exercise? I can guide you through one if you like.";
    } else if (message.toLowerCase().includes('happy') || message.toLowerCase().includes('good')) {
        botResponse = "That's wonderful to hear! Hold on to that feeling. What made today so great?";
    }

    setTimeout(() => {
        res.json({ reply: botResponse });
    }, 1200); 
};

export default {
    getAIChatReply,
};