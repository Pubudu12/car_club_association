import React from 'react'
import BreadCrumb from '../../../components/CommonComponents/breadcrumb/BreadCrumb';
import Header from '../../../components/CommonComponents/header/header';
import HeaderSwitch from '../../../components/CommonComponents/headerswitch/HeaderSwitch';
import WhiteContentCard from '../../../components/InnerPageComponents/WhiteContentCard/WhiteContentCard';
import styles from "../../../components/InnerPageComponents/InnerPageComponents.module.scss";
import ParaContent from '../../../components/InnerPageComponents/paraContent/ParaContent';
import BoldTextList from '../../../components/InnerPageComponents/BoldTextList/BoldTextList';
import clubpermit from "./clubpermit.json";
import Footer from '../../../components/CommonComponents/footer/Footer';
import MetaTags from '../../../components/CommonComponents/meta/MetaTags';
import Link from 'next/link';
import ReferencesSection from '../../../components/InnerPageComponents/ReferenceSection/ReferenceSection';

export default function  LatestFrom(){
    
    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"Club Permit",'link':"/"},{'name':"Latest from VicRoads",'link':"null"}];
    
    return(

        <div>
            <Header/>
            
            <MetaTags
                metaTitle="Club Permit - Latest from VicRoads | Jaguar Car Club Of Victoria"
                metaDescription="Club Permit - Latest from VicRoads | Jaguar Car Club Of Victoria"
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <div className={`${styles.backimg} pb-[5rem] pt-[5rem]`}>
                <WhiteContentCard>
                    <div className='flex relative'>
                        <BreadCrumb links={breadCrumbDataArray}/>
                    </div>  
                    
                    <HeaderSwitch text="Recent correspondence from VicRoads" type="primary"/>   

                    <HeaderSwitch text="Alignment of VicRoads club permit forms with the Road Safety (Vehicles) Regulations 2021" type="secondary"/>

                    <ParaContent mainPara="VicRoads has updated a number of Club Permit forms to improve the vehicle data collected by VicRoads, and to ensure that the correct permit types and club permit plates are issued to eligible vehicles."/>  

                    <HeaderSwitch text=" What do Club Permit Scheme clubs and members need to do?" type="nonboldtitle"/>

                    <p className={`${styles.listcontent} pt-2 pb-2`}>
                        The updated forms are now available on the VicRoads website at <Link href="https://www.vicroads.vic.gov.au/" className={`${styles.redtext}`} target="_blank">vicroads.vic.gov.au</Link>  for you and your members to use. 
                    </p>

                    <div className='pl-6'>
                        <li className={`${styles.listcontent} pt-2 pb-2`}>
                            Club Permit application form   
                        </li>
                        <li className={`${styles.listcontent} pt-2 pb-2`}>
                            Club Permit reassignment form
                        </li>
                        <li className={`${styles.listcontent} pt-2 pb-2`}>
                            Vehicle eligibility and standards declaration form
                        </li>
                        <li className={`${styles.listcontent} pt-2 pb-2`}>
                            Approved club office bearers and scrutineers
                        </li>
                    </div>

                    <p className={`${styles.listcontent} pt-2 pb-2`}>
                         Please encourage your members to use these current forms rather than previous versions
                    </p>
                    
                    <BoldTextList jsondata={clubpermit} type="none"/>

                    <HeaderSwitch text="New requirement - Classic and collectible vehicles imported from 1 July 2021 will be issued a VIN that must be stamped on the vehicle." type="secondary"/>

                    <p className={`${styles.listcontent} pt-2 pb-2`}>
                        With the introduction of the Commonwealth Road Vehicle Standards Act 2018 and Road Vehicle Standards Rules 2019, vehicles imported from 1 July 2021 that do not already have a 17-digit Vehicle Identification Number (VIN) stamped into the vehicle will be issued a VIN, which needs to be stamped on the vehicle. 
                    </p>
                    <p className={`${styles.listcontent} pt-2 pb-2`}>
                        Club members who are considering importing these vehicles should familiarise themselves with the new requirements as explained below. 
                    </p>
                    <p className={`${styles.listcontent} pt-2 pb-2`}>
                        Most classic and collectible vehicles are issued a chassis number by the vehicle manufacturer. Under the Commonwealth Road Vehicle Standards Act 2018 and Road Vehicle Standards Rules 2019, these types of vehicles are now imported under the concessional entry pathway and recorded on the Register of Approved Vehicles (RAV). 
                    </p>
                    <p className={`${styles.listcontent} pt-2 pb-2`}>
                        As these vehicles do not have a 17-character VIN that meets the ISO standards, the Commonwealth Department of Transport Infrastructure Regional Development and Communications (DITRDC) will issue a VIN with the condition that the VIN must be stamped on the vehicle. It is an offence under the Commonwealth legislation if this condition is not complied with. A plate attached to the vehicle displaying the VIN is not acceptable.
                    </p>
                    <p className={`${styles.listcontent} pt-2 pb-2`}>
                        The VIN provided by the Commonwealth via the RAV process is the identifier by which the vehicle must be known throughout Australia for registration and club permit purposes and is how the vehicle’s origin will be determined for the purpose of registration/CPS permit eligibility.
                    </p>

                    <HeaderSwitch text="Further information" type="secondary"/>

                    <p className={`${styles.listcontent} pt-2 pb-2`}>
                        To find out more about the Club Permit Scheme obligations, search ‘Club Permit Scheme’ at <Link href="https://www.vicroads.vic.gov.au/" className={`${styles.redtext}`} target="_blank">vicroads.vic.gov.au </Link> 
                    </p>
                    <div className='pb-12'>
                        <p className={`${styles.listcontent} pt-2 `}>
                            To find out more about the RVS legislation please visit <Link href="https://www.infrastructure.gov.au/" className={`${styles.redtext}`} target="_blank">infrastructure.gov.au </Link> 
                        </p>
                    </div>
                    

                    <hr className="text-red-300"/>

                    <ReferencesSection/>
                </WhiteContentCard>                                    
                    </div>
                            
            <Footer/>
        </div>
    );
};