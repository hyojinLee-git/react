import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Login = ({name}) => {

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

    //이메일, 패스워드 확인
    const confirm=(data)=>{
        const user=data.find(item=>{
            if(item.email===email && item.password===password){
                return true
            }
        });
        return user.name
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
            pw:password,
        }
        
        //데이터 보내기
        axios.get('http://localhost:4000/users',body)
        .then(res=>{
            //console.log(res.data)
            name=confirm(res.data)
            console.log(name)
            history.replace('/main')
        })
        .catch((e)=>{
            alert('아이디 또는 비밀번호가 틀립니다.')
        })
        
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