import React from 'react'
import './searchItem.css'

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img
        src="https://cf.bstatic.com/xdata/images/hotel/max500/270754321.jpg?k=4b6b15c6fd324ee488bf414cf55921abf6e10c358a5eb1284adb626cdfed8a39&o=&hp=1"
        alt=""
        className="siImg"
        />
        <div className="siDesc">
        <h1 className="siTitle"> Tower Street Apartment</h1>
        <span className="siDistance"> 500m from centre </span>
        <span className="taxiOp">Free Airport Taxi</span>
        <span className="subTitle">Studio Apartment With Air Conditioner</span>
        <span className="siFeatures">22 m²City viewAir conditioningAttached bathroomFlat-screen TV </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelSubtitleOp">Free cancellation until 6:00 PM on Jul 11, 2022 </span>
        </div>
        <div className="siDetails"> 
        <div className="siRating">
            <span>Excellent </span>
            <button>8.9</button>
        </div>
        <div className="siDetailText">
            <span className="siPrice">$300</span>
            <span className="siTaxOp">Includes 5% VAT</span>
            <button className="siCheckButton">See Availibility</button>
        </div>
        </div>

    </div>
  )
}

export default SearchItem