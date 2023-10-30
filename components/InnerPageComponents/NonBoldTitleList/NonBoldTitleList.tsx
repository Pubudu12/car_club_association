import React from "react";
import styles from "./ThirdStep.module.scss";

const NonBoldTitleList =(props:any) =>{
    const {jsondataName} = props
    
    return (
        <div>
            {jsondataName.stepthree.map((singleobj:any,i:null)=>{                
                return (                 
                    <div key={i}  className={`${styles.parecontent} pt-3 pb-0.5`}>                        
                         <li>
                            <ul className="inline pt-3">
                                <div className="inline" dangerouslySetInnerHTML={ {__html: singleobj.title} } />
                            </ul>
                        </li>
                      <div>
                            {singleobj.childAvailable && <> {singleobj.innerText.map((secondobj:any,n:null)=>{
                                return (                    
                                    <div key={n} className={`${styles.boldcontent} pl-3`}>
                                        <li>
                                            <ul className="inline pt-1 pb-1  "><span >{secondobj.step}</span></ul>
                                        </li>    
                                    </div>
                                )})}                        
                                </>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    );



};
export default NonBoldTitleList;