import React from 'react'
import styles from './LeftHeaderContent.module.scss'

const LeftHeaderContent = ({lightTitleOne, darkTitle , lightTitleTwo, para} : {lightTitleOne : string; darkTitle : string; para : string; lightTitleTwo:string;}) => {
  return (
        <div id="LeftHeaderContent " className= {`${styles.lefttitlediv} xl:pt-[3rem] container flex 2xl:ml-auto 2xl:mr-auto  xl:ml-[3rem] xl:mr-[3rem]`}> 
            <div className=''>
                <div className = {`${styles.lefttitlediv} flex justify-left uppercase`}>
                    <h2 className = {`${styles.lefttitle}`}>{lightTitleOne}  <span className = {`${styles.darktitle}`} >{darkTitle}</span> {lightTitleTwo} </h2>
                </div>
            
                <div className={`${styles.leftpara} flex justify-left 2xl:pt-[3rem] pt-[1rem]`}>
                     <p>{para}</p>
                </div>
            </div>
            
        </div>
  )
}

export default LeftHeaderContent