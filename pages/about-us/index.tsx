import CtaBanner from "../../components/CommonComponents/banners/ctaBanner/CtaBanner";
import FindUsHereBtn from "../../components/CommonComponents/callToActions/findUsHereBtn/FindUsHereBtn";
import Footer from "../../components/CommonComponents/footer/Footer";
import CenterAlignedContent from "../../components/CommonComponents/CenterAlignedContent/CenterAlignedContent";
import HeroBanner from "../../components/CommonComponents/banners/herobanner/HeroBanner";
import ImageSlider from "../../components/CommonComponents/sliders/imageSlider/ImageSlider";
import LeftHeaderContent from "../../components/CommonComponents/leftHeaderContent/LeftHeaderContent";
import MetaTags from "../../components/CommonComponents/meta/MetaTags";
import RedirectButton from "../../components/CommonComponents/callToActions/rediredtButton/RedirectButton";
import TextImageSection from "../../components/CommonComponents/textImageSection/TextImageSection";
import jsondataAboutUs from "../../components/CommonComponents/textImageSection/jsondataAboutUs.json";
import Header from "../../components/CommonComponents/header/header";
import jsondataAboutUsImageSlider from "../../components/CommonComponents/sliders/imageSlider/jsondataAboutUsImageSlider.json";
import jsondataAboutUsSecondImageSlider from "../../components/CommonComponents/sliders/imageSlider/jsondataAboutUsSecondImageSlider.json";
import BreadCrumb from "../../components/CommonComponents/breadcrumb/BreadCrumb";
import styles from "./AboutUs.module.scss";

export default function AboutUs() {
  const breadCrumbDataArray = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "null" },
  ];

  return (
    <div className="overflow-hidden bg-primary">
      <MetaTags
        metaTitle="Who We Are - Our Story, Purpose And Team!"
        metaDescription="Fuel your knowledge about us and our passion for Jaguars. Explore our story, purpose and the enthusiastic team behind the Jaguar - car club of Victoria."
        image=""
        metaKeyword="Jaguar Car Club Of Victoria"
      />

      <Header />

      <HeroBanner
        heroImage="/images/AboutUsImages/hero-image.webp"
        darkHeadingOne=""
        darkHeading="us"
        lightHeading="about"
        heroImageMobile="/images/AboutUsImages/hero-image-mobile.webp"
      />

      <div className="flex justify-center relative top-[-10px]">
        <BreadCrumb links={breadCrumbDataArray} />
      </div>

      <div className={` ${styles.centerTextPadding} `}>
        <div className={`text-center uppercase 2xl:pt-[3rem] pt-[3rem] `}>
          <h2 className={`text-4xl max-sm:text-xl pb-2`}>Welcome to the </h2>
          <h2 className={`text-4xl max-sm:text-xl font-bold`}>
            Jaguar car club of victoria
          </h2>
        </div>

        <div
          className={`${styles.headerpara} flex justify-center text-center pt-[3rem] pb-[3rem]`}
        >
          <p>
            We bring together Jaguar enthusiasts who seek the stimulation and
            enjoyment of this wonderful marque of engineering excellence to
            preserve fond memories while creating new ones.
          </p>
        </div>
      </div>

      <div id="aboutusImageSlider" className="py-[3rem]">
        <ImageSlider jsonImagesName={jsondataAboutUsImageSlider} />
      </div>

      <CenterAlignedContent
        lightTitleOne="it all "
        darkTitleOne="started"
        lightTitleTwo="in an apartment in"
        darkTitleTwo="prahran"
        mainPara="In 1962, a group of Jaguar enthusiasts gathered in an apartment in Prahran to share their love of this stylish and sophisticated marque and this gathering marks the very beginning of the Jaguar Car Club of Victoria. These trailblazing, passionate individuals elected Ian Harvie as president, Jack Whitehead as vice president, Ian Cliff as treasurer, and Ron Hann as secretary/editor to serve on the inaugural committee, cementing us as Australia's first-ever Jaguar Car Club."
      />

      <div className="py-[3rem]">
        <ImageSlider jsonImagesName={jsondataAboutUsSecondImageSlider} />
      </div>

      <div id="fuelThePassion">
        <LeftHeaderContent
          lightTitleOne="Now it’s the filling station to"
          darkTitle="Fuel your Passion"
          lightTitleTwo=""
          para="You are what brings Jaguars to life, and we are all about connecting people from all walks of life with varying interests in the marque.  Even if you don't own a Jaguar, you are welcome to attend any club events or meetings to express your admiration for the brand and to fuel and ignite your passion. You can always take your Jaguar experience to the next level by becoming a member to receive technical knowledge and many other benefits along with our monthly magazine CAT-A-LOG, which features informative articles, technical advice, sporting and social events, and much more."
        />
      </div>

      <div id="familyFriendly" className="flex justify-center relative ">
        <div className="">
          <TextImageSection jsondataName={jsondataAboutUs} />
          <div className={`${styles.findBtn} absolute `}>
            <FindUsHereBtn
              findUsText="Find us here"
              findus="https://goo.gl/maps/Vc8GPZCasJznkaBy8"
              btnLogo="/images/AboutUsImages/location-logo.svg"
            />
          </div>
        </div>
      </div>

      <div id="sporting">
        <div className="pt-[3rem]">
          <CenterAlignedContent
            lightTitleOne="get behind the wheel and"
            darkTitleOne="ahead of the competition"
            lightTitleTwo=""
            darkTitleTwo=""
            mainPara="Our members can participate in a variety of motorsports events in a safe and controlled environment on one of Victoria's many race circuits, including Winton, Phillip Island, Sandown and The Bend (SA). Our affiliation with the Marque Sports Car Association (MSCA) means that our members can also compete in a variety of interclub competitions, such as speed trials, regularity time trials, hill climbs, come-and-try days, driver training sessions, and sprints for those who enjoy engaging in friendly competitions to fuel their passion."
          />
        </div>

        <div className=" lg:pt-[2rem] md:pt-[2rem] md:pb-[2rem] 2xl:pb-[3rem] pb-[2rem] ">
          <div className="md:flex md:justify-center ">
            <div className="md:flex sm:grid xl:w-2/6 lg:w-2/4 md:w-3/5 justify-between">
              <div className="pb-[1rem] pt-[1rem] centerRedirectButton">
                <RedirectButton
                  redirectButton=" view club calendar "
                  directedlink="/calendar"
                  target=""
                  TextType=""
                />
              </div>

              <div className="pb-[1rem] pt-[1rem] centerRedirectButton">
                <RedirectButton
                  redirectButton=" mcsa page "
                  directedlink="https://msca.net.au/"
                  target="_blank"
                  TextType=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advertisements */}
      {/* <Advertisments code="about" /> */}

      <div id="ourMeetingPlace">
        <CtaBanner
          bannerTextDark=" Become a member of our"
          bannerTextLight="community"
          ctabannerlaptop="/images/AboutUsImages/ctabanner.webp"
          ctabannerMobile="/images/AboutUsImages/cta-banner-mobile.webp"
          imageClass="bannerOuterLightGreen"
        />
      </div>

      <Footer />
    </div>
  );
}
