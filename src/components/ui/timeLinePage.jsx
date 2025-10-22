import React from 'react'
import JournalEntry from './journelEntry' // Make sure path is correct

const TimelinePage = () => {
  // This is the content you cut from Journel.js
  return (
    <>
      <div className='mt-6 bg-white p-6 rounded-2xl shadow-md'>
          <h2 className=' font-normal mb-4'>Recent Entries</h2>
          <div className='space-y-4'>
              <JournalEntry 
                emoji="😊"
                  mood="Happy"
                  date="2024-06-20"
                  text="Had a great day at the park with friends. The weather was perfect and we enjoyed a lovely picnic."
                  tags={['outdoors', 'friends', 'sunny']}
              />
              <JournalEntry 
                emoji="😞"
                  mood="Sad"
                  date="2024-06-19"
                  text="Felt a bit down today. Missed an important deadline at work which stressed me out."
                  tags={['work', 'stress']}
              />
              <JournalEntry 
                emoji="😐"
                  mood="Neutral"
                  date="2024-06-18"
                  text="Just an average day. Nothing special happened, but nothing bad either."
                  tags={['routine']}
              />
          </div>
      </div>
    </>
  )
}

export default TimelinePage