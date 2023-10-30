import React from 'react';
import BreadCrumb from '../../../components/CommonComponents/breadcrumb/BreadCrumb'
import RedirectButton from '../../../components/CommonComponents/callToActions/rediredtButton/RedirectButton';
import Footer from '../../../components/CommonComponents/footer/Footer';
import Header from '../../../components/CommonComponents/header/header'
import HeaderSwitch from '../../../components/CommonComponents/headerswitch/HeaderSwitch';
import MetaTags from '../../../components/CommonComponents/meta/MetaTags';
import BoldTextList from '../../../components/InnerPageComponents/BoldTextList/BoldTextList';
import ReferencesSection from '../../../components/InnerPageComponents/ReferenceSection/ReferenceSection';
import WhiteContentCard from '../../../components/InnerPageComponents/WhiteContentCard/WhiteContentCard'
import notices from "../../../pages/club-permit/notice-to-prospective-members/notices.json"


function NoticeToMembers() {

    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"Club Permits",'link':"#"},{'name':"Notice To prospective members",'link':"null"}];
    
    return (
        <div className='bg-primary'>
            
            <Header/>

            <MetaTags
                metaTitle="Club Permit - Notice To Prospective Members| Jaguar Car Club Of Victoria"
                metaDescription="Club Permit - Notice To Prospective Members | Jaguar Car Club Of Victoria"
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <div className={`pb-[5rem] pt-[5rem]`}>
                <WhiteContentCard>                    

                <div className='flex relative'>
                    <BreadCrumb links={breadCrumbDataArray}/>
                </div>

                <HeaderSwitch text="Notice to Prospective Members" type="primary"/>
                <div className='pb-12'>
                    <BoldTextList jsondata={notices} type=""/>       
                </div>
                            
                  
                <hr className="text-red-300 py-3"/>

                <ReferencesSection/>
                    
                </WhiteContentCard>
                        
            </div>

            <Footer/>
        </div>  
    )
}

export default NoticeToMembers