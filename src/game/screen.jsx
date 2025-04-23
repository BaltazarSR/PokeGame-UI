import React from 'react'

export const Screen = ({pokemones, hoverPokemon, selectedPokemones, health, turn, mainMenu}) => {

  const getHealthColor = (percent) => {
    if (percent > 50) return "#7ACDA8";
    if (percent > 20) return "#E6D66B";
    return "#CB6048";
  };

  const getPercent = (health, fullHealth) => {
    // console.log(health);
    // console.log(fullHealth);

    if (health <= 0) {
      return 0;
    } else {
      return  (100 * health) / fullHealth;
    }    
  }

  const gameOver = () => {
    if (health[0] <= 0 || health[2] <= 0) {
      return true;
    } else {
      return false;
    }
  }
    
  return (

    <div className = "container-screen-center">
      <div className = "container-screen">
      {/* Container top screen */}
        <div className = "container-screen-title">
          <div className = "container-dash-title1"></div>
          <div className = "container-dash-title2"></div>
        </div>
        {/* Container display */}
        {/* <div className = "container-display"> */}
        <div>
          {selectedPokemones.length === 2 ? (
            <div>
              {gameOver() == true ? (
                <div className='screen-winner'>
                  <img src="./src/assets/winner-text.png" alt="text-winner" className='winner-text'/>
                  <img src={selectedPokemones[turn == 1 ? 0 : 1][0].sprites?.front_default} alt="sprite-winner"/>
                  <button className='main-menu-button' onClick={mainMenu}>Back to Main Menu</button>
                </div>
              ) : (
                <div className='battle-background'>
                  <div className='container-top-pokemon'>
                    <div className='container-info'>
                      <div className='health-bar-back'>
                        <div className='pokemon-name-2'>
                          {selectedPokemones[1][0].name}
                        </div>
                        <div className='container-health-bar'>
                          <div className='health-bar'>
                            <div style={{width: `${getPercent(health[2], health[3])}%`, height: "100%", borderRadius: "10px", backgroundColor: `${getHealthColor(getPercent(health[2], health[3]))}`}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src={selectedPokemones[1][0].sprites?.front_default} alt="imagen1"/>
                    </div>
                  </div>
                  <div className='container-bottom-pokemon'>
                    <div>
                      <img src={selectedPokemones[0][0].sprites?.back_default} alt="imagen1"/>
                    </div>
                    <div className='container-info'>
                      <div className='health-bar-back'>
                        <div className='pokemon-name-2'>
                          {selectedPokemones[0][0].name}
                        </div>
                        <div className='container-health-bar'>
                          <div className='health-bar'>
                            <div style={{width: `${getPercent(health[0], health[1])}%`, height: "100%", borderRadius: "10px", backgroundColor: `${getHealthColor(getPercent(health[0], health[1]))}`}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className='container-pokedex'>
              {pokemones?.map((pokemon) => (
                <div key={pokemon.id} className={`pokemon-card ${hoverPokemon === pokemon.id ? "hover-enabled" : ""}`}>
                  <img className = "pokemon-sprite" src={pokemon.sprites.front_default} alt="pokemones"/>
                  <p className = 'pokemon-name'> {pokemon.name} </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Container Nintendo */}
      <div className = "container-name">
      Nintendo GAMEBOY
      </div>
    </div>

  )
}
