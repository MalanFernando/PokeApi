import React, { useState } from 'react';

const Login = () => {

    const [userName, setUserName] = useState("");
    console.log(userName);

    const submit = ()=>{

    }

    return (
        <div>
            <h1>Login</h1>
            <form className='form' action="" onChange={e => e.preventDefault()}>
                <input 
                    type="text" 
                    onChange={e => setUserName(e.target.value)} 
                    value={userName} 
                    placeholder='Insert your name'
                />
                <button onClick={submit}>Enviar</button>
            </form>
        </div>
    );
};

export default Login;