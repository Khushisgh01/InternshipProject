import React, { useState } from 'react';
import Sidebar from '../components/ui/Sidebar.jsx';

// --- Sound Card Component (Unchanged from previous step) ---
const SoundCard = ({ title, description, duration, tags, initialIsPlaying = false }) => {
  const [isPlaying, setIsPlaying] = useState(initialIsPlaying);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    // console.log(`${title} is now ${isPlaying ? 'paused' : 'playing'}.`);
  };

  // Determine tag colors for visual variety
  const tagColorMap = {
    // Adjusted tag colors for lighter, pastel look as seen in image_46107c.png
    'Nature': 'bg-green-100 text-green-700/80',
    'Cozy': 'bg-yellow-100 text-yellow-700/80',
    'Urban': 'bg-blue-100 text-blue-700/80',
    'Meditation': 'bg-purple-100 text-purple-700/80',
    'Focus': 'bg-indigo-100 text-indigo-700/80',
    // Benefits tags now use softer colors for better contrast and fit
    'Reduces anxiety': 'bg-green-200 text-green-800/80', 
    'Improves focus': 'bg-lime-200 text-lime-800/80',
    'Sleep aid': 'bg-gray-200 text-gray-700/80',
    'Deep relaxation': 'bg-fuchsia-200 text-fuchsia-800/80',
    'Stress relief': 'bg-cyan-200 text-cyan-800/80',
    'Mindfulness': 'bg-rose-200 text-rose-800/80',
    'Creativity': 'bg-orange-200 text-orange-800/80',
    'Mood boost': 'bg-pink-200 text-pink-800/80',
    'Energy': 'bg-red-200 text-red-800/80',
    'Positivity': 'bg-yellow-300 text-yellow-800/80',
    'Warmth': 'bg-orange-100 text-orange-700/80',
    'Relaxation': 'bg-purple-200 text-purple-800/80',
    'Productivity': 'bg-teal-200 text-teal-800/80',
    'Concentration': 'bg-lime-200 text-lime-700/80',
    'Sleep': 'bg-slate-200 text-slate-700/80',
    'Noise masking': 'bg-zinc-200 text-zinc-700/80',
    'Nature connection': 'bg-emerald-200 text-emerald-700/80',
    'Deep meditation': 'bg-sky-200 text-sky-700/80',
    'Spiritual connection': 'bg-indigo-200 text-indigo-700/80',
    'Inner peace': 'bg-amber-200 text-amber-700/80',
  };

  const getTagClass = (tag) => tagColorMap[tag] || 'bg-gray-100 text-gray-700';

  return (
    <div className={`flex flex-col bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01] cursor-pointer ${isPlaying ? 'border-2 border-violet-500' : ''}`}>
      
      <div className="p-5 flex flex-col flex-grow">
        
        <div className="flex flex-wrap justify-end gap-2 mb-3 -mt-2">
          {tags.map((tag, index) => (
            <span key={index} className={`text-xs font-medium px-2 py-0.5 rounded-full ${getTagClass(tag)}`}>
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="mr-1">🕒</span>
          <span>Duration: {duration}</span>
        </div>

        <div className="mt-auto">
          {isPlaying ? (
            <button 
              className="w-full py-2 px-4 bg-violet-500 text-white font-semibold rounded-xl hover:bg-violet-600 transition-colors duration-200 flex items-center justify-center"
              onClick={handleTogglePlay}
            >
              <span className="mr-2">◼</span>
              Stop Playing
            </button>
          ) : (
            <button 
              className="w-full py-2 px-4 bg-white text-violet-600 font-semibold border-2 border-gray-200 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              onClick={handleTogglePlay}
            >
              <span className="mr-2">▶</span>
              Play
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


// --- New Preset Card Component ---
const PresetCard = ({ title, description, sounds }) => {
    return (
        <div className="flex flex-col bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01] cursor-pointer p-5">
            
            <div className="flex items-center mb-2">
                <span className="text-2xl text-violet-600 mr-2">⚡</span>
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            
            {/* Sounds in the Preset (Matches image_45ba61.png style) */}
            <div className="flex flex-wrap gap-2 mb-6">
                {sounds.map((sound, index) => (
                    <div key={index} className="flex items-center text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                        <span className="mr-1 text-xs">☕</span> {/* Placeholder icon, could be dynamic */}
                        <span>{sound}</span>
                    </div>
                ))}
            </div>

            {/* Action Button */}
            <div className="mt-auto">
                <button className="w-full py-2 px-4 bg-violet-500 text-white font-semibold rounded-xl hover:bg-violet-600 transition-colors duration-200 flex items-center justify-center">
                    <span className="mr-2">▶</span>
                    Apply Preset
                </button>
            </div>
        </div>
    );
};

// --- Mock Data ---

const soundscapeData = [
  // ... (Keep existing soundscapeData for reference, though not strictly needed here)
  { title: 'Gentle Rain', description: 'Soft rainfall on leaves, perfect for relaxation', duration: '60 min', tags: ['Nature', 'Reduces anxiety', 'Improves focus', 'Sleep aid'], initialIsPlaying: false, },
  { title: 'Ocean Waves', description: 'Rhythmic waves washing onto shore', duration: '45 min', tags: ['Nature', 'Deep relaxation', 'Meditation', 'Stress relief'], initialIsPlaying: false, },
  { title: 'Forest Ambience', description: 'Birds chirping with gentle wind through trees', duration: '90 min', tags: ['Nature', 'Nature connection', 'Mindfulness', 'Creativity'], initialIsPlaying: false, },
  { title: 'Morning Birds', description: 'Peaceful bird songs at dawn', duration: '30 min', tags: ['Nature', 'Mood boost', 'Energy', 'Positivity'], initialIsPlaying: false, },
  { title: 'Cozy Fireplace', description: 'Crackling fire in a warm fireplace', duration: '120 min', tags: ['Cozy', 'Comfort', 'Warmth', 'Relaxation'], initialIsPlaying: false, },
  { title: 'Coffee Shop', description: 'Ambient coffee shop with gentle chatter', duration: '60 min', tags: ['Urban', 'Focus', 'Productivity', 'Creativity'], initialIsPlaying: false, },
  { title: 'Singing Bowls', description: 'Tibetan singing bowls with soft harmonics', duration: '45 min', tags: ['Meditation', 'Deep meditation', 'Spiritual connection', 'Inner peace'], initialIsPlaying: false, },
  { title: 'White Noise', description: 'Pure white noise for concentration', duration: '∞', tags: ['Focus', 'Concentration', 'Sleep', 'Noise masking'], initialIsPlaying: false, },
];

// New Preset Data (Based on image_45ba61.png)
const presetData = [
    {
        title: 'Deep Focus',
        description: 'Perfect blend for concentrated work',
        sounds: ['Coffee Shop', 'White Noise'],
    },
    {
        title: 'Sleep Sanctuary',
        description: 'Gentle sounds for peaceful sleep',
        sounds: ['Gentle Rain', 'Ocean Waves'],
    },
    {
        title: 'Meditation Garden',
        description: 'Natural harmony for mindfulness practice',
        sounds: ['Forest Ambience', 'Singing Bowls'], // Assuming a mix based on available sounds
    },
    {
        title: 'Cozy Evening',
        description: 'Warm and comforting atmosphere',
        sounds: ['Cozy Fireplace', 'Gentle Rain'], // Assuming a mix
    },
];

const tabs = ['Soundscapes', 'Presets', 'Mixer'];
const filterCategories = ['All', 'Nature', 'Cozy', 'Urban', 'Meditation', 'Focus'];

// Filter Button component (Unchanged)
const FilterButton = ({ category, selected, onClick }) => (
  <button
    onClick={() => onClick(category)}
    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 
      ${selected 
        ? 'bg-violet-500 text-white shadow-md' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
  >
    {category}
  </button>
);


const Soundscapes = () => {
  const [activeTab, setActiveTab] = useState('Presets'); // Set default to Presets for this demo
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const filteredSoundscapes = soundscapeData.filter(sound => {
    if (selectedFilter === 'All') return true;
    
    return sound.tags.some(tag => tag.toLowerCase().includes(selectedFilter.toLowerCase()));
  });

  const playingCount = soundscapeData.filter(s => s.initialIsPlaying).length;


  return (
    <div className='flex min-h-screen bg-gray-50'>
      <Sidebar initialActiveItem="Soundscapes" /> 
      
      {/* Main Content Area */}
      <div className='flex-1 p-8 overflow-y-auto'> 
        
        {/* Header Section */}
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Soundscapes & Audio</h1>
            <p className='text-gray-500'>Create your perfect ambient environment for focus, relaxation, and sleep</p>
          </div>
          <div className="flex items-center text-sm font-medium text-gray-600">
            <span className="mr-1">🎶</span>
            <span>{playingCount} playing</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className='flex border-b border-gray-200 mb-8'>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 text-lg font-semibold transition-colors duration-200 ${
                activeTab === tab 
                  ? 'text-violet-600 border-b-2 border-violet-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* --- Dynamic Content based on Active Tab --- */}
        {activeTab === 'Soundscapes' && (
          <>
            {/* Master Controls Section */}
            <div className='bg-white rounded-2xl shadow-md p-6 mb-8'>
              <h3 className='text-lg font-semibold text-gray-700 mb-4'>🔊 Master Controls</h3>
              <div className='space-y-4'>
                {/* Volume Slider */}
                <div className='flex items-center'>
                  <span className='mr-4 text-2xl text-gray-500'>🔊</span>
                  <input type="range" min="0" max="100" defaultValue="70" className="flex-1 h-2 bg-violet-500 rounded-full appearance-none cursor-pointer" />
                  <span className='ml-4 text-gray-600'>70%</span>
                </div>
                
                {/* Timer Control */}
                <div className='flex items-center'>
                  <span className='mr-4 text-2xl text-gray-500'>⏱️</span>
                  <input type="range" min="15" max="120" defaultValue="30" className="flex-1 h-2 bg-violet-500 rounded-full appearance-none cursor-pointer" />
                  <span className='ml-4 text-gray-600'>30 min</span>
                  <button className="ml-6 py-2 px-4 bg-violet-500 text-white font-semibold rounded-xl hover:bg-violet-600 transition-colors duration-200">
                    Start Timer
                  </button>
                </div>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex space-x-3 mb-8 overflow-x-auto">
              {filterCategories.map(cat => (
                <FilterButton 
                  key={cat}
                  category={cat}
                  selected={selectedFilter === cat}
                  onClick={setSelectedFilter}
                />
              ))}
            </div>

            {/* Soundscape Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSoundscapes.map((sound, index) => (
                <SoundCard 
                  key={index}
                  title={sound.title}
                  description={sound.description}
                  duration={sound.duration}
                  tags={sound.tags}
                  initialIsPlaying={sound.initialIsPlaying}
                />
              ))}
            </div>
          </>
        )}

        {/* --- Presets Tab Content --- */}
        {activeTab === 'Presets' && (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {presetData.map((preset, index) => (
                    <PresetCard
                        key={index}
                        title={preset.title}
                        description={preset.description}
                        sounds={preset.sounds}
                    />
                ))}
             </div>
        )}

        {/* --- Mixer Tab Content Placeholder --- */}
        {activeTab === 'Mixer' && (
            <div className='bg-white rounded-2xl shadow-md p-6 text-center'>
                <h3 className='text-xl font-semibold text-gray-700'>Mixer Controls Coming Soon!</h3>
                <p className='text-gray-500 mt-2'>Create your own custom sound blends here.</p>
            </div>
        )}

      </div>
    </div>
  );
};

export default Soundscapes;