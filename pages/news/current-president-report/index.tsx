import React, { useEffect, useState } from 'react'
import Image from "next/image"
import News from '../../api/news'
import Header from '../../../components/CommonComponents/header/header'
import MetaTags from '../../../components/CommonComponents/meta/MetaTags'
import WhiteContentCard from '../../../components/InnerPageComponents/WhiteContentCard/WhiteContentCard'
import BreadCrumb from '../../../components/CommonComponents/breadcrumb/BreadCrumb'
import ImageWithDetails from '../../../components/CommonComponents/cardSections/ImageWithDetailsCard/ImageWithDetails'
import moment from 'moment'
import HeaderSwitch from '../../../components/CommonComponents/headerswitch/HeaderSwitch';
import ParaContent from '../../../components/InnerPageComponents/paraContent/ParaContent';
import Footer from '../../../components/CommonComponents/footer/Footer';
import FristWordBoldTitle from '../../../components/TechTips/FristwordBoldTitle';
import PlaceHolder from '../../../helper/placeholder';
import Convert from '../../../helper/convert'

export default function CurrentPresidentReport() {
    
    const [news, setNews] = useState([])
    const [presedentReport, setPresedentReport] = useState<{ attributes:any }>()

    const myLoader = ({ src }: { src: any }) => {
        return `${src}`
        // return `${process.env.NEXT_PUBLIC_END_POINT}${src}`
    }

    useEffect(() => {
        get()
    },)

    const get = async () => {
        const newNews = await News.club.get.all()
        setNews(newNews)

        const presidentReport = await News.presidentReport.get.report()
        setPresedentReport(presidentReport)
    }

    const breadCrumbDataArray = [{ 'name': "Home", 'link': "/" }, { 'name': "News And Articles", 'link': "/news" }, { 'name': "News From the Club", 'link': `/news/club-news` }, { 'name': "President's Report", 'link': "null" }];

    return (
        <div className='bg-primary'>

            <Header />

            <MetaTags
                metaTitle = { presedentReport?.attributes.title + ` | Jaguar Car Club Of Victoria` }
                metaDescription = { presedentReport?.attributes.title }
                image = {presedentReport?.attributes.news_single_page_image.data && myLoader(presedentReport.attributes.news_single_page_image.data.attributes.url)}
                metaKeyword = { presedentReport?.attributes.title + ` | Jaguar Car Club Of Victoria`}
            /> 
            
            <div className="w-full pt-10">
                {/* <img src={backGroundImageSrc(news.attributes.image.data.attributes.url)} alt={news.attributes.title} className="w-full h-[400px] object-cover" /> */}
                {
                    presedentReport && presedentReport?.attributes.news_single_page_image.data ? 
                    <Image loader={myLoader} src={presedentReport?.attributes.news_single_page_image.data.attributes.url} alt={ presedentReport?.attributes.title } className="w-full h-full object-cover" width={0} height={0} />
                    : PlaceHolder.image.cover('JCCV', 'w-full h-[400px] object-cover')
                }
            </div>
            
            {/* <div className='text-white container mx-auto max-sm:px-3 italic font-semibold text-[18px]'>Geoff and Vice President Rob Lewis enjoying their time in the sun trackside at Winton &apos;22</div> */}

            <div className='flex justify-center relative 2xl:top-[0rem] lg:top-[1rem] md:top-[-6rem] top-[-4rem] white-text-padding'>
                
                <WhiteContentCard>

                    <div className="py-3">
                        <BreadCrumb links={breadCrumbDataArray} />
                    </div>

                    <div>
                        <HeaderSwitch text={presedentReport?.attributes.title} type="primary"/>
                    </div>
                    
                    <div>
                        <p> { Convert.html(presedentReport?.attributes.content) } </p>
                    </div>
                </WhiteContentCard>
            </div>


            <div className="container mx-auto max-sm:px-3 pb-7 max-sm:pb-5 md:pt-20">
                <FristWordBoldTitle boldtext="" normalText="Related articles" />
            </div>

            <div className="container mx-auto max-sm:px-3 gap-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {news.length > 0 && news.slice(0, 3).map((singleNews: any) => 
                <ImageWithDetails key={singleNews.id}
                    image={singleNews.attributes.image.data ? singleNews.attributes.image.data.attributes.url : false}
                    title={singleNews.attributes.title}
                    redirectLink={`/news/club-news/${singleNews.attributes.slug_url}`}
                    dateAvailability="visible"
                    date={moment(singleNews.attributes.published_date).format("DD MMM YY")}
                    description={singleNews.attributes.small_description}
                    onHoverExtendFromMiddleLine="extendFromMiddleLine"
                    redirectBtnText={'Read More'}
                    imageHeight={'fixedHeight'}
                />
                )}
            </div>

            <div className="pt-7">
                <Footer />
            </div>
        </div>
    )
}
