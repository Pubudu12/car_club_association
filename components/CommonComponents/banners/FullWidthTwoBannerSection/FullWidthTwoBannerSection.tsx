import Image from "next/image";
import React from 'react';
import RedirectButton from '../../callToActions/rediredtButton/RedirectButton';
import styles from './FullWidthTwoBannerSection.module.scss'

function FullWidthTwoBannerSection() {

    let currectYear =  new Date().getFullYear();

  return (
    <div id='fullWidthTwoBannerSection' className={`w-[100%]`}>
        <div className={`flex max-sm:flex-col md:flex-row`}>
            <div className={`${styles.image} ${styles.mobImageOverlay}`}>
                <Image priority={true}  unoptimized={false} src="/images/homePage/twoBannerSection/concours.webp" alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.image__img} w-full xl:h-[100vh]}`} />
                <div className={`${styles.fixedTextOnImage} w-full px-3 py-3`}>
                    <h2 className={`${styles.cardTitle} uppercase max-sm:text-white md:pl-2`}><span className={`font-bold`}>Concours</span> </h2>
                    <div className={`${styles.cutom_mobile_center} fontFeatureSetting text-[15px] font-Inter-Regular max-sm:text-white md:pl-2 md:pb-2`}>Your Jaguar will be judged at the Councours <br /> d&apos;Elegance to establish its authencity.</div>

                    <div className="displayOnMobile ">
                        <div className={`flex flex-col items-center ${styles.mobLinkText}`}>
                            <div className='py-1'>
                                <RedirectButton 
                                    redirectButton = "Apply Now"
                                    directedlink = "/concours"
                                    target=''
                                    
                                    TextType='white'
                                />
                            </div>
                            
                            <div className='py-1'>
                                <RedirectButton 
                                    redirectButton = "View Rules"
                                    directedlink = "/concours/rules"
                                    target=''
                                    TextType='white'
                                />
                            </div>
                            
                            <div className='py-1 '>
                                <RedirectButton 
                                    redirectButton = "Past Results"
                                    directedlink = "/concours/perpetual"
                                    target=''
                                    TextType='white'
                                />
                            </div>
                        </div>                        
                    </div> 
                </div>
                <div className='displayOnDekstop'>
                    <div className={`${styles.image__overlay} ${styles.image__overlay_primary} flex content-center justify-center`}>
                        <div className='py-3'>
                            <RedirectButton 
                                redirectButton = "Apply Now"
                                directedlink = "/concours"
                                target = ""
                                TextType = "white"
                            />
                        </div>
                        <div className='py-3'>
                            <RedirectButton 
                                redirectButton = "View Rules"
                                directedlink = "/concours/rules"
                                target=''
                                TextType='white'
                            />
                        </div>
                        <div className='py-3'>
                            <RedirectButton 
                                redirectButton = "Past Results"
                                directedlink = "/concours/perpetual"
                                target=''
                                TextType='white'
                            />
                        </div>
                    </div>
                </div> 
                            
            </div>
            <div className={`${styles.image} ${styles.mobImageOverlay}`}>
                <Image src="/images/homePage/twoBannerSection/winton_track_day.webp" priority={true}  unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.image__img} w-full xl:h-[100vh]}`} />
                <div className={`${styles.fixedTextOnImage} w-full px-3 my-2`}>
                    <h2 className={`${styles.cardTitle} uppercase max-sm:text-white md:pl-2 md:text-left text-center`}><span className={`font-bold`}>Winton</span> Track day </h2>
                    <div className={`${styles.cutom_mobile_center} fontFeatureSetting text-[15px] font-Inter-Regular max-sm:text-white md:pl-2 md:pb-2`}>A friendly racing event at Winton Raceway for <br /> you to compete in.</div>

                    <div className="displayOnMobile ">
                        <div className={`flex flex-col items-center ${styles.mobLinkText}`}>
                            <div className={`py-0.5`}>
                                <RedirectButton 
                                    redirectButton = "Apply Now"
                                    directedlink = "/concours"
                                    target=''
                                    TextType='white'
                                />
                            </div>
                            
                            <div className='py-0.5'>
                                <RedirectButton 
                                    redirectButton = "View Rules"
                                    directedlink = "/concours/rules"
                                    target=''
                                    TextType='white'
                                />
                            </div>
                            
                            <div className='py-0.5'>
                                <RedirectButton 
                                    redirectButton = "Past Results"
                                    directedlink = "/concours/perpetual"
                                    target=''
                                    TextType='white'
                                />
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className='displayOnDekstop'>
                    <div className={`${styles.image__overlay} ${styles.image__overlay_primary} flex content-center justify-center`}>
                        <div className={`py-3 redirectHover`}>
                            <RedirectButton 
                                redirectButton = "Apply Now"
                                directedlink = "/concours"
                                target=''
                                TextType='white'
                            />
                        </div>
                        
                        <div className='py-3'>
                            <RedirectButton 
                                redirectButton = "View Rules"
                                directedlink = "/concours/rules"
                                target=''
                                TextType='white'
                            />
                        </div>
                        
                        <div className='py-3'>
                            <RedirectButton 
                                redirectButton = "Past Results"
                                directedlink = "/concours/perpetual"
                                target=''
                                TextType='white'
                            />
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default FullWidthTwoBannerSection