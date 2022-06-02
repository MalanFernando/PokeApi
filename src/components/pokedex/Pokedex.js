import React, { useEffect, useState } from 'react';
import '../../css/Pokedex.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokemonCard from '../pokemonCard/PokemonCard';
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {

    const user = useSelector((state)=> state.user )

    const [pokemons, setPokemons] = useState([])
    const [types, setTypes] = useState([])
    const [searchPokemons, setSearchPokemons] = useState("")

    // const [page, setPage]

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(res=> setPokemons(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type/")
        .then(res=> setTypes(res.data.results))        
    },[])

    const pokemonsNames = pokemons.map(pokemon=> pokemon.name)

    const searchPoke = ()=>{
        if (pokemonsNames.includes(searchPokemons)) {
            navigate(`/pokedex/${searchPokemons}`)
        }else{
            alert("pokemon don't exist")
        }
    }

    const filterType = (e)=>{
        axios.get(e.target.value)
        .then(res => setPokemons(res.data.pokemon))
    }

    // console.log(pokemons);
    // console.log(types);
    // console.log(searchPokemons);

    const pokemonPaginated = pokemons.slice(0, 24);


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
                            onChange={e=> setSearchPokemons(e.target.value.toLowerCase())}
                        />
                    </form>
                    <select onChange={filterType} name="" id="">
                        <option value="">All</option>
                        {
                            types.map(type=>(
                                <option key={type.url} value={type.url}>
                                    {type.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </section>
            <section className='poke-content'>
                <div className='content-cards'>
                {
                    pokemonPaginated.map(pokemon=>(
                        <PokemonCard key={pokemon.url} pokeUrl={pokemon.url}/>
                    ))
                }
                </div>
            </section>
        </div>
    );
};

export default Pokedex;