import React, {useEffect, useState} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../cssFiles/home.css'
import {Link,useParams} from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div>
      <div className="heroCont">
        <div className="leftHome" data-aos='fade-up'>
          <h1>PokeFlex</h1>
          <p>
            Welcome to the PokeFlex web... <br />
            This site has the data of world's best pokemon masters , <br /> trainers and breeders..
          </p>
          <button><Link to='/Info' className='hometoInfo'>Explore More <FaLongArrowAltRight /> </Link></button>
       </div>
        <div className="rightHome">
          <img src="/images/home-img.gif" alt="/images/home-img.gif" data-aos='fade-right' />
        </div>
      </div>
    </div>
  )
}

export default Home
