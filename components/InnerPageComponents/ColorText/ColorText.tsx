import React from "react";
import PropTypes from "prop-types";
import styles from './ColorText.module.scss'


const ColorText = ({type,text} : {type:String; text:String;} ) => {

    switch(type){

        case "gold":
            return(
                <p className={`${styles.golden} `}>{text}</p>
            )
            break;

        case "silver":
            return(
                <p className={`${styles.Silver}`}>{text}</p>
            )
            default:

        case "bronze":
            return(
                <>
                    <p className={`${styles.Bronze} `} >{text}</p>
                </>
            )            
    }
}

ColorText.prototype={
  type: PropTypes.string,
  text: PropTypes.string,
}
export default ColorText;
