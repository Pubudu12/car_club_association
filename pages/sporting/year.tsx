import React, { useEffect, useState } from 'react';
import HeroBanner from '../../components/CommonComponents/banners/herobanner/HeroBanner';
import Footer from '../../components/CommonComponents/footer/Footer';
import Header from '../../components/CommonComponents/header/header';
import MetaTags from '../../components/CommonComponents/meta/MetaTags';
import SmallWhiteCard from '../../components/InnerPageComponents/SmallWhiteCard/SmallWhiteCard';
import RedTitle from '../../components/InnerPageComponents/SmallWhiteCardRed/RedTitle';
import { useRouter } from 'next/router'
import Concur from '../api/concur';
import CtaBanner from '../../components/CommonComponents/banners/ctaBanner/CtaBanner';  

function IndividualPerpetual() {
    const router = useRouter()
    const [perpetuals, setPertuals] = useState<any[]>([])
    const { trophy_id: trophyId } = router.query

    useEffect(() => {
        if (trophyId) get()
    }, [trophyId])

    const get = async () => {
        const newPerpetuals = await Concur.trophies.get.trophy(trophyId)
        // console.log(newPerpetuals)
        setPertuals(newPerpetuals)
    }

    console.log(perpetuals)

    return (
        <div className='bg-primary'>

            <Header />

            <MetaTags
                metaTitle="Perpetual Trophies - Individual | Jaguar Car Club Of Victoria"
                metaDescription="Perpetual Trophies - Individual | Jaguar Car Club Of Victoria"
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <HeroBanner
                heroImage="/images/ConcourImages/Intro-Image.webp"
                darkHeadingOne=""
                darkHeading="Trophies - Individual"
                lightHeading="Perpetual"
                heroImageMobile="/images/ConcourImages/Intro-Image-Mobile.png"
            />


            {perpetuals.length > 0 && <div className='text-center max-sm:px-4 md:px-3'>
                <div className='uppercase text-4xl'><span
                    className='text-bold'>{perpetuals[0].attributes.trophy.data.attributes.name}</span></div>
                <div>{perpetuals[0].attributes.trophy.data.attributes.description}</div>
            </div>
            }

            <div className="container mx-auto max-sm:px-3 pt-12">
                <div className="grid grid-cols-6 gap-2 max-sm:grid-cols-1">
                    <SmallWhiteCard>
                        <div className="flex pt-2 pb-28">
                            <div className='uppercase text-lg pr-2'>Year</div>
                            <div className='font-bold text-lg'>4343</div>
                        </div>

                    </SmallWhiteCard>
                    <SmallWhiteCard>
                        <div className="flex pt-2 pb-28">
                            <div className='uppercase text-lg pr-2'>Year</div>
                            <div className='font-bold text-lg'>4343</div>
                        </div>

                    </SmallWhiteCard>
                    <SmallWhiteCard>
                        <div className="flex pt-2 pb-28">
                            <div className='uppercase text-lg pr-2'>Year</div>
                            <div className='font-bold text-lg'>4343</div>
                        </div>

                    </SmallWhiteCard>
                    <SmallWhiteCard>
                        <div className="flex pt-2 pb-28">
                            <div className='uppercase text-lg pr-2'>Year</div>
                            <div className='font-bold text-lg'>4343</div>
                        </div>

                    </SmallWhiteCard><SmallWhiteCard>
                        <div className="flex pt-2 pb-28">
                            <div className='uppercase text-lg pr-2'>Year</div>
                            <div className='font-bold text-lg'>4343</div>
                        </div>

                    </SmallWhiteCard><SmallWhiteCard>
                        <div className="flex pt-2 pb-28">
                            <div className='uppercase text-lg pr-2'>Year</div>
                            <div className='font-bold text-lg'>4343</div>
                        </div>

                    </SmallWhiteCard><SmallWhiteCard>
                        <div className="flex pt-2 pb-28">
                            <div className='uppercase text-lg pr-2'>Year</div>
                            <div className='font-bold text-lg'>4343</div>
                        </div>

                    </SmallWhiteCard><SmallWhiteCard>
                        <div className="flex pt-2 pb-28">
                            <div className='uppercase text-lg pr-2'>Year</div>
                            <div className='font-bold text-lg'>4343</div>
                        </div>

                    </SmallWhiteCard><SmallWhiteCard>
                        <div className="flex pt-2 pb-28">
                            <div className='uppercase text-lg pr-2'>Year</div>
                            <div className='font-bold text-lg'>4343</div>
                        </div>

                    </SmallWhiteCard><SmallWhiteCard>
                        <div className="flex pt-2 pb-28">
                            <div className='uppercase text-lg pr-2'>Year</div>
                            <div className='font-bold text-lg'>4343</div>
                        </div>

                    </SmallWhiteCard>
                    <SmallWhiteCard>
                        <div className="flex pt-2 pb-28">
                            <div className='uppercase text-lg pr-2'>Year</div>
                            <div className='font-bold text-lg'>4343</div>
                        </div>

                    </SmallWhiteCard><SmallWhiteCard>
                        <div className="flex pt-2 pb-28 cursor-pointer">
                            <div className='uppercase text-lg pr-2'>Year</div>
                            <div className='font-bold text-lg'>4343</div>
                        </div>

                    </SmallWhiteCard>
                    {perpetuals.length > 0 && perpetuals.map((perpetual: any) => <SmallWhiteCard key={perpetual.id}>
                        <div className="flex pt-2 pb-28">
                            <div className='uppercase text-lg pr-2'>Year</div>
                            <div className='font-bold text-lg'>{perpetual.attributes.year}</div>
                        </div>

                    </SmallWhiteCard>)}
                </div>
            </div>

            <div className='pt-12'>
                <CtaBanner
                    bannerTextDark=' Become a member of our'
                    bannerTextLight='community'
                    ctabannerlaptop="/images/sportingPage/sportingCTADesktop.webp"
                    ctabannerMobile="/images/sportingPage/sportingCTAMobile.webp"
                    imageClass="bannerOuterLightGreen"
                />
            </div>

            {/* <div className="pt-12"> */}
                <Footer />
            {/* </div> */}
        </div>
    )
}

export default IndividualPerpetual