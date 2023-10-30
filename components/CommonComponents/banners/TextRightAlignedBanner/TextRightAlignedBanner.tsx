import React from 'react';
import RedirectButton from '../../callToActions/rediredtButton/RedirectButton';
import styles from './TextRightAlignedBanner.module.scss';

function TextRightAlignedBanner() {
  return (
    <div id='rightAlignedBanner' className={`${styles.bannerOuter} flex`}>
        <div className={`container flex justify-end items-center max-sm:px-3 mx-auto`}>
            <div className={`grid grid-cols-2 max-sm:grid-cols-1`}>
                <div className="col-span-1 max-sm:hidden"></div>
                <div className={`max-sm:text-center`}>
                  <h1 className={`uppercase text-white pb-5`}>Find what you&apos;re looking <br />for <br /><span className={`font-bold`}> you and your jaguar </span></h1>
                  <div className={`text-white block fontFeatureSetting`}>
                    Discover genuine and authentic parts, member-used cars, and everything else you need for you and your cherished Jaguar. 
                  </div>
                  <div className='pt-6 flex max-sm:justify-center'>
                    <div className=''>
                      <RedirectButton
                          redirectButton = " View classifieds"
                          directedlink= "/classifieds" 
                          target = ""
                          TextType='white'
                        />
                    </div>
                    {/* <div className='pl-4'>
                      <RedirectButton
                          redirectButton = " View For Sale"
                          directedlink= "/classifieds" 
                          target = ""
                          TextType='white'
                        />
                    </div>                       */}
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TextRightAlignedBanner