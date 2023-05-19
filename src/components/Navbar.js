import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../imgs/logo.png';
import './Navbar.css';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuClick = () => {
    setIsMobile(!isMobile);
  };

  useEffect(()=>{
    console.log(isMobile)
    console.log(window.scrollY)
    console.log(window.innerWidth)
  },[isMobile])



  const [colorChange, setColorchange] = useState(false);



useEffect(()=>{

  if(isMobile===true){
      setColorchange(true)
  }else{
          if(isMobile===false && window.scrollY>=10){
              setColorchange(true)
          }else{
              setColorchange(false)
          }

      
      
  } 

}, [isMobile])

const changeNavbarColor = () =>{
 if(window.scrollY>=10){
   setColorchange(true);
 }
 else{
   if(isMobile===true && window.scrollY>=0 && window.innerWidth<940){
      setColorchange(true)
   }else{
      setColorchange(false)

     
      
   }
   if(isMobile===true && window.innerWidth>940){
    setColorchange(false)
  }
   
   
 }
};
window.addEventListener('scroll', changeNavbarColor);



  return (
    <nav className={colorChange ? 'navbar colorChange' : 'navbar'} >
      <div className="navbar-container">
        <Link to="home" spy={true} smooth={true} duration={500}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className={`navbar-links ${isMobile ? 'mobile' : ''}`}>
          <Link to="home" spy={true} smooth={true} onClick={isMobile===true? handleMenuClick: null}  duration={500}>Home</Link>
          <Link to="sobre" spy={true} smooth={true} onClick={isMobile===true? handleMenuClick: null} duration={500}>Sobre</Link>
          <Link to="galeria" spy={true} smooth={true} onClick={isMobile===true? handleMenuClick: null} duration={500}>Galeria</Link>
          <Link to="parcerias" spy={true} smooth={true} onClick={isMobile===true? handleMenuClick: null} duration={500}>Parcerias</Link>
          <Link to="contato" spy={true} smooth={true} onClick={isMobile===true? handleMenuClick: null} duration={500}>Contato</Link>
        </div>

          <div className='menu-icon' onClick={handleMenuClick}>
                {isMobile ? (<FaTimes size={30} className='buttonMenu' />) : (<FaBars size={30} className='buttonMenu' />)}
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
