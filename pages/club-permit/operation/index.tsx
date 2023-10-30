import React from "react";
import BreadCrumb from "../../../components/CommonComponents/breadcrumb/BreadCrumb";
import Header from "../../../components/CommonComponents/header/header";
import HeaderSwitch from "../../../components/CommonComponents/headerswitch/HeaderSwitch";
import WhiteContentCard from "../../../components/InnerPageComponents/WhiteContentCard/WhiteContentCard";
import styles from "../../../components/InnerPageComponents/InnerPageComponents.module.scss";
import BoldTextList from "../../../components/InnerPageComponents/BoldTextList/BoldTextList";
import Operationcontent from "../../../pages/club-permit/operation/Operationcontent.json"
import RedirectButton from "../../../components/CommonComponents/callToActions/rediredtButton/RedirectButton";
import Footer from "../../../components/CommonComponents/footer/Footer";
import MetaTags from "../../../components/CommonComponents/meta/MetaTags";
import ReferencesSection from "../../../components/InnerPageComponents/ReferenceSection/ReferenceSection";


export default function Operation(){

    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"Club Permit",'link':"/"},{'name':"Operation",'link':"null"}];

    return(
    <div>
             
      
                <Header/>
                <MetaTags
                metaTitle="Club Permit| Jaguar Car Club Of Victoria"
                metaDescription="Club Permit | Jaguar Car Club Of Victoria"
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
             />

                    <div className={`${styles.backimg} pb-[5rem] pt-[5rem]`}>
                         <WhiteContentCard>

                            <div className='flex relative'>
                                <BreadCrumb links={breadCrumbDataArray}/>
                            </div>      

                        <HeaderSwitch text="Operation" type="primary"/>
                        <BoldTextList jsondata={Operationcontent} type=""/>
                        <div className="pl-10 pb-12">
                                <li className={`${styles.listcontent} pt-2 pb-2 `}>
                                    maintain a register of vehicles and permit holders and provide this to VicRoads within 14 days of being requested                                </li>
                                <li className={`${styles.listcontent} pt-2 pb-2 `}>
                                    Maintain a register of dated photographs of each permitted vehicle application post 31st January 2015. Dated photographs must include images of the front, passengers side, rear, driving position (side on with the driver’s door open) and where possible any identifiers such as chassis number engine number and compliance plate. The club is obliged to provide these photographs to VicRoads within 7 days of being requested. Photographs are to be of post card size and must be printed, they cannot be electronic.                                </li> 
                        </div>
                        <hr className="text-red-300 py-3"/>

                        <ReferencesSection/>
                        </WhiteContentCard>
                     </div>  
                     <Footer/>

    </div>  
    )
}