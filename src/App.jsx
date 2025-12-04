import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"
import ModernNavbar from "./Components/Navbar"

function App() {

  return (
    <>
    <ScrollToTop/>
    <ModernNavbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <FloatingButtons/>
    </>
  )
}

export default App;
