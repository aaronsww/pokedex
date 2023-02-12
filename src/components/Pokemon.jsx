import React from 'react'
import {pokemonData} from "./Pokedata"
import Poketypes from "./Poketypes"
// import '../App.css'
  
function Pokemon(props) {
 
  return (
    <tr>
      <td>
        <img src={props.data.pokemon_data.sprites.front_shiny} alt="" />
      </td>
      <td>{props.data.name}</td> 
      <Poketypes dataWhole = {props.data.pokemon_data}/> 
    </tr>
  )
}

export default Pokemon

  {/* 
   <td >{props.data.pokemon_data.types.map( typeName => typeName.type.name)}</td>
  { 
      props.data.pokemon_data.types.map(
        pokemonType => (
        <Poketypes type={pokemonType}/> 
      ))} */}