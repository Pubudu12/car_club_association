import React from "react";
import styles from "../SmallWhiteCard/White.module.scss"


const SmallWhiteCard = (props:any) => { 
    return(
        <div id="ImagewithDetails" className={`${styles.item}  hover:bg-white`}>
            <div className="px-4 pb-2">
                {props.children}
            </div>
        </div>
    )

}
export default SmallWhiteCard;