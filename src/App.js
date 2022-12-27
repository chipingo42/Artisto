import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Arts from './Components/Arts';
import Cards from './Components/Cards';




function App() {
  return (
    <div className=" w-full h-full bg-[#110C00] ">
      <Navbar />
      <Hero />
      <Arts />
      <Cards />
    </div>
  )
}


export default App;