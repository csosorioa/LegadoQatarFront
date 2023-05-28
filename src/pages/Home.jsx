import React from 'react';
import Video from '../components/Video';
import Qatar from '../components/Qatar';
import '../assets/images/est1.jpeg';
import '../assets/images/est2.jpeg';
import '../assets/css/home.css';

function Home() {
    return(
        <div className='home-div'>
            <Video />
            <Qatar />
            <img style={{ width: 700, height: 600, display: 'block', margin: "20px auto"}} className='stats' src={require("../assets/images/est1.jpeg")} alt=''/>
            <img style={{ width: 700, height: 600, display: 'block', margin: "20px auto"}} className='stats' src={require("../assets/images/est2.jpeg")} alt=''/>
        </div>
    );
}

export default Home;