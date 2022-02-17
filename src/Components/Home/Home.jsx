import React from 'react';
import "./Home.scss"

function Home() {
  return (
    <div className='Container'>
        <div className='Content'>
            <div className='Left'>
                <h1>Hi, I'm Eka</h1>
                <h4>Frontend developer</h4>
            </div>
            <div className='Right'>
                <div className='ImgContainer'>
                    <img src={require("../../Assets/Images/Home.png")} alt="Home"/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home