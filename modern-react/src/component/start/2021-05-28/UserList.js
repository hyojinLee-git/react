import React, { useReducer, useRef, useState } from 'react';
import User from './User';
import userlist from './sample';
import CreateUser from './CreateUser';

const UserList = () => {
    const [input, setInput]=useState({
        username:'',
        addr:''
    });
    const {username, addr}=input

    const [users, setUsers]=useState(userlist);
    //const [current, setCurrent]=useRef();
    
    const onChange=(e)=>{
        const {name, value}=e.target;
        setInput({
            ...input,
            [name]:value
        })
    }
    const onCreate=()=>{
        setInput({
            username:'',
            addr:''
        });
        
    }
    return (
        <div>
            <CreateUser input={input} onChange={onChange} onCreate={onCreate}/>
            {
                users.map(
                    user=><User key={user.id} user={user}/>
                )
            }
        </div>
    );
};

export default UserList;