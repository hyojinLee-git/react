import React from 'react';

const Hello = ({name, color}) => {
    console.log(name);
    return (
        <div style={{color}}>
            hello {name}
        </div>
    );
};

Hello.defaultProps={
    name:'noname'
}

export default Hello;