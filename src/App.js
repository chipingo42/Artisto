import Arts from "./Components/Arts";
import Cards from "./Components/Cards";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className=" w-full h-full bg-[#110C00] ">
      <Navbar />
      <Hero />
      <Arts />
      <Cards />
    </div>
  );
}

export default App;
