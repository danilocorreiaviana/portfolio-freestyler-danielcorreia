import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Galeria.css'
import Loading from './Loading';


const Galeria = () => {

  const [loading,setIsLoading] = useState(true)  

  const[visiblePhoto,setVisiblePhoto] = useState("visible")
  const[visibleEvent,setVisibleEvent] = useState("hidden")
  const[showPhoto,setShowPhoto] = useState("block")
  const[showEvent,setShowEvent] = useState("none")
  const[color1,setColor1] = useState("#58c")
  const[color2,setColor2] = useState("gray")

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 2500);
    
  }, [loading])

  const openEvent = () =>{
    setColor1("gray")
    setColor2("#58c")
    setIsLoading(true)
    setVisiblePhoto("hidden")
    setVisibleEvent("visible")
    setShowPhoto("none")
    setShowEvent("block")


  }

  const openPhoto = () =>{
    setColor1("#58c")
    setColor2("gray")
    setIsLoading(true)
    setVisiblePhoto("visible")
    setVisibleEvent("hidden")
    setShowPhoto("block")
    setShowEvent("none")


  }

  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
    speed:1000,
    initialSlide:0,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  };
 return(

  <div id="galeria" className='gallery'>
     <h2>Galeria</h2>

 <div>

 <div className='divButtons'>
   <p className='buttonGallery' style={{backgroundColor: color1}} onClick={openPhoto}>Fotos</p>
   <p className='buttonGallery' style={{backgroundColor: color2}} onClick={openEvent}>Eventos</p>

 </div>

 </div>
 {!loading?
 <div>
 <div style={{display: showPhoto ,visibility: visiblePhoto}} className="divSlider">
   <Slider {...settings} >
     <div >
     <img src='/images/DSC04251.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src='/images/DSC04137.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>
  
     <div>
     <img src= '/images/DSC03903.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src='/images/DSCF8027.JPG'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src='/images/DSCF8040.JPG'  className='sliderGallery' alt='' loading='lazy'/>
     </div>
  
     <div>
     <img src= '/images/DSCF8102.JPG'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src='/images/DSC02980.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src='/images/DSC02995.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>
  
     <div>
     <img src= '/images/DSC03047.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src='/images/DSCF8545.JPG'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src='/images/DSCF8547.JPG'  className='sliderGallery' alt='' loading='lazy'/>
     </div>
  
     <div>
     <img src= '/images/DSCF8549.JPG'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     
   </Slider>
</div>

<div style={{display: showEvent, visibility: visibleEvent}} className="divSlider">
   <Slider {...settings} >

     <div>
     <img src='/images/eventos/IMG_1883.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src='/images/eventos/IMG_2127.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>
  
     <div>
     <img src= '/images/eventos/IMG_2721.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src='/images/eventos/IMG_2737.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src='/images/eventos/IMG-20220522-WA0013.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>
  
     <div>
     <img src= '/images/eventos/IMG-20220522-WA0014.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src= '/images/eventos/IMG-20220522-WA0016.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src= '/images/eventos/IMG-20220522-WA0017.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src= '/images/eventos/IMG-20220522-WA0021.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src= '/images/eventos/20211023_150428.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src= '/images/eventos/20211023_163730.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src= '/images/eventos/20211023_164020.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src= '/images/eventos/Campo Alegre 2.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src= '/images/eventos/DSC05068.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src= '/images/eventos/DSC05091.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src= '/images/eventos/DSC05104.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src= '/images/eventos/DSC05122.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src= '/images/eventos/DSC05134.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src= '/images/eventos/DSC05155.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     <div>
     <img src= '/images/eventos/DSC05156.jpg'  className='sliderGallery' alt='' loading='lazy'/>
     </div>

     
   </Slider>
</div>
</div>
:<Loading/>}
</div>
 )
}

export default Galeria

