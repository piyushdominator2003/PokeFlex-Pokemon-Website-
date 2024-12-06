import React, { createContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Home';
import AppLayout from '../components/layout/AppLayout';
import Error from './Error';
import '../cssFiles/app.css'
import Info from './Info';
import PokeDex from './PokeDex';
import Credits from './Credits';
import InfoMaster from './InfoMaster';
import InfoTrainer from './InfoTrainer'
import MasterPokemon from './MasterPokemon';
import TrainerPokemon from './TrainerPokemon'
import InfoBreeder from './InfoBreeder';
import BreederPokemon from './BreederPokemon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const notify = () => toast.error( 'Pokemon already exists in POKEDEX!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  const success = ()=> toast.success('Gotcha!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  const [pokedex, setPokedex] = useState(JSON.parse(localStorage.getItem('pokedex'))||[]);
  const [masterId,setMasterId] = useState([])
  const [pokeId,setPokeId] = useState([])

  useEffect(()=>{
    localStorage.setItem('pokedex', JSON.stringify(pokedex));
  },[pokedex])

  function AddPokemon(pokemon,id,pid) {
    setMasterId([id])

    const pokeImage = pokedex.find((item) => item.p2image == pokemon.p2image)
    if (pokeImage) {
      notify();
    }
    else{
      success();
      setPokedex([...pokedex,pokemon])
    }
    
    setPokeId([pid])

  }

  const  removePokemon = (p2image,pokedex) =>{
    const update = pokedex.filter((item) => (item.p2image) !== (p2image))
    setPokedex(update)
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Info",
          element: <Info />,
        },
        {
          path: "/Info/:id",
          element: <InfoMaster />,
        },
        {
          path: "/Info/:id/pokemon/:pid",
          element: <MasterPokemon AddPokemon={AddPokemon}/>,
        },
        {
          path:"/info/pokemon/:id",
          element:<InfoTrainer/>
        },
        {
          path:"/info/:id/:pid",
          element:<TrainerPokemon AddPokemon={AddPokemon}/>
        },
        {
          path:"/info/breeder/:id/:pid",
          element:<InfoBreeder/>
        },
        {
          path:"/info/:id/:pname/:pid",
          element:<BreederPokemon AddPokemon={AddPokemon}/>
        },
        {
          path: "/PokeDex",
          element: <PokeDex masterId={masterId} pokedex={pokedex} removePokemon={removePokemon} />,
        },
        {
          path: "/Credits",
          element: <Credits />,
        }
      ]
    },
    ]);

  return (
    <>
    <RouterProvider router={router} />
    <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />
    </>
    
  )
}

export default App
