import React from "react";
import BreadCrumb from "../../../components/CommonComponents/breadcrumb/BreadCrumb";
import Header from "../../../components/CommonComponents/header/header";
import HeaderSwitch from "../../../components/CommonComponents/headerswitch/HeaderSwitch";
import WhiteContentCard from "../../../components/InnerPageComponents/WhiteContentCard/WhiteContentCard";
import styles from "../../../components/InnerPageComponents/InnerPageComponents.module.scss";
import Footer from "../../../components/CommonComponents/footer/Footer";
import clubpolicyContent from "../../../pages/club-permit/club-policy/clubpolicyContent.json"
import NonBoldTitleList from "../../../components/InnerPageComponents/NonBoldTitleList/NonBoldTitleList";
import MetaTags from "../../../components/CommonComponents/meta/MetaTags";
import ReferencesSection from "../../../components/InnerPageComponents/ReferenceSection/ReferenceSection";


export default function ClubPolicy(){
   
    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"Club Permit",'link':"#"},{'name':"Club Policy",'link':"null"}];

    return(
        
        <div>
            <Header/>
                
            <MetaTags
                metaTitle="Club Permit - Club Policy | Jaguar Car Club Of Victoria"
                metaDescription="Club Permit - Club Policy | Jaguar Car Club Of Victoria"
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <div className={`${styles.backimg} pb-[5rem] pt-[5rem]`}>

                <WhiteContentCard>

                    <div className='flex relative'>
                        <BreadCrumb links={breadCrumbDataArray}/>
                    </div>      

                    <HeaderSwitch text="Club Policy" type="primary"/>
                    <div className="pb-12">
                        <NonBoldTitleList jsondataName={clubpolicyContent} /> 
                    </div>
                    <hr className="text-red-300 py-3"/>

                    <ReferencesSection/>

                </WhiteContentCard>
            </div>

            <Footer/>
        </div>
    )      
}