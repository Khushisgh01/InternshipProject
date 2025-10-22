import React from 'react'
import Sidebar from '../components/ui/Sidebar'
import BottomNavBar from '../components/ui/bottomNavbar'
import JournalEntry from '../components/ui/journelEntry'
import { Outlet } from 'react-router-dom'

const Journel = () => {
  return (
    <div className='flex min-h-screen'>
        <Sidebar/>
        <div className='flex-1 p-8 '>
            <h1 className="text-3xl font-bold text-gray-800">Mood Journal</h1>
            <p className='text-gray-500'>Track your emotional journey and discover patterns</p>
            <BottomNavBar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Journel