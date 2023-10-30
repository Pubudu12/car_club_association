import React, { useEffect, useState } from "react";
import Header from "../../CommonComponents/header/header";
import WhiteContentCard from "../../InnerPageComponents/WhiteContentCard/WhiteContentCard";
import FristWordBoldTitle from "../../TechTips/FristwordBoldTitle";
import ImageWithDetails from "../../CommonComponents/cardSections/ImageWithDetailsCard/ImageWithDetails";
import moment from "moment/moment";
import Footer from "../../CommonComponents/footer/Footer";
import styles from '../../InnerPageComponents/InnerPageComponents.module.scss';
import BreadCrumb from "../../CommonComponents/breadcrumb/BreadCrumb";
import MetaTags from "../../CommonComponents/meta/MetaTags";
import Convert from "../../../helper/convert"
import Image from "next/image";
import PlaceHolder from "../../../helper/placeholder"
import Link from "next/link";
import SeperatorDot from "../../CommonComponents/seperatorDot/SeperatorDot";

const ClubSingle = (props: any) => {
    const { news, newses, category, slug } = props

    const [isActiveId, setIsActiveId] = useState<any>(false);

    if (category === 'restoration') {        
        // console.log('::: > '+id)
        var partNumber = window.location.hash.slice(1)    
        // setIsActiveId(partNumber)    
    }             

    const detailInfo = async (code: any) => {
		setIsActiveId(code)
	}

    const contentClassname = isActiveId ? `` : `hidden`;

    useEffect(() => {
        if(news.attributes.parts){
            setIsActiveId(news.attributes.parts[0].title.replace(/\s/g, "_"))
        }
    },[])
    
    const myLoader = (params: any) => {
        const { src } = params
        return `${src}`
        // return `${process.env.NEXT_PUBLIC_END_POINT}${src}`
    }   

    const breadCrumbDataArray = [{ 'name': "Home", 'link': "/" }, { 'name': "News And Articles", 'link': "/news" }, { 'name': category, 'link': `/news/${category}` }, { 'name': news.attributes.title, 'link': "null" }];

    return (
        <div className='bg-primary'>

            <Header />

            <MetaTags
                metaTitle={`${news.attributes.title} | Jaguar Car Club Of Victoria`}
                metaDescription={news.attributes.small_description}
                image={news.attributes.image.data && news.attributes.image.data.attributes.url}
                metaKeyword={`${news.attributes.title} | Jaguar Car Club Of Victoria`}
            />

            {news.attributes &&
                <div className="w-full pt-[3rem] h-[600px] max-sm:h-[200px] object-cover">
                    {
                        news.attributes.news_single_page_image.data ? 
                        <Image loader={myLoader} src={news.attributes.news_single_page_image.data.attributes.url} alt={news.attributes.title} className="w-full" width={0} height={0} />
                        : PlaceHolder.image.cover('JCCV', 'w-full h-[400px] max-sm:h-[200px] object-cover')
                    }
                </div>
            }

            <div className='flex justify-center relative 2xl:top-[-8rem] lg:top-[-6rem] md:top-[-6rem] '>
                {news.attributes && <WhiteContentCard>

                    <div className="py-3">
                        <BreadCrumb links={breadCrumbDataArray} />
                    </div>

                    {/* News Title */}
                    <div className="max-sm:text-center">
                        <FristWordBoldTitle boldtext={news.attributes.title} normalText="" />
                    </div>

                    {/* Author Name */}
                    <div className={`${styles.authorName}`}>
                        {news.attributes.author}
                    </div>

                    {/* Tabs for restorations - 
                    Note: Tabs are active only in restorations, 
                    for all the other news types only the content is shown*/}

                    {news.attributes.parts && 
                        <div className="py-5">
                            <SeperatorDot>
                                <li>
                                    { 
                                        news.attributes.parts.map((part: any, index: number) =>
                                            <Link key={index} href={`/news/restoration/${slug}/#${part.title.replace(/\s/g, "_")}`} onClick={() => detailInfo(part.title.replace(/\s/g, "_"))}> {part.title}</Link>
                                        )
                                    }
                                </li>
                            </SeperatorDot>
                        </div>
                    }
                    
                    {news.attributes.parts && news.attributes.parts.map((part: any, index: number) => {
                           return(
                                isActiveId === part.title.replace(/\s/g, "_") && 
                                    <div key={index} className={`${contentClassname}`} >{Convert.html(part.content)}</div>                                   
                           )        
                        })                        
                    }

                    {/* News Content */}
                    <div><p className="py-6">{Convert.html(news.attributes.content)}</p></div>

                </WhiteContentCard>}

            </div>
            <div className="container mx-auto max-sm:px-3 pb-7 max-sm:pb-5 max-sm:text-center max-sm:pt-16">
                <FristWordBoldTitle boldtext="" normalText="Related articles" />
            </div>

            <div className="container mx-auto max-sm:px-3 gap-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {newses.length > 0 && newses.slice(0, 3).map((news: any) => <ImageWithDetails key={news.id}
                    image={news.attributes.image.data ? news.attributes.image.data.attributes.url : false}
                    title={news.attributes.title}
                    redirectLink={`/news/${category}/${news.attributes.slug_url}`}
                    dateAvailability="visible"
                    date={moment(news.attributes.published_date).format("DD MMM YY")}
                    description={news.attributes.small_description}
                    onHoverExtendFromMiddleLine="extendFromMiddleLine"
                    redirectBtnText={'Read More'}
                    imageHeight={'fixedHeight'}
                />)}
            </div>


            <div className="pt-7">
                <Footer />
            </div>
        </div>
    )
}

export default ClubSingle