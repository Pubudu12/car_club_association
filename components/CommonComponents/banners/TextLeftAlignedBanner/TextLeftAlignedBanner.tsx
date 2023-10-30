import React from 'react';
import RedirectButton from '../../callToActions/rediredtButton/RedirectButton';
import styles from './TextLeftAlignedBanner.module.scss';

function TextLeftAlignedBanner() {
  return (
    <div id='leftAlignedBanner'>
        <div className={`${styles.bannerOuter} flex items-center`}> 
            <div className={`container max-sm:px-3 mx-auto`}>
                <div className={`uppercase max-sm:text-center`}>
                  <h1 className={`${styles.bannerText} text-[#D41130] pb-5`}>hold onto good <br />times with our <br /><span className='font-bold'> merchandise </span></h1>
                  <div className='centerRedirectButton max-sm:pt-2 md:pt-3'>
                    {/* <RedirectButton
                        redirectButton = " Shop Now"
                        directedlink= "/models" 
                        target = ""
                        TextType=''
                      /> */}
                      <div className=''>
                          <span className='bg-[#d41130] py-3 px-4 text-white font-semibold text-lg max-sm:text-sm'>Coming Soon</span>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TextLeftAlignedBanner