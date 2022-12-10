import React from "react";
import "./popupStyle.css";

const PopUpPokemonStats = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className={props.type} id="popup-inner">
        <h1 className="PokeName">{props.pokemonValue.name}</h1>
        <div className="BodyDiv">
          <img
            className="Pokeimage"
            src={props.pokemonValue.sprites.other.dream_world.front_default}
            alt=""
          ></img>
          <div>
            <h4 className="info">Id : {props.pokemonValue.id}</h4>
            <h4 className="info">
              Type : {props.pokemonValue.types[0].type.name}
            </h4>
            <h4 className="info">Weight : {props.pokemonValue.weight} </h4>
            <h4 className="info">Height : {props.pokemonValue.height} </h4>
            <h4 className="info">
              Base Experience : {props.pokemonValue.base_experience}{" "}
            </h4>
            <h4 className="info">Moves : {props.pokemonValue.moves.length} </h4>
          </div>

        </div>

        <button className="close" onClick={() => props.setTrigger(false)}>
          close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUpPokemonStats;
