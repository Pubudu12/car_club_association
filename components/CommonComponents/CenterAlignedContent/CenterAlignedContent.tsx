import React from 'react'
import styles from './CenterAlignedContent.module.scss'

const CenterAlignedContent = ({lightTitleOne , darkTitleOne , lightTitleTwo, darkTitleTwo, mainPara} : {lightTitleOne : string; darkTitleOne : string; lightTitleTwo : string; darkTitleTwo : string; mainPara : string;}) => {


    return (

        <div id="HeaderContentSection " className={`2xl:pt-[3rem] pt-[2rem] `}> 
            <div className = {`${styles.maintitlediv} flex justify-center text-center uppercase   lg:pt-[2rem]`}>
                <h2 className = {`${styles.maintitle}`}>{lightTitleOne}  <span className = {`${styles.darktitleone}`} >{darkTitleOne}</span> {lightTitleTwo} <span className = {`${styles.darktitletwo}`}> {darkTitleTwo} </span> </h2>
            </div>
           
            <div className={`${styles.headerpara} flex justify-center text-center 2xl:pt-[2rem] pt-[1rem] pb-[1rem]`}>
            <p >{mainPara}</p>
            </div>
        </div>
      )
    }
    
    export default CenterAlignedContent