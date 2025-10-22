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
import Exercises from './pages/Exercises.jsx' // Assuming this file exists from your context
import Soundscapes from './pages/Soundscapes.jsx' // <-- Import the new page
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/journel',
    element: <Journel/>
  },
  {
    path: '/exercises',
    element: <Exercises/>
  },
  {
    path: '/soundscapes', // <-- New Route for the Soundscapes page
    element: <Soundscapes/>
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