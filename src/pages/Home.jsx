import React from 'react'
import HeroSection from '../components/ui/heroSection.jsx'
import MoodChecker from '../components/ui/moodChecker.jsx'

const Home = () => {
  return (
    <div className='bg-blue-200 min-h-screen grid grid-cols-3 grid-rows-4 '>
      
      {/* This div is in the first row */}
      <div className='text-center p-4 row-span-1 col-span-3'>
        <HeroSection />
      </div>

      {/* This div is in the second row */}
      <div className='p-4 row-span-2 col-span-2'>
        <MoodChecker />
      </div>
    <div className='p-4 row-span-2 col-span-2'>
            your progress
    </div>
        {/* <div>
            affirmations
        </div>
        <div>
            insightful thoughts

        </div> */}
       
    </div>
  )
}

export default Home