import React from "react";
import CenterAlignedContent from "../../CommonComponents/CenterAlignedContent/CenterAlignedContent";
import RedirectButton from "../../CommonComponents/callToActions/rediredtButton/RedirectButton";
import styles from "./TwoGridBanner.module.scss";

const TwoGridBanner = () => {
  return (
    <div id="twoGridBanner" className={`${styles.outerBannerDiv} `}>
      <div className={`${styles.innerBannerDiv} grid md:grid-cols-2 `}>
        <div className={`${styles.bannerOne}`}>
          <div className={`${styles.bannerCenterText}`}>
            <CenterAlignedContent
              lightTitleOne="A Proud member of MSCA"
              darkTitleOne=""
              lightTitleTwo=""
              darkTitleTwo=""
              mainPara="Participate in racing events sponsored by the MSCA and challenge your Jaguar alongside competitors from other clubs"
            />

            <div className=" flex justify-center">
              <RedirectButton
                redirectButton=" learn more"
                directedlink="https://msca.net.au/"
                target="_blank"
                TextType=""
              />
            </div>
          </div>
        </div>

        <div className={`${styles.bannerTwo} pb-[3rem]`}>
          <div className={`${styles.bannerCenterText}`}>
            <CenterAlignedContent
              lightTitleOne="Witness the beautiful memories"
              darkTitleOne=""
              lightTitleTwo=""
              darkTitleTwo=""
              mainPara="Check out our photos from the racing events to get a glimpse of some of our favorite moments."
            />
          <div className="flex justify-center">
          <RedirectButton
              redirectButton=" view gallery "
              directedlink="https://www.flickr.com/photos/102103696@N06/"
              target="_blank"
              TextType=""
            />
          </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoGridBanner;
