import React from 'react'
import HeroSection from '../components/ui/heroSection.jsx'
import MoodChecker from '../components/ui/moodChecker.jsx'
import YourProgress from '../components/ui/yourProgress.jsx'

const Home = () => {
  return (
    <div className='bg-blue-200 min-h-screen grid grid-cols-3 grid-rows-4 '>
      
      {/* This div is in the first row */}
      <div className='text-center p-4 row-span-1 col-span-3'>
        <HeroSection
        heading="Good Afternoon!" 
        subheading="Welcome to your mindful space. How can we support you today?" />
      </div>

      {/* This div is in the second row */}
      <div className='p-4 row-span-2 col-span-2'>
        <MoodChecker />
      </div>
    <div className='p-4 row-span-2 col-span-1'>
        <YourProgress />
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