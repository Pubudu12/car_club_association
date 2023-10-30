import React from "react";
import BreadCrumb from "../../../components/CommonComponents/breadcrumb/BreadCrumb";
import Header from "../../../components/CommonComponents/header/header";
import HeaderSwitch from "../../../components/CommonComponents/headerswitch/HeaderSwitch";
import WhiteContentCard from "../../../components/InnerPageComponents/WhiteContentCard/WhiteContentCard";
import styles from "../../../components/InnerPageComponents/InnerPageComponents.module.scss";
import disclaimerContent from "./disclaimerContent.json"
import Footer from "../../../components/CommonComponents/footer/Footer";
import BoldTextList from "../../../components/InnerPageComponents/BoldTextList/BoldTextList";
import MetaTags from "../../../components/CommonComponents/meta/MetaTags";


export default function Disclaimer(){
    
    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"Classifieds",'link':"/classifieds"},{'name':"Disclaimer",'link':"null"}];

    return(
        <div>
            <Header/>

            <MetaTags
                metaTitle="Classifieds | Disclaimer | Jaguar Car Club Of Victoria"
                metaDescription="Classifieds | Disclaimer | Jaguar Car Club Of Victoria"
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <div className={`${styles.backimg} pb-[5rem] pt-[5rem]`}>

                <WhiteContentCard>

                    <div className='flex relative'>
                        <BreadCrumb links={breadCrumbDataArray}/>
                    </div>      

                    <HeaderSwitch text="Classifieds Disclaimer" type="primary"/>
                    <BoldTextList jsondata={disclaimerContent} type=""/>
                        
                </WhiteContentCard>

            </div>
                    
            <Footer/>

        </div>
    )
}