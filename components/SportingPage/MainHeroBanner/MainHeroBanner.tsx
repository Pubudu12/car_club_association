import React from 'react'
import BreadCrumb from '../../CommonComponents/breadcrumb/BreadCrumb';
import RedirectButton from '../../CommonComponents/callToActions/rediredtButton/RedirectButton';
import styles from './MainHeroBanner.module.scss';
import trackEventTopicStyles from '../../homeComponents/SecondSection/ThreeCardSection.module.scss';

const MainHeroBanner = ({darkHeroText , lightHeroText , mainPara} : {darkHeroText:String, lightHeroText:String, mainPara:String}) => {
    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"sporting",'link':"null"}];
  return (
    <div id="sportingMainHeroBanner" className= {`bg-white `}>
        <div className= {`${styles.mainBannerOuter} flex justify-center `} >
                <div className={`${styles.mainBannerBackground} container md:px-[5rem] flex justify-start items-center`}>
                    <div className='pt-[2rem]'>
                        <div className={`${styles.mainBannerText} md:pb-[1rem] sm:pb-[3rem]`}>
                            <h1><span>{darkHeroText}</span> {lightHeroText}</h1>
                        </div>
                        <div className='flex  md:justify-start justify-center relative top-[-10px] pb-7 md:pt-[0rem] pt-[1rem]'>
                            <BreadCrumb links={breadCrumbDataArray}/>
                        </div> 
                        
                        <div className={`${styles.mainBannerPara} text-justify lg:w-2/4 md:w-3/5 pb-[2rem]`}>
                            <p className='xl:w-3/4 sm:w-full'> {mainPara} </p>
                        </div>

                        <div className='flex md:justify-start justify-center ' id='trackevents'>
                            <RedirectButton redirectButton=" view events " directedlink="#trackevents" target='' TextType=''/>
                        </div>
                    </div>
                </div>
            </div>

        <div className={`max-sm:px-3 container mx-auto flex justify-between max-sm:flex-col max-sm:text-center pt-10 pb-[2rem]`} >
                <h1 className={`uppercase ${trackEventTopicStyles.sectionalTopic}`}>Upcoming track <span className="font-bold">events</span></h1>
                <div className={` flex items-end pb-2 max-sm:pt-4 justify-center` }>
                    <RedirectButton redirectButton=" view calendar " directedlink="#" target="" TextType=''/>
                </div>
            </div>
    </div>
    
    
  )
}

export default MainHeroBanner