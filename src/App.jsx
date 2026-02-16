import HeroSection from "./components/sections/HeroSection"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import SplashCursor from "./components/ui/SplashCursor"
import Footer from "./components/layout/Footer"

function App() {

  return (
    <>
      <SplashCursor />
      <Navbar />
      <Home />
      <Footer/>
    </>
  )
}

export default App
