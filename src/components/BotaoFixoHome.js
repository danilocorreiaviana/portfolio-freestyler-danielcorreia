import React, { useState, useEffect } from 'react';
import './BotaoFixoHome.css'; // Importe o arquivo de estilo CSS
/* import down from "../imgs/simple-arrow-animation.gif" */

const BotaoFixoHome = () => {
  const [mostrarBotao, setMostrarBotao] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowButton = window.scrollY <= 350;
      setMostrarBotao(shouldShowButton);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    const section = document.getElementById('sobre');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return mostrarBotao ? (
/*     <div className="botao-fixo" onClick={handleButtonClick}>
      <img src={down} width={80} alt='botão topo'></img>
    </div> */
    <button className="animated-arrow" onClick={handleButtonClick}>
      <div className="arrow-container">
        <div className="arrow-icon"></div>
        <div className="arrow-icon"></div>
        <div className="arrow-icon"></div>
      </div>
    </button>
    
  ) : null;
};

export default BotaoFixoHome;
