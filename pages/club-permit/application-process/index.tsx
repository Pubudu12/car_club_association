import React from "react";
import BreadCrumb from "../../../components/CommonComponents/breadcrumb/BreadCrumb";
import Footer from "../../../components/CommonComponents/footer/Footer";
import Header from "../../../components/CommonComponents/header/header";
import HeaderSwitch from "../../../components/CommonComponents/headerswitch/HeaderSwitch";
import ContentInLines from "../../../components/InnerPageComponents/contentInLines/ContentInLines";
import WhiteContentCard from "../../../components/InnerPageComponents/WhiteContentCard/WhiteContentCard";
import styles from "../../../components/InnerPageComponents/InnerPageComponents.module.scss";
import Aplication_Frist_para from "../../../pages/club-permit/application-process/Aplication_Frist_para.json";
import BoldTextList from "../../../components/InnerPageComponents/BoldTextList/BoldTextList";
import aplicationsteptwo from "../../../pages/club-permit/application-process/aplicationsteptwo.json";
import MetaTags from "../../../components/CommonComponents/meta/MetaTags";
import Link from "next/link";
import ReferencesSection from "../../../components/InnerPageComponents/ReferenceSection/ReferenceSection";
import NonBoldTitleList from "../../../components/InnerPageComponents/NonBoldTitleList/NonBoldTitleList";
import stepfive from "../../privacy-policy/stepfive.json"


export default function ApplicationProcess () {
    
    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"Club Permit",'link':"/"},{'name':"Application Process",'link':"null"}];

    return(
        
        <div>
            <Header/>

            <MetaTags
                metaTitle=" Membership Perks - Club Permits!"
                metaDescription="Navigate the club permit application process and all its requirements with the guidance of Jaguar experts."
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <div className={`${styles.backimg} pb-[5rem] pt-[5rem]`}>
                <WhiteContentCard>

                    <div className='flex relative'>
                        <BreadCrumb links={breadCrumbDataArray}/>
                    </div>      

                    <HeaderSwitch text="Application Process" type="primary"/>
                       
                    {/* For contents coming line by line */}
                    <ContentInLines jsondataName={Aplication_Frist_para}/>

                    <HeaderSwitch text="Step 1 – Join the club " type="secondary"/>

                    <li className={`${styles.listcontent} pt-2 pb-2`}>
                        Please allow a reasonable timeframe for your application to be processed and to serve your 30 day qualification period.                            
                    </li>

                    <HeaderSwitch text="Step 2 – Confirm you have an eligible vehicle " type="secondary"/>

                    <BoldTextList jsondata={aplicationsteptwo} type=""/>

                    <HeaderSwitch text="Step 3 – Obtain Roadworthy and other certificates required " type="secondary"/>

                    <div>
                        <li className={`${styles.listcontent} pt-2 pb-2`}>
                            All club permit vehicles manufactured after 1 January 1949 require a <Link href="https://www.vicroads.vic.gov.au/registration/roadworthiness/get-a-certificate-of-roadworthiness" className={`${styles.redtext}`} target="_blank"> Certificate of Roadworthiness</Link> from a licenced vehicle tester. If your vehicle is manufactured pre 1949 please contact the club permit officer noted on the clubs website or in Catalog
                        </li>
                        <li className={`${styles.listcontent} pt-2 pb-2`}>
                            You will need to get a <Link href="https://www.vicroads.vic.gov.au/registration/vehicle-modifications-and-defects/vehicle-modifications/vass-approval-certificate" className={`${styles.redtext}`}  target="_blank">Vehicles Assessment Signatory Scheme (VASS)</Link>  approval certificate if the vehicle: 
                        </li>
                        <div className="pl-5">
                            <li className={`${styles.maxlistcontent} pt-2 pb-2 `}>
                                is modified outside what is permitted in the Vehicle Standards or the guidelines as specified on the VicRoads website 
                            </li>  
                            <li className={`${styles.maxlistcontent} pt-2 pb-2 `}>
                                The vehicle was not originally manufactured in Australia, does not have any previous Australian registration history and was manufactured after 31 December 1968 (30 June 1975 for motorcycles).
                            </li>
                        </div>
                   </div>    

                   <HeaderSwitch text="Step 4 – Complete the forms and get your application approved by the club " type="secondary"/>
                   
                   <div>
                        <li className={`${styles.listcontent} pt-2 pb-2`}>
                            Once you have the certificates, you will need to complete the following forms and get them approved by your club:                           
                        </li>

                        <div className="pl-5">
                            <li className={`${styles.listcontent} pt-2 pb-2 `}>
                                        The Vehicle Eligibility and Standards Declaration for Club Permit Vehicles form                                
                            </li>
                            <li className={`${styles.listcontent} pt-2 pb-2 `}>
                                    Club Permit Application form                                
                            </li>
                            <li className={`${styles.listcontent} pt-2 pb-2 `}>
                                Both are available on the VicRoads website at the following link <Link href="https://www.vicroads.vic.gov.au/registration/limited-use-permits/club-permit-scheme/get-a-club-permit" className={`${styles.redtext}` }target="_blank">https://www.vicroads.vic.gov.au/registration/limited-use-permits/club-permit-scheme/get-a-club-permit </Link>                              
                            </li>
                            <li className={`${styles.listcontent} pt-2 pb-2 `}>
                                Club Permit Officers will not sign incomplete forms                                
                            </li>
                            <li className={`${styles.listcontent} pt-2 pb-2 `}>
                                <b>You also need to provide photographs of your vehicle as outlined in the club&apos;s agreement with VicRoads. These include images of the: </b>                               
                            </li>
                                <div className="pl-5">
                                <li className={`${styles.maxlistcontent} pt-2 pb-2 `}>
                                    front                                     </li>
                                    <li className={`${styles.maxlistcontent} pt-2 pb-2 `}>
                                        passengers side
                                </li>
                                <li className={`${styles.maxlistcontent} pt-2 pb-2 `}>
                                    rear
                                </li>
                                <li className={`${styles.maxlistcontent} pt-2 pb-2 `}>
                                    driving position (side on with the driver’s door open)
                                </li>
                                <li className={`${styles.maxlistcontent} pt-2 pb-2 `}>
                                            Any identifiers such as chassis number engine number and compliance plate(For post 31 December 1948 vehicle, the Club Safety Officer/Scrutineer can only sign this form if the Certificate of Roadworthiness (RWC) is current and valid (within 30 days). If the RWC is more than 30 days old, then a new RWC is required) 
                                </li>
                                </div>
                            
                        </div>

                        <li className={`${styles.listcontent} pt-2 pb-2`}>
                            The club permit application must be signed and dated and received within 30 days of the declaration date on the Vehicle Eligibility and Standards Declaration for Club Permit Vehicles form, or the club permit application will be rejected by VicRoads, and a new club permit application will be required.                          
                        </li>                   
                   </div>

                   <HeaderSwitch text="Step 5 – Lodge your documents with Vic Roads" type="secondary"/>
                
                <NonBoldTitleList jsondataName={stepfive}/>
            
                    <div className="pb-12">
                            <div className="pb-2">
                                <HeaderSwitch text=" You must advise the Club Permit Officer of the Licence plate number issued to your vehicle within 7 days of receiving your plates." type="nonboldtitle"/>
                            </div>
                        
                            
                            <div className="pb-2">
                                <HeaderSwitch text=" You must advise VicRoads and the Club Permit Officer immediately if you dispose of your vehicle." type="nonboldtitle"/>
                            </div>
                    </div>

                   <hr className="text-red-300 py-3"/>

                   <ReferencesSection/>

                    </WhiteContentCard>

                </div>
            <Footer/>
        </div>
    )
};