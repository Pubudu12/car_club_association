import Image from "next/image";
import Link from "next/link";
import React from 'react'
import PlaceHolder from "../../../../helper/placeholder";
import RedirectButton from '../../callToActions/rediredtButton/RedirectButton'
import styles from "../../cardSections/ImageLongCard/LongcardDis.module.scss"

const Longcard = ({
                      image,
                      title,
                      redirectLink,
                      description,
                      date
                  }: { image: string; title: string; redirectLink: string; description: any; date: any }) => {
    const myLoader = ({src}: { src: any }) => {
        return `${src}`
    }

    return (
        <div id="ImageLongCard" className={`${styles.longCards} grid grid-cols-2  bg-red-900 hover:cursor-pointer`}>
           
            <div className={`${styles.imageOuter} `}>
                <Link href={redirectLink}>
                {
                    image ? <Image loader={myLoader} src={`${image}`} className={`${styles.cardImage}`} priority={true} unoptimized={false} width={0} height={0}
                    layout={`responsive`} alt={title}/>
                    :
                    PlaceHolder.image.card("image", ``, 'catalog')
                } 
                    </Link>   
            </div>            

            <div className="max-w-sm w-full lg:max-w-full relative p-2">

                <span className={`${styles.Title} pt-6 pb-6`}>{title}</span>
                <p className={`${styles.Descr} pt-4 pb-4`}>{description}</p>
                <span className={`${styles.dateDis} pt-4 pb-4`}>{date}</span>

                <div className='py-4 absolute bottom-0'>
                    <RedirectButton
                        redirectButton="View More"
                        directedlink={redirectLink}
                        target=""
                        TextType=''
                    />
                </div>
            </div>
        </div>
    )

}

export default Longcard;