import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import styles from './FindUsHereBtn.module.scss'

const FindUsHereBtn = ({findUsText , findus, btnLogo } : {findUsText:string; findus:string; btnLogo:string;}) => {
  return (
    <div  id="findUsButton" className='container'>
        <div className='  flex item-center md:justify-start justify-center mx-auto md:px-0 sm:px-4 '>
            <div>
              < Image src={btnLogo} alt="" width={17} height={20}/>
            </div>
            <Link 
                href={findus}
                className={`${styles.findustext} pl-[1rem]`}
                target="_black">                
                {findUsText} 
            </Link>
        </div>
    </div>
  )
}

export default FindUsHereBtn
