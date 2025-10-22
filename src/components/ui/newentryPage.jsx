import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NewEntryForm from './entryForm'; // Adjust path

const NewEntryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Read the (optional) mood passed from the Home page
  //    If the user clicked "New Entry" directly, these will be undefined
  const passedMood = location.state?.selectedMood;
  const passedEmoji = location.state?.selectedEmoji;

  const handleSaveJournalEntry = (newEntry) => {
    console.log("Saving new entry (mood might be null):", newEntry);
    alert('Entry Saved!');
    navigate('/journel'); // Go back to timeline
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Journal Entry</h1>
      
      {/* 2. Render the form, passing the mood props.
           They will be 'undefined' if none were passed, which is fine. */}
      <NewEntryForm 
        selectedMood={passedMood} 
        selectedEmoji={passedEmoji}
        onSaveEntry={handleSaveJournalEntry}
      />
    </div>
  );
};

export default NewEntryPage;