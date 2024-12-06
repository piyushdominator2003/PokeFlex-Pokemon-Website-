import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { master} from "../PokeData/Masters";
import '../cssFiles/InfoMaster.css'
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Button } from 'bootstrap';

const MasterDetail = () => {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  const { id } = useParams();
  const masterDetails = master.filter((item) => item.id === parseInt(id));

  if (masterDetails.length === 0) {
    return <div>Master not found</div>;
  }

  const masterDetail = masterDetails[0];

  return (
    <div className='main-div'>
      <div className="masterDetails">
        <div className="master-imgName" >
          <div className="masterImage" data-aos='fade-left'><img src={masterDetail.image2} alt={masterDetail.image2} /></div>
        </div>
        <div className="description" data-aos='fade-left'><p data-aos='fade-up'>{masterDetail.description}</p></div>
      </div>

      <h1 data-aos='fade-right'>Pokemons Owned</h1>

      <div className="pokemons" data-aos='fade-left'>
        {masterDetail.pokemons.map((v,i)=>{
           return(
            <div className="image" key={i} data-aos='fade-left'>
              <img src={v.p1image} alt={v.p1image} />
              <div className="pokemon-details">
                <div className="pokemon-name"><h4>Name: {v.p1name}</h4></div>
                <Link to={`/info/${id}/pokemon/${v.pid}`} className='pokemon-link'><button>View Pokemon</button></Link>
              </div>
            </div>
           )
        })}
      </div>
    </div>
  );
};

export default MasterDetail;
