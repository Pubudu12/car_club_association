// import ToastUIReactCalendar from '@toast-ui/react-calendar';
import Calendar from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css'
import React, { useEffect, useRef, useState } from 'react';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import ReactToPrint from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import TimezoneSelect, {allTimezones} from 'react-timezone-select';
import moment from 'moment';
import 'moment-timezone';

const ToastCalendar = (props: any) => { 
    const { events, key } = props

    console.log('events from calendar inner--- >', events)

    const componentRef: any = React.useRef(null);
    const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleString('default', { month: 'long' }))
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    
    const [timezone, setTimezone] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    )  

    var calendar = new Calendar('#calendar', {
      defaultView: 'month',
      taskView: true,
      useDetailPopup: true,
      isReadOnly: true,
      template: {
          monthDayname: function (dayname) {
              return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
          },
          popupUpdate() {
              return 'Update';
          },
      }
    });

    useEffect(() => {

    },[timezone, calendar]) 

    events.forEach((element:any) => {

        let startDate = element.attributes.start
        startDate = new Date(startDate)
        let endDate = element.attributes.end
        endDate = new Date(endDate)

        calendar.createSchedules([
            {
                id: element.id,
                calendarId: element.id,
                title: element.attributes.title,
                category: 'time',
                dueDateClass: '',
                start: startDate.toLocaleString(undefined, { timeZone: timezone }),
                end: endDate.toLocaleString(undefined, { timeZone: timezone }),
                isReadOnly: true,
                // color: '#000000',
                body:  `<a class='active-link' href='/calendar/${element.id}' target='_blank'>Click here for more details</a>`,
            },
        ]);
    });    
    

    const handlePrevious = () => {
        console.log('called prev');
        calendar.prev();

        const currentDate = calendar.getDate().toDate();
        console.log('current date', currentDate)
        // const monthName = (moment().month(currentDate.getMonth())).format('MMMM');

        // setCurrentYear(currentDate.getFullYear());
        // setCurrentMonth(monthName);
        // console.log(currentYear, 'and ', monthName);
    };

    const handleNext = () => {
        console.log('called next');
        calendar.next();

        const currentDate = calendar.getDate().toDate();
        console.log('current date', currentDate)
        // const monthName = (moment().month(currentDate.getMonth())).format('MMMM');

        // setCurrentYear(currentDate.getFullYear());
        // setCurrentMonth(monthName);
        // console.log(currentYear, 'and ', monthName);
    };

    const handleChangeView = (e: any) => {
        console.log('called change view')
        calendar.changeView(e.target.value, true);
    }
    

    const change = async (zone: any) => {
        setTimezone(zone)
    }

    return (
        <>
            <div className='pb-8'>
                <div className='text-center pt-1 pb-6'>
                    <h2 className='uppercase font-bold text-2xl max-sm:text-lg'>{currentMonth} {currentYear}</h2>
                </div>

                <div className=''>
                    {/* <button onClick={prev}>Prev</button>
                    <button onClick={next}>Next</button> */}

                    <div className='container flex justify-between'>                      
                        <div className='flex justify-between'>
                            <div className="directions icons">
                                <button id="prev" className="nextPrevButtons" onClick={handlePrevious}><FontAwesomeIcon icon={faAngleLeft} className="w-4 mb-1 inline" /></button>
                                <button id="next" className="nextPrevButtons ml-3" onClick={handleNext}><FontAwesomeIcon icon={faAngleRight} className="w-4 mb-1 inline" /></button>

                                <TimezoneSelect
                                    value={timezone}
                                    onChange={(e) => change(e.value)}
                                    timezones={{
                                        ...allTimezones,
                                    }}
                                /> 
                            </div>
                            <div>
                                <ReactToPrint
                                    trigger={() =><button className='py-2 px-6 bg-grey-100 border-jaguarRed'>
                                    <span className='pr-1'>Print</span> <FontAwesomeIcon icon={faPrint} className="w-4 mb-1 inline" /> </button>}
                                    content={() => componentRef.current}
                                />
                            </div>
                        </div>                             
                    
                        <div>
                            {/* change view buttons */}
                            <button className='py-2 px-6 bg-grey-100 border-jaguarRed' id='changeView' value={'day'} onClick={handleChangeView}>Day</button>
                            <button className='py-2 px-6 bg-grey-100 border-jaguarRed' id='changeView' value={'month'} onClick={handleChangeView}>Month</button>
                            <button className='py-2 px-6 bg-grey-100 border-jaguarRed' id='changeView' value={'week'} onClick={handleChangeView}>Week</button>
                        </div>                    
                    </div>                
                </div>
            </div>
        </> 
    )
}

export default ToastCalendar