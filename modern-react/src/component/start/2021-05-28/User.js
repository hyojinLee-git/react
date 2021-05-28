import React from 'react';

const User = ({user}) => {
    const {username, addr}=user
    return (
        <div>
            이름: {username}/ 주소: {addr}            
        </div>
    );
};

export default User;