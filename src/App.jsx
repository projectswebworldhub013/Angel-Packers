import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"
import ModernNavbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import ContactPage from "./Pages/ContactPage"
import Gallery from "./Pages/Gallery"
import SingleService from "./Pages/SIngleService"
import Services from "./Pages/Services"
import Certificates from "./Pages/CertificatesPage"

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
      <Route path="/services" element={<Services/>}/>
      <Route path="/certificates" element={<Certificates/>}/>
      <Route path="/services/:serviceId" element={<SingleService />} />
    </Routes>
    <Footer/>
    <FloatingButtons/>
    </>
  )
}

export default App;
