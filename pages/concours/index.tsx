import { useEffect, useState } from "react";
import CtaBanner from "../../components/CommonComponents/banners/ctaBanner/CtaBanner";
import Footer from "../../components/CommonComponents/footer/Footer";
import HeroBanner from "../../components/CommonComponents/banners/herobanner/HeroBanner";
import MetaTags from "../../components/CommonComponents/meta/MetaTags";
import CenterAlignedContent from "../../components/CommonComponents/CenterAlignedContent/CenterAlignedContent";
import RedirectButton from "../../components/CommonComponents/callToActions/rediredtButton/RedirectButton";
import ImageSlider from "../../components/CommonComponents/sliders/imageSlider/ImageSlider";
import SecondBanner from "../../components/CommonComponents/banners/secondBanner/SecondBanner";
import LeftHeaderContent from "../../components/CommonComponents/leftHeaderContent/LeftHeaderContent";
import TextImageSection from "../../components/CommonComponents/textImageSection/TextImageSection";
import jsondataConcours from '../../components/CommonComponents/textImageSection/jsondataConcours.json'
import Header from "../../components/CommonComponents/header/header";
import jsondataConcoursPageImageSlider from '../../components/CommonComponents/sliders/imageSlider/jsondataConcoursPageImageSlider.json'
import BreadCrumb from "../../components/CommonComponents/breadcrumb/BreadCrumb";
import Advertisments from "../../components/CommonComponents/sliders/advertisments/Advertisments";
import CouncourEntrantURL from '../api/concourEntrantUrl'

export default function Concours() {

  let currentYear = new Date().getFullYear();

  const [concourEntrantFormLink,setConcourEntrantFormLink] = useState();

  // useEffect = (() => {
  //   get()
  // },[""])


  // get() => {
  //   const data = CouncourEntrantURL.CouncourEntrantURL.get;
  // }


  const breadCrumbDataArray = [{ 'name': "Home", 'link': "/" }, { 'name': "concours", 'link': "null" }];
  return (
    <div className="overflow-hidden bg-primary">

      <MetaTags
        metaTitle="Showcase of Excellence - Jaguar Concours Events!"
        metaDescription="Ensure authenticity and maintenance of your Jaguar at the Jaguar Car Club Concours, the ultimate showcase of pride and precision."
        image=""
        metaKeyword="Jaguar Car Club Of Victoria"
      />

      <Header />

      <HeroBanner
        heroImage="/images/ConcourImages/Intro-Image.webp"
        darkHeadingOne=""
        darkHeading={currentYear}
        lightHeading="concours"
        heroImageMobile="/images/ConcourImages/Intro-Image-Mobile.png"
      />
      <div className='flex justify-center relative top-[-10px]'>
        <BreadCrumb links={breadCrumbDataArray} />
      </div>
      <CenterAlignedContent
        lightTitleOne="How Proud are you"
        darkTitleOne="of your jaguar?"
        lightTitleTwo=""
        darkTitleTwo=""
        mainPara="Participate in our public competitions, Concours d'Elegance and CONCOURS D'ETAT public competitions to find the answer for yourself. These competitions have historical roots in the 17th-century French aristocracy when horse-drawn carriage parades were common. Over time, horse-drawn carriages were replaced by automobiles, and social gatherings turned into contests among passionate car owners where their cars were judged on how they looked."
      />

      <div className="justify-center flex lg:pt-[2rem] ">
        <div className="md:flex sm:grid justify-between ">
          {/* <div className="pb-2">
            <RedirectButton redirectButton=" Apply Now " directedlink="https://memberdesq.sportstg.com/index.cfm?fuseaction=registration_1&RegistrationMode=2&SubscriptionTypeID=278&OrgID=2037" target="_blank" TextType='' />
          </div> */}
          <div>
            <RedirectButton redirectButton=" view rules " directedlink="/concours/rules" target="" TextType=''/>
          </div>
        </div>
      </div>

      <div className="py-[3rem]">
        <ImageSlider jsonImagesName={jsondataConcoursPageImageSlider} />
      </div>

      <CenterAlignedContent
        lightTitleOne=" "
        darkTitleOne="CONCOURS D'ELEGANCE"
        lightTitleTwo=" is all About"
        darkTitleTwo="Authenticity"
        mainPara="Concours d’Elegance is all about the standard of your car, in original or restored to authentic condition, as JAGUAR produced it. The authenticity of your cherished jaguar will be judged as this event honors remarkable and exotic cars, both old and new. Concours d'Elegance events are held all over the world, and this is our opportunity to recognize and award our beloved jaguars."
      />

      <div className="justify-center flex 2xl:pt-[1rem] lg:pt-[2rem] md:pt-[2rem]">
        <div className="flex">
          <RedirectButton redirectButton=" Application Entry Form " directedlink="https://memberdesq.sportstg.com/index.cfm?fuseaction=registration_1&RegistrationMode=2&SubscriptionTypeID=278&OrgID=2037" target="_blank" TextType='' />
        </div>
      </div>

      <SecondBanner
        oldbanner="/images/ConcourImages/Wide-Image.webp"
        oldbannerMobile="/images/ConcourImages/Wide-Image-Mobile.png"
      />

      <CenterAlignedContent
        lightTitleOne=" "
        darkTitleOne="CONCOURS D'ETAT "
        lightTitleTwo=" is all About"
        darkTitleTwo="Maintenance"
        mainPara="Originality or authenticity are not considered in Concours d'Etat; rather, the cleanliness and condition of your Jaguar are.  The Concours d'Etat will assess your Jaguar's engine compartment, interior, exterior, boot, wheels, tires, lights, indicators, and horn."
      />

      <div className="justify-center flex 2xl:pt-[1rem] lg:pt-[2rem] md:pt-[2rem]">
        <div className="flex">
          <RedirectButton redirectButton=" Application Entry Form " directedlink="https://memberdesq.sportstg.com/index.cfm?fuseaction=registration_1&RegistrationMode=2&SubscriptionTypeID=278&OrgID=2037" target="_blank" TextType='' />
        </div>
      </div>


      <SecondBanner
        oldbanner="/images/ConcourImages/Wide-Image-Second.webp"
        oldbannerMobile="/images/ConcourImages/Wide-Image-Second-Mobile.png"
      />


      <div className="  2xl:ml-[9rem] md:pt-[3rem] pt-[2rem] md:container ">
        <div className="">
          <LeftHeaderContent
            lightTitleOne="What you"
            darkTitle="should know"
            lightTitleTwo="before you participate"
            para="For past participants and Members who are thinking about entering, the following car preparation advice is provided. The following advice is provided to help you, whether you are a first-time participant or looking to improve on your performance from last year. "
          />
        </div>
        <div className=" md:justify-start justify-center flex 3xl:ml-[3rem] 2xl:ml-[3rem] xl:ml-[6rem] md:ml-[3rem] md:first-letter: pt-[2rem] ">
          <RedirectButton redirectButton=" view concour rules" directedlink="/concours/rules" target="" TextType='' />
        </div>
      </div>

      <div className="relative pt-[2rem]  md:pb-[0rem] sm:pb-[2rem]">
        <TextImageSection jsondataName={jsondataConcours} />

         {/* <div className={`${styles.ConcoursRedirectButton} lg:absolute `}>
          <RedirectButton redirectButton=" View concour results" directedlink="/concours/results" target="" TextType='' />
        </div>  */}
      </div>

      <div className="pt-[2rem]">
        <CenterAlignedContent
          lightTitleOne="Honoring the "
          darkTitleOne="legacy of JCCV"
          lightTitleTwo="With Perpetual Awards"
          darkTitleTwo=""
          mainPara="One of the ways we honor our organization's history and longevity, as well as our members and their accomplishments, is through perpetual awards. These perpetual awards have become a focal point in our community because they have become a medium for celebrating and publicly validating the contributions and efforts of our community members."
        />
        <div className="justify-center flex 2xl:pt-[1rem] xl:pb-[1rem] lg:pt-[2rem] md:pt-[2rem] 2xl:pb-[3rem]  pb-[2rem]">
          <div className="flex">
            <RedirectButton redirectButton=" View perpetual results" directedlink="/concours/perpetual" target="" TextType='' />
          </div>
        </div>
      </div>

      {/* Advertisements */}
      {/* <Advertisments code="page#1" /> */}

      <CtaBanner
        bannerTextDark=' Become a member of our'
        bannerTextLight='community'
        ctabannerlaptop="/images/sportingPage/sportingCTADesktop.webp"
        ctabannerMobile="/images/sportingPage/sportingCTAMobile.webp"
        imageClass="bannerOuterLightGreen"
      />

      <Footer />
    </div>
  );
}
