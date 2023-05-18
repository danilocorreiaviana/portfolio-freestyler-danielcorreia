import React from 'react'
import './Contato.css'

const Contato = () => {

    const face = () =>{
        window.open("https://www.facebook.com/daniel.correia.9237")
    }

    const yt = ()=>{
        window.open("https://www.youtube.com/@danielcorreia4330/featured")
    }

    const insta = ()=>{
        window.open("https://www.instagram.com/danielcorreia43/")
    }

    const tk = ()=>{
        window.open("https://www.tiktok.com/@daniel.correia43")
    }

    return (
        <div id="contato" className='contact'>
            <h2>Redes sociais</h2>
            <div className='containerContact'>
            <div>
                <img src='https://cdn-icons-png.flaticon.com/512/4494/4494475.png' alt='' onClick={face} loading='lazy'></img>
            </div>
            <div>
                <img src='https://cdn-icons-png.flaticon.com/512/226/226236.png' alt='' onClick={yt} loading='lazy'></img>
            </div>
            <div>
                <img src='https://cdn-icons-png.flaticon.com/512/1384/1384063.png' alt=''  onClick={insta} loading='lazy'></img>
            </div>
            <div>
                <img src='https://cdn-icons-png.flaticon.com/512/3046/3046126.png' alt=''  onClick={tk} loading='lazy'></img>
            </div>
            </div>

            <div className="footer">
                    <p className='copyright'>
                        ©2023
                    </p>
                    <a className="contatodev" href="https://www.linkedin.com/in/danilo-correia-viana-3118a921a/" target="_blank" rel="noreferrer">
                    <img
                    src= "https://cdn-icons-png.flaticon.com/512/3955/3955051.png"
                    className="logocontatodev"
                    alt="linkedin dev"
                    title="Linkedin"
                    />
            <p>Desenvolvido por @Danilo Correia</p>
            </a>
            </div>
        </div>
    )
}

export default Contato