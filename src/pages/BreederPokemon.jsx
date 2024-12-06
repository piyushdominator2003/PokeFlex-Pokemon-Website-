import React from 'react'
import { useParams } from 'react-router-dom'
import '../cssFiles/MasterPokemon.css'
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { breeder } from '../PokeData/Breeder';

const BreederPokemon = ({AddPokemon}) => {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])


    const {id,pid,name} = useParams()
    const masterDetails = breeder.filter((item) => item.id === parseInt(id))
    const masterDetail = masterDetails[0]
    const pokemonDetails = masterDetail.pokemons.filter((pokemon) => pokemon.pid === parseInt(pid))

    const pokemonDetail = pokemonDetails[0];

  return (
    <div className='PokeField'>
      <div className="pokeImage" data-aos='fade-left'>
        <img src={pokemonDetail.p2image} alt={pokemonDetail.p2image} />
      </div>
      <div className="poke-des" data-aos='fade-left'>
        <h1>{pokemonDetail.p1name}</h1>
        <p className='pokeType'>Type : {pokemonDetail.type}</p>
        <p>{pokemonDetail.p1description}</p>
        <center><button onClick={()=>AddPokemon(pokemonDetail,id,pid)} className='pokedexButton'>Add to Pokedex</button></center>
      </div>
    </div>
  )
}

export default BreederPokemon;