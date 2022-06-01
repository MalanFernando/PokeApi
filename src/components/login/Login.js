import '../../css/Login.css'
import pokelogo from '../../image/pokemon-logo.png'
import pika8bits from '../../image/pikagif.gif'
import pokeball from '../../image/ball.png'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeUser } from '../../store/slices/user.slice';

const Login = () => {

    const [userName, setUserName] = useState("");
    // console.log(userName);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getName = ()=>{
        dispatch(changeUser(userName));
        navigate("/pokedex");
    }

    return (
        <div className='login'>
            <section className='content'>
                <img src={pokelogo} alt="" />
                <div className='message'>
                    <img src={pika8bits} alt="" />
                    <div className='message-cont'>
                        <p>
                            <span className='msg hi'>Hi...</span>
                            <span className='msg give'>Give me your name</span>
                        </p>
                    </div>
                </div>
                <form className='form' action="" onChange={e => e.preventDefault()}>
                    <input 
                        className='input'
                        type="text" 
                        onChange={e => setUserName(e.target.value)} 
                        value={userName} 
                        placeholder='Your name...'
                    />
                    <button className='btn-ball' onClick={getName}>
                        <img src={pokeball} alt="" />
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Login;