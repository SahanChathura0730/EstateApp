import React from 'react'
import './Hero.css'
import  '@fortawesome/fontawesome-free/css/all.min.css';


const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
        <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />
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
