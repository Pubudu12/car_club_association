import React from "react";
import BreadCrumb from "../../../components/CommonComponents/breadcrumb/BreadCrumb";
import Header from "../../../components/CommonComponents/header/header";
import HeaderSwitch from "../../../components/CommonComponents/headerswitch/HeaderSwitch";
import WhiteContentCard from "../../../components/InnerPageComponents/WhiteContentCard/WhiteContentCard";
import styles from "../../../components/InnerPageComponents/InnerPageComponents.module.scss";
import ContentInLines from "../../../components/InnerPageComponents/contentInLines/ContentInLines";
import Backgroundcontent from   "../../../pages/club-permit/background/Backgroundcontent.json"
import RedirectButton from "../../../components/CommonComponents/callToActions/rediredtButton/RedirectButton";
import Footer from "../../../components/CommonComponents/footer/Footer";
import MetaTags from "../../../components/CommonComponents/meta/MetaTags";
import ReferencesSection from "../../../components/InnerPageComponents/ReferenceSection/ReferenceSection";


export default function Background(){
    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"Club Permit",'link':"#"},{'name':"Background",'link':"null"}];

    return(
        <div>
            <Header/>

            <MetaTags
                metaTitle="Club Permit - Background | Jaguar Car Club Of Victoria"
                metaDescription="Club Permit - Background | Jaguar Car Club Of Victoria"
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <div className={`${styles.backimg} pb-[5rem] pt-[5rem]`}>
                <WhiteContentCard>

                    <div className='flex relative'>
                        <BreadCrumb links={breadCrumbDataArray}/>
                    </div>      

                    <HeaderSwitch text="Background" type="primary"/>
                    <div className="pb-12">
                        <ContentInLines jsondataName={Backgroundcontent}/>
                    </div>
                   

                    <hr className="text-red-300 py-3"/>

                    <ReferencesSection/>

                </WhiteContentCard>

            </div>
            
            <Footer/>

        </div>
    )
}