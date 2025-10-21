import Home from './pages/Home.jsx'
import Journel from './pages/Journel.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/journel',
    element: <Journel/>
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
