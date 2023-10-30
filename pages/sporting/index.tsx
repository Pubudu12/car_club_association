import RedirectButton from "../../components/CommonComponents/callToActions/rediredtButton/RedirectButton";
import Footer from "../../components/CommonComponents/footer/Footer";
import CenterAlignedContent from "../../components/CommonComponents/CenterAlignedContent/CenterAlignedContent";
import ImageSlider from "../../components/CommonComponents/sliders/imageSlider/ImageSlider";
import MainHeroBanner from "../../components/SportingPage/MainHeroBanner/MainHeroBanner";
import SecondSectionBanner from "../../components/SportingPage/SecondSectionBanner/SecondSectionBanner";
import TwoGridBanner from "../../components/SportingPage/TwoGridBanner/TwoGridBanner";
import CtaBanner from "../../components/CommonComponents/banners/ctaBanner/CtaBanner";
import FullWidthThreeBannerSection from "../../components/CommonComponents/banners/FullWidthThreeBannerSection/FullWidthThreeBannerSection";
import SeperatorDot from "../../components/CommonComponents/seperatorDot/SeperatorDot";
import styles from './index.module.scss'
import jsondataSportingPageImageSlider from '../../components/CommonComponents/sliders/imageSlider/jsondataSportingPageImageSlider.json'
import Header from "../../components/CommonComponents/header/header";
import MetaTags from "../../components/CommonComponents/meta/MetaTags";
import Winton from "../api/winton";
import { useEffect, useState } from "react";
import BreadCrumb from "../../components/CommonComponents/breadcrumb/BreadCrumb";
import SubTitleBlack from "../../components/CommonComponents/subTitleComponent/SubTitleBlack";
import Link from "next/link";

export default function MainSportingPage() {
  const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"sporting",'link':"null"}];
  const [years, setYears] = useState([])

  useEffect(() => {
    get.years()
  }, [""])

  const get = {
    async years() {
      const newYears = await Winton.get.years()
      newYears.length > 0 && setYears(newYears)
    }
  }


  console.log(years);
  return (
    <div className="overflow-hidden bg-primary">

      <MetaTags
        metaTitle="Race to the Finish - Jaguar Sporting events "
        metaDescription="Join the excitement and participate in premier sporting events with the Jaguar community."
        image=""
        metaKeyword="Jaguar Car Club Of Victoria"
      />

      <Header />

      <MainHeroBanner
        darkHeroText="sporting"
        lightHeroText="at jccv"
        mainPara="We host various racing events throughout the year to give you the chance to unleash your racing spirit behind the wheel of your Jaguar. Whether it's Winton Motor Raceway events, MSCA-hosted competitions, or other competitions,  we've got something for you."
      />
      
      <FullWidthThreeBannerSection />

      <div className="sm:py-[4rem] ">
        <CenterAlignedContent
          lightTitleOne="3 kilometers of"
          darkTitleOne="pure exhilaration"
          lightTitleTwo=""
          darkTitleTwo=""
          mainPara=" Winton Motor Raceway is the epitome of a 'raceway', combining its tight and twisty sections with a longer straight circuit to create an action-packed race day experience. This is the perfect place for you and your mates to enjoy a day out on the track or watch the pros do their thing."
        />

        <div className="md:justify-center md:flex lg:pt-[2rem]">
          <div className="md:flex sm:grid  xl:w-1/5 lg:w-2/4 md:w-3/5 justify-between ">
            <div className="pb-[1rem] flex justify-center">
              <RedirectButton redirectButton=" apply now " directedlink="https://memberdesq.sportstg.com/index.cfm?fuseaction=registration_1&RegistrationMode=2&SubscriptionTypeID=278&OrgID=2037" target="_blank" TextType=""/>
            </div>
            <div className="flex justify-center">
              <RedirectButton redirectButton=" view rules " directedlink="/concours/rules" target="" TextType=""/>
            </div>
          </div>
        </div>
      </div>


      <div className={`${styles.sportingTextBanner} pb-[5rem] sm:pt-[3rem] `}>
        <div>
          <CenterAlignedContent
            lightTitleOne="previous race winners"
            darkTitleOne=""
            lightTitleTwo=""
            darkTitleTwo=""
            mainPara=" We have seen many legends come and go and they all have one thing in common: they were ahead of the game and the competition. Our club is filled with competitive drivers who've successfully taken their chances behind the wheel and this is your chance to get to know them."
          />
        </div>

        <div className="seperatorLists">
          <SeperatorDot>
            <li>
                {years?.map((year:any,index:number) =>     
                    <Link key={index} href={`/sporting/winton-results/${year.attributes.year}`}> {year.attributes.year}</Link>
                )}
            </li>
          </SeperatorDot>
        </div>

      </div>

      <div className=''>
        <ImageSlider jsonImagesName={jsondataSportingPageImageSlider}
        />
      </div>


      <div className="">
        <SecondSectionBanner />
      </div>


      <TwoGridBanner />

      {/* Advertisements */}
      {/* <Advertisments code="page#1" /> */}

      <div>
        <CtaBanner
          bannerTextDark=' Become a member of our'
          bannerTextLight='community'
          ctabannerlaptop="/images/sportingPage/sportingCTADesktop.webp"
          ctabannerMobile="/images/sportingPage/sportingCTAMobile.webp"
          imageClass="bannerOuterCarDarkGreen"
        />
      </div>

      <Footer />
    </div>
  );
}
