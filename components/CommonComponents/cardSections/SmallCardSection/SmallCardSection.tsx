import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import styles from './SmallCardSection.module.scss';
import moment from "moment";

const SmallCardSection = (props: any) => {
  const { event } = props

  return (
    <div className={`relative ${styles.eventLink} `}>
      <Link href={'/calendar'} className={``}>
        <div id='smallEventCard' className={`${styles.smallCardOuter}`}>
          <div className={`${styles.dateSection} flex flex-col`}>
            <span className={`${styles.month} text-center`}>{moment(event.attributes.date).format("MMM")}</span>
            <span className={`${styles.day}`}>{moment(event.attributes.date).format("DD")}</ span>
          </div>
          <div className={`${styles.eventName}`}>
            {event.attributes.title}
          </div>
        </div>
      </Link>
      <Image src={'/images/homePage/events.webp'} alt="" width={60} height={60} className={`absolute top-0 right-0 ${styles.onhoverimage}`} />
    </div>
  )
}

export default SmallCardSection