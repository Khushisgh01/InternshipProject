// import React from 'react'
// import HeroSection from '../components/ui/heroSection.jsx'
// import MoodChecker from '../components/ui/moodChecker.jsx'

// const Home = () => {
//   return (
//     <div className='bg-blue-200 min-h-screen grid grid-cols-3 grid-rows-4 '>
      
//       {/* This div is in the first row */}
//       <div className='text-center p-4 row-span-1 col-span-3'>
//         <HeroSection />
//       </div>

//       {/* This div is in the second row */}
//       <div className='p-4 row-span-2 col-span-2'>
//         <MoodChecker />
//       </div>
//     <div className='p-4 row-span-2 col-span-2'>
//             your progress
//     </div>
//         {/* <div>
//             affirmations
//         </div>
//         <div>
//             insightful thoughts

//         </div> */}
       
//     </div>
//   )
// }

// export default Home
import React from 'react';
import HeroSection from '../components/ui/heroSection.jsx'
import MoodChecker from '../components/ui/moodChecker.jsx'
import Sidebar from '../components/ui/Sidebar.jsx' // Import the new Sidebar

const Home = () => {
  return (
    // Change the layout to flex or a grid that separates the sidebar and the main content
    <div className='flex bg-blue-50 min-h-screen'>
      
      {/* Sidebar - fixed width */}
      <Sidebar /> 

      {/* Main Content - takes the remaining space */}
      <div className='flex-1 p-4 bg-blue-200'>
        {/* This content will now be laid out differently, but we'll try to preserve the original structure's logic */}
        
        <div className='mb-4'> {/* Hero Section */}
          <HeroSection />
        </div>

        {/* Main content grid - keeping the original inner grid for the main area */}
        <div className='grid grid-cols-3 gap-4'>
          
          {/* MoodChecker (now in the first column, spanning 2/3 width) */}
          <div className='col-span-2'>
            <MoodChecker />
          </div>

          {/* Progress/Achievements (now in the second column, 1/3 width) */}
          <div className='col-span-1 bg-white rounded-2xl shadow-md p-4'>
            {/* Based on the image, this is the "Your Progress" section */}
            <h3 className='text-xl font-semibold'>🔥 Your Progress</h3>
            <p className='text-4xl text-center my-4 text-blue-600'>5</p>
            <p className='text-center text-sm text-gray-500'>day streak</p>
            {/* Add other progress/achievement UI here */}
          </div>
          
          {/* Your progress placeholder from original file (adjusting to a 2/3 column layout if needed) */}
          <div className='col-span-2 bg-white rounded-2xl shadow-md p-4'>
              More content/charts (e.g. affirmations/insightful thoughts area)
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home