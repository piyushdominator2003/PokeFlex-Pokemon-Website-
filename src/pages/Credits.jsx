import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../cssFiles/credit.css'

const Credits = () => {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  return (
    <div>
    <div className='credits'>
      <h1 data-aos='fade-up'>Credits</h1>
      <p data-aos='fade-up'>Starting with We Will Be Heroes, the main opening themes started to include credits.
        A version of the opening theme for each season also serves as the ending theme for that season:
        From Pokémon: Indigo League (starting from Princess vs. Princess) till Pokémon: Advanced Battle, a shortened version of the opening theme with vocals is used. The ending animation consists of a split screen with scenes from the opening theme on one side and the credits on a black background on the other side.
        For Pokémon: Battle Frontier, part of the rap section of Pokémon Go! served as the ending theme, played with the credits being shown over a black background.
        From Pokémon: Diamond and Pearl onwards, an instrumental version of the opening theme is used as the ending theme. Till Pokémon the Series: XYZ, the ending animation consisted of the credits over a black background.
        Pokémon the Series: XY used a different instrumental in the credits.
        From Pokémon the Series: Sun & Moon onwards, the ending animation features scenes from the corresponding Japanese ending theme.
      </p>
    </div>
    </div>
  )
}

export default Credits
