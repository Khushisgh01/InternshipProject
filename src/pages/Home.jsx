import React from 'react'
import HeroSection from '../components/ui/heroSection.jsx'
import MoodChecker from '../components/ui/moodChecker.jsx'
import Sidebar from '../components/ui/Sidebar.jsx' // Assuming the Sidebar component from previous step is here
import InsightfulThoughts from '../components/ui/insightfulThoughts.jsx' // <-- NEW IMPORT

const Home = () => {
  return (
    <div className='flex bg-blue-50 min-h-screen'>
      <Sidebar /> 
      <div className='flex-1 p-8 bg-gray-50'> 
        
        {/* Header Section */}
        <div className='mb-8'> 
          <HeroSection />
        </div>

        {/* Main Content Grid: Mood Checker and Progress on top, Insights below */}
        <div className='grid grid-cols-3 gap-6'>
          
          {/* MoodChecker (Spans 2 columns) */}
          <div className='col-span-2'>
            <MoodChecker />
          </div>

          {/* Progress/Achievements (Spans 1 column) */}
          <div className='col-span-1 bg-white rounded-2xl shadow-md p-4'>
            <h3 className='text-xl font-semibold text-orange-500 mb-2'>🔥 Your Progress</h3>
            <div className='text-center'>
              <p className='text-5xl my-4 font-bold'>5</p>
              <p className='text-sm text-gray-500'>day streak</p>
              <div className='mt-4'>
                <h4 className='font-medium text-gray-700'>Weekly Goal</h4>
                <div className='h-2 bg-gray-200 rounded-full mt-1'>
                  <div className='w-[70%] h-2 bg-purple-500 rounded-full'></div>
                </div>
                <p className='text-xs text-gray-500 mt-1'>5/7 days</p>
              </div>
            </div>
          </div>
          
          {/* Insightful Thoughts Section */}
          <div className='col-span-3'>
              <InsightfulThoughts /> 
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home