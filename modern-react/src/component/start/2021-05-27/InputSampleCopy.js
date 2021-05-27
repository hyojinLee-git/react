import React, { useState } from 'react';

const InputSampleCopy = () => {
    const [input,setInput]=useState({
        name:'',
        nickname:''
    })
    const {name, nickname}=input
    const onChange=(e)=>{
        const {name, value}=e.target
        setInput({
            ...input,
            [name]:value
        })
    }
    const onReset=()=>{
        setInput({
            name:'',
            nickname:''
        })
    }
    return (
        <div>
            <input type="text" name="name" onChange={onChange} placeholder="name" value={name}/>
            <input type="text" name="nickname" onChange={onChange} placeholder="nickname" value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <p>
                값: {name}({nickname})
            </p>
        </div>
    );
};

export default InputSampleCopy;