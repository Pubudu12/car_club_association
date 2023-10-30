import React from 'react'
import styles from "./contentLine.module.scss"

const ContentInLines = (props:any) =>{
    const { jsondataName } = props

    return(
        <div id="preamble">
            {jsondataName.textlinespara.map((singleobj:any,i:null) =>{
                return(
                    <div key={i}>
                        <p className={`${styles.parecontent} pt-3 pb-0.5`}>{singleobj.line}</p>
                    </div>
                )
            })}
        </div>
    );
};
export default ContentInLines;