import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import '../../cssFiles/foot.css'

const Foot = () => {
  return (
    <>
      <div className="foot-sec">
        <div className="foot-up">
          <div className="contact">
            <FaPhoneAlt className='phone' />
            <div className="link">
              <p>Contact Us</p>
              <Link to='https://www.pokemon.com/us' className='link-pokeweb'>Poke.web</Link>
            </div>
          </div>
          <div className="contact e-mail">
            <IoMailSharp className='phone email' />
            <div className="link">
              <p className='mail'>Mail Us</p>
              <Link to='https://www.pokemon.com/us' className='mail-link'>Poke.web</Link> 
            </div>
          </div>
          <div className="pokeflex">
            <div className="pokefoot">
              <img src="/images/pikafoot.gif" alt="/images/pikafoot.gif" />
            </div>
            <div className="pokeTag">
              <h1>PokeFlex</h1>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <p>© 2024 PokeFlex. All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default Foot
