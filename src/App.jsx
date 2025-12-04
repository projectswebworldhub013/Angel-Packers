import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"
import ModernNavbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
    <ScrollToTop/>
    <ModernNavbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    <FloatingButtons/>
    </>
  )
}

export default App;
