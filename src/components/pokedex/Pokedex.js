import React, { useEffect, useState } from 'react';
import '../../css/Pokedex.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokemonCard from '../pokemonCard/PokemonCard';
import { useNavigate } from 'react-router-dom';
import salute from '../../image/salute.gif'
// import { v4 as uuidv4 } from "uuid";

const Pokedex = () => {

    const user = useSelector((state)=> state.user )

    const [pokemons, setPokemons] = useState([])
    const [types, setTypes] = useState([])
    const [searchPokemons, setSearchPokemons] = useState("")

    
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
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
    // estado para la paginacion
    const [page, setPage] = useState(1)
    
    const numPokemons = 20;
    const lastIndex = numPokemons * page;
    const firstIndex = lastIndex - numPokemons;
    
    const pokemonPaginated = pokemons.slice(firstIndex, lastIndex);

    const lastPage = Math.ceil(pokemons.length / numPokemons);

// numeros de paginacion aun sin funcionar
    // const numberPagination = []

    // for (let i = 1; i <= lastPage; i++) {
    //     numberPagination.push(i);
    // }

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
                    <select className='select' onChange={filterType} name="" id="">
                        {
                            types.map(type=>(
                                <option className='option' key={type.url} value={type.url}>
                                    {type.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </section>
            <div className='user'>
                <img className='salute' src={salute} alt="" />
                <p>Welcome {user}</p>
            </div>
            <section className='poke-content'>
                <div className='btn-content'>
                    <button 
                        className='btn-pagination' 
                        onClick={()=> setPage(page-1)} 
                        disabled={page === 1}
                    >
                        <i className="fa-solid fa-circle-chevron-left"></i>
                    </button>
                    {/* esta implementacion aun falta */}
                        {/* {numberPagination.map(numberPag=> (
                            <button key={uuidv4()} onClick={()=> setPage(numberPag)}>{numberPag}</button>
                        ))} */}
                    <button 
                        className='btn-pagination' 
                        onClick={()=> setPage(page+1)} 
                        disabled={page === lastPage}
                    >
                        <i className="fa-solid fa-circle-chevron-right"></i>
                    </button>
                </div>
                <div className='content-cards'>
                {
                    pokemonPaginated.map(pokemon=>(
                        <PokemonCard 
                            key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} 
                            pokeUrl={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url}
                        />
                    ))
                }
                </div>
            </section>
        </div>
    );
};

export default Pokedex;