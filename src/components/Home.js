import React,{useRef} from 'react'
import './Home.css'


const Home = () => {

const openVideo = ()=>{
    window.open("https://www.youtube.com/watch?v=ctW6ZtT2CoY")
}
const videoRef = useRef(null);
const handleContextMenu = (e) => {
  e.preventDefault();
};

const handleTouchStart = () => {
  if (videoRef.current) {
    videoRef.current.controls = false;
  }
};

const handleTouchEnd = () => {
  if (videoRef.current) {
    videoRef.current.controls = true;
  }
};
 return(

    <div className="home">
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      controls
      playsInline
      onContextMenu={handleContextMenu}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      preload="none" 
      poster="/videos/loading-icon.gif"
      className="background-video"
      src="/videos/DANIEL FREESTYLE.mp4"
    />
    <div className="text-container">
      <h1 className="text-name">Daniel Correia</h1>
      <h2 className="presentation">Atleta de futebol freestyle</h2>
      <div className="buttonVideo" onClick={openVideo}>
        <p className="text">Clique e assista</p>
        <i className="icon"></i>
      </div>

{/*       <div  className='buttonHomeVideo' onClick={openVideo}>    
        <p>Clique e assista</p>
        <img src='https://cdn-icons-png.flaticon.com/512/7477/7477009.png' className='logoButton' alt='Play video'></img>
    </div> */}
    </div>



    </div>

 )
}

export default Home

