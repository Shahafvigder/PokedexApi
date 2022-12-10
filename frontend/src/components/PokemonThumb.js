import React from "react";
import { useState } from "react";
import {
  CellDiv,
  Cellimage,
  CellIdH1,
  CellNameH1,
  CellTypeH1,
  StatsButtonPopUp,
} from "../components/allPokemonStyled";
import PopUpPokemonStats from "./PopUpPokemonStats";

const PokemonThumb = ({ id, image, name, type, pokemonvalue }) => {
  const [buttonPopUp, setButtonPopUp] = useState(false);

  return (
    <>
      <CellDiv className={type}>
        <CellIdH1 className="number">
          <small>#0{id}</small>
        </CellIdH1>
        <Cellimage src={image} alt={name} />
        <CellNameH1>{name}</CellNameH1>
        <CellTypeH1>Type: {type}</CellTypeH1>
        <StatsButtonPopUp onClick={() => setButtonPopUp(true)}>
          ^Stats^
        </StatsButtonPopUp>
      </CellDiv>
      <PopUpPokemonStats
        trigger={buttonPopUp}
        setTrigger={setButtonPopUp}
        pokemonValue={pokemonvalue}
        type={type}
      />
    </>
  );
};

export default PokemonThumb;
