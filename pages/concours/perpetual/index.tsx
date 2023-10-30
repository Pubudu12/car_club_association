import React, {useEffect, useState} from "react";
import CtaBanner from "../../../components/CommonComponents/banners/ctaBanner/CtaBanner";
import HeroBanner from "../../../components/CommonComponents/banners/herobanner/HeroBanner";
import BreadCrumb from "../../../components/CommonComponents/breadcrumb/BreadCrumb";
import RedirectButton from "../../../components/CommonComponents/callToActions/rediredtButton/RedirectButton";
import Footer from "../../../components/CommonComponents/footer/Footer";
import Header from "../../../components/CommonComponents/header/header";
import MetaTags from "../../../components/CommonComponents/meta/MetaTags";
import WhiteCardSwitch from "../../../components/InnerPageComponents/SmallWhiteCardSwitch/WhiteCardSwitch";
import FristWordBoldTitle from "../../../components/TechTips/FristwordBoldTitle";
import Concur from "../../api/concur";

export default function Perpetual() {
    const [trophies, setTrophies] = useState([])

    useEffect(() => {
        get()
    }, [""])

    const get = async () => {
        const newTrophies = await Concur.trophies.get.all()
        setTrophies(newTrophies)
    }
    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"concours",'link':"/"},{'name':"perpetual trophies",'link':"null"}];
  

    return (
        <div className='bg-primary'>
            <Header/>
            <MetaTags
                metaTitle="Concour Perpetual | Jaguar Car Club Of Victoria"
                metaDescription="Concour Perpetual | Jaguar Car Club Of Victoria"
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />
            <HeroBanner
                heroImage="/images/ConcourImages/Intro-Image.webp"
                darkHeadingOne=""
                darkHeading="trophies"
                lightHeading="perpetual"
                heroImageMobile="/images/ConcourImages/Intro-Image-Mobile.png"
            />
            <div className='flex justify-center relative top-[-10px]'>
                <BreadCrumb links={breadCrumbDataArray}/>
             </div>  
            <div className="container mx-auto max-xs:px-12 max-sm:px-6 pb-3 pt-5">
                <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-5 md:gap-7">
                    {trophies.length > 0 && trophies.map((trophy: any) => <div key={trophy.id}
                                                                               className="relative pb-5 max-sm:pt-4">
                        <FristWordBoldTitle boldtext={trophy.attributes.name}
                                            normalText="Trophy"/>
                        <div className="pb-5">
                            <WhiteCardSwitch
                                text={trophy.attributes.description}
                                type="light"/>
                        </div>
                        <div className="bottom-0 absolute items-end pb-2 ">
                            <RedirectButton
                                redirectButton="view results"
                                directedlink={`/concours/perpetual/${trophy.id}`}
                                target=""
                                TextType = ""
                            />
                        </div>

                    </div>)}
                </div>

            </div>

            <div className="pt-10">
                <CtaBanner
                    bannerTextDark=' Become a member of our'
                    bannerTextLight='community'
                    ctabannerlaptop="/images/sportingPage/sportingCTADesktop.webp"
                    ctabannerMobile="/images/sportingPage/sportingCTAMobile.webp"
                    imageClass="bannerOuterLightGreen"
                />
            </div>

            <Footer/> 

        </div>
    )
}