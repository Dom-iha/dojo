import { useState, useEffect } from 'react'
import {nanoid} from "nanoid"
import './styles/App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

   return (
      <div className='app'>
         <Header />
         <Main />
         <Footer />
      </div>
   )
}

export default App
