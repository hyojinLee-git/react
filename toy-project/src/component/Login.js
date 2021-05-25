import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail]=useState('');
    const [pw, setPw]=useState('');

    const onEmailChange=(e)=>{
        setEmail(e.value)
    }
    const onPwChange=(e)=>{
        setPw(e.value)
    }
    const onSubmit=(e)=>{
        e.preventDefault(); //page refresh 방지

        let body={
            email:email,
            pw:pw
        }
        
    }
    return (
        <div style={{display:'flex',justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'}}>
            <form 
                style={{display:'flex', flexDirection:'column'}}
                onSubmit={onSubmit}
            >
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailChange}/>
                <label>pw</label>
                <input type="password" value={pw} onChange={onPwChange}/>
                <br/>
                <button type="submit">login</button>

            </form>
        </div>
    );
};

export default Login;