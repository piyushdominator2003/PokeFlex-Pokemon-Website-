import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './header.css'
import { NavLink } from 'react-router-dom'



const Headers = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
},[])

  return (
    <header>
      <div className="container">
        <div className="grid">
          <NavLink to='/' className='logoClass'>
          <img src="/images/logo.png" alt="/images/logo.png" data-aos = 'fade-right' ></img>
          </NavLink>
          <nav className='navigations'>
            <ul data-aos='fade-left'>
              <li><NavLink className='navlinks' to='/'>Home</NavLink></li>
              <li><NavLink className='navlinks' to='/Info'>Info</NavLink></li>
              <li><NavLink className='navlinks' to='/PokeDex'>Pokedex</NavLink></li>
              <li><NavLink className='navlinks' to='/Credits'>Credits</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Headers