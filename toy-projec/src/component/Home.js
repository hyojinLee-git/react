import React from 'react';


const Home = ({userName, isLogin}) => {
    
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
            Hello {isLogin? userName:''}
        </div>
    );
};

export default Home;