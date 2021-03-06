import '../../css/PokemonDetail.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const [pokemonDetail, setPokemonDetail] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res=> setPokemonDetail(res.data))
    },[id])

    // console.log(pokemonDetail);

    return (
        <div className='content-detail'>
            <section className='detail-img'>
                <img src={pokemonDetail.sprites?.front_default} alt="" />
                <img src={pokemonDetail.sprites?.back_default} alt="" />
            </section>
            <section className='content-info'>
                <article className='detail-info'>
                    <h2 className='info-title'>{pokemonDetail.name}</h2>
                    <div className='info-type'>
                        {
                            pokemonDetail.types?.map(type=>(
                                <span className='type' key={type.slot}>{type.type.name}</span>
                            ))
                        }
                    </div>
                    <ul className='info-w_h'>
                        <li>
                            <h4>{pokemonDetail.weight}</h4>
                            <span>Weight</span>
                        </li>
                        <li>
                            <h4>{pokemonDetail.height}</h4>
                            <span>Height</span>
                        </li>
                    </ul>
                </article>
                <article className='detail-stats'>
                    <h2>Statics</h2>
                    <ul className='stats-list'>
                        {
                            pokemonDetail.stats?.map(stat=>(
                                <li key={stat.stat.url}>
                                    <label htmlFor="pokerbar">{stat.stat.name} </label>
                                    <progress id="pokebar" max="100" value={stat.base_stat} className='prog'>{stat.base_stat}</progress>
                                </li>
                                
                            ))
                        }
                    </ul>
                </article>
            </section>
        </div>
    );
};

export default PokemonDetail;