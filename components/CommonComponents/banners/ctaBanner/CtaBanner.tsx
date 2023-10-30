import React from 'react'
import styles from './CtaBanner.module.scss'
import RedirectButton from '../../callToActions/rediredtButton/RedirectButton';


const CtaBanner = (props:any) => {
  const {imageClass} = props;
  
  return (
        <div id='rightAlignedBanner' className={`${styles[imageClass]} flex`}>
          <div className={`lg:container flex md:justify-end sm:justify-center items-center mx-auto md:pt-[0rem] py-[2rem]`}>
              <div className={`grid grid-cols-5 max-sm:grid-cols-2`}>
                  <div className={`col-span-4 max-sm:text-center`}>
                    <h1 className={`${styles.bannerText} uppercase  pb-5`}>Become a <br/>member of our<br /><span className={`font-bold`}> community </span></h1>
                    <div className='centerRedirectButton max-sm:pt-2 md:pt-3'>
                      <RedirectButton
                          redirectButton = " apply now"
                          directedlink= "https://memberdesq.sportstg.com/index.cfm?fuseaction=registration_1&RegistrationMode=2&SubscriptionTypeID=278&OrgID=2037" 
                          target = "_blank"
                          TextType=''
                        />
                    </div>
                  </div>
              </div>
          </div>
        </div>
    
  )
}

export default CtaBanner