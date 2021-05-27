import React, { useState } from 'react';

const InputSample = () => {
    const [text, setText]=useState('');
    const onChange=(e)=>{
        setText(e.target.value);
    }
    const onReset=()=>{
        setText('');
    }
    return (
        <div>
            <input type="text" value={text} onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <p>
                값: {text}
            </p>
        </div>
    );
};

export default InputSample;