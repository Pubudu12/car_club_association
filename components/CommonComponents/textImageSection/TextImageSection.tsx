import Image from "next/image";
import React from 'react';
import RedirectButton from "../callToActions/rediredtButton/RedirectButton";
import styles from './TextImageSection.module.scss'


const TextImageSection = (props: any) => {
  const { jsondataName } = props

  return (
    <div id="textimagesection" className="flex justify-center ">
    <div className='container'>
         <div className={`${styles.outterDiv}`} id="aboutusdescription" >
             {jsondataName.posts.map((singleObj: any, i:null) => {
              return (               
                <div className={`${styles.singleproblemcomp}  ${styles[singleObj.class]} grid lg:grid-cols-2 md:grid-cols-1 2xl:items-center 2xl:justify-center `} key={i}>
                    <div className={`${styles.contentheading}`} >
                       <h3 className="2xl:pb-[2rem] xl:pb-[1.5rem] lg:pb-[1rem] pb-[1rem]">
                       {singleObj.lightTextOne}  <b>{singleObj.highlightedTextOne}</b> {singleObj.lightText} <b> {singleObj.highlightedText}</b> {singleObj.lightTextTwo} <b>{singleObj.highlightedTextTwo}</b>
                       </h3>   
                       <div className='lg:text-left md:text-center'>
                            <p className="2xl:pb-[1rem]">
                                {singleObj.paraTextone}
                            </p>
                            <p className="">
                                {singleObj.paraTexttwo}
                            </p>
                            <div className="!pl-0 flex md:justify-start justify-center pt-[2rem] ">
                            {
                              singleObj.redirectBtn === true &&
                              <RedirectButton redirectButton=" View concour results" directedlink="/concours/results" target="" TextType='' />
                            } 
                            </div>
                             
                        </div>  
                          
                    </div>   
                    
                     <div className= {`${styles.screenholderoneind} lg:flex md:pb-[3rem] pb-[2rem] pt-[2rem]`}>
                       <Image height={454} width={660}  priority={true}  unoptimized={false} src={singleObj.mainImage} alt="text image" />
                     </div>
                 </div>
                )
                 })}
           </div>
         </div>
       </div>
  );
};

export default  TextImageSection;