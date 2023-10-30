import React, { useEffect, useState } from "react";
import RedirectButton from "../../CommonComponents/callToActions/rediredtButton/RedirectButton";
import centerAlignStyles from "../../CommonComponents/CenterAlignedContent/CenterAlignedContent.module.scss";
import styles from "./ThreeCardSection.module.scss";
import Home from "../../../pages/api/home";
import News from "../../../pages/api/news";
import moment from "moment";
import Link from "next/link";
import Convert from "../../../helper/convert";

const ThreeCardSection = () => {
  // const [newses, setNewses] = useState([])
  const [newses, setNewses] = useState<any[]>([]);

  useEffect(() => {
    get();
  }, [""]);

  const get = async () => {
    const newNewses = await Home.noticeBoard.get.all();
    const presidentReport = await News.presidentReport.get.report();

    const mergedData = [...newNewses, presidentReport];

    setNewses(mergedData);
  };
  return (
    <div
      id="homeSecondSection"
      className={`${styles.backgroundImage} relative`}
    >
      <div>
        <div className={`max-sm:px-3 container mx-auto`}>
          <div className={`flex justify-center max-sm:pt-20`}>
            <h1 className={`uppercase ${styles.sectionalTopic}`}>
              {" "}
              <span className="font-bold">News</span> from the club
            </h1>
          </div>

          <div
            className={`grid grid-cols-3 gap-3 max-sm:grid-cols-1 pt-10 `}
          >
            {newses.length > 0 &&
              newses.map((news: any) => (
                <Link
                  href={news.attributes.slug_url ? `/news/club-news/${news.attributes.slug_url}` : `/news/current-president-report`}
                  key={news.id}
                  className="scale-100"
                >
                  <div
                    className={`${styles.trasparentCard} p-6 hover:bg-white transition delay-75 duration-100 ease-in `}
                  >
                    <div>
                      <h2
                        className={`uppercase ${styles.h2_title} hover:lg:text-[#9E1B32]`}
                      >{`${news.attributes.title} - ${moment(
                        news.attributes.published_date
                      ).format("MMMM YYYY")}`}</h2>

                      <div
                        className={`py-4 ${styles.card_content} fontFeatureSetting`}
                      >
                        {news.attributes.small_description}
                      </div>

                      <div className="max-sm:pt-2 pt-4">
                          <RedirectButton
                            redirectButton="Read More"
                            directedlink={news.attributes.slug_url ? `/news/club-news/${news.attributes.slug_url}` : `/news/current-president-report`}
                            target=""
                            TextType=""
                          />
                      </div>
                    </div>
                  </div>
                 </Link>
              ))}
          </div>
        </div>

        <div className="py-20">
          {/* <CenterAlignedContent
                        lightTitleOne="Six Decades of igniting"
                        darkTitleOne="Jaguar Enthusiasts"
                        lightTitleTwo=""
                        darkTitleTwo=""
                        mainPara="We've come a long way in bringing Jaguar lovers together since our first meeting in a Prahran apartment in 1962 and with our passionate growing community, we have no plans in shifting the gears."
                    /> */}

          {/* ----------------six decades of igniting jaguar enthusiasts------------------- */}

          <div id="jaguar-enthusiasts" className={`2xl:pt-[3rem] pt-[2rem]`}>
            <div
              className={`${centerAlignStyles.maintitlediv} flex justify-center text-center uppercase lg:pt-[2rem]`}
            >
              <h1 className={`${centerAlignStyles.maintitle}`}>
                {" "}
                Six Decades of igniting{" "}
                <span className={`${centerAlignStyles.darktitleone}`}>
                  Jaguar Enthusiasts
                </span>
              </h1>
            </div>

            <div
              className={`${centerAlignStyles.headerpara} flex justify-center text-center 2xl:pt-[2rem] pt-[1rem] pb-[1rem]`}
            >
              <p>
                We&apos;ve come a long way in bringing Jaguar lovers together
                since our first meeting in a Prahran apartment in 1962 and with
                our passionate growing community, we have no plans in shifting
                the gears.
              </p>
            </div>
          </div>

          <div className={`justify-center flex lg:pt-[2rem] `}>
            <div
              className={`md:flex sm:grid  xl:w-1/5 lg:w-2/4 md:w-3/5 justify-center`}
            >
              <RedirectButton
                redirectButton=" Our story "
                directedlink="/about-us"
                target=""
                TextType=""
              />
            </div>
          </div>
        </div>

        {/* <div className={`max-sm:px-3 container mx-auto flex justify-between max-sm:flex-col max-sm:text-center pt-10 pb-[2rem]`}>
                    <h1 className={`uppercase ${styles.sectionalTopic}`}>Upcoming Club <span className="font-bold">events</span></h1>
                    <div className="flex items-end pb-2 max-sm:pt-4 justify-center">
                        <RedirectButton redirectButton=" view calendar " directedlink="/calendar" target="" TextType=''/>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default ThreeCardSection;
