import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Login = ({onLogin}) => {

    //url 이동
    const history=useHistory();
    
    //login창 email, password 값 업데이트
    const [login, setLogin]=useState({
        email:'',
        password:'',
    });
    const {email, password}=login;
    const changeInput=(event)=>{
        const {value, name}=event.target;
        setLogin({
            ...login,
            [name]:value,
        });
    }

    //login 버튼 클릭
    const onSubmit=(event)=>{
        event.preventDefault(); //page reload 방지

        if (!email||!password){
            alert('이메일 또는 비밀번호를 입력해주세요');
            return 
        }

        let body={
            email:email,
            password:password,
        }
        
        //데이터 보내기
        axios.post(
            '/user_inform/onLogin',null,{
                params:body
            }
        ).then(res=>{
            onLogin(res.data);
            //sessionStorage.setItem('user_email',email)
            sessionStorage.setItem('user_name',res.data);
            history.push('/')
        })
        .catch(e=>console.log(e))
        
    }

    return (
        <div style={{display:'flex',justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'}}>
            <form 
                style={{display:'flex', flexDirection:'column'}}
                onSubmit={onSubmit}
            >
                <label>Email</label>
                <input type="email" value={email} name="email" onChange={changeInput}/>
                <label>pw</label>
                <input type="password" value={password} name="password" onChange={changeInput}/>
                <br/>
                <button type="submit">login</button>

            </form>
        </div>
    );
};

export default Login;