import React from 'react'
import styles from './HeroBanner.module.scss'
import Image from "next/image";

const HeroBanner = ({ heroImage,darkHeading,lightHeading,heroImageMobile,darkHeadingOne} : {heroImage : string; darkHeading : any; lightHeading : string; heroImageMobile:any; darkHeadingOne:any}) => {

  return (
    <div id="HeroBannerSection" className='pt-14'>
        <div className='relative'>
            <Image src={heroImage} width={0} height={0} layout={'responsive'} priority={true}  unoptimized={false} className={`${styles.herobanner} `}  alt="hero-banner"/>
            <Image src={heroImageMobile}  width={0} height={0} layout={'responsive'} priority={true}  unoptimized={false} className={`${styles.herobannerMobile}`} alt="hero-banner"/>

            <div className='flex justify-center relative 2xl:top-[-4rem] top-[-3rem]'>
                <div className= {`${styles.maincard} md:max-w-3xl sm:w-2/4` } >
                    <div className={`${styles.card}`}>
                        <h2 className='text-center'><b>{darkHeadingOne}</b> {lightHeading} <b>{darkHeading}</b> </h2> 
                    </div>
                </div>
            </div>        
        </div>
      </div>
    )
}

export default HeroBanner