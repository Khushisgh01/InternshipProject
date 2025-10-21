import React, { useState } from 'react';
import EmojiButton from './emoji'; // Adjust path if needed

const MoodChecker = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    // You could do something else here, like send the mood to an API
    console.log(`Selected mood: ${mood}`);
  };

  return (
    <div className='text-center mb-4 bg-white rounded-2xl shadow-md'>
      <h2 className='text-2xl font-semibold mb-4 pt-4'>How are you feeling today?</h2>
      <p>Select your current mood</p>
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {/* Crying emoji from your image */}
      <EmojiButton 
        emoji="😢" 
        onClick={() => handleMoodSelect('Very-Sad')} 
        isSelected={selectedMood === 'Very-Sad'} 
      />
      
      {/* Example: Happy emoji */}
      <EmojiButton 
        emoji="😊" 
        onClick={() => handleMoodSelect('Happy')} 
        isSelected={selectedMood === 'Happy'} 
      />

      {/* Example: Angry emoji */}
      <EmojiButton 
        emoji="😠" 
        onClick={() => handleMoodSelect('Angry')} 
        isSelected={selectedMood === 'Angry'} 
      />
      <EmojiButton 
        emoji="😐" 
        onClick={() => handleMoodSelect('Neutral')} 
        isSelected={selectedMood === 'Neutral'} 
      />
      <EmojiButton 
        emoji="😞" 
        onClick={() => handleMoodSelect('Sad')} 
        isSelected={selectedMood === 'Sad'} 
      />

    </div>
    <p className='p-4'><i>"{selectedMood}"</i></p>
    </div>
  );
};

export default MoodChecker;