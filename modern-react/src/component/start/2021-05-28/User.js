import React from 'react';

const User = ({user, onRemove}) => {
    const {username, addr, id}=user
    return (
        <div>
            이름: {username}/ 주소: {addr}    
            <button onClick={()=>onRemove(id)}>삭제</button>      
              {/* 함수로 묶어주지 않으면 렌더링되면서 함수가 호출됨 */}
        </div>
    );
};

export default User;