import React from "react"
import Header from "../common/Header"
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
          <Switch></Switch>
      </Router>
    </>
  )
}

export default Pages
