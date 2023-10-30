import React, {useEffect, useState} from "react";
import CtaBanner from "../../../components/CommonComponents/banners/ctaBanner/CtaBanner";
import HeroBanner from "../../../components/CommonComponents/banners/herobanner/HeroBanner";
import Footer from "../../../components/CommonComponents/footer/Footer";
import Header from "../../../components/CommonComponents/header/header";
import MetaTags from "../../../components/CommonComponents/meta/MetaTags";
import ColorText from "../../../components/InnerPageComponents/ColorText/ColorText";
import FristWordBoldLittle from "../../../components/InnerPageComponents/FristWordBoldLittle/FristWordBoldLittle";
import SmallWhiteCard from "../../../components/InnerPageComponents/SmallWhiteCard/SmallWhiteCard";
import RedTitle from "../../../components/InnerPageComponents/SmallWhiteCardRed/RedTitle";
import WhiteCardSwitch from "../../../components/InnerPageComponents/SmallWhiteCardSwitch/WhiteCardSwitch";
import FristWordBoldTitle from "../../../components/TechTips/FristwordBoldTitle";
import Concur from "../../api/concur";
import moment from "moment/moment";
import BreadCrumb from "../../../components/CommonComponents/breadcrumb/BreadCrumb";

export default function Results() {
    const [perpetuals, setPerpetuals] = useState([])
    const [individualAwards, setIndividualAwards] = useState([])
    const [currentYear] = useState(moment().format("yyyy"))
    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"concours",'link':"/"},{'name':"Results 2023",'link':"null"}];


    useEffect(() => {
        get.perpetuals()
        get.individualAwards()
    }, [""])

    const get = {
        async perpetuals() {
            const newPerpetuals = await Concur.perpetuals.get.all(currentYear)
            setPerpetuals(newPerpetuals)
        },
        async individualAwards() {
            const newIndividualAwards = await Concur.individualAwards.get.all(currentYear)
            setIndividualAwards(newIndividualAwards)
        }
    }

    return (
        <div className='bg-primary'>
            <Header/>

            <MetaTags
                metaTitle="Concour Results | Jaguar Car Club Of Victoria"
                metaDescription="Concour Results | Jaguar Car Club Of Victoria"
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />
            <HeroBanner
                heroImage="/images/ConcourImages/Intro-Image.webp"
                darkHeadingOne=""
                darkHeading={currentYear}
                lightHeading="concours"
                heroImageMobile="/images/ConcourImages/Intro-Image-Mobile.png"
            />
            <div className="container mx-auto max-xs:px-12 max-sm:px-6 pb-3 pt-5">
                <div className='flex justify-center relative top-[-10px]'>
          <BreadCrumb links={breadCrumbDataArray}/>
        </div>  
                <FristWordBoldTitle boldtext="perpetual"
                                    normalText="trophy winners"/>
                {perpetuals.length > 0 && perpetuals.map((perpetual:any) => <div key={perpetual.id}>
                    <div className="pt-4 pb-4">
                        <WhiteCardSwitch text={`${perpetual.attributes.title} CLASS ${currentYear}  `} type="title"/>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-2 md:grid-cols-3 sm:grid-cols-2 ">

                        {perpetual.attributes.perpetuals.data.map((perpetual:any) => <SmallWhiteCard key={perpetual.id}>
                            <WhiteCardSwitch text={perpetual.attributes.trophy.data.attributes.name} type="cardtitle"/>
                            <div className="pt-1 pb-24">
                                <WhiteCardSwitch text={perpetual.attributes.description} type="light"/>
                            </div>

                            <div className="bottom-0 absolute items-end pb-2 ">
                                <RedTitle fristLine={perpetual.attributes.person_name}
                                          SecondLine={perpetual.attributes.model}/>
                            </div>
                        </SmallWhiteCard>)}

                    </div>
                </div>)}

                <div className="pt-4">
                    <FristWordBoldTitle boldtext="INDIVIDUAL"
                                        normalText="AWARD WINNERS"/>
                </div>
                <div className="grid lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-4">
                    <FristWordBoldLittle boldtext="Bronze"
                                         normalText=" 70.0-82.49%"/>
                    <FristWordBoldLittle boldtext="Silver"
                                         normalText="82.50-92.49%"/>
                    <FristWordBoldLittle boldtext="Gold"
                                         normalText="92.50-100%"/>
                </div>

                {individualAwards.length > 0 && individualAwards.map((individualAward:any) => <div key={individualAward.id}>
                    <div className="pt-4 pb-4">
                        <WhiteCardSwitch text={`${individualAward.attributes.title} CLASS ${currentYear}`}
                                         type="title"/>
                    </div>
                    <div className="grid lg:grid-cols-4 gap-2 md:grid-cols-3 sm:grid-cols-2">
                        {individualAward.attributes.individual_awards.data.map((award:any) => <SmallWhiteCard key={award.id}>
                            <RedTitle fristLine={award.attributes.person_name} SecondLine={award.attributes.model}/>
                            <ColorText type={award.attributes.award_type} text={award.attributes.award_type}/>
                            <FristWordBoldLittle boldtext={award.attributes.grams}
                                                 normalText=""/>
                        </SmallWhiteCard>)}
                    </div>
                </div>)}
            </div>
            <CtaBanner
                bannerTextDark=' Become a member of our'
                bannerTextLight='community'
                ctabannerlaptop="/images/AboutUsImages/ctabanner.webp"
                ctabannerMobile="/images/AboutUsImages/cta-banner-mobile.webp"
                imageClass="bannerOuterLightGreen"
            />
            <Footer/>


        </div>
    )
}