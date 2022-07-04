import React from 'react'
import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
      <div className="fp">
        <div className="fpItem">
          <img src="https://q-xx.bstatic.com/psb/capla/static/media/gateway_banner.efe9b1ad.jpg" 
          alt="" className="fpImg" />
          <span className="fpName">Burj Khalifa Hotel</span>
          <span className="fpCity"> Dubai</span>
          <span className="fpPrice">Starting from $1000</span>
          <div className="fpRating">
              <button className="fpButton">8.9</button>
              <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img src="https://q-xx.bstatic.com/psb/capla/static/media/gateway_banner.efe9b1ad.jpg" 
          alt="" className="fpImg" />
          <span className="fpName">Marina Bay Hotel</span>
          <span className="fpCity"> Dubai</span>
          <span className="fpPrice">Starting from $900</span>
          <div className="fpRating">
              <button className="fpButton">8.9</button>
              <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img src="https://q-xx.bstatic.com/psb/capla/static/media/gateway_banner.efe9b1ad.jpg" 
          alt="" className="fpImg" />
          <span className="fpName">Sheraton International Hotel</span>
          <span className="fpCity"> Dubai</span>
          <span className="fpPrice">Starting from $800</span>
          <div className="fpRating">
              <button className="fpButton">8.9</button>
              <span>Excellent</span>
          </div>
        </div>
      </div>
    )
}

export default FeaturedProperties