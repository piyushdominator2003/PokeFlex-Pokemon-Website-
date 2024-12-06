import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { master } from '../PokeData/Masters'
import '../cssFiles/info.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import { trainers } from '../PokeData/Trainer'
import { breeder } from '../PokeData/Breeder'

const Info = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])


 

  return (
    <div className='infoContent'>
    <div className='infos'>
      <h1 data-aos='fade-up'>World's Best Pokemon Masters</h1>
      <div className="infoI" data-aos='fade-up'>
        
      {master.map((v,id)=>{
        // <InfoMaster masters={v} key={id} />
          return(
            <div className="MasterDetails" key={id} data-aos='fade-left'>
              <div className="masterImg" data-aos='fade-left'>
                <img src={v.image} alt={v.image} />
            
                <div className="masterDetail">
                  <div className="name">Name :<p>{v.name}</p></div>
                  <div className="gender">Gender : <p>{v.Gender}</p></div>
                  <div className="Debut-Poke">Profession : <p>{v.Profession}</p></div>
                  <div className="city">City :<p>{v.City}</p></div>
                  <button><Link className='master-pokemon' to={`/info/${v.id}`}> Explore Master <FaLongArrowAltRight /> </Link></button>
                </div>
              </div>
            </div>
            
          )
      })}
    
      </div>
    </div>

    <div className="trainers">
      <h1 data-aos='fade-left'>World's Best Pokemon Trainers</h1>
      <div className="trainer-cont" data-aos='fade-right'>
        {trainers.map((v,id)=>{
          return(
            <div className="trainer-cards" key={id} data-aos='fade-right'>
              <div className="trainer-img">
                <img src={v.image} alt={v.image} />
                <div className="trainer-details">
                    <div className="name">Name :<p>{v.name}</p></div>
                    <div className="gender">Gender : <p>{v.Gender}</p></div>
                    <div className="Debut-Poke">Profession : <p>{v.Profession}</p></div>
                    <div className="city">City :<p>{v.City}</p></div>
                    <button><Link className='master-pokemon' to={`/info/pokemon/${v.id}`} id={v.id}> Explore Trainer <FaLongArrowAltRight /> </Link></button>
                </div>
          </div>
        </div>
          )
        })}
        
      </div>
    </div>

    <div className="trainers">
      <h1 data-aos='fade-left'>World's Best Pokemon Breeder</h1>
      <div className="trainer-cont breeder-cont" data-aos='fade-right'>
        {breeder.map((v,id)=>{
          return(
            <div className="trainer-cards" key={id} data-aos='fade-right'>
              <div className="trainer-img">
                <img src={v.image} alt={v.image} />
                <div className="trainer-details breeder-details">
                    <div className="name">Name :<p>{v.name}</p></div>
                    <div className="gender">Gender : <p>{v.Gender}</p></div>
                    <div className="Debut-Poke">Profession : <p>{v.Profession}</p></div>
                    <div className="city">City :<p>{v.City}</p></div>
                    <button><Link className='master-pokemon' to={`/info/breeder/${v.id}/${v.name}`}> Explore Breeder<FaLongArrowAltRight /> </Link></button>
                </div>
          </div>
        </div>
          )
        })}
      </div>
    </div>

    </div>
  )
}

export default Info
