import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './hotel.css'

const Hotel = () => {
  const photos = [
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/270073506.jpg?k=806891a05f04c7a8dcd3bbf299dbe9e1a41a2ac30f1ce86d456ab15f9c064642&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/248097925.jpg?k=79f404990deb07f592a02a5d024ec130a4e5d5f7e321bc05906606d4659ee41b&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/270049621.jpg?k=b218e463c293dab652b645a98e47bc770490944f840c5cf124424885dcd4f5ef&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/248097852.jpg?k=576d1fb215de381a87f59d2406d317b8b86855572504450888463899d6b44ee8&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/255591701.jpg?k=62021475dce28bc293abd85fb7a332054437ba07eb4148f1b98f57f49d512350&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/244803711.jpg?k=f7e5c204cdf9dec7b62bd4a3a14042bb1115864e2fad9c922d66fbad86376516&o=&hp=1"
    },
  ];
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow"> Book Or Reserve Now</button>
          <h1 className="hotelTitle"> Grand Hotel </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span> Mozzang Rd , 86 Lahore , Pakistan </span>
          </div>
            <span className="hotelDistance"> 500m away from city Center</span>
            <span className="hotelOffer"> Book for 1 night and get second night free</span>
            <div className="hotelImages">
              {photos.map(photo=>(
                <div className="hotelImgWrapper">
                  <img
                    src={photo.src}
                    alt=""
                    className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelText"> Stay In The Heart Of Lahore </h1>
                <p className="hotelDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a ex nihil perferendis consequatur soluta laboriosam atque quam asperiores, molestias voluptatum eaque commodi quaerat sequi deleniti error voluptatem omnis assumenda.
                Accusamus in facilis aliquam aliquid eius quaerat ullam cumque obcaecati voluptates excepturi soluta neque odit porro adipisci autem itaque, nisi impedit, animi ea voluptatum numquam amet eum fugiat recusandae. Commodi.
                Ad repudiandae maxime ipsa corporis pariatur reiciendis eveniet laborum, iusto non, illo unde totam reprehenderit, praesentium asperiores. A, incidunt tempora fuga nesciunt, id doloremque architecto cupiditate laborum, porro praesentium quae!
                </p>
              </div>
              <div className="hotelDetailsPrice">
                 <h1> Perfect for 5 day stay</h1>
                 <span>
                   Lorem ipsum dolor aliquam molestias atque praesentium explicabo delectus fugiat, sunt, commodi quidem neque dolorem velit officia nemo enim eaque inventore.
                 </span>
                 <h2>
                    <b>$900</b>
                    (5 Nights)</h2>
                 <button>Reserve OR Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hotel