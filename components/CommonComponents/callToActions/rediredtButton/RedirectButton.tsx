import React from 'react'
import Link from 'next/link'
import styles from './RedirectButton.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


const RedirectButton = (props:any) => {
  const { redirectButton , directedlink, target ,TextType } = props;

      return (
        <div className={`${styles.redirectOuter}`}>
            {/* <Link
                href={directedlink}
                className={`${styles.redirectbutton}`}>
                {redirectButton}
            </Link> */}
             {(() => {
                switch (TextType) {
                  case "white":
                    return(
                    <Link href={directedlink} target={target} className={`${styles.redirectLink} uppercase flex text-white`}>
                        {redirectButton}
                        <span className={`${styles.icon} pl-2 w-[17px] `}>
                          <FontAwesomeIcon className={``} icon={faAngleRight}/>
                        </span>
                    </Link>
                  )
                  break;
                  case "red":
                  return (
                      <Link href={directedlink} target={target} className={`${styles.redirectLink} uppercase flex text-red-700`}>
                        {redirectButton}
                        <span className={`${styles.icon} pl-2 w-[17px] `}>
                          <FontAwesomeIcon className={`content-center`} icon={faAngleRight}/>
                        </span>
                    </Link>
                  )
                  break;
                  default:
                    return (
                    <Link href={directedlink} target={target} className={`${styles.redirectLink} uppercase flex text-black`}>
                    {redirectButton}
                    <span className={`${styles.icon} pl-2 w-[17px]  `}>
                      <FontAwesomeIcon className={`content-center`} icon={faAngleRight}/>
                    </span>
                  </Link> )
                  break;
                  }
              })()}
        </div>
      )

}
export default RedirectButton