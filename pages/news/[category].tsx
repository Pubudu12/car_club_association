import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./NewsList.module.scss";
import Footer from "../../components/CommonComponents/footer/Footer";
import Header from "../../components/CommonComponents/header/header";
import MetaTags from "../../components/CommonComponents/meta/MetaTags";
import Longcard from "../../components/CommonComponents/cardSections/ImageLongCard/Longcard";
import ImageWithDetails from "../../components/CommonComponents/cardSections/ImageWithDetailsCard/ImageWithDetails";
import News from "../api/news";
import moment from "moment";
import BreadCrumb from "../../components/CommonComponents/breadcrumb/BreadCrumb";
import FristWordBoldTitle from "../../components/TechTips/FristwordBoldTitle";

function NewsList() {
    const router = useRouter()
    const { category } = router.query
    const [newses, setNewses] = useState<any[]>([])

    useEffect(() => {
        if (category) get()
    }, [category])

    let categoryText:string = "News From The club";
    let metaTitleCon:string = "";
    let metaDescriptionCon:string="";

    if (category === "club-news") {
        metaTitleCon="Inside the Club - Latest News"
        metaDescriptionCon=" Stay informed and connected with the latest club developments and happenings."
                    
    } else if (category === "catalog") { 
        metaTitleCon="Jaguar Model CAT-A-LOG Magazine Archive"
        metaDescriptionCon=" Explore the depths of CAT-A-LOG Magazine Archive with the leading collectors and enthusiasts."
        categoryText = 'CAT-A-LOG Magazine Archive';
                  
    } else if (category === "restoration") {
        metaTitleCon="Classic Revivals - Jaguar Restoration"
        metaDescriptionCon="Revive history and bring new life to your classic with the restoration specialists."
        categoryText = "Restorations";
        
    } else if (category === "tech-tips") {
        metaTitleCon="Empower Your Jaguar - Tech Tips"
        metaDescriptionCon="Unlock tech tricks and stay ahead of the game with the expert community."
        categoryText = 'Tech Tips';
    }

    const get = async () => {
        if (category === "club-news") {
            const newNewses = await News.club.get.all()
            const presidentReport = await News.presidentReport.get.report()
            
            const mergedData = [...newNewses, presidentReport];

            setNewses(mergedData);
            // setNewses(newNewses)            
        } else if (category === "catalog") { 
            const newNewses = await News.catalogs.get.all()
            setNewses(newNewses)                       
        } else if (category === "restoration") {
            const newNewses = await News.restorastion.get.all()
            setNewses(newNewses)            
        } else if (category === "tech-tips") {
            const newNewses = await News.techTip.get.all()
            setNewses(newNewses)            
        }
    }

    var count = 0;

    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"news and articles",'link':"/news"},{'name':categoryText,'link':"null"}];

    return (
        <div>
            <Header />

            <MetaTags
                metaTitle={`${metaTitleCon}`}
                metaDescription={`${metaDescriptionCon}`}
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <div className={`pt-24 mb-9 ${styles.parallex}`}>
                <div className="container mx-auto">
                    <div className="pt-7 pb-11 max-sm:text-center">
                        <FristWordBoldTitle boldtext={`${categoryText}`} normalText="" />

                        <div className='pt-3'>
                            <BreadCrumb links={breadCrumbDataArray}/>
                        </div>  
                    </div>

                    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 displayOnDekstop pb-7">
                        {newses.length > 0 && newses.map((news: any,index:number) => {
                            count = index + 1
                            var sq = Math.sqrt(count);                          
                            
                            var url =  news.attributes.slug_url ? `/news/${category}/${news.attributes.slug_url}` : `/news/current-president-report`;
                            
                            return(
                                (category != 'catalog') ? 
                                    <div key={index} className={(count == sq*sq) ? 'col-span-2':''}>
                                        { 
                                            (count == sq*sq) ? 
                                            <>
                                                <Longcard
                                                    image={news.attributes.image.data ? news.attributes.image.data.attributes.url : false}
                                                    title={news.attributes.title}
                                                    redirectLink = {url}
                                                    description={news.attributes.description}
                                                    date={moment(news.attributes.published_date).format("D MMMM Y")}
                                                />
                                            </>
                                            :
                                            <>
                                                <ImageWithDetails
                                                    image={news.attributes.image.data ? news.attributes.image.data.attributes.url : false}
                                                    title={news.attributes.title}
                                                    redirectLink = {url}
                                                    description={news.attributes.description}
                                                    date={moment(news.attributes.published_date).format("D MMMM Y")}
                                                    parts={category === "restoration" ? news.attributes.parts : ''}
                                                    dateAvailability={''}
                                                    onHoverExtendFromMiddleLine={''}
                                                    slug = { news.attributes.slug_url }
                                                    redirectBtnText={'Read More'}
                                                    category={category}
                                                    imageHeight={'fixedHeight'}
                                                />
                                            </>
                                        }
                                    </div>
                                :
                                <div>
                                    <ImageWithDetails
                                        image={news.attributes.image.data ? news.attributes.image.data.attributes.url : false}
                                        title={news.attributes.title}
                                        redirectLink={`${news.attributes.link}`}
                                        description={news.attributes.description}
                                        date={moment(news.attributes.published_date).format("D MMMM Y")}
                                        dateAvailability={''}
                                        onHoverExtendFromMiddleLine={''}
                                        redirectBtnText={'Read More'}
                                        category={category}
                                        imageHeight={''}
                                        redirectLinkTarget={'_target'}
                                    />
                                </div>
                            )
                        }
                        )}
                    </div>

                    <div className="displayOnMobile grid grid-cols-1 gap-2 pb-3">
                        {newses.length > 0 && newses.map((news: any) => 
                        
                            <div key={news.id} className={`pb-2`}>
                                <ImageWithDetails
                                    image={news.attributes.image.data ? news.attributes.image.data.attributes.url : false}
                                    title={news.attributes.title}
                                    redirectLink={`/news/${category}/${news.attributes.slug_url}`}
                                    description={news.attributes.description}
                                    date={moment(news.attributes.published_date).format("D MMMM Y")}
                                    dateAvailability={''}
                                    onHoverExtendFromMiddleLine={''}
                                    category={category}
                                    redirectBtnText={'Read More'}
                                    imageHeight={category === 'catalog' ? '' : 'fixedHeight'}
                                />
                            </div>
                            
                        )}
                    </div>
                </div>
            </div>


            <div className="">
                <Footer />
            </div>

        </div>
    )
}

export default NewsList;