import './App.css'
import { Screen } from './game/Screen'
import { Pad } from './game/buttons/Pad'
import { StartSelect } from './game/buttons/StartSelect'
import { Actions } from './game/buttons/Actions'
import { useEffect, useState } from 'react'

function App() {

  const [pokemones, setPokemones] = useState([]);
  
  const BASE_URL = "https://pokeapi.co/api/v2/";

  const getPokemones = async() => {
    const res = await fetch(BASE_URL + 'pokemon?limit=151');
    const data = await res.json();
    const pokemonDetails = await getDetails(data.results);
    console.log(pokemonDetails);
    setPokemones(pokemonDetails);
  }

  const getDetails = async (results) => {
    const res = await Promise.all(results.map((result) => fetch(result.url)));
    const data = await Promise.all(res.map(gato => gato.json()) );
    return data;
}

  useEffect(() => {
    getPokemones();
  }, [])


  const handlePress = (dir) => {
    console.log(dir)
  }

  return (
    <>
      <div className = "container-main">
        {/* Shadow */}
        <div className = "shadow">
          {/* Container top */}
          <div className = "container-top"></div>
          {/* Container game */}
          <div className = "container-gameboy">
            {/* Container screen */}
            <Screen pokemones = {pokemones} />
            {/* Container buttons */}
            <div className = "container-buttons-center">
              <div className = "container-buttons">
                {/* D-PAD */}
                <Pad handlePress = {handlePress} />
                {/* SELECT START */}
                < StartSelect />
                {/* A B */}
                < Actions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
