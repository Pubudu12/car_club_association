import MetaTags from '../../components/CommonComponents/meta/MetaTags'
import HeroBanner from '../../components/CommonComponents/banners/herobanner/HeroBanner'
import Paragraph from '../../components/CommonComponents/paragraph/Paragraph'
import Members from '../../components/CommonComponents/members/Members'
import Header from '../../components/CommonComponents/header/header'
import Footer from '../../components/CommonComponents/footer/Footer'
import CtaBanner from '../../components/CommonComponents/banners/ctaBanner/CtaBanner'
// import ContactUs from '../api/contactus'
import RegistersData from '../api/registerSections'
import Sections from '../api/registerSections'
import { useEffect, useState } from "react";
import SeperatorDot from '../../components/CommonComponents/seperatorDot/SeperatorDot'
import BreadCrumb from '../../components/CommonComponents/breadcrumb/BreadCrumb'
import Link from 'next/link'
import subTitleStyles from '../../components/CommonComponents/subTitleComponent/SubTitleBlack.module.scss'
import { useRouter } from 'next/router'

export default function Registers() {
    const breadCrumbDataArray = [{ 'name': "Home", 'link': "/" }, { 'name': "Registers", 'link': "null" }];
    const [members, setMembers] = useState([])
    const [sections, setSections] = useState([])
    const [sectionId, setSectionId] = useState('')

    const router = useRouter();
    const section  = router.asPath;

    const codeArray = [
        // {
        //     code : "COMMITTEE",
        //     name : "COMMITTEE"
        // },
        // {
        //     code : "COORDINATORS",
        //     name : "COORDINATORS"
        // },
        {
            code : "REGIONAL_REGISTORS",
            name : "regional registers"
        },
        // {
        //     code : "COUNTRY_REGISTERS",
        //     name : "Country registers"
        // },
        {
            code : "METROPOLITAN_REGISTERS",
            name : "Metropolitan registers"
        }
    ]

    useEffect(()=>{     

        console.log('useEffect section', section)

        setSectionId(section);
    },[router.asPath])

    // console.log('sectionId',sectionId)

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

            // const targetId = section.replace('#', '');
            // console.log('targetId',targetId)
            // // /registers?q=REGIONAL_REGISTORS
            // const targetElement = document.getElementById(targetId);
            // console.log('targetElement',targetElement)
            // if (targetElement) { 
            //     targetElement.scrollIntoView({ behavior: 'smooth' });
            // }
        }      
    }, [router.query,sectionId])

    const get = async () => {
        const newMembers = await RegistersData.get()
        setMembers(newMembers)
        setSection(newMembers)

        // console.log(newMembers)        
    }

    const setSection = (newMembers: any) => {
        const allSections: any = [...sections]
        newMembers.forEach((member: any) => {

            // console.log('Member here >>>>> ', member.attributes.registers_section.data.attributes.Code)   

            const prop = { code: member.attributes.registers_section.data.attributes.Code, name: member.attributes.registers_section.data.attributes.Name }
            const index = allSections.findIndex((section: any) => section.name === member.attributes.registers_section.data.attributes.Name)
            if (index < 0) allSections.push(prop)
        })
        setSections(allSections)
    }

    console.log('sections here -> ', sections)

    const filterMembers = (code: any) => {
        return members.filter((member: any) => member.attributes.registers_section.data.attributes.Code === code)
    }

    return (
        <div className='overflow-hidden bg-grey-100'>

            <MetaTags
                metaTitle="Regional Registers"
                metaDescription="Connect with the Jaguar - car club of Victoria and get the support you need."
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <Header />

            <HeroBanner
                heroImage="/images/ContactUs/IntroImage.webp"
                darkHeadingOne=""
                darkHeading="Registers"
                lightHeading="club"
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


            <div className='xl:pb-[5rem] sm:pb-[3rem] pt-[2rem] seperatorLists px-10'>
                <SeperatorDot>
                    <li className='flex items-center justify-center content-center flex-wrap'> {/*max-sm:flex max-sm:justify-center max-sm:items-center*/}
                        {sections?.map((section: any, index: number) => 
                        // (
                            // ((section.code != 'COMMITTEE') && (section.code != 'COORDINATORS') && (section.code != 'CMC')) &&
                                <Link key={index} href={`/registers#${section.code}`}> {section.name} </Link> 
                            // ))
                        )}
                        {/* <Link href={`/registers#MODEL_REGISTERS`}> Model Registers </Link> 
                        <Link href={`/registers#REGIONAL_REGISTORS`}> Regional Registers </Link> 
                        <Link href={`/registers#SPORTING_REGISTERS`}> Sporting Registers </Link> 
                        <Link href={`/registers#COUNTRY_REGISTERS`}> Country Registers </Link> 
                        <Link href={`/registers#METROPOLITAN_REGISTERS`}> Metropolitan Registers </Link>  */}
                    </li>
                </SeperatorDot>
            </div>

            {codeArray.map((section: any, index: number) => 
                (                    
                    <div className='pt-[3rem]' id={section.code} key={index}>                        
                        <div id="subTitleHeader" className={`flex justify-center`}>
                            <div className='container'>
                                <div className={`flex justify-center`}>
                                    <div className={`${subTitleStyles.memberTitle}`}>                                        
                                        <h1>
                                            {/* {section.code === 'someCondition' ? 'Value if true' : 'Value if false'} */}
                                            {   
                                                section.code === 'SPORTING_REGISTERS'
                                                ? <span><b>Sporting</b> Registers</span>
                                                : section.code === 'REGIONAL_REGISTORS'
                                                ? <Link href={'/regions'}><span> <b>Regional</b> registers</span></Link>
                                                : section.code === 'MODEL_REGISTERS'
                                                ? <span> <b>Model</b> registers</span>
                                                : section.code === 'COUNTRY_REGISTERS'
                                                ? <span> <b>Country</b> registers</span>
                                                : section.code === 'METROPOLITAN_REGISTERS'
                                                ? <span> <b>Metropolitan</b> registers</span>
                                                : section.code === 'COMMITTEE' 
                                                ? <span> <b>COMMITTEE</b> </span>
                                                : section.code === 'COORDINATORS' 
                                                ? <span> <b>COORDINATORS</b> </span>
                                                : section.code === 'CMC' 
                                                ? <span> <b>Clubrooms management committee </b> (CMC)</span>
                                                :<span></span>
                                            }
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div>
                            <Members members={filterMembers(section.code)} code={section.code} page={"REGISTERS"}/>
                        </div>
                    </div>   
                )                
            )}

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