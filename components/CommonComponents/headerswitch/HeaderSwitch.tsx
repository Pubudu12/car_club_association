import React from "react";
import PropTypes from "prop-types";
import styles from './HeaderSwitch.module.scss'


const HeaderSwitch = ({type,text} : {type:String; text:String;} ) => {

    switch(type){

        case "primary":
            return(
                <div className={`${styles.mainTitle} pt-3`}>{text}</div>
            )
            break;

        case "secondary":
            return(
                <p className={`${styles.secondTitle}`}>{text}</p>
            )
            break;

        case "boldParaText":
            return(
                <p className={`${styles.boldParaText}`}>{text}</p>
            )
            default:

        case "boldtitle":
            return(
                <>
                    <b><li className="pt-3 pb-2" ><ul className={`${styles.blackTitle} pl-0.5`}>{text}</ul></li></b>
                </>
            ) 
            case "nonboldtitle":
                return(
                    <>
                        <b className={`${styles.blackTitle} pl-0.5 pt-7 pb-2`}>{text}</b>
                    </>
                )                    
    }
}

HeaderSwitch.prototype={
  type: PropTypes.string,
  text: PropTypes.string,
}
export default HeaderSwitch;

