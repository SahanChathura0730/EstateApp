import React from "react"
import Header from "../common/header/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "../home/Home";
import About from "../about/About.jsx";
import Footer from "../common/footer/Footer.jsx";
import Service from "../Services/Service.jsx";


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/Services" element={<Service/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
        <Footer /> 
      </Router>
    </>
  )
}

export default Pages
