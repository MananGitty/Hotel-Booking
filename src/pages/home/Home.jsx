import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured'

import './home.css';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <div className="homeTitle">Browse By property Type</div>
        <PropertyList/>
        <div className="homeFeature">Featured Property Displays for you </div>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>

    </div>
  )
}

export default Home