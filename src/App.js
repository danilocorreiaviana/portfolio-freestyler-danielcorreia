import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Sobre from './components/Sobre';
import NavBar from './components/Navbar';
import Galeria from './components/Galeria';
import Parcerias from './components/Parcerias';
import Contato from './components/Contato';
import Loader from './components/Loader';
import BotaoFixo from './components/BotaoFixo';
import BotaoFixoHome from './components/BotaoFixoHome';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <Home />
          <Sobre />
          <Galeria />
          <Parcerias />
          <Contato />
          <BotaoFixo/>
          <BotaoFixoHome/>
        </>
      )}
    </>
  );
}

export default App;
