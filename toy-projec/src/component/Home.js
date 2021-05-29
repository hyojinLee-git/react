import React from 'react';


const Home = ({userName}) => {
    
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
            Hello {userName}
        </div>
    );
};

export default Home;