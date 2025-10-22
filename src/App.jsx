// // import Home from './pages/Home.jsx'
// // import Journel from './pages/Journel.jsx'
// // import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// // const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     element: <Home/>
// //   },
// //   {
// //     path: '/journel',
// //     element: <Journel/>
// //   }
// // ])
// // function App() {

// //   return (
// //     <>
// //       <RouterProvider router={router} />
// //     </>
// //   )
// // }

// // export default App
// import Home from './pages/Home.jsx'
// import Journel from './pages/Journel.jsx'
// import Exercises from './pages/Exercises.jsx' // <-- Add this import
// import Soundscapes from './pages/Soundscapes.jsx' // <-- Add this import
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: '/journel',
//     element: <Journel/>
//   },
//   {
//     path: '/exercises', // Assuming this route is also needed
//     element: <Exercises/>
//   },
//   {
//     path: '/soundscapes', // <-- New Route
//     element: <Soundscapes/>
//   }
// ])
// function App() {

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   )
// }

// export default App
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