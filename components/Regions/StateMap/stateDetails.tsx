import React from 'react'
import styles from "./StateMap.module.scss";

const StateDetails = (props:any) => {
  return (
    <div id="stateInvidualDetails1" className={`${styles.details} `}>
        <div className='lg:pl-[3rem]'>
            {props.children}
        </div>
    </div>
  )
}

export default StateDetails