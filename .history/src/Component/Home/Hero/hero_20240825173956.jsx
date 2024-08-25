import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <form action="" className="flex">
            <div className="box">
              <span>
                City/Street
              </span>
              <input type='text' placeholder='Location'/>
            </div>
            <div className="box">
              <span>
                Property Type
              </span>
              <input type='text' placeholder='Property Type'/>
            </div>
            <div className="box">
              <span>
                Price Range
              </span>
              <input type='text' placeholder='Price Range'/>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Hero
