import { Route, Routes } from "react-router";
import Arts from "./Components/Arts";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Cardspages from "./Pages/Cardspages";


function App() {
  return (
    <div className=" w-full h-full bg-[#110C00] ">
      <Navbar />
      <Hero />
      <Arts />
      <Routes>
        <Route path="/Cardspages" element={<Cardspages />} />
      </Routes>
    </div>
  );
}

export default App;
