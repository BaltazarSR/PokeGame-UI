import React from 'react'

export const Screen = ({pokemones}) => {

  return (

    <div className = "container-screen-center">
      <div className = "container-screen">
        {/* Container top screen */}
        <div className = "container-screen-title">
          <div className = "container-dash-title1"></div>
          <div className = "container-dash-title2"></div>
        </div>
        {/* Container display */}
        <div className = "container-display">
          {pokemones?.map((pokemon) => (
            <div key={pokemon.id}>
              <img className = "pokemon-sprite" src={pokemon.sprites.front_default} alt="pokemones"/>
              <p className = 'pokemon-name'> {pokemon.name} </p>
            </div>
          ))}
        </div>
      </div>
      {/* Container Nintendo */}
      <div className = "container-name">
      Nintendo GAMEBOY
      </div>
    </div>

  )
}
