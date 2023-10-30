import Footer from "../../../components/CommonComponents/footer/Footer";
import Header from "../../../components/CommonComponents/header/header";
import MetaTags from "../../../components/CommonComponents/meta/MetaTags";
import HeroBanner from "../../../components/CommonComponents/banners/herobanner/HeroBanner";
import PageTables from "../../../components/CommonComponents/tables/PageTables";
import NoTable from "../../../components/CommonComponents/tables/NoTable";
import SubTitleBlack from "../../../components/CommonComponents/subTitleComponent/SubTitleBlack";
import CtaBanner from "../../../components/CommonComponents/banners/ctaBanner/CtaBanner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Winton from "../../api/winton";
import SmallWhiteCard from "../../../components/InnerPageComponents/SmallWhiteCard/SmallWhiteCard";
import WhiteCardSwitch from "../../../components/InnerPageComponents/SmallWhiteCardSwitch/WhiteCardSwitch";
import RedTitle from "../../../components/InnerPageComponents/SmallWhiteCardRed/RedTitle";
import MobileTableCard from "../../../components/CommonComponents/tables/MobileTableCard";

export default function MainSportingPage() {
    const router = useRouter()
    const { year } = router.query
    const [trophyWinners, setTrophyWinners] = useState<{ details: any }>()
    const [trackTimes, setTrackTimes] = useState<{ details: any }>()
    const [presentationDinner, setPresentationDinner] = useState<{ details: any }>()

    useEffect(() => {
        if (!year) return
        get.trackTimes(year)
        get.trophyWinners(year)
        get.presentationDinner(year)
    }, [year])

    const get = {
        async trophyWinners(year: any) {

            const newTrophyWinners = await Winton.get.trophyWinners(year)
            newTrophyWinners.length > 0 && setTrophyWinners(newTrophyWinners[0].attributes)
        },
        async trackTimes(year: any) {

            const newTrackTimes = await Winton.get.trackTimes(year)
            newTrackTimes.length > 0 && setTrackTimes(newTrackTimes[0].attributes)
        },
        async presentationDinner(year: any) {

            const newPresentationDinner = await Winton.get.presentationDinner(year)
            newPresentationDinner.length > 0 && setPresentationDinner(newPresentationDinner[0].attributes)
        }
    }

    return (
        <div className="overflow-hidden bg-primary">

            <MetaTags
                metaTitle="Winton Results | Jaguar Car Club Of Victoria"
                metaDescription="Winton Results | Jaguar Car Club Of Victoria"
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <Header />

            <HeroBanner
                heroImage="/images/sportingPage/Intro-Image-winton.webp"
                darkHeadingOne={year}
                darkHeading=""
                lightHeading="winton results"
                heroImageMobile="/images/sportingPage/IntroImageWintonMobile.webp"
            />

            <div className="pb-[2rem]">
                <SubTitleBlack
                    lightTitle="track"
                    darkTitle="times"
                    lightTitleOne=""
                    textPosition="center"
                />
            </div>

            {/* Track time dekstop table view */}
            <div className="pb-[5rem] displayOnDekstop">
                {trackTimes ? <PageTables headers={Object.keys(trackTimes.details[0]).slice(1)} rows={trackTimes.details} /> : <div className="text-center">No data</div>}
            </div>

            {/* Track time Mobile card view */}
            <div className="displayOnMobile">
                {
                    trackTimes?.details.map((row: any, index: null) =>  
                    {
                        console.log(row);
                        return (
                            <MobileTableCard key={index}>
                                <div className="pr-3 py-3">
                                    <div className="flex justify-between">
                                        <div className="">
                                            <div className="text-jaguarRed font-bold">
                                                Number
                                            </div>
                                            <div className="opacity-50 font-bold">
                                                {row.Number}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-jaguarRed font-bold">
                                                Time
                                            </div>
                                            <div className="opacity-50 font-bold">
                                                {row.Time}
                                            </div>
                                        </div>                                    
                                    </div> 
                                    <div className="py-3">
                                        <span className="font-bold text-lg">{row.Name}</span>
                                        <div className="opacity-50 text-[15px]">{row.Car}</div>
                                    </div> 
                                    <div>
                                        <div className="text-jaguarRed font-bold">Position</div>    
                                        <div className="text-jaguarRed font-bold text-3xl">{row.Position}</div>
                                    </div>  
                                </div>         
                            </MobileTableCard>
                        )
                    })
                }  
            </div>

            <div className="pb-[2rem] max-sm:pt-10">
                <SubTitleBlack
                    lightTitle=""
                    darkTitle="trophy"
                    lightTitleOne="winners"
                    textPosition="center"
                />
            </div>

            {/* Trophy winner dekstop table view */}
            <div className="pb-[5rem] displayOnDekstop">
                {trophyWinners ? <PageTables headers={Object.keys(trophyWinners.details[0]).slice(1)} rows={trophyWinners.details} /> : <div className="text-center">No data</div>}
            </div>

            {/* Trophy winner Mobile card view */}
            <div className="displayOnMobile">
                {
                    trophyWinners?.details.map((detail: any) => 
                    <MobileTableCard key={detail.id}>                        
                        <div className='font-bold uppercase text-lg pr-2 py-2'>{detail.Trophy}</div>

                        <div className='text-lg opacity-40 font-bold text-[16px]'>{detail.Name}</div>

                        <div className='text-lg pb-1 opacity-40 font-bold text-[16px]'>{detail.Car}</div>                        

                        <div className="pb-2">
                            <div className="text-jaguarRed font-bold text-lg">Time</div>
                            <div className="opacity-60 font-bold">{detail.Time}</div>
                        </div>
                    </MobileTableCard>
                )}
                
            </div>

            {/* Presenation Dinner Winners start */}
            <div className="pb-[2rem] max-sm:pt-10">
                <SubTitleBlack lightTitle="" darkTitle="Presentation Dinner" lightTitleOne="Raffle One" textPosition="center" />

                <div className="container mx-auto max-sm:px-3 py-11">
                    <div className="grid grid-cols-3 gap-3 lg:px-28 max-sm:grid-cols-1 max-sm:px-5">
                        {presentationDinner && presentationDinner.details.map((detail: any) => 
                            <SmallWhiteCard key={detail.id}>
                                <WhiteCardSwitch text={detail.Name} type="cardtitle" />
                                
                                <div className="pt-1 max-sm:pb-5">
                                    <WhiteCardSwitch text={detail.Place} type="light" />
                                </div>

                                <div className="bottom-0  items-end pb-2">
                                    <RedTitle fristLine={detail.Description} SecondLine={''} />
                                </div>
                            </SmallWhiteCard>
                            )}                        
                    </div>
                </div>
                {!presentationDinner && <div className="text-center">No data</div>}
            </div>

            <div>
                <CtaBanner
                    bannerTextDark=' Become a member of our'
                    bannerTextLight='community'
                    ctabannerlaptop="/images/sportingPage/sportingCTADesktop.webp"
                    ctabannerMobile="/images/sportingPage/sportingCTAMobile.webp"
                    imageClass="bannerOuterLightGreen"
                />
            </div>

            <Footer />
        </div>
    );
}
