import React, { useEffect, useState } from 'react';
import '../../css/Pokedex.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokemonCard from '../pokemonCard/PokemonCard';
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {

    const user = useSelector((state)=> state.user )

    const [pokemons, setPokemons] = useState([])
    const [searchPokemons, setSearchPokemons] = useState("")

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(res=> setPokemons(res.data.results))
    },[])

    const navigate = useNavigate();

    const searchPoke = ()=>{
        navigate(`/pokedex/${searchPokemons}`)
    }

    // console.log(pokemons);
    // console.log(searchPokemons);

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
                        <button className='btn-ball' onClick={searchPoke}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <input 
                            className='input input-poke' 
                            type="text" 
                            placeholder='search...'
                            value={searchPokemons}
                            onChange={e=> setSearchPokemons(e.target.value)}
                        />
                    </form>
                    <select name="" id="">
                        <option value="">All</option>
                    </select>
                </div>
            </section>
            <section className='poke-content'>
                <div className='content-cards'>
                {
                    pokemons.map(pokemon=>(
                        <PokemonCard key={pokemon.url} pokeUrl={pokemon.url}/>
                    ))
                }
                </div>
            </section>
        </div>
    );
};

export default Pokedex;