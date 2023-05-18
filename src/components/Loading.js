import React from 'react'
import ReactLoading from 'react-loading';
import './Loading.css'

const Loading = () => {
    return (
           
        <center><ReactLoading type={"spinningBubbles"} color={"#fff"} height={50} width={50} className="loadComp" /></center>
    )
}

export default Loading