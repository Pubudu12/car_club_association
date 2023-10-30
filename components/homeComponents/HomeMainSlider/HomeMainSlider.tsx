import React from "react";
import styles from './HomeMainSlider.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import RedirectButton from "../../CommonComponents/callToActions/rediredtButton/RedirectButton";

// export const getStaticProps = async () => {
//     return{
//         props:{
//             HomeMainSlider:homeSliders
//         }
//     }
// }

const HomeMainSlider = () => {

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1800,
        autoplay: true,
        adaptiveHeight: false,  
      };


        return (
            <div id="homeMainSliders" className="bg-secondary">
                <Slider {...sliderSettings}>
                    <div>
                        {/* <img src="./images/homePage/mainSlider/one_desktop.webp" alt='sliderimage' className={`${styles.imageLarge} xl:h-[100vh] w-full`}/> */}
                        {/* <img src="./images/homePage/mainSlider/one_mob.webp" alt='sliderimage' className={`${styles.imageSmall} xl:h-[100vh] w-full`}/> */}
                        <Image src="/images/homePage/mainSlider/1.webp" priority={true}  unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageLarge} w-full xl:h-[100vh]`} />
                        <Image src="/images/homePage/mainSlider/1mob.webp" priority={true}  unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageSmall} w-full xl:h-[100vh]`} />
                    </div>
                    <div>
                        <Image src="/images/homePage/mainSlider/2.webp" priority={true}  unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageLarge} w-full xl:h-[100vh]`} />
                        <Image src="/images/homePage/mainSlider/2mob.webp" priority={true}  unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageSmall} w-full xl:h-[100vh]`} />                        
                    </div>
                    <div>
                        <Image src="/images/homePage/mainSlider/3.webp" priority={true}  unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageLarge} w-full xl:h-[100vh]`} />
                        <Image src="/images/homePage/mainSlider/3mob.webp" priority={true}  unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageSmall} w-full xl:h-[100vh]`} />                        
                    </div>                    
                    <div>
                        <Image src="/images/homePage/mainSlider/4.webp" priority={true}  unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageLarge} w-full xl:h-[100vh]`} />
                        <Image src="/images/homePage/mainSlider/4mob.webp" priority={true}  unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageSmall} w-full xl:h-[100vh]`} />                        
                    </div>
                    <div>
                        <Image src="/images/homePage/mainSlider/5.webp" priority={true}  unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageLarge} w-full xl:h-[100vh]`} />
                        <Image src="/images/homePage/mainSlider/5mob.webp" priority={true}  unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageSmall} w-full xl:h-[100vh]`} />                        
                    </div>
                    <div>
                        <Image src="/images/homePage/mainSlider/6.webp" priority={true}  unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageLarge} w-full xl:h-[100vh]`} />
                        <Image src="/images/homePage/mainSlider/6mob.webp" priority={true}  unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageSmall} w-full xl:h-[100vh]`} />                        
                    </div>
                </Slider>

                <div className={`max-sm:px-0 container mx-auto relative md:bottom-[5rem] lg:bottom-[8rem] xl:bottom-[10rem]`}>
                    <div className={`flex justify-start`}>
                        <div className={`${styles.sliderTextOuter} lg:w-[70%] xl:w-[60%] shadow-lg`}>
                            <h1 className={`uppercase max-sm:text-[20px] md:text-[28px] lg:text-[37px]`}>
                                <div className="font-normal">Welcome to the</div>
                                <div className={`font-bold`}>Jaguar Car Club of Victoria</div>
                            </h1>
                            <p className={`md:pt-4 lg:pt-8 max-sm:py-5 fontFeatureSetting`}>Passion burns the brightest when it&apos;s shared. Share your passion and love for your Jaguar with the finest Jaguar enthusiasts in the country.</p>

                            <div className={`max-sm:pt-2 max-sm:w-[100%] w-[80%] flex justify-between md:pt-5 lg:pt-8 redirectMobFont`}>
                                <div>
                                    <RedirectButton 
                                        redirectButton = "Club Calendar"
                                        directedlink = "/calendar"
                                        target = ""
                                        TextType=''
                                    />
                                </div>
                                
                                <div>
                                    <RedirectButton 
                                        redirectButton = "become a Member"
                                        // directedlink = "https://memberdesq.sportstg.com/index.cfm?fuseaction=registration_1&RegistrationMode=2&SubscriptionTypeID=278&OrgID=2037"
                                        directedlink = "/membership"
                                        target = ""
                                        TextType=''
                                    />
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
}

export default HomeMainSlider; 
