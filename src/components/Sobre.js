import React from 'react'
import './Sobre.css'


const Sobre = () => {
 return(

    <section className='sobre' id='sobre'>
    <div className='container'>
      <h2>Sobre o atleta</h2>
      <p>
      Daniel Correia é um atleta de futebol freestyle com raízes no interior do Cariri cearense.
      Natural de Juazeiro do Norte - Ce, perseguiu o sonho de ser jogador de futebol profissional
      durante a adolescência, tendo destaque na categoria de base do Icasa e disputando competições de futsal. 
      Não tendo a oportunidades de se profissionalizar, se encontrou com a magia do futebol freestyle e transferiu
      os seus sonhos para uma modalidade que respira aquilo que ele mais admira em um jogo de bola: O FUTEBOL ARTE.
      </p>
      <img src='/images/DSCF8538.JPG' width={"80%"} alt="imageprofile"  loading='lazy'/>
      <p className='citation'>“ Eu sempre fui freestyler, só demorei a descobrir isso! ” (Daniel Correia)</p>
    </div>
  </section>
 )
}

export default Sobre

