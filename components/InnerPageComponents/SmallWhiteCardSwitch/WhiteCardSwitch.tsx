import React from "react";
import PropTypes from "prop-types";
import styles from './SmallWhiteCardSwitch.module.scss'


const WhiteCardSwitch = ({type,text} : {type:String; text:String;} ) => {

    switch(type){

        case "title":
            return(
                <p className={`${styles.title} pt-3`}>{text}</p>
            )
            break;

        case "cardtitle":
            return(
                <p className={`${styles.cardtitle} `}>{text}</p>
            )
            default:

        case "light":
            return(
                <>
                    <p className={`${styles.light} `} >{text}<br/><br/></p>
                </>
            )            
    }
}

WhiteCardSwitch.prototype={
  type: PropTypes.string,
  text: PropTypes.string,
}
export default WhiteCardSwitch;

