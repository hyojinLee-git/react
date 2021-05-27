import React, { useState } from 'react';

const Counter = () => {

    const [num, setNum]=useState(0);
    const onIncrease=()=>{
        setNum(num+1)
    }
    const onDecrease=()=>{
        setNum(prevNum=>prevNum+1)
    }

    return (
        <div>
            <h1>{num}</h1>
            {/* 함수뒤에 괄호넣으면 호출하는 것임: 윈도우가 렌더링 될 때 호출됨 */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter;