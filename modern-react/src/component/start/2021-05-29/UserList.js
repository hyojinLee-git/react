import React, { useRef, useState } from 'react';
import User from './User';
import userlist from './sample'
import CreateUser from '../2021-05-28/CreateUser';

const UserList = () => {
    const [input, setInput]=useState({
        username:'',
        addr:''
    });

    const [users, setUsers]=useState(userlist);
    const nextId=useRef(3);
    
    //input change
    const onChange=(e)=>{
        const {name, value}=e.target;
        setInput({
            ...input,
            [name]:value
        })
    }

    // create data
    const onCreate=(e)=>{
        e.preventDefault();
        nextId.current+=1;
        input.id=nextId.current;
        setUsers(
           [ ...users,input ]
        )
        setInput({
            username:'',
            addr:''
        });
    }

    //data remove
    const onRemove=(id)=>{
        setUsers(users.filter(user=>user.id!==id))
    }

    // color Change
    const onToggle=(id)=>{
        setUsers(users.map(
            user=>user.id===id? {...user,active: !user.active} : user
        ))
    }

    return (
        <div>
            <CreateUser input={input} onChange={onChange} onCreate={onCreate}/>
            {
                users.map(
                    user=><User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle}/>
                )
            }
        </div>
    );
};

export default UserList;