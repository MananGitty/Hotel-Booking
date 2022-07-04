import React from 'react'
import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save Money, Save Time !</h1>
        <span className="mailDescription">Sign Up and We Will send you the best deals to you !</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email "/>
            <button> Subscribe </button>
        </div>
    </div>
  )
}

export default MailList