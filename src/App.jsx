import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"
import ModernNavbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import ContactPage from "./Pages/ContactPage"
import Gallery from "./Pages/Gallery"

function App() {

  return (
    <>
    <ScrollToTop/>
    <ModernNavbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
    <Footer/>
    <FloatingButtons/>
    </>
  )
}

export default App;
