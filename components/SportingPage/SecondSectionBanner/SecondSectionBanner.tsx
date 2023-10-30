import React from 'react'
import styles from './SecondSectionBanner.module.scss'
import CenterAlignedContent from '../../CommonComponents/CenterAlignedContent/CenterAlignedContent'
import RedirectButton from '../../CommonComponents/callToActions/rediredtButton/RedirectButton'

const SecondSectionBanner = () => {
  return (
       <div id="sportingSecondSectionBanner" className= {`${styles.secondBannerOuter} flex justify-center `} >
        <div className={`${styles.secondBannerBackground} md:container lg:px-[5rem] lg:pb-[3rem] py-[2rem] flex justify-start items-center`}>
            <div>
                <div className={``}>
                    <CenterAlignedContent
                            lightTitleOne="A Brief History of our"
                            darkTitleOne="Mk1 racer"
                            lightTitleTwo=""
                            darkTitleTwo=""
                            mainPara="The car was acquired by the JCCV in the mid-1990s thanks in large part to distinguished JCCV member Don McKay, who has been involved with it since the 1970s. Barry Sharp, a mechanic from Sydney, modified the vehicle in 1969. Barry was known for squeezing massive V8 engines into typically more pedestrian cars, and his Jaguar V8 special was fast right out of the gate."
                        />
                </div>

                <div className="justify-center flex ">
                    <div className="flex">
                        <RedirectButton redirectButton=" learn more" directedlink="/sporting/sportingMk1" target="" TextType=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondSectionBanner