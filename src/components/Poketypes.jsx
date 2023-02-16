import React from "react";

function Poketype(props) {
  return (
    // <td >{props.type.type.name}</td>
    <div>
      {props.dataWhole.types.map((pokemonType) => pokemonType.type.name)}
    </div>
  );
}

export default Poketype;
