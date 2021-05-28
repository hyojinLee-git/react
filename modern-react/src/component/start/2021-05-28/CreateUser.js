import React from 'react';

const CreateUser = ({input, onChange, onCreate}) => {
    const {username, addr}=input
    return (
        <form onSubmit={onCreate}>
            <label>이름</label>
            <input type="text" name="username" value={username} onChange={onChange}/>
            <label>주소</label>
            <input type="text" name="addr" value={addr} onChange={onChange}/>
            <button type="submit">등록</button>
        </form>
    );
};

export default CreateUser;