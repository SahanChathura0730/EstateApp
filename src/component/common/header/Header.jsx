import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import  '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span>2</span> My List
            </h4>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div>

          <div className='toggle'>
          <button onClick={() => setNavList(!navList)}>
            {navList ? (
                  <i className='fa-solid fa-xmark'></i> // For close icon
               ) : (
                  <i className='fa-solid fa-bars'></i> // For menu icon
               )}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
