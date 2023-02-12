import { useState } from 'react'
import './App.css'
import {pokemonData} from "./components/Pokedata"
import Pokemon from './components/Pokemon'

function App() {
  const [findName, setFindName] = useState('')
  const [result, setResult] = useState()
  const [hideList, setHideList] = useState(false)

  const pokeList = pokemonData.map(
    pokemon => {
    return <Pokemon data={pokemon}/> 
    })

  function findThatPokemon(){
  const result = pokemonData.find(
      pokemon => pokemon.name ===  findName 
   )
   setHideList(true)
   setResult(result)
  }

  return (
  <div>
    <input 
      type='text' 
      value={findName} 
      onChange={e => setFindName(e.target.value)}/>
      <button onClick = {findThatPokemon}>Search</button> 
      {
        result && <Pokemon data={result}/>
      }
    <div>
      {!hideList && pokeList}
    </div>
  </div>
  )
} 

export default App  

