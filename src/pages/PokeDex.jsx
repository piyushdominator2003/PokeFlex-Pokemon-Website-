import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../cssFiles/pokedex.css'
import { MdDelete } from "react-icons/md";

const PokeDex = ({masterId,pokedex,removePokemon,poke}) => {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  const [pokemon,setPokemon] = useState([]);
  console.log(pokemon);

  useEffect(() => { 
    if (pokedex && pokedex.length > 0) { 
      setPokemon(pokedex); 
    } 
  }, [pokedex]);


  if (masterId==0 && pokemon==0) {
    return(
      <>
      <h1 className='pokedexTitle'>Pokédex</h1>
      <div className='pokedex-div' data-aos='fade-left'>
      <div className="back-div">
      </div>
    </div>
    </>
    )
  }
  else{

    return (
    <>
    <h1 className='pokedexTitle'>Pokedex</h1>
    <div className='pokedex-div' data-aos='fade-left'>
      <div className="back-div">
      {pokedex.map((v,i)=>{
      return(
        <div className='poke-data' key={i}>
        <div className="image">
          <img src={v.p1image} alt={v.p1image} />
        </div>
        <div className="pokemon-name">
          <h1>{v.p1name}</h1>
        </div>
        <div className="buttons">
          <MdDelete className='delete' onClick={()=>removePokemon(v.p2image,pokedex)}/>
        </div>
        </div>  
      )
    })}
      </div>
    </div>
    </>
  )

}
}

export default PokeDex
