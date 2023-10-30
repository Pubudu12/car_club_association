import React from "react";
import styles from "./privercySteptwo.module.scss";

const BoldTextList = ({type,jsondata} : {type:String; jsondata:any;} )  =>{

    return (
        <div>
            {jsondata.itemset.map((singleobj:any,i:null)=>{                
                return (  
                                   
                    <div key={i}  className={`${styles.parecontent} pt-3 pb-0.5`}> 
                        <div>                     
                            {singleobj.TitleAvailabe && <>
                               {(() =>{ switch (type)
                                  {
                                      case "none":
                                        return( <span className={`${styles.blackTitle}`}>{singleobj.title}</span>)
                                        break;
                                                        
                                      default:
                                         return( 
                                             <li>
                                                 <ul className="inline">
                                                    <span className={`${styles.blackTitle}`}>{singleobj.title}</span>
                                                </ul>
                                            </li>)
                                        break;
                                                    }  })()}
                                </>}
                         
                        </div>
                        <div>
                            {singleobj.SecondTitleAvailabe && <>
                                                        {<div  className={`${styles.titlesec}`}>
                                                            <div className="inline pt-1 pb-1" dangerouslySetInnerHTML={ {__html: singleobj.SecondTitle} } />
                                                        </div>}
                                  </>
                            }
                        </div>
                       <div>
                            {singleobj.childAvailable && <> {singleobj.innerText.map((secondobj:any,n:null)=>{
                                return (                    
                                    <div key={n} className={`${styles.normalcontent} pl-6`}>
                                        <li>
                                            <ul className="inline pt-1 pb-1"><span >{secondobj.step}</span></ul>
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
export default BoldTextList;