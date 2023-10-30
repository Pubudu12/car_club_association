import React from 'react'
import styles from './Paragraph.module.scss';

const Paragraph = ({centerMainPara, centerPara} : {centerMainPara:String, centerPara:String}) => {
  return (
    <div id="textParagraph" className='container '>
        <div className={`${styles.mainPara} `}>
            <p >{centerMainPara}</p>
        </div>
        <div className={`${styles.secondPara}`}>
            <p > {centerPara}</p>
        </div>
    </div>
    
  )
}

export default Paragraph