import React from "react";
import HeroBanner from "../../components/CommonComponents/banners/herobanner/HeroBanner";
import BreadCrumb from "../../components/CommonComponents/breadcrumb/BreadCrumb";
import Footer from "../../components/CommonComponents/footer/Footer";
import Header from "../../components/CommonComponents/header/header";
import MetaTags from "../../components/CommonComponents/meta/MetaTags";
import LeftOffNonTitle from "../../components/CommonComponents/sliders/NonTitleSlider/LeftOffNonTitle";
import FristWordBoldTitle from "../../components/TechTips/FristwordBoldTitle";

import styles from "./newsarticals.module.scss";

function NewsArticals() {
  const breadCrumbDataArray = [
    { name: "Home", link: "/" },
    { name: "news and articles", link: "null" },
  ];
  return (
    <div>
      <MetaTags
        metaTitle="Beyond The Headlines - News and Articles!"
        metaDescription=" Keep up on the latest industry news and expert insights with our curated collection of articles and updates. "
        image=""
        metaKeyword="Jaguar Car Club Of Victoria"
      />

      <Header />

      <div className={`${styles.parallex} `}>
        <HeroBanner
          heroImage="/images/NewsAndArticles/heroImage.webp"
          darkHeading=""
          lightHeading="AND ARTICLES"
          heroImageMobile="/images/NewsAndArticles/heroImageMobile.webp"
          darkHeadingOne="NEWS"
        />
        <div className="flex justify-center relative top-[-10px]">
          <BreadCrumb links={breadCrumbDataArray} />
        </div>

        <div className="pt-7">
          <div className="pb-[4rem]">
            <div className="container mx-auto py-3">
              <FristWordBoldTitle boldtext="News" normalText="from the club" />
            </div>

            <LeftOffNonTitle category={"club-news"} />
          </div>

          <div className="pb-[4rem]">
            <div className="container mx-auto py-3">
              <FristWordBoldTitle boldtext="Restorations" normalText="" />
            </div>
            <LeftOffNonTitle category={"restoration"} />
          </div>

          <div className="pb-[4rem]">
            <div className="container mx-auto py-3">
              <FristWordBoldTitle
                boldtext="tech tips"
                normalText="from our members"
              />
            </div>
            <LeftOffNonTitle category={"tech-tips"} />
          </div>

          <div className="pb-[5rem]">
            <div className="container mx-auto py-3">
              <FristWordBoldTitle boldtext="CAT-A-LOG" normalText="MAGAZINE" />
            </div>
            <LeftOffNonTitle category={"catalog"} />
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Footer />
      </div>
    </div>
  );
}
export default NewsArticals;
