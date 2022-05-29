import React from 'react';
import '../../css/Pokedex.css'
import { useSelector } from 'react-redux';

const Pokedex = () => {

    const user = useSelector((state)=> state.user )

    return (
        <div className='pokedex'>
            <section className='content'>
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
        </div>
    );
};

export default Pokedex;