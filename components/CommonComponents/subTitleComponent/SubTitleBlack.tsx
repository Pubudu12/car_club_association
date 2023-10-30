import React from 'react'
import styles from './SubTitleBlack.module.scss'

const SubTitleBlack = ({lightTitle , darkTitle , lightTitleOne,textPosition} : {lightTitle:String, darkTitle:String, lightTitleOne:string,textPosition:string}) => {
  return (
    <div id="subTitleHeader" className={`flex justify-center`}>
      <div className='container'>
          <div className={`flex justify-${textPosition}`}>
            <div className={`${styles.memberTitle}`}>
                <h1> {lightTitle} <b>{darkTitle}</b> {lightTitleOne}</h1>
            </div>
          </div>
      </div>
    </div>    
  )
}

export default SubTitleBlack