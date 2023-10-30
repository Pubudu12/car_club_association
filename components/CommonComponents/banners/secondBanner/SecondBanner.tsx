import React from 'react'
import styles from './SecondBanner.module.scss'
import Image from "next/image";

const SecondBanner = ({oldbanner, oldbannerMobile} : {oldbanner : string; oldbannerMobile : string;}) => {


    return (

        <div id="SecondBannerSection " className='pt-[4rem] '> 
             <Image src={oldbanner} width={0} height={0} layout={'responsive'} priority={true}  unoptimized={false} alt="second banner" className={`${styles.secondbanner}`} />
             <Image src={oldbannerMobile} width={0} height={0} layout={'responsive'} priority={true}  unoptimized={false} alt="second mobile banner" className={`${styles.secondbannerMobile}`} />
        </div>
      )
    }
    
    export default SecondBanner