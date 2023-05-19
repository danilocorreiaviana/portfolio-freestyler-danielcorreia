import React, { useState, useEffect } from 'react';
import './BotaoFixo.css'; // Importe o arquivo de estilo CSS
import top from "../imgs/seta.png"

const BotaoFixo = () => {
  const [mostrarBotao, setMostrarBotao] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowButton = window.scrollY > 350;
      setMostrarBotao(shouldShowButton);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chamada inicial para verificar a posição de rolagem
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return mostrarBotao ? (
    <div className="botao-fixotop" onClick={handleButtonClick}>
      <img src={top} width={80} alt='botão topo'></img>
    </div>
    
  ) : null;
};

export default BotaoFixo;
