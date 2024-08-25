import React from "react"
import Header from "../common/header/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "../home/Home";
import Footer from "../common/footer/Footer.jsx";


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer /> 
      </Router>
    </>
  )
}

export default Pages
