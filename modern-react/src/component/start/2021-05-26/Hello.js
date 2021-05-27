import React from 'react';

const Hello = ({name, color, isSpecial}) => {
    return (
        <div style={{color}}>
            {/* 삼항연산자: 보여줄 값이 아예 다를때 */}
            { isSpecial && <b>*</b>}    {/* 숨기고 보여주기 */}
            hello {name}
        </div>
    );
};

Hello.defaultProps={
    name:'noname'
}

export default Hello;