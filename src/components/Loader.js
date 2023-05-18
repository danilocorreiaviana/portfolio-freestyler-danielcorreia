import React from 'react'
import animationData from './17378-soccer-loading.json';
import Lottie from 'react-lottie';
import './Loader.css'

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
     <div className='load'>
        <Lottie
            options={defaultOptions}
            width={200}
            height={200}
            isClickToPauseDisabled
        />
            {/* <ReactLoading type={"spokes"} color={"blue"} height={50} width={50} /> */}
        </div>

    )
}

export default Loader