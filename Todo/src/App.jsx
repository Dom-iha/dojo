import { useState, useEffect } from 'react'
import './styles/App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
   const [darkMode, setDarkMode] = useState(false);
   function toggleTheme () {
      setDarkMode(prevTheme => !prevTheme)
   }

   return (
      <>
         <Header />
         <Main />
         <Footer />
      </>
   )
}

export default App
