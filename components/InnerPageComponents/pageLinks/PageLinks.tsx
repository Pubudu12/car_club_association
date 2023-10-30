import React from 'react';
import styles from './pageLinks.module.scss'
import RedirectButton from '../../CommonComponents/callToActions/rediredtButton/RedirectButton';


const PageLinks =(props:any) =>{
    const {jsondataName} = props

        return (           
            <>
                <div className={`${styles.introParagraph} pt-3 font-medium`}>{jsondataName.introParagraph}</div>

                <div id="pageLinks" className={`${jsondataName.classItems}`}>
                    {jsondataName.links.map((singleobj:any,i:null) =>{                               
                        return (
                            <div key={i} className={`pt-6 ${styles.masonaryGrid}`}>                                                                  
                                <span className={`${styles.mainTitle}`}>{singleobj.Title}</span>   
                                    {singleobj.childAvailable? <>
                                        {singleobj.innerdata.map((secondobj:any,n:null)=>{
                                            return (
                                                <div key={n} className={`py-[0.6rem] pl-3`}> 
                                                    <div className={`${styles.redirectOuter}`} id={secondobj.buttonId}>
                                                            
                                                        <RedirectButton 
                                                            redirectButton =  {secondobj.buttonName} 
                                                            directedlink = {secondobj.directedlink}
                                                            target = {secondobj.target}
                                                            TextType=''
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </> 
                                    : <>
                                </>}                                               
                            </div>
                        )
                    })} 
                </div>                                                           
            </>
        );
    };

export default PageLinks;