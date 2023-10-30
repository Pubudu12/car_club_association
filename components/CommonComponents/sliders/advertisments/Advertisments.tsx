import Image from "next/image";
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import styles from './advertisments.module.scss'
import Advertisement from '../../../../pages/api/advertisement'
import Link from "next/link";

const Advertisments = (props: any) => {
    // const { code } = props
    const [advertsiment, setAdvertisement] = useState<any>([])
    
    const myLoader = ({ src }:{src: any}) => {
        return `${src}`
        // return `${process.env.NEXT_PUBLIC_END_POINT}${src}`
    }
    useEffect(() => {
        get()
    }, [""])

    const get = async () => {
        const newAd = await Advertisement.get.all()
        setAdvertisement(newAd)
    }

    console.log('advertsiment ',advertsiment)

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplayspeed: 5000,
        autoplay: true,
        adaptiveHeight: false,
    };

    return (
        <div className="mb-10 mt-10">
            <div id="advertismentSliders">
                <Slider {...sliderSettings}>
                    {
                        advertsiment.length > 0 && advertsiment.map((singleAdvertisment:any) => 
                            <div key={advertsiment.id}>
                                {singleAdvertisment.attributes.advertisement_link != null ? 
                                    <Link href={singleAdvertisment.attributes.advertisement_link} target="_blank"> 
                                    <Image loader={myLoader} src={singleAdvertisment.attributes.image_desktop.data.attributes.url} priority={true} unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageLarge} w-full xl:h-[60vh]`} />
                                    <Image loader={myLoader} src={singleAdvertisment.attributes.image_tablet.data.attributes.url} priority={true} unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.tabImage} w-full xl:h-[70vh]`} />
                                    <Image loader={myLoader} src={singleAdvertisment.attributes.image_mobile.data.attributes.url} priority={true} unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageSmall} w-full xl:h-[100vh]`} />
                                </Link>
                                :
                                <>
                                    <Image loader={myLoader} src={singleAdvertisment.attributes.image_desktop.data.attributes.url} priority={true} unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageLarge} w-full xl:h-[60vh]`} />
                                    <Image loader={myLoader} src={singleAdvertisment.attributes.image_tablet.data.attributes.url} priority={true} unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.tabImage} w-full xl:h-[70vh]`} />
                                    <Image loader={myLoader} src={singleAdvertisment.attributes.image_mobile.data.attributes.url} priority={true} unoptimized={false} alt="Jaguar Car Club Of Victoria" width={0} height={0} layout={'responsive'} className={`${styles.imageSmall} w-full xl:h-[100vh]`} />
                                </>
                                }                                
                            </div>
                        )
                    }
                    
                </Slider>
            </div>
        </div>
    );
}

export default Advertisments
