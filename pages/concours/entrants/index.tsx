import CtaBanner from "../../../components/CommonComponents/banners/ctaBanner/CtaBanner";
import Footer from "../../../components/CommonComponents/footer/Footer";
import HeroBanner from "../../../components/CommonComponents/banners/herobanner/HeroBanner";
import MetaTags from "../../../components/CommonComponents/meta/MetaTags";
import Header from "../../../components/CommonComponents/header/header";
import Paragraph from "../../../components/CommonComponents/paragraph/Paragraph";
import SubTitleBlack from "../../../components/CommonComponents/subTitleComponent/SubTitleBlack";
import PageTables from "../../../components/CommonComponents/tables/PageTables"
import Concur from '../../api/concur'
import { useEffect, useState } from "react";
import moment from "moment/moment";
import Link from "next/link";
import BreadCrumb from "../../../components/CommonComponents/breadcrumb/BreadCrumb";
import SmallWhiteCard from "../../../components/InnerPageComponents/SmallWhiteCard/SmallWhiteCard";
import WhiteCardSwitch from "../../../components/InnerPageComponents/SmallWhiteCardSwitch/WhiteCardSwitch";
import RedTitle from "../../../components/InnerPageComponents/SmallWhiteCardRed/RedTitle";

export default function Concours() {
    let date = new Date();
    let currYear = date.getFullYear();

    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"concours",'link':"/"},{'name':`${currYear} concours entrants`,'link':"null"}];

    const [entrants, setEntrants] = useState([])

    useEffect(() => {
        get()
    }, [""])

    const get = async () => {
        const newEntrants = await Concur.entrants.get.all()
        setEntrants(newEntrants)
    }

    return (
        <div className="overflow-hidden bg-primary">
            <MetaTags
                metaTitle="Concour Entrants | Jaguar Car Club Of Victoria"
                metaDescription="Concour Entrants | Jaguar Car Club Of Victoria"
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <Header />

            <HeroBanner
                heroImage="/images/ConcourImages/Intro-Image.webp"
                darkHeadingOne={`${currYear} Concour`}
                darkHeading=""
                lightHeading="entrants"
                heroImageMobile="/images/ConcourImages/Intro-Image-Mobile.png"
            />
             <div className='flex justify-center relative top-[-10px]'>
                <BreadCrumb links={breadCrumbDataArray}/>
             </div>  

            <div className="flex justify-center uppercase font-normal text-red pt-[3rem] ">
                <Paragraph
                    centerMainPara="The confirmed entries are as follows"
                    centerPara=""
                />
            </div>

            <div className="displayOnDekstop">
                {entrants.length > 0 && entrants.map((entrant: any) => <div key={entrant.id}>
                    <div className="pt-[2rem] flex justify-center pb-[2rem]">
                        <SubTitleBlack
                            lightTitle=""
                            darkTitle={entrant.attributes.class.data.attributes.title}
                            lightTitleOne="Class"
                            textPosition=""
                        />
                    </div>

                    <div className="flex justify-center uppercase">
                        <Paragraph
                            centerMainPara={`${entrant.attributes.class.data.attributes.title} Class - Judged at the ${entrant.attributes.venue} on `}
                            centerPara={`${moment(entrant.attributes.date).format('dddd')} ${moment(entrant.attributes.date).format('D')}th ${moment(entrant.attributes.date).format('MMMM')} ${moment(entrant.attributes.date).format('YYYY')}`}
                        />
                    </div>

                    <div className="pt-[2rem] pb-[5rem]">
                        <PageTables
                            headers={Object.keys(entrant.attributes.details[0]).slice(1)}
                            rows={entrant.attributes.details}
                        />
                    </div>
                </div>)}
            </div>
           
            <div className="displayOnMobile">
                {entrants.length > 0 && entrants.map((entrant: any) => <div key={entrant.id}>
                    <div className="pt-[2rem]  flex justify-center pb-[2rem]">
                        <SubTitleBlack
                            lightTitle=""
                            darkTitle={entrant.attributes.class.data.attributes.title}
                            lightTitleOne="Class"
                            textPosition=""
                        />
                    </div>


                    <div className="flex justify-center uppercase">
                        <Paragraph
                            centerMainPara={`${entrant.attributes.class.data.attributes.title} Class - Judged at the ${entrant.attributes.venue} on `}
                            centerPara={`${moment(entrant.attributes.date).format('dddd')} ${moment(entrant.attributes.date).format('D')}th ${moment(entrant.attributes.date).format('MMMM')} ${moment(entrant.attributes.date).format('YYYY')}`}
                        />
                    </div>

                    <div className="pt-[2rem] pb-[5rem]">
                        <div className="container mx-auto max-sm:px-3 py-11">
                            <div className="grid grid-cols-3 gap-3 md:px-28 max-sm:grid-cols-1 max-sm:px-11">
                                {
                                    entrant.attributes.details.map((detail:any) => 
                                    <SmallWhiteCard key={detail.id}>
                                        <div className="font-bold text-2xl pt-1">{detail.name}</div>
                                        
                                        <div className="pt-2 text-grey-900">{detail.model}</div>

                                        <div className="text-grey-900 py-1">{detail.year}</div>
                                    </SmallWhiteCard>
                                )}
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>            

            <div className="flex justify-center uppercase ">
                <Paragraph
                    centerMainPara="If you have any other Concours questions, please"
                    centerPara="feel free to contact me."
                />
            </div>

            <div className="flex justify-center uppercase pt-[1rem]">
                <Paragraph
                    centerMainPara="Trevor Wilkinson"
                    centerPara="Chief Judge"
                />
            </div>

            <div className="flex justify-center uppercase pt-[2rem] pb-[3rem] font-normal text-xl">
                <Link href="mailto:chiefjudge@jagvic.org.au" className="text-jaguarRed">chiefjudge@jagvic.org.au</Link>
            </div>


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
