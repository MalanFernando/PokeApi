import axios from "axios";
import '../../css/PokeCard.css'
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({pokeUrl}) =>{

    const[pokemon, setPokemon] = useState()

    useEffect(()=>{
        axios.get(pokeUrl).then(res=> setPokemon(res.data))
    },[pokeUrl])

    const navigate = useNavigate()

    return(
        <div className="pokecard" onClick={()=> navigate(`/pokedex/${pokemon.id}`)}>
            <span className="card-id">#{pokemon?.id}</span>
            <img src={pokemon?.sprites?.front_default} alt="" />
            <h3>{pokemon?.name}</h3>
        </div>
    );
};

export default PokemonCard;