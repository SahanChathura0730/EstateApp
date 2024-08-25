import React from 'react'
import '...public/images/logo.png'

const Header = () => {
  return (
    <div>
      <header>
         <div className="container flex">
            <div className="logo">
               <img src='...public/images/logo.png' alt='Logo'/>
            </div>
         </div>

      </header>
    </div>
  )
}

export default Header
