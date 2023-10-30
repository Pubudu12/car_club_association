import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './LeftOffsetSlider.module.scss';

const LeftOffsetSlider = (props: any) => {
    const { children } = props

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: false,
        autoPlay: true,
        autoPlaySpeed: 2000,
        slidesToScroll: 2,
        slidesToShow: 4, //3.850  -  sort of approximation to pull slides back to match the container above, may require adjustment for diferent breakpoints.
        accessibility: true,
        // centerMode:true,
        // centerPadding:"90px", 
        variableWidth: false,
        initialSlide: 0, // start on second slide
        focusOnSelect: false,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            }
          ]
    };

    return (
        <div id='LeftOffsetSlider'>
            <Slider {...sliderSettings} className={`${styles.outerSlider} pt-5 container mx-auto`}>
                {children}
            </Slider>
        </div>
    )
}

export default LeftOffsetSlider