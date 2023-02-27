import { useState, useEffect } from 'react'


import './styles/App.css'
import Main from './components/Main'
import Header from './components/Header'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode () {
      setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className='container'>
      <Header 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main 
        darkMode={darkMode}
      />
    </div>
  )

}

export default App
