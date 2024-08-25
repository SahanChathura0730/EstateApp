import React from 'react'
import '/Image/logo.png'

const Header = () => {
  return (
    <div>
      <header>
         <div className="container flex">
            <div className="logo">
               <img src='/Image/logo.png' alt='Logo'/>
            </div>
         </div>

      </header>
    </div>
  )
}

export default Header
