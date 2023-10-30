import React from "react";
import styles from "../../components/TechTips/FristWordBold.module.scss"

const FristWordBoldTitle = (props:any) =>{
    
    const {boldtext,normalText} = props;

    return(
        <div>
            <span className={`${styles.title}`}><b>{boldtext}</b> {normalText}</span>
        </div>
    )
}
export default FristWordBoldTitle;