import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageWithDetails from "../../cardSections/ImageWithDetailsCard/ImageWithDetails";
import RedirectButton from "../../callToActions/rediredtButton/RedirectButton";
import styles from "../LeftOffsetSlider/LeftOffsetSlider.module.scss";
import News from "../../../../pages/api/news";
import moment from "moment"

const LeftOffsetSlider = (props: any) => {
  const { category } = props;
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1, // Adjust this based on your preference
    slidesToShow: 4,   // 3.875 - sort of approximation to pull slides back to match the container above, may require adjustment for diferent breakpoints.
    accessibility: true,
    // centerMode:true,
    // centerPadding:"90px",
    variableWidth: false,
    initialSlide: 0,
    focusOnSelect: false,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: true,
        },
      },
    ],
  };
  
  const [newses, setNewses] = useState<any[]>([]);

  useEffect(() => {
    get();
  }, [""]);

  const get = async () => {
    if (category === "club-news") {
        const newNewses = await News.club.get.all();
        const presidentReport = await News.presidentReport.get.report()
            
        const mergedData = [...newNewses, presidentReport];

        setNewses(mergedData);
        // setNewses(newNewses);
    } else if (category === "catalog") {
      const newNewses = await News.catalogs.get.all();
      setNewses(newNewses);
    } else if (category === "restoration") {
      const newNewses = await News.restorastion.get.all();
      setNewses(newNewses);
    } else if (category === "tech-tips") {
      const newNewses = await News.techTip.get.all();
      setNewses(newNewses);
    }
  };

  return (
    <div id="LeftOffsetSlider">
      <Slider
        {...sliderSettings}
        className={`${styles.outerSlider} pt-5 max-sm:pl-[rem] container mx-auto `}
      >
        {newses.length > 0 &&
          newses.map((news: any) => (
            <ImageWithDetails
              key={news.id}
              image={
                news.attributes.image.data
                  ? news.attributes.image.data.attributes.url
                  : false
              }
              title={news.attributes.title}
              // redirectLink={category === "catalog" ? `${news.attributes.link}` : `/news/${category}/${news.attributes.slug_url}`}
              redirectLink={category === "catalog"
                    ? `${news.attributes.link}`
                    : news.attributes.slug_url
                    ? `/news/${category}/${news.attributes.slug_url}`
                    : `/news/current-president-report` 
                }
              redirectLinkTarget={category === "catalog" ? "_blank" : ""}
              dateAvailability={category === "club-news" || category === "tech-tips" ? "" : "hidden"}
              date={category === "club-news" || category === "tech-tips" ? `${moment(news.attributes.published_date).format('DD')}th ${moment(news.attributes.published_date).format('MMM')} ${moment(news.attributes.published_date).format('YYYY')}` : "" }
              parts={category === "restoration" ? news.attributes.parts : ""}
              descriptionAvailability = { category != "catalog" ? "" : "hidden" }
              description={news.attributes.small_description}
              onHoverExtendFromMiddleLine="extendFromMiddleLine"
              redirectBtnText={
                category === "catalog"
                  ? "View"
                  : `${category === "restoration" ? "Read Story" : "Read More"}`
              }
              imageHeight={category === "catalog" ? "" : "fixedHeight"}
              category={category}
            />
          ))}
      </Slider>

      <div className={`container mx-auto pt-[2rem]`}>
        <RedirectButton
          redirectButton="View All"
          directedlink={`/news/${category}`}
          target=""
          TextType=""
        />
      </div>
    </div>
  );
};

export default LeftOffsetSlider;
