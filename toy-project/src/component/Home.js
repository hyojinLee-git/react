import React from 'react';


const Home = ({name}) => {
    
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
            Hello {name}
        </div>
    );
};

export default Home;