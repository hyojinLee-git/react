import React, { useRef, useState } from 'react';

const InputSampleCopy = () => {
    const [input,setInput]=useState({
        name:'',
        nickname:''
    });
    const nameInput=useRef();   //돔 선택할 때 사용 ex. scroll event, focusing, ...

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
        nameInput.current.focus();
    }
    return (
        <div>
            <input type="text" name="name" onChange={onChange} placeholder="name" value={name} ref={nameInput}/>
            <input type="text" name="nickname" onChange={onChange} placeholder="nickname" value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <p>
                값: {name}({nickname})
            </p>
        </div>
    );
};

export default InputSampleCopy;