import React from 'react'
import './Hero.css'

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
            <div className="box">
              <h4>
                Advance Filter
              </h4>
              <button className='btn'>
                <i className='fa fa-search'></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Hero
