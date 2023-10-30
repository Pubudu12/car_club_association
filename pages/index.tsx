import { useEffect, useState } from "react";
import CtaBanner from "../components/CommonComponents/banners/ctaBanner/CtaBanner";
import FullWidthThreeBannerSection from "../components/CommonComponents/banners/FullWidthThreeBannerSection/FullWidthThreeBannerSection";
import FullWidthTwoBannerSection from "../components/CommonComponents/banners/FullWidthTwoBannerSection/FullWidthTwoBannerSection";
import TextLeftAlignedBanner from "../components/CommonComponents/banners/TextLeftAlignedBanner/TextLeftAlignedBanner";
import TextRightAlignedBanner from "../components/CommonComponents/banners/TextRightAlignedBanner/TextRightAlignedBanner";
import Footer from "../components/CommonComponents/footer/Footer";
import Header from "../components/CommonComponents/header/header";
import MetaTags from "../components/CommonComponents/meta/MetaTags";
import LeftOffsetSlider from "../components/CommonComponents/sliders/LeftOffsetSlider/LeftOffsetSlider";
import ClubEventsSection from "../components/homeComponents/ClubEventsSection/ClubEventsSection";
import HomeMainSlider from "../components/homeComponents/HomeMainSlider/HomeMainSlider";
import ThreeCardSection from "../components/homeComponents/SecondSection/ThreeCardSection";
import ImageWithDetails from "../components/CommonComponents/cardSections/ImageWithDetailsCard/ImageWithDetails";
import HomeApi from "./api/home";
import RedirectButton from "../components/CommonComponents/callToActions/rediredtButton/RedirectButton";
import SubTitleBlack from "../components/CommonComponents/subTitleComponent/SubTitleBlack";
import moment from "moment";
import Advertisments from "../components/CommonComponents/sliders/advertisments/Advertisments";
import UpcomingEventTItle from "../components/homeComponents/ClubEventsSection/upcomingEventTItle";

export default function Home() {
  const [clubeNewses, setClubNewses] = useState([]);
  const [models, setModels] = useState([]);

  useEffect(() => {
    get.clubNews();
    get.models();
  }, [""]);

  const get = {
    async clubNews() {
      const newClubNewses = await HomeApi.clubNews.get.all();
      setClubNewses(newClubNewses);
    },
    async models() {
      const newModels = await HomeApi.models.get.all();
      setModels(newModels);
    },
  };

  return (
    <div className="bg-secondary">
      <MetaTags
        metaTitle="Home | Welcome to Jaguar Car club of Victoria!"
        metaDescription="Ignite your passion for Jaguar by connecting with fellow enthusiasts nationwide."
        image=""
        metaKeyword="Jaguar Car Club Of Victoria"
      />

      <Header />

      <HomeMainSlider />

      <div id="clubNoticeBoard">
        {/* Club News Section */}
        <ThreeCardSection />

        {/* <div id='upcomingTrackEvents' className='lg:bottom-0 lg-relative top-[-4px]'>
          <FullWidthThreeBannerSection />
        </div> */}
      </div>

      <div className="clubEventBackground">
        {/* <div className='max-sm:px-3 container mx-auto pt-[5rem]'> */}
        {/* Upcoming title */}
        {/* <UpcomingEventTItle /> */}

        {/* Club events cards */}
        {/* <ClubEventsSection /> */}
        {/* </div> */}

        <div className="container mx-auto" id="tech-tips">
          <div
            id="newsFromTheClub"
            className={`flex justify-between pt-[5rem] pb-[2rem] mx-auto`}
          >
            <h1 className={`uppercase max-sm:text-center`}>
              <span className="font-bold">Tech</span> Tips
            </h1>
          </div>
        </div>

        <div>
          <LeftOffsetSlider>
            {clubeNewses.length > 0 &&
              clubeNewses.map((news: any) => (
                <ImageWithDetails
                  key={news.id}
                  image={
                    news.attributes.image.data
                      ? news.attributes.image.data.attributes.url
                      : false
                  }
                  title={news.attributes.title}
                  redirectLink={`/news/tech-tips/${news.attributes.slug_url}`}
                  dateAvailability=""
                  date={`${moment(news.attributes.published_date).format(
                    "DD"
                  )}th ${moment(news.attributes.published_date).format(
                    "MMM"
                  )} ${moment(news.attributes.published_date).format("YYYY")}`}
                  description={news.attributes.small_description}
                  onHoverExtendFromMiddleLine="extendFromMiddleLine"
                  redirectBtnText={"Read More"}
                  imageHeight={"fixedHeight"}
                />
              ))}
          </LeftOffsetSlider>
          <div className={`container mx-auto mt-4 pt-[2rem]`}>
            <RedirectButton
              redirectButton="view all news & articles"
              directedlink="/news/tech-tips"
              target=""
              TextType=""
            />
          </div>
        </div>
      </div>

      {/* Concour and winton two banners */}
      <FullWidthTwoBannerSection />

      {/* FIND WHAT YOU'RE LOOKING FOR Banner*/}
      <TextRightAlignedBanner />

      {/* <div id='exploreModels' className='background'>
        <div className='pt-[5rem] max-sm:pt-[4rem] max-sm:text-center'>
          <SubTitleBlack lightTitle="explore" darkTitle="models" lightTitleOne="" textPosition="start" />
        </div>

        <div className='py-16 max-sm:py-9'>
          <LeftOffsetSlider>
            {models.length > 0 && models.map((model: any) => <ImageWithDetails key={model.id}
              image={model.attributes.image.data ? model.attributes.image.data.attributes.url : false}
              title={model.attributes.name}
              redirectLink={`/models/model/${model.id}`}
              dateAvailability="hidden"
              date=""
              description={model.attributes.description}
              onHoverExtendFromMiddleLine="extendFromMiddleLine"
              redirectBtnText={'explore'}
              imageHeight={'fixedHeight'}
            />)}
          </LeftOffsetSlider>
          <div className={`container mx-auto mt-4 pt-[2rem]`}>
            <RedirectButton
              redirectButton="view all MODELS"
              directedlink="/models"
              target=''
              TextType=''
            />
          </div>
        </div>
      </div> */}

      {/* Merchandise banner */}
      <div id="merchandise">
        <TextLeftAlignedBanner />
      </div>

      {/* Advertisements */}
      <Advertisments />

      <CtaBanner
        bannerTextDark=" Become a member of our"
        bannerTextLight="community"
        ctabannerlaptop="/images/AboutUsImages/ctabanner.webp"
        ctabannerMobile="/images/AboutUsImages/cta-banner-mobile.webp"
        imageClass="bannerOuterLightGreen"
      />

      <Footer />
    </div>
  );
}

// export default Home;
