import React from 'react'
import styles from './ImageSlider.module.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ImageSlider =(props: any) => {
  const { jsonImagesName } = props

  const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        loop:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        arrows: false,
        variableWidth: true,
        adaptiveHeight: true,
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              pauseOnFocus: false,
              pauseOnHover: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }]
  };

  return ( 
  
      <div className=' '>
 
            
            <Slider {...settings}>
                
                {jsonImagesName.slidepictures.map((singleImg: any, i:null) => {
                     return (
                            <div id="imageSlider" key={i}>
                                <Image className={`${styles.desktopSlider}`} src={singleImg.sliderImage}  priority={true}  unoptimized={false} width={0} height={0} layout={'responsive'}  alt='sliderimage'/>
                            </div>

                        );
                    })}
                </Slider>
            </div>
    );
  }

export default ImageSlider