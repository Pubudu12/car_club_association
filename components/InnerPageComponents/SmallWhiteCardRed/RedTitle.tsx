import React from "react";
import styles from "../SmallWhiteCardRed/RedTitle.module.scss"

const RedTitle = ({fristLine,SecondLine}:{fristLine:string; SecondLine:string;}) =>{
    return(
        <div className="pt-2">
            <span className={`${styles.redTitle} `}>{fristLine} <br/>{SecondLine}<br/></span>
        </div>
    )


}
export default RedTitle;