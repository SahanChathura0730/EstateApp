import React from "react"
import Header from "../common/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "../Home/Home";


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
         <Route exact path='/' component= {Home} />
        </Routes>
          
      </Router>
    </>
  )
}

export default Pages
