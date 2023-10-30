import MetaTags from '../../components/CommonComponents/meta/MetaTags'
import HeroBanner from '../../components/CommonComponents/banners/herobanner/HeroBanner'
import Paragraph from '../../components/CommonComponents/paragraph/Paragraph'
import SubTitleBlack from '../../components/CommonComponents/subTitleComponent/SubTitleBlack'
import Members from '../../components/CommonComponents/members/Members'
import Header from '../../components/CommonComponents/header/header'
import EmailForm from '../../components/CommonComponents/emailForm/EmailForm'
import Footer from '../../components/CommonComponents/footer/Footer'
import CtaBanner from '../../components/CommonComponents/banners/ctaBanner/CtaBanner'
import ContactUs from '../api/contactus'
import Sections from '../api/section'
import { useEffect, useState } from "react";
import SeperatorDot from '../../components/CommonComponents/seperatorDot/SeperatorDot'
import BreadCrumb from '../../components/CommonComponents/breadcrumb/BreadCrumb'
import Link from 'next/link'
import subTitleStyles from '../../components/CommonComponents/subTitleComponent/SubTitleBlack.module.scss' 
import { useRouter } from 'next/router'

export default function MainPage() {
    const breadCrumbDataArray = [{ 'name': "Home", 'link': "/" }, { 'name': "Contact Us", 'link': "null" }];
    const [members, setMembers] = useState([])
    const [sections, setSections] = useState([])
    const [contSections, setcontSections] = useState([])
    const [sectionId, setSectionId] = useState('')

    const router = useRouter();
    const section  = router.asPath;

    const codeArray = [
        {
            code : "COMMITTEE",
            name : "COMMITTEE"
        },
        // {
        //     code : "COUNTRY_REGISTERS",
        //     name : "Country registers"
        // },
        // {
        //     code : "METROPOLITAN_REGISTERS",
        //     name : "Metropolitan registers"
        // },
        {
            code : "COORDINATORS",
            name : "COORDINATORS"
        },
        // {
        //     code : "CMC",
        //     name : "Clubrooms management committee (CMC)"
        // },
    ]

    useEffect(()=>{     

        console.log('useEffect section', section)

        setSectionId(section);
        console.log('router.asPath >>>> ',router.asPath)
    },[router.asPath])

    useEffect(() => {

        const id:any = router.query.q

        get()

        if (sectionId) {
            const targetId = id; 

            console.log('targetId::::1st',targetId)
            const targetElement = document.getElementById(targetId);
            console.log('targetElement',targetElement)
            if (targetElement) { 
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        } 

    }, [router.query,sectionId])

    const get = async () => {
        const newMembers = await ContactUs.get()
        const sec = await Sections.get();
        setMembers(newMembers)
        setSection(newMembers) 

        setcontSections(sec)
    }

    const setSection = (newMembers: any) => {
        const allSections: any = [...sections]
        
        newMembers.forEach((member: any) => {
            const prop = { code: member.attributes.section_type.data.attributes.code, name: member.attributes.section_type.data.attributes.name }
            const index = allSections.findIndex((section: any) => section.name === member.attributes.section_type.data.attributes.name)
            if (index < 0) allSections.push(prop)
        })
        setSections(allSections)
    }

    const filterMembers = (code: any) => {
        return members.filter((member: any) => member.attributes.section_type.data.attributes.code === code)
    }

    return (
        <div className='overflow-hidden bg-grey-100'>

            <MetaTags
                metaTitle=" Have a question? Contact Us!"
                metaDescription="Connect with the Jaguar - car club of Victoria and get the support you need."
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <Header />

            <HeroBanner
                heroImage="/images/ContactUs/IntroImage.webp"
                darkHeadingOne=""
                darkHeading="us"
                lightHeading="contact"
                heroImageMobile="/images/ContactUs/IntroImageMobile.webp"
            />
            <div className='flex justify-center relative top-[-10px]'>
                <BreadCrumb links={breadCrumbDataArray} />
            </div>

            <div className='flex justify-center py-6'>
                <Paragraph
                    centerMainPara="Depending on the information or area of the club you are looking at there are a number of different contact areas, all of which are available through here. The club consists of a committee to handle the day to day organization of the club and also various registers to facilitate the different locations throughout the state and more closely identify with the Club's different Jaguar models and interest areas."
                    centerPara=" The sections can be accessed with the following links. They are then broken down to their individual parts in those sections."
                />
            </div>


            <div className='pt-[3rem] pb-[3rem]'>
                <div className=''>
                    <SubTitleBlack
                        lightTitle="we'd"
                        darkTitle="love to hear"
                        lightTitleOne="from you"
                        textPosition="center"
                    />
                </div>
                <div id='feedbackAndSuggetions' className='pt-[2rem]'>
                    <EmailForm />
                </div>
            </div>


            <div className='adressSection flex flex-col items-center content-center max-sm:px-5'>
                {/* <div className='uppercase pb-3 max-sm:flex max-sm:flex-col max-sm:items-center'>
                    <span className='text-[#9E1B32] font-bold pr-3'>Address</span>
                    <span className='font-bold'>PO BOX 4263 MUlgrave victoria 3170</span>
                </div> */}

                <div className='uppercase pb-3 max-sm:flex max-sm:flex-col max-sm:items-center'>
                    <span className='text-[#9E1B32] font-bold pr-3'>Club Rooms and Postal Address</span>
                    <span className='font-bold'>23 rosalie street, springvale VIC, 3171</span>
                </div>

                <div className='uppercase pb-3 max-sm:flex max-sm:flex-col max-sm:items-center'>
                    <span className='text-[#9E1B32] font-bold pr-3'>monthly meetings</span>
                    <span className='font-bold max-sm:text-center'>1st tuesday month, including cup day 8pm at the clubrooms</span>
                </div>

                <div className='uppercase pb-3 max-sm:flex max-sm:flex-col max-sm:items-center'>
                    <span className='text-[#9E1B32] font-bold pr-3'>Contact</span>
                    <span className='font-bold pr-7'><Link href="tel:+61 3 9558 5434">03 9558 5434</Link></span>

                    {/* <span className='text-[#9E1B32] font-bold pr-3'>email</span>
                    <span className='font-bold'><Link href="mailto:secretary@jagvic.org.au">secretary@jagvic.org.au</Link></span> */}
                </div>
            </div>


            <div className='xl:pb-[5rem] sm:pb-[3rem] pt-[5rem] seperatorLists px-4'>
                <SeperatorDot>
                    <li className='flex items-center justify-center content-center flex-wrap'>
                        {contSections?.map((section: any, index: number) =>    
                            <Link key={index} href={`/contact#${section.attributes.code}`}> {section.attributes.name}</Link>
                        )}
                        {/* <Link href={`/contact#COMMITTEE`}> COMMITTEE </Link> 
                        <Link href={`/contact#COORDINATORS`}> COORDINATORS </Link> 
                        <Link href={`/contact#CMC`}> CLUBROOMS MANAGEMENT COMMITTEE (CMC) </Link> 
                        <Link href={`/contact#MODEL_REGISTERS`}> MODEL REGISTERS </Link> 
                        <Link href={`/contact#REGIONAL_REGISTORS`}> REGIONAL REGISTERS </Link> 
                        <Link href={`/contact#SPORTING_REGISTERS`}> SPORTING REGISTERS </Link> 
                        <Link href={`/contact#COUNTRY_REGISTERS`}> COUNTRY REGISTERS </Link> 
                        <Link href={`/contact#METROPOLITAN_REGISTERS`}> METROPOLITAN REGISTERS  </Link>  */}
                    </li>
                </SeperatorDot>
            </div>

            {codeArray.map((section: any, index: number) => 
            
                // ((section.attributes.code != 'COUNTRY_REGISTERS') && (section.attributes.code != 'METROPOLITAN_REGISTERS')) &&
                    <div className='xl:pt-[3rem] max-sm:pt-12' id={section.code} key={index}>
                        <div className='pb-[3rem]'>
                            <div id="subTitleHeader" className={`flex justify-center`}>
                                <div className='container'>
                                    <div className={`flex justify-center`}>
                                        <div className={`${subTitleStyles.memberTitle}`}>
                                        
                                            <h1>
                                                {/* {section.code === 'someCondition' ? 'Value if true' : 'Value if false'} */}
                                                {   section.code === 'COMMITTEE'
                                                    ? <span>Meet the <b>club committee</b></span>
                                                    : section.code === 'COUNTRY_REGISTERS'
                                                    ? <span> <b>country</b> registers</span>
                                                    : section.code === 'MODEL_REGISTERS'
                                                    ? <span> <b>Model</b> registers</span>
                                                    : section.code === 'COORDINATORS'
                                                    ? <span> <b>Coordinators</b></span>
                                                    : section.code === 'CMC'
                                                    ? <span> <b>Clubrooms management committee (CMC)</b></span>
                                                    : section.code === 'REGIONAL_REGISTORS'
                                                    ? <span> <b>Regional </b> Registers</span>
                                                    : section.code === 'SPORTING_REGISTERS'
                                                    ? <span> <b>Sporting </b> Registers</span>
                                                    : section.code === 'METROPOLITAN_REGISTERS'
                                                    ? <span> <b>Metropolitan </b> Registers</span>
                                                    : <span></span>
                                                }
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>

                        <div>
                            <Members members={filterMembers(section.code)} code={section.code} page={'CONTACTUS'}/>
                        </div>
                    </div>
                )
            }

            <div className='md:pt-11'>
                <CtaBanner
                    bannerTextDark=' Become a member of our'
                    bannerTextLight='community'
                    ctabannerlaptop="/images/AboutUsImages/ctabanner.webp"
                    ctabannerMobile="/images/AboutUsImages/cta-banner-mobile.webp"
                    imageClass="bannerOuterLightGreen"
                />
            </div>

            <Footer />
            
        </div>
    );
}
