import React from 'react'
import './images/logo.png'

const Header = () => {
  return (
    <div>
      <header>
         <div className="container flex">
            <div className="logo">
               <img src='./images/logo.png' alt='Logo'/>
            </div>
         </div>

      </header>
    </div>
  )
}

export default Header
