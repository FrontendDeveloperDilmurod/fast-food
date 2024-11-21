import React from 'react'
import { assets } from '../assets/assets'
import './All.css'

function Footer() {
  return (
    <div id='footer' className=' flex flex-col justify-center items-center gap-4 pt-14 text-white bg-slate-900 '>
      <div className='footer_content '>
        <div className="footer_content_left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam, ab voluptatum animi eos dolorum amet minima repellat esse nam assumenda id laborum laboriosam quo.</p>
          <div className="footer_social_items">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer_content_center">
          <h3 className='text-2xl '>Company</h3>
          <ul>
            <li id='#home'>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer_content_right">
          <h2 className='text-2xl '>GET IN TOUCH</h2>
          <ul>
            <li >+998999999999</li>
            <li>example@gmail.com</li>
            {/* <li>Tashkent, Uzbekistan</li> */}
            {/* <li>Monday - Friday: 9:00 - 18:00</li> */}
            {/* <li>Saturday - Sunday: 9:00 - 14:00</li> */}
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer_copryight">
        <p>Copyright © 2023 All rights reserved</p>

      </div>
    </div>
  )
}

export default Footer