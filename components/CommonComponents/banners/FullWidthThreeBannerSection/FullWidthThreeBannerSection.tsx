import React, { useEffect, useState } from 'react';
import styles from './fullWidthThreeBanner.module.scss'
import Image from "next/image";
import RedirectButton from '../../callToActions/rediredtButton/RedirectButton';
import Home from '../../../../pages/api/home';
import moment from 'moment';
import PlaceHolder from '../../../../helper/placeholder';

function FullWidthThreeBannerSection() {
  const [data, setData] = useState<any>([])
  const myLoader = (props: any) => {
    const { src } = props
    return `${src}`
    // return `${process.env.NEXT_PUBLIC_END_POINT}${src}`
  }

  useEffect(() => {
    get()
  }, [""])

  const get = async () => {
    const newData = await Home.upComing.get.all()
    setData(newData)
  }
  return (
    <div id='fullWidthThreeBannerSection' className={`w-[100%]`}>
      <div className={`flex max-sm:flex-col md:flex-row`}>
        {data.length > 0 && data.map((d: any) => <div key={d.id} className={`${styles.image} ${styles.mobImageOverlay}`}>
          {d.attributes.image.data ? <Image priority={true} unoptimized={false} loader={myLoader} src={d.attributes.image.data.attributes.url} alt={d.attributes.name} width={0} height={0} layout={'responsive'} className={`${styles.image__img} w-full xl:h-[100vh]}`} /> : PlaceHolder.image.card("image", `${styles.image__img} w-full xl:h-[100vh]}`)}
          <div className={`uppercase ${styles.fixedTextOnImage} w-full px-3 py-3`}>
            <div className={`flex justify-between`}>
              <h2 className={`${styles.cardTitle}`}>{d.attributes.name}</h2>
              <div className={`z-[1] flex items-end pb-1 ${styles.customRedirect}`}>
                <RedirectButton
                  redirectButton="View Details"
                  directedlink="#"
                  target=''
                  TextType='white'
                />
              </div>
            </div>
          </div>
          <span className='displayOnMobile absolute text-white top-[5%] right-[5%]'>
            <div className={`${styles.image__title}`}>{`${moment(d.attributes.date).format('DD')}th ${moment(d.attributes.date).format('MMM')} ${moment(d.attributes.date).format('YYYY')}`}</div>
            <div className={`${styles.image__description}`}>
              {d.attributes.venue}
            </div>
          </span>
          <span className='displayOnDekstop'>
            <div className={`${styles.image__overlay} ${styles.image__overlay_primary} `}>
              <div className={`${styles.image__title}`}>{`${moment(d.attributes.date).format('DD')}th ${moment(d.attributes.date).format('MMM')} ${moment(d.attributes.date).format('YYYY')}`}</div>
              <div className={`${styles.image__description}`}>
                {d.attributes.venue}
              </div>
            </div>
          </span>

        </div>)}
      </div>
    </div>
  )
}

export default FullWidthThreeBannerSection