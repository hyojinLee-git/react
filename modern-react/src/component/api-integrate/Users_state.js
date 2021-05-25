import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers]=useState(null);
    const [loading, setLoading]=useState(false);
    const [error, setError]=useState(null);

    const fetchUsers=async()=>{
        try{
            setUsers(null);
            setError(null);
            setLoading(true);
            const response=await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        }catch(e){
            console.log(e.response.status)  //에러 코드 조회
            setError(e);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchUsers();
    },[]);
    
    //상태에 따른 로딩 화면
    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러 발생</div>
    if(!users) return null;

    //데이터 조회 성공
    return (
        <>
            <ul>
                {
                    users.map(user=>
                        <li key={user.id}>
                            {user.username}/{user.name}
                        </li>
                    )
                }
            </ul>
            <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    );
};

export default Users;