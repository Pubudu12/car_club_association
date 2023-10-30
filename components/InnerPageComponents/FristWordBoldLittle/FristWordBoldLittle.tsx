import React from "react";
import styles from "../FristWordBoldLittle/boldsty.module.scss"

const FristWordBoldLittle = ({boldtext,normalText} : {boldtext:string; normalText:string}) =>{
    return(
        <div className="px-1">
            <span className={`${styles.title}`}><b>{boldtext}</b>  {normalText}</span>
        </div>
    )
}
export default FristWordBoldLittle;