import React, {useEffect,useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../logos/TopperLogo.png'
import logo2 from '../logos/BiofitLogo.png'
import logo3 from '../logos/TropicalLanches.jpg'
import logo4 from '../logos/LGStore.jpg'
import logo5 from '../logos/RoyalBets.jpg'
import './Parcerias.css'
import Loading from './Loading';


const Parcerias = () => {
  const [loading,setIsLoading] = useState(true)  

  useEffect(()=>{
      setTimeout(() => {
        setIsLoading(false)
      }, 2500);
      
    }, [loading])

    const partner1 = ()=>{
      window.open("https://www.topper.com.br")
    }

    const partner2 = ()=>{
      window.open("https://www.instagram.com/biofitacademiajua/")
    }

    const partner3 = ()=>{
      window.open("https://www.instagram.com/tropicalpizzaselanches/")
    }

    const partner4 = ()=>{
      window.open("https://www.instagram.com/lgstore_ce/")
    }

    const partner5 = ()=>{
      window.open("https://royalbets.vip/ptb/bet/main")
    }

    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
        speed:1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
    
    
      return (
        <div id="parcerias" className="sponsors">
          <h2>Parcerias</h2>
          {!loading?
          <div>
              <Slider {...settings} className='divSliderSponsor'>
                <div>
                <img src={logo1} className='sliderSponsors' alt='' onClick={partner1} loading='lazy'/>
                <p style={{color:"#fff", marginTop:"10px", textAlign:"center"}}>Atual</p>
                </div>

                <div style={{backgroundColor:"green"}}>
                <img src={logo2} className='sliderSponsors' alt='' onClick={partner2} loading='lazy'/>
                <p style={{color:"#fff", marginTop:"10px", textAlign:"center"}}>Atual</p>
                </div>
                 
                <div>
                <img src={logo3} className='sliderSponsors2' alt='' onClick={partner3} loading='lazy'/>
                </div>

                <div>
                <img src={logo4} className='sliderSponsors2' alt='' onClick={partner4} loading='lazy'/>
                </div>

                <div>
                <img src={logo5} className='sliderSponsors2' alt='' onClick={partner5} loading='lazy'/>
                </div>
              </Slider>
              
          </div>:<Loading/>}
        </div>
      );

}

export default Parcerias