import { useState } from "react";
import "./App.css";
import { pokemonData } from "./components/Pokedata";
import Pokemon from "./components/Pokemon";

function App() {
  const [findName, setFindName] = useState("");
  const [result, setResult] = useState();
  const [hideList, setHideList] = useState(false);
  const [types, setTypes] = useState([
    "grass",
    "poison",
    "fire",
    "flying",
    "water",
    "bug",
    "electric",
    "ground",
  ]);

  const pokeList = pokemonData.map((pokemon) => {
    return <Pokemon data={pokemon} />;
  });

  function searchByName() {
    const result = pokemonData.find((pokemon) => pokemon.name === findName);
    setHideList(true);
    setResult(result);

    // const result = pokemonData.map((pokemonTypes) =>
    //   pokemonTypes.pokemon_data.types.map((pokemonType) => {
    //     if (pokemonType.type.name === findType) return pokemonType.type.name;
    //   })
    // );
    // setHideList(true);
    // setResult(result);
  }

  function searchByType(value) {
    pokemonData.map((pokemonTypes) =>
      pokemonTypes.pokemon_data.types.map((pokemonType) => {
        if (pokemonType.type.name === value) setResult(pokemonType.type.name);
      })
    );
    setHideList(true);
  }

  return (
    <div>
      <input
        type="text"
        value={findName}
        onChange={(e) => setFindName(e.target.value)}
      />
      {/* <button onClick={searchByName}>search</button> */}
      <div>
        {types.map((eachType) => {
          return (
            <div>
              <input
                type="radio"
                value={eachType}
                name="pokemonType"
                onClick={() => searchByType({ eachType })}
              />
              {eachType}
            </div>
          );
        })}
      </div>
      {result && <Pokemon data={result} />}
      <div>{!hideList && pokeList}</div>
    </div>
  );
}

export default App;
