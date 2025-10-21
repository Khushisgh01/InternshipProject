import React, { useState } from 'react';
import Sidebar from '../components/ui/Sidebar.jsx'; // Adjust path as necessary
import ExerciseCard from '../components/ui/ExerciseCard.jsx'; // Adjust path as necessary

// Mock Data for the Exercise Cards
const exerciseData = [
  {
    imageSrc: '/images/breathing-exercise.jpg', 
    title: 'Box Breathing',
    duration: 5,
    category: 'Breathing',
    difficulty: 'Beginner',
    benefits: 'A simple 4-4-4-4 breathing technique to reduce anxiety and increase focus.',
  },
  {
    imageSrc: '/images/4-7-8.png',
    title: '4-7-8 Breathing',
    duration: 4,
    category: 'Breathing',
    difficulty: 'Beginner',
    benefits: 'Exhale stress and inhale calm with this powerful sleep-inducing technique.',
  },
  {
    imageSrc: '/images/Belly Breathing.png',
    title: 'Belly Breathing',
    duration: 6,
    category: 'Breathing',
    difficulty: 'Beginner',
    benefits: 'Deep diaphragmatic breathing to activate your relaxation response.',
  },
  {
    imageSrc: '/images/Walking Meditation.jpg',
    title: 'Walking Meditation',
    duration: 15,
    category: 'Mindfulness',
    difficulty: 'Beginner',
    benefits: 'Mindful movement to connect body and mind.',
  },
  {
    imageSrc: '/images/Mindful Eating.jpg',
    title: 'Mindful Eating',
    duration: 20,
    category: 'Mindfulness',
    difficulty: 'Beginner',
    benefits: 'Transform a simple meal into a meditation practice.',
  },
  {
    imageSrc: '/images/Loving-Kindness Meditation.jpg',
    title: 'Loving-Kindness Meditation',
    duration: 12,
    category: 'Mindfulness',
    difficulty: 'Intermediate',
    benefits: 'Cultivate compassion for yourself and others through guided meditation.',
  },
];

const categories = ['All', 'Breathing', 'Mindfulness', 'Gratitude', 'CBT', 'Movement'];

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


const Exercises = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredExercises = exerciseData.filter(exercise => 
    selectedCategory === 'All' || exercise.category === selectedCategory
  );

  return (
    <div className='flex min-h-screen bg-gray-50'>
      {/* The Sidebar (Keeping the Exercises link highlighted as per your image) */}
      <Sidebar initialActiveItem="Exercises" /> 
      
      {/* Main Content Area */}
      <div className='flex-1 p-8 overflow-y-auto'> 
        
        {/* Header Section */}
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Wellness Exercises</h1>
            <p className='text-gray-500'>Evidence-based practices to support your mental wellbeing</p>
          </div>
          <button className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800">
            <span className="mr-1">✨</span>
            Random Reset
          </button>
        </div>

        {/* Filter/Category Section */}
        <div className="flex space-x-3 mb-8 border-b pb-4 overflow-x-auto">
          {categories.map(cat => (
            <FilterButton 
              key={cat}
              category={cat}
              selected={selectedCategory === cat}
              onClick={setSelectedCategory}
            />
          ))}
        </div>

        {/* Exercise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map((exercise, index) => (
            <ExerciseCard 
              key={index}Breathing
              imageSrc={exercise.imageSrc}
              title={exercise.title}
              duration={exercise.duration}
              category={exercise.category}
              difficulty={exercise.difficulty}
              benefits={exercise.benefits}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Exercises;