import React, { useState, useEffect } from 'react';
import './BotaoFixoHome.css'; // Importe o arquivo de estilo CSS
import down from "../imgs/abaixo.gif"

const BotaoFixoHome = () => {
  const [mostrarBotao, setMostrarBotao] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowButton = window.scrollY === 0;
      setMostrarBotao(shouldShowButton);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chamada inicial para verificar a posição de rolagem
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
    <div className="botao-fixo" onClick={handleButtonClick}>
      <img src={down} width={80} alt='botão topo'></img>
    </div>
    
  ) : null;
};

export default BotaoFixoHome;
