import React from "react"
import Header from "../common/header/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "../home/Home";
import AboutUs from "../about/AboutUs";
import Footer from "../common/footer/Footer.jsx";


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer /> 
      </Router>
    </>
  )
}

export default Pages
