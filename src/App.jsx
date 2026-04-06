import HeroSection from "./components/sections/HeroSection"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import Cursor from "./components/ui/Cursor"
import Footer from "./components/layout/Footer"

function App() {

  return (
    <>
      <Cursor />
      <Navbar />
      <Home />
      <Footer/>
    </>
  )
}

export default App
