import React, { useEffect, useState, SyntheticEvent, createRef } from 'react';
import Header from '../../../components/CommonComponents/header/header';
import MetaTags from '../../../components/CommonComponents/meta/MetaTags';
import Footer from '../../../components/CommonComponents/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CtaBanner from '../../../components/CommonComponents/banners/ctaBanner/CtaBanner';
import BreadCrumb from '../../../components/CommonComponents/breadcrumb/BreadCrumb';
import { useRouter } from 'next/router'
import Calendar from '../../../pages/api/calendar';
import styles from '../../../components/CommonComponents/tables/PageTables.module.scss'
import Link from 'next/link';
import moment from 'moment';
import dynamic from 'next/dynamic';

const CalandarSingleEvent = () => {

    const router = useRouter()
    const [calendarEvent, setCalendarEvent] = useState()
    const { id } = router.query
    const Timezone = dynamic(() => import('./timezone'), { ssr: false, })

    const [timezone, setTimezone] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    )
    const [selectedTimezone, setSelectedTimezone] = useState({})

    console.log(timezone)

    useEffect(() => {
        
        get()
    }, [id])

    const get = async () => {
        if (!id) return
        const event = await Calendar.fetchEventById(id)
        setCalendarEvent(event)
    }

    let eventArray = []
    eventArray[0] = calendarEvent?.['attributes']['title']
    eventArray[1] = calendarEvent?.['attributes']['title']

    console.log(calendarEvent)
  
    const breadCrumbDataArray = [{ 'name': "Home", 'link': "/" }, { 'name': "calendar", 'link': "/calendar" }, { 'name': "calendar Event", 'link': "null" }];
    
  
    return (
        <div className='bg-grey-50'>
        <Header />

        <MetaTags
            metaTitle={`${calendarEvent?.['attributes']['title']} | Calendar Event | Jaguar Car Club of Victoria`}
            metaDescription={`${calendarEvent?.['attributes']['title']} | Calendar Event | Jaguar Car Club of Victoria`}
            image=""
            metaKeyword="Jaguar Car Club Of Victoria"
        />

        <div className="container mx-auto pt-top text-center pb-[4rem]">
            
            <div className='text-center pb-4'>
                <h1 className='uppercase'>Calendar <span className='font-bold'> Event</span></h1>
            </div>

            <div className='flex justify-center py-5'>
                <BreadCrumb links={breadCrumbDataArray} />
            </div>

            <div className='text-center pt-1'>
                <h2 className='uppercase font-bold text-2xl max-sm:text-lg current-date'>{calendarEvent?.['attributes']['title']}</h2>
            </div>
        </div>

       

        <div className="container mx-auto text-center pb-[4rem]">
            <div id="dataEntryTables" className={`flex justify-center`}>
                <div className='container'>
                    <div className='container'> 
                        
                        <div className='grid grid-cols-3 max-sm:grid-cols-1'>
                            <span>Change time Zone</span>
                            <Timezone start={calendarEvent?.['attributes']['start']} end={calendarEvent?.['attributes']['end']}/>
                        </div>

                        <table className="w-full">
                            <thead className={`${styles.tableheader}`}>
                                <tr className='text-center'>
                                    <th>Key</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>
                            <tbody className={`${styles.tablerows}`}>
                                <tr className={`${styles.row}`}>
                                   <td>Title</td>
                                   <td>{calendarEvent?.['attributes']['title']}</td>
                                </tr>
                                {
                                    calendarEvent?.['attributes']['venue'] &&
                                    <tr className={`${styles.row}`}>
                                        <td>Venue</td>
                                        <td>{calendarEvent?.['attributes']['venue']}</td>
                                    </tr>
                                }
                                {
                                    calendarEvent?.['attributes']['description'] &&
                                    <tr className={`${styles.row}`}>
                                        <td>Description</td>
                                        <td>{calendarEvent?.['attributes']['description']}</td>
                                    </tr>
                                }
                                <tr className={`${styles.row}`}>
                                   <td>Start Date and Time</td>
                                   <td> {moment(calendarEvent?.['attributes']['start']).format('MMMM DD, YYYY h:mm A z') }</td>
                                </tr>
                                <tr className={`${styles.row}`}>
                                   <td>End Date and Time</td>
                                   <td>{moment(calendarEvent?.['attributes']['end']).format('MMMM DD, YYYY h:mm A z')}</td>
                                </tr>
                                <tr className={`${styles.row}`}>
                                   <td>Event Link</td>
                                   <td><Link href={`${calendarEvent?.['attributes']['event_link']}`} target='_blank' className='text-[#9E1B32]'>Click Here to Join</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>        

        <div className='pt-5'>
            <CtaBanner
            bannerTextDark=' Become a member of our'
            bannerTextLight='community'
            ctabannerlaptop="/images/sportingPage/sportingCTADesktop.webp"
            ctabannerMobile="/images/sportingPage/sportingCTAMobile.webp"
            imageClass="bannerOuterCarDarkGreen"
            />
        </div>

        <div>
            <Footer />
        </div>
        </div>
    )
}

export default CalandarSingleEvent