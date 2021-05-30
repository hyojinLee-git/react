import React, { useEffect } from 'react';

const User = ({user, onRemove, onToggle}) => {
    const {username, addr, id, active}=user
    useEffect(()=>{
        console.log('component appear')
    },[])
    
    return (
        <div>
            이름: <strong style={{
                color:active? 'green':'blue',
                cursor:"pointer"
            }} onClick={()=>onToggle(id)}
            >{username}</strong>/ 주소: {addr}
            <button onClick={()=>onRemove(id)}>삭제</button>      
              {/* 함수로 묶어주지 않으면 렌더링되면서 함수가 호출됨 */}
        </div>
    );
};

export default User;