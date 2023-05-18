import React from 'react'
import './Home.css'


const Home = () => {

const openVideo = ()=>{
    window.open("https://www.youtube.com/watch?v=ctW6ZtT2CoY")
}
 return(

    <div className="home">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="none" 
      poster="/videos/loading-icon.gif"
      className="background-video"
      src="/videos/DANIEL FREESTYLE.mp4"
    />
    <div className="text-container">
      <h1 className="text-name">Daniel Correia</h1>
      <h2 className="presentation">Atleta de futebol freestyle</h2>
      <div  className='buttonHomeVideo' onClick={openVideo}>    
        <p>Clique e assista</p>
        <img src='https://cdn-icons-png.flaticon.com/512/7477/7477009.png' alt='Play video'></img>
    </div>
    </div>



    </div>

 )
}

export default Home

