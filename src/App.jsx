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