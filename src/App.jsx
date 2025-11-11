import Home from './pages/Home.jsx'
import Journel from './pages/Journel.jsx'
import Exercises from './pages/Exercises.jsx'
import NewEntryPage from './components/ui/newentryPage.jsx'
import TimelinePage from './components/ui/timeLinePage.jsx'
import Soundscapes from './pages/Soundscapes.jsx'
import CrisesSupport from './pages/CrisesSupport.jsx'
import CrisesContent from './components/ui/CrisesContent.jsx'
import ImmediateHelp from './components/ui/ImmediateHelp.jsx'
import WarningSigns from './components/ui/WarningSigns.jsx'
import SafetyPlan from './components/ui/SafetyPlan.jsx'
import CommunitySupport from './pages/CommunitySupport.jsx'
import CommunityFeedPlaceholder from './components/ui/CommunityFeedPlaceholder.jsx'
import SupportGroupsPlaceholder from './components/ui/SupportGroupsPlaceholder.jsx'
import WeeklyTopicsPlaceholder from './components/ui/WeeklyTopicsPlaceholder.jsx'
import GuidelinesContent from './components/ui/GuidelinesContent.jsx'
import ProfileSettings from './pages/ProfileSettings.jsx'
import PreferencesContent from './components/ui/PreferencesContent.jsx'
import AboutContent from './components/ui/AboutContent.jsx'
import FindTherapist from './pages/FindTherapist.jsx'
import FindTherapistContent from './components/ui/FindTherapistContent.jsx' 
import TherapyTypesContent from './components/ui/TherapyTypesContent.jsx' // NEW IMPORT
import InsuranceCostsContent from './components/ui/InsuranceCostsContent.jsx' // NEW IMPORT
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/journel',
    element:<Journel/>,
    children: [
      {
        path:'new-entry',
        element:<NewEntryPage/>
      },
      {
        index:true,
        element:<TimelinePage/>
      }
    ]
  },
  {
    path:'/exercises',
    element:<Exercises/>
  },
  {
    path:'/soundscapes',
    element:<Soundscapes/>
  },
  {
    path:'/crises-support',
    element:<CrisesSupport/>,
    children:[
      {
        index:true,
        element:<CrisesContent/>
      },
      {
        path:'immediate-help',
        element:<ImmediateHelp/>
      },
      {
        path:'warning-signs',
        element:<WarningSigns/>
      },
      {
        path:'safety-plan',
        element:<SafetyPlan/>
      }
    ]
  },
  // --- ROUTE FOR COMMUNITY SUPPORT ---
  {
    path: '/community-support',
    element: <CommunitySupport />,
    children: [
      {
        index: true,
        element: <CommunityFeedPlaceholder />
      },
      {
        path: 'support-groups',
        element: <SupportGroupsPlaceholder /> 
      },
      {
        path: 'weekly-topics',
        element: <WeeklyTopicsPlaceholder />
      },
      {
        path: 'guidelines',
        element: <GuidelinesContent />
      },
    ]
  },
  // --- ROUTE FOR PROFILE & SETTINGS ---
  {
    path: '/profile-settings',
    element: <ProfileSettings />,
    children: [
      {
        index: true,
        element: <PreferencesContent />
      },
      {
        path: 'notifications',
        element: <h2 className='text-xl font-semibold'>Notifications Content Coming Soon!</h2>
      },
      {
        path: 'privacy',
        element: <h2 className='text-xl font-semibold'>Privacy Content Coming Soon!</h2>
      },
      {
        path: 'about',
        element: <AboutContent />
      }
    ]
  },
  // --- UPDATED ROUTE FOR FIND THERAPIST ---
  {
    path: '/find-therapist',
    element: <FindTherapist />,
    children: [
      {
        index: true,
        element: <FindTherapistContent /> 
      },
      {
        // Now points to TherapyTypesContent
        path: 'types-of-therapy',
        element: <TherapyTypesContent />
      },
      {
        // Now points to InsuranceCostsContent
        path: 'insurance-costs',
        element: <InsuranceCostsContent />
      }
    ]
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App