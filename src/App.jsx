import Home from './pages/Home.jsx'
import Exercises from './pages/Exercises.jsx'
import './App.css'

function App() {
  // We remove useState, reactLogo, and viteLogo imports as they are unused.
  
  // The App component now simply serves as the wrapper for the main Home page.
  return (
    <>
      {/* <Home/> */}
      <Exercises/>
    </>
  )
}

export default App
