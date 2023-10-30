import React,{useEffect, useState} from 'react';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
import HeaderLinks from './header.json'


function Header() {
    let currectYear =  new Date().getFullYear();
    const [isModal, setIsModal] = useState(false);
    const [isIconChanged, setIconChanged] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState(""); 
    const [isActiveId, setIsActiveId] = useState(false);

    let contentClassname = isModal ? `${styles.w_100}` : `${styles.w_0}`;
        
    const router = useRouter();
        
    const handleClick = (id:any) => {
        setIsActiveId(isActiveId=>id)	
        setToggle(!toggle);
    };

    const changeIcon = (id:any) => {
        setIconChanged(true)
    }

    const onHoverHandle = (linkId:any) => {
        setActiveLink(linkId);
    };   

    const removeLinkOnhovers = () => {
        setActiveLink("");
    }

  return (
    <div> 
        <header id='header' className={`${styles.header} z-[3]`}>
            <div className="max-sm:px-3 container mx-auto py-3">
                <div className={`flex justify-between items-center`}>
                    <div>
                        <Link href="/"><img className={`${styles.logoWidth}`} src="/images/logo/logo.png" alt="Jaguar Car Club of Victoria" /></Link>
                    </div>

                    <div className='w-[30%]'>
                        {router.pathname == '/membership' &&
                            <div className='table'><Link href={'https://memberdesq.sportstg.com/index.cfm?fuseaction=registration_1&RegistrationMode=2&SubscriptionTypeID=278&OrgID=2037'} target={'_blank'} className={`uppercase table-cell align-middle ${styles.joinButton}`}> Join now </Link></div>
                        }
                    </div>

                    <div className={`flex`}>                      
                        <div className={`cursor-pointer flex items-center`} onClick={() => setIsModal(!isModal)} onMouseEnter={changeIcon}>
                            <span className='font-semibold displayOnDekstop displayHeaderOnDekstop'>Menu</span>
                            <div className={`${styles.navIcon} w-[2.5rem] max-sm:w-[2rem]`}><Image className={`${styles.navIconImage} w-[2.5rem]`} src="/images/homePage/NavigationButton.svg" alt="Nagigation Bar Icon" priority={true}  unoptimized={false} height={500} width={1000}/></div>
                        </div>
                    </div> 
                </div>
            </div>
        </header>
            
        <div id="dropdownNav" className={`${styles.overlay} ${contentClassname}`}>
            <div className={`${styles.overlay_content} grid grid-cols-3 uppercase displayHeaderOnDekstop pl-[9rem]`} id="displayHeaderOnDekstop">
                {/* <div className=''> */}
                    <div>
                        <Link onMouseEnter={removeLinkOnhovers} onClick={() => setIsModal(!isModal)} href="/" className={router.pathname === '/' ? 'active-link' : ''} data-link="homelink" id='home'> Home</Link>
                        <Link onMouseEnter={removeLinkOnhovers} onClick={() => setIsModal(!isModal)} id="about_us" href="/about-us" className={router.pathname === '/about-us' ? 'active-link' : ''}> About Us</Link>
                        <Link onMouseEnter={()=>onHoverHandle('news')} onClick={() => setIsModal(!isModal)} id="news" href="/news" className={router.pathname === '/news' ? 'active-link' : ''}> News and Articles</Link>
                        <Link onMouseEnter={()=>onHoverHandle('member')} onClick={() => setIsModal(!isModal)} id="membership" href="/membership" className={router.pathname === '/membership' ? 'active-link' : ''}>Membership</Link>
                        
                        <Link onMouseEnter={removeLinkOnhovers} onClick={() => setIsModal(!isModal)} id="regions" href="/regions" className={router.pathname === '/regions' ? 'active-link' : ''}> Regions</Link>
                        <Link onMouseEnter={removeLinkOnhovers} onClick={() => setIsModal(!isModal)} id="models" href="/models" className={router.pathname === '/models' ? 'active-link' : ''}> Models</Link>                        
                        <Link onMouseEnter={()=> onHoverHandle('sport')} onClick={() => setIsModal(!isModal)} id="sporting" href="/sporting" className={router.pathname === '/sporting' ? 'active-link' : ''}> Sporting</Link>
                        <Link onMouseEnter={()=> onHoverHandle('concours')} onClick={() => setIsModal(!isModal)} id="concours" href="/concours" className={router.pathname === '/concours' ? 'active-link' : ''}>Concours</Link>
                        <Link onMouseEnter={()=> onHoverHandle('clubpermits')} onClick={() => setIsModal(!isModal)} id="club_permit_application" href="/club-permit/application-process" className={router.pathname === '/club-permit/application-process' ? 'active-link' : ''}> Club Permit REGISTRATION</Link>
                        <Link onMouseEnter={()=> onHoverHandle('classifieds')} onClick={() => setIsModal(!isModal)} id="classifieds" href="/classifieds" className={router.pathname === '/classifieds' ? 'active-link' : ''}> Classifieds</Link>
                        <Link onMouseEnter={removeLinkOnhovers} onClick={() => setIsModal(!isModal)} id="contact" href="/contact" className={router.pathname === '/contact' ? 'active-link' : ''}> Contact us</Link>
                        <Link onMouseEnter={removeLinkOnhovers} onClick={() => setIsModal(!isModal)} id="links" href="/links" className={router.pathname === '/links' ? 'active-link' : ''}> Links</Link>
                    </div>
                    {activeLink === "member" && <div className={`${styles.header_border} homelink`}>
                        <Link className={`ml-5 ${router.pathname === '/membership' ? 'active-link' : ''}`} id='membership_about' href="/membership"> About Membership</Link>
                        <Link className={`ml-5`} id='membership_apply_for_new' href="https://memberdesq.sportstg.com/index.cfm?fuseaction=registration_1&RegistrationMode=2&SubscriptionTypeID=278&OrgID=2037" target={'_blank'}> Apply for new membership</Link>
                        <Link className={`ml-5`} id='membership_renewal' href="https://memberdesq.sportstg.com/index.cfm?fuseaction=login&OrgID=2037" target={'_blank'}> Membership Renewal</Link>
                        <Link className={`ml-5`} id='membership_constitution' href="https://memberdesq.sportstg.com/index.cfm?fuseaction=login&OrgID=2037" target={'_blank'}>Constitution and by laws</Link>
                    </div> }

                    {activeLink === "news" && <div className={`${styles.header_border}`}>
                        <Link className={`ml-5 ${router.asPath === '/news/current-president-report' ? 'active-link' : ''}`} id='news_current_president_report' href="/news/current-president-report" onClick={() => setIsModal(!isModal)}> Current President&apos;s Report</Link>                    
                        <Link className={`ml-5 ${router.asPath === '/news/tech-tips' ? 'active-link' : ''}`} id='news_tech_tips' href="/news/tech-tips" onClick={() => setIsModal(!isModal)}> Tech Tips</Link>
                        <Link className={`ml-5 ${router.asPath === '/news/restoration' ? 'active-link' : ''}`} id='news_restorations' href="/news/restoration" onClick={() => setIsModal(!isModal)}> Restorations</Link>
                        <Link className={`ml-5 ${router.asPath === '/news/catalog' ? 'active-link' : ''}`} id='news_catalog_magazines' href="/news/catalog" onClick={() => setIsModal(!isModal)}> CAT-A-LOG Magazine Archive </Link>
                        <Link className={`ml-5 ${router.asPath === '/news/club-news' ? 'active-link' : ''}`} id='news_club_news' href="/news/club-news" onClick={() => setIsModal(!isModal)}> News From the Club</Link>
                    </div> }

                    {activeLink === "sport" && <div className={`${styles.header_border}`}>
                        <Link className={`ml-5`} id='sporting_winton_results' href={`/sporting/winton-results/${currectYear}`} onClick={() => setIsModal(!isModal)}> Winton {currectYear} </Link>                    
                        <Link className={`ml-5`} id='sporting_upcoming_events' href="#"> Upcoming Track Events</Link>
                        <Link className={`ml-5`} id='sporting_mk1_racer' href="/sporting/sportingMk1" onClick={() => setIsModal(!isModal)}> MK1 Racer</Link>
                        <Link className={`ml-5`} id='sporting_marque_sports_car' href="https://msca.net.au/" target={'_blank'}> Marque Sports Car Association (MSCA) </Link>
                        <Link className={`ml-5`} id='sporting_sporting_photos' href="https://www.flickr.com/photos/102103696@N06/" target={'_blank'}> Sporting Photos</Link>
                        {/* <Link className={`ml-5`} id='sporting_winton_race_winner' href="#"> Previous Winton Race Winners </Link> */}
                    </div> }

                    {activeLink === "concours" && <div className={`${styles.header_border}`}>
                        <Link className={`ml-5`} id='sporting_concours_entry_form' href=""> Concours Entry Form {currectYear} </Link>
                        <Link className={`ml-5 ${router.asPath === '/concours/rules' ? 'active-link' : ''}`} id='sporting_concours_rules' onClick={() => setIsModal(!isModal)} href="/concours/rules"> Concours Rules {currectYear} </Link>
                        <Link className={`ml-5 ${router.asPath === '/concours/entrants' ? 'active-link' : ''}`} id='sporting_concours_entrants' onClick={() => setIsModal(!isModal)} href="/concours/entrants"> Entrants {currectYear} </Link>
                        <Link className={`ml-5 ${router.asPath === '/concours/results' ? 'active-link' : ''}`} id='sporting_concours_results' onClick={() => setIsModal(!isModal)} href="/concours/results"> Concours Results </Link>
                        <Link className={`ml-5 ${router.asPath === '/concours/perpetual' ? 'active-link' : ''}`} id='sporting_concours_perpetual' onClick={() => setIsModal(!isModal)} href="/concours/perpetual"> Perpetual Trophies </Link>
                    </div> }

                    {activeLink === "clubpermits" && <div className={`${styles.header_border}`}>
                        <Link className={`ml-5 ${router.asPath === '/club-permit/notice-to-prospective-members' ? 'active-link' : ''}`} id='club-permit_notice-to-prospective-members' href="/club-permit/notice-to-prospective-members" onClick={() => setIsModal(!isModal)}> Notice to Prospective Members </Link>
                        <Link className={`ml-5 ${router.asPath === '/club-permit/background' ? 'active-link' : ''}`} id='club-permit_background' href="/club-permit/background" onClick={() => setIsModal(!isModal)}> Background </Link>
                        <Link className={`ml-5 ${router.asPath === '/club-permit/club-policy' ? 'active-link' : ''}`} id='club-permit_club-policy' href="/club-permit/club-policy" onClick={() => setIsModal(!isModal)}> Club Policy </Link>
                        <Link className={`ml-5 ${router.asPath === '/club-permit/operation' ? 'active-link' : ''}`} id='club-permit_operation' href="/club-permit/operation" onClick={() => setIsModal(!isModal)}> Operation </Link>
                        <Link className={`ml-5 ${router.asPath === '/club-permit/application-process' ? 'active-link' : ''}`} id='club-permit_application-process' href="/club-permit/application-process" onClick={() => setIsModal(!isModal)}> Application Process </Link>
                        <Link className={`ml-5 ${router.asPath === '/club-permit/latest-from-vicroads' ? 'active-link' : ''}`} id='club-permit_latest-from-vicroads' href="/club-permit/latest-from-vicroads" onClick={() => setIsModal(!isModal)}> Latest from vicroads </Link>
                    </div> }

                    {activeLink === "classifieds" && <div className={`${styles.header_border}`}>
                        <Link className={`ml-5 ${router.asPath === '/classifieds/disclaimer' ? 'active-link' : ''}`} id='classifieds_disclaimer' href="/classifieds/disclaimer" onClick={() => setIsModal(!isModal)}> Disclaimer </Link>
                        <Link className={`ml-5 ${router.asPath === '/classifieds' ? 'active-link' : ''}`} id='classifieds_all' href="/classifieds" onClick={() => setIsModal(!isModal)}> All Classifieds </Link>
                        {/* <Link className={`ml-5`} href="#"> Parts For Sale </Link>
                        <Link className={`ml-5`} href="#"> Wanted </Link>
                        <Link className={`ml-5`} href="#"> Member Used Vehicles </Link> */}
                    </div> }
                    
                    <div>
                        <Link href={'/calendar'} id="calendar" className={`text-sm text-grey-500 absolute right-[9rem] xl:right-[15rem] bottom-0`}>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faCalendar} className={`w-6 pr-3 pb-1`}/> <span className='text-[13px]'>View Calendar</span>
                            </div>
                        </Link>
                    </div> 
                {/* </div>   */}                
            </div>

            <div className={`${styles.overlay_content} grid grid-cols-3 uppercase displayOnTabletAndMobile text-center`} id="displayOnTabletAndMobile">
                {
                    HeaderLinks.links.map((link: any,i:any) =>  {
                        return(
                            link.sublinksAvailability === 'NO' ? <>
                            <div className={`${styles.smallHeaderLinks}`} key={i}>
                                <Link className={`${styles.smallMenuFontColor}`} href={link.link} onClick={() => setIsModal(!isModal)}>{link.linkText}</Link>
                            </div>
                            </>:                             
                            <>  
                            <div key={i} className={`${styles.smallHeaderLinks}`} onClick={()=>handleClick(link.code)}>
                                {/* <FontAwesomeIcon icon={faAngleDown} className={`w-3`}/> */}
                                <div className={`${styles.dropDownMainLink}`}>{link.linkText}</div>
                            </div> 
                            {
                                isActiveId === link.code && 
                                <div className='pt-3' style={{ display: toggle ? 'block' : 'none' }}>
                                {                    
                                    link.sublinks.map((sub:any,innerkey:any) => {
                                        return(
                                            <Link href={sub.link} className={`${styles.innerLink}`} key={innerkey} onClick={() => setIsModal(!isModal)}>{sub.linkText}</Link>
                                        )
                                    })
                                }
                            </div>
                            }                            
                            </>                             
                        )
                    }                                          
                )}              
            </div>
        </div>
    </div>      
  )
}

export default Header