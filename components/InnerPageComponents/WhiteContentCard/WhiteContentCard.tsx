import React from 'react';
import styles from '../../InnerPageComponents/InnerPageComponents.module.scss'

const WhiteContentCard = (props:any) => {
  return (
      <div className={`container mx-auto max-sm:px-3 pt-[5rem] max-sm:pt-[1rem] hero-white-text`}>
            <div className={`flex flex-col md:flex-row bg-white shadow-lg py-[3rem]`}>
                <div className={`${styles.whiteCard}max-sm:px-3 container mx-auto`}>                                        
                     {props.children}                    
                </div>
            </div>
      </div>
  )
}

export default WhiteContentCard