import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faInstagram,faFlickr } from "@fortawesome/free-brands-svg-icons";
import styles from './Footer.module.scss';
import Link from "next/link";

const Footer = () => {

    let currectYear =  new Date().getFullYear();

    return(
        <div  id="footer" className={`bg-white`}>
            <div className={`container mx-auto py-10 `} id="footer">
                <div className={`flex flex-row max-sm:flex-col ${styles.mb_footer_outer}`}>
                    <div className={`${styles.footer} lg:basis-1/3 basis-1/4 max-sm:order-4 `}> {/*lg:pl-8*/}
                        <div className={`uppercase font-Inter-Regular tracking-wider text-sm`}>
                            <div className={`mb-1 text-sm font-medium text-grey-900`}>23 ROSALIE STREET,</div>
                            <div className={`mb-1 text-sm text-grey-900`}>SPRINGVALE VIC,</div>
                            <div className={`mb-1 text-sm text-grey-900`}>3171</div>
                        </div>

                        <div className={`mt-5 text-sm text-grey-900 font-medium tracking-wide`}><a href="tel:+61 3 9558 5434">03 9558 5434</a><br /></div>

                        {/* <div className={`mt-4 text-sm text-grey-900 font-medium tracking-wide`}><a href="mailto:SECRETARY@JAGVIC.ORG.AU">SECRETARY@JAGVIC.ORG.AU</a></div> */}
                        
                        <div className="flex max-sm:w-[100%] sm:w-[50%] max-sm:px-10 max-sm:py-4 mt-6 text-sm max-sm:justify-center">
                            <Link className={`w-3 text-grey-900`} href="https://www.facebook.com/jagclub.victoria/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></Link>
                            {/* <Link className={`w-4`} href="https://www.flickr.com/photos/102103696@N06/" target="_blank"><FontAwesomeIcon icon={faFlickr} /></Link> */}
                            {/* <a className={`w-4`} href="#"><FontAwesomeIcon icon={faTwitter}/></a> */}
                        </div>                    
                    </div> 
                    
                    <div className={`${styles.footer} md:basis-1/4`}>
                        <h4 className={`uppercase font-Inter-Regular ${styles.footerTitle}`}>
                            Quick Links
                        </h4>
                        <span className={`${styles.topic_bottom_border} pb-5`}></span>

                        <ul className={`uppercase font-Inter-Regular`}>
                            <li className={`py-3 hover:text-[#9E1B32] text-sm text-grey-900 font-medium tracking-normal`}><Link href="/calendar">Club Calendar</Link></li>
                            <li className={`py-3 hover:text-[#9E1B32] text-sm text-grey-900 font-medium tracking-wide`}><Link href="/about-us">About Us</Link></li>
                            <li className={`py-3 hover:text-[#9E1B32] text-sm text-grey-900 font-medium tracking-wide`}><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li className={`py-3 hover:text-[#9E1B32] text-sm text-grey-900 font-medium tracking-wide`}><Link href="/sitemap">Site Map</Link></li>
                        </ul>
                    </div> 

                    <div className={`${styles.footer} md:basis-1/4`}>
                        <h4 className={`uppercase ${styles.footerTitle}`}>
                            Contact
                        </h4>
                        <span className={`${styles.topic_bottom_border} pb-5`}></span>

                        <ul className={`uppercase`}>
                            <li className={`py-3 hover:text-[#9E1B32] text-sm text-grey-900 font-medium tracking-wide`}><Link href="/contact">Contact Us</Link></li>
                            <li className={`py-3 hover:text-[#9E1B32] text-sm text-grey-900 font-medium tracking-wide`}><Link href={`/contact#COMMITTEE`}>Committee</Link></li> 
                            <li className={`py-3 hover:text-[#9E1B32] text-sm text-grey-900 font-medium tracking-wide`}><Link href="/regions">Regions</Link></li>
                            <li className={`py-3 hover:text-[#9E1B32] text-sm text-grey-900 font-medium tracking-wide`}><Link id='register_about' href={`/registers#METROPOLITAN_REGISTERS`}>Metropolitan Registers</Link></li>
                            {/* <li className={`py-3 hover:text-[#9E1B32] text-sm text-grey-900 font-medium tracking-wide`}><Link id='register_sportng' href={{pathname: '/sporting',query: { q: 'SPORTING_REGISTERS' },}}>Sporting Register</Link></li> */}
                            <li className={`py-3 hover:text-[#9E1B32] text-sm text-grey-900 font-medium tracking-wide`}><Link id='register_sportng' href="/sporting">Sporting Register</Link></li> 
                        </ul>
                    </div>   

                    <div className={`${styles.footer} md:basis-1/4`}>
                        <h4 className={`uppercase ${styles.footerTitle}`}>
                            Membership
                        </h4>
                        <span className={`${styles.topic_bottom_border} pb-5`}></span>

                        <ul className={`uppercase`}>
                            <li className={`py-3 hover:text-[#9E1B32] text-grey-900 text-sm font-medium tracking-wide`}><Link target={"_blank"} href="https://memberdesq.sportstg.com/index.cfm?fuseaction=registration_1&RegistrationMode=2&SubscriptionTypeID=278&OrgID=2037">New Memberships</Link></li>
                            <li className={`py-3 hover:text-[#9E1B32] text-grey-900 text-sm font-medium tracking-wide`}><Link target={"_blank"} href="https://memberdesq.sportstg.com/index.cfm?fuseaction=login&OrgID=2037">Membership Renewal</Link></li>
                            <li className={`py-3 hover:text-[#9E1B32] text-grey-900 text-sm font-medium tracking-wide`}><Link target={"_blank"} href="https://memberdesq.sportstg.com/index.cfm?fuseaction=login&OrgID=2037">Constitution & By Laws</Link></li>
                        </ul>
                    </div>   
                </div>

                <div className={`${styles.footer_allRightsReserved} flex justify-center mt-7`}>
                    <div className={`text-center text-grey-900`}>@ {currectYear} Jaguar Car Club Of Victoria. All Rights Reserved. A <a href="https://creativehub.global/" target={`_blank`}><span className={`text-black`}>Creative</span><span className={`${styles.text_peach}`}>Hub</span></a> Website. </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;