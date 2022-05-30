import React, { useEffect, useState } from 'react';
import '../../css/Pokedex.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokemonCard from '../pokemonCard/PokemonCard';

const Pokedex = () => {

    const user = useSelector((state)=> state.user )

    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(res=> setPokemons(res.data.results))
    },[])

    // console.log(pokemons);

    return (
        <div className='pokedex'>
            <section className='content-sidebar'>
                <div className='content-circle'>
                    <div className='circle-big'></div>
                    <div className='circle-short red'></div>
                    <div className='circle-short yellow'></div>
                    <div className='circle-short green'></div>
                </div>
                <div className='content-bar'>
                    <p>Welcome {user}</p>
                    <form className='form form-poke' action="" onChange={e => e.preventDefault()}>
                        <button className='btn-ball'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <input className='input input-poke' type="text" placeholder='search...' />
                    </form>
                </div>
            </section>
            <section className='poke-content'>
                {
                    pokemons.map(pokemon=>(
                        <PokemonCard key={pokemon.url} pokeUrl={pokemon.url}/>
                    ))
                }
            </section>
        </div>
    );
};

export default Pokedex;