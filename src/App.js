import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Arts from './Components/Arts';
import Cards from './Components/Cards';
import { Route, Routes } from 'react-router-dom';
import Cardspages from './Pages/Cardspages';
import { Router } from 'react-router-dom';




function App() {
  return (
    <div className=" w-full h-full bg-[#110C00] ">
      <Navbar />
      <Hero />
      <Arts />
      <Cards />
     
     <Routes>
      
     </Routes>
    </div>
  )
}


export default App;