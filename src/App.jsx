import './App.css'
import { Screen } from './game/Screen'
import { Pad } from './game/buttons/Pad'
import { StartSelect } from './game/buttons/StartSelect'
import { Actions } from './game/buttons/Actions'
import { useEffect, useState } from 'react'

function App() {

  const [pokemones, setPokemones] = useState([]);
  const [hoverPokemon, setHoverPokemon] = useState(0);
  const [selectedPokemones, setSelectedPokemones] = useState([]);
  const [health, setHealth] = useState([]);
  const [turn, setTurn] = useState(0);
  const [attack, setAttack] = useState();

  const BASE_URL = "https://pokeapi.co/api/v2/";

  const getPokemones = async() => {
    const res = await fetch(BASE_URL + 'pokemon?limit=151');
    const data = await res.json();
    const pokemonDetails = await getDetails(data.results);
    // console.log(pokemonDetails);
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
    // console.log(dir);
    let newHover = hoverPokemon;
  
    if (dir === 'right') {
      newHover += 1;
    }
    if (dir === 'left') {
      newHover -= 1;
    }
    if (dir === 'up') {
      newHover -= 3;
    }
    if (dir === 'down') {
      newHover += 3;
    }
  
    if (newHover >= 1) {
      setHoverPokemon(newHover);
    }
  };

  const handleSelectPokemon = () => {
    const pokemonSelected = pokemones.filter((pokemon) => pokemon.id === hoverPokemon);

    const selections = [pokemonSelected, computerSelection()];
    setSelectedPokemones(selections);
    setHealth([selections[0][0].stats[0].base_stat, selections[0][0].stats[0].base_stat, selections[1][0].stats[0].base_stat, selections[1][0].stats[0].base_stat]);
  };

  const computerSelection = () => {
    const randomID = Math.floor(Math.random() * pokemones.length);
    const selectElement = pokemones.filter((pokemon) => pokemon.id == randomID );
    return selectElement;
  }

  const attackTurn = () => {
    const randomDamage = Math.floor(Math.random() * 40);
    // console.log(randomDamage)
    if (turn == 0) {
      setHealth([health[0], health[1], health[2]-randomDamage, health[3]]);
      setTurn(1);
    } else {
      setHealth([health[0]-randomDamage, health[1], health[2], health[3]]);
      setTurn(0);
    }
    const attackMessage = turn == 0 ? selectedPokemones[0][0].name : selectedPokemones[1][0].name;

    setAttack(attackMessage + " used " + chooseAttack());
  }

  const chooseAttack = () => {
    const randomAttack = Math.floor(Math.random() * selectedPokemones[turn][0].moves.length);
    return selectedPokemones[turn][0].moves[randomAttack].move.name;
  }

  const mainMenu = () => {
    setSelectedPokemones([]);
    setTurn(0);
    setAttack();
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
            <Screen pokemones = {pokemones} hoverPokemon = {hoverPokemon} selectedPokemones = {selectedPokemones} health = {health} turn = {turn} mainMenu = {mainMenu} attack = {attack}/>
            {/* Container buttons */}
            <div className = "container-buttons-center">
              <div className = "container-buttons">
                {/* D-PAD */}
                <Pad handlePress = {handlePress} />
                {/* SELECT START */}
                < StartSelect handleSelectPokemon={handleSelectPokemon}/>
                {/* A B */}
                < Actions attackTurn={attackTurn}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
