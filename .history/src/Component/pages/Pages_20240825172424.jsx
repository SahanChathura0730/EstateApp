import React from "react"
import Header from "../common/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "../home/Home";


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
          
      </Router>
    </>
  )
}

export default Pages
