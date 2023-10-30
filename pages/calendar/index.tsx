import React, { useEffect, useState, SyntheticEvent, createRef, useRef } from 'react';
import Header from '../../components/CommonComponents/header/header';
import MetaTags from '../../components/CommonComponents/meta/MetaTags';
import Footer from '../../components/CommonComponents/footer/Footer';
// import TimezoneSelect, { allTimezones } from 'react-timezone-select' 
import BreadCrumb from '../../components/CommonComponents/breadcrumb/BreadCrumb';
import dynamic from 'next/dynamic'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import Calendar from '../../pages/api/calendar';
import CtaBanner from '../../components/CommonComponents/banners/ctaBanner/CtaBanner';
import FullWidthThreeBannerSection from '../../components/CommonComponents/banners/FullWidthThreeBannerSection/FullWidthThreeBannerSection';
import ClubEventsSection from '../../components/homeComponents/ClubEventsSection/ClubEventsSection';
import ReactToPrint from 'react-to-print'; 
import moment from 'moment';
import 'moment-timezone';


function EventsCalendar() {
    const TuiCalendar = dynamic(() => import('../../components/CommonComponents/calendar/calendar'), { ssr: false, })
    const breadCrumbDataArray = [{ 'name': "Home", 'link': "/" }, { 'name': "calendar", 'link': "null" }];
    const [events, setEvents] = useState<any>([])
    const [calendarevents, setCaldEvents] = useState<any>([])
    const [selectedTimezone, setSelectedTimezone] = useState()
    const [loading, setLoading] = useState<Boolean>(false)
    const [year, setYear] = useState<number>(moment().year());
    const [month, setMonth] = useState<number>(moment().month());

    const componentRef: any = React.useRef(null);
    const [timezone, setTimezone] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    )

    useEffect(() => {
        get()
    }, [])

    const get = async (zone = timezone) => {
        setLoading(true)
        const newEvents = await Calendar.get()
        setCaldEvents(newEvents)
        // console.log(newEvents)

        const arr: any = []
        newEvents.forEach((event: any) => {
        let startDate = event.attributes.start
        startDate = new Date(startDate)
        let endDate = event.attributes.end
        endDate = new Date(endDate)
        const prop = {
            id: event.id,
            calendarId: event.id,
            title: event.attributes.title,
            body: `<a class='active-link' href='/calendar/${event.id}' target='_blank'>Click here for more details</a>`,
            category: 'time',
            attendees: null,
            start: startDate.toLocaleString(undefined, { timeZone: zone }),
            end: endDate.toLocaleString(undefined, { timeZone: zone }),
            // location: event.attributes.venue,
            state: null,
            isReadOnly: true,
            // color: '#fff',
            // backgroundColor: '#ccc',
            customStyle: {
            //   fontStyle: 'italic',
            },
        }
        arr.push(prop)
        })
        setEvents(arr)
        setLoading(false)
    }

  return (
    <div className='bg-grey-50'>
        
        {/* <Header /> */}

        <MetaTags
            metaTitle="Club Calendar - Meet-Ups and Activities"
            metaDescription="Stay up-to-date with the latest event and activities for Jaguar enthusiasts by exploring the calendar of Jaguar - Car Club Of Victoria."
            image=""
            metaKeyword="Jaguar Car Club Of Victoria"
        />

        <div className='pt-[100px]'>

            <div className='text-center pb-4'>
                <h1 className='uppercase'>Club <span className='font-bold'>Calendar</span></h1>
            </div>

            <div className='flex justify-center py-5'>
                <BreadCrumb links={breadCrumbDataArray} />
            </div>

            {/* Calendar here */}
            <div id="calendar" className='grid'>
                {loading ? "Loading" : <TuiCalendar events={calendarevents} />}
            </div>
        </div>

        <div className='pb-5 pt-[6rem] max-sm:pt-[2rem]'>
            <h1 className={`uppercase text-center pb-7`}>Upcoming Club <span className="font-bold">events</span></h1>        

            <FullWidthThreeBannerSection />
        </div>

        <div className='container py-[5rem] max-sm:py-[3rem]'>
            <h1 className={`uppercase text-center pb-7`}>club <span className="font-bold">CALENDAR</span></h1>

            <ClubEventsSection />
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

export default EventsCalendar