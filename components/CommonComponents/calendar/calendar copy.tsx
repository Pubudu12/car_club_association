import ToastUIReactCalendar from '@toast-ui/react-calendar';
// import Calendar from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css'
import React, { useEffect, useRef, useState } from 'react';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

function ToastCalendar(props: any) { 
  const { events, key } = props
  
  const [value, onChange] = useState(new Date());

  const calendars = [
    {
      id: '0',
      name: 'Private',
      bgColor: '#9e5fff',
      borderColor: '#9e5fff',
      backgroundColor: '#6e5fff'
    },
    {
      id: '1',
      name: 'Company',
      bgColor: '#00a9ff',
      borderColor: '#00a9ff',
      backgroundColor: '#6e5fff'
    }
  ];

  const onAfterRenderEvent = (event: any) => {
    console.log('event.title');
  };

  // const calendarRef = useRef<ToastUIReactCalendar>(null);
  // useEffect(() => {
  //   const calendarInstance = calendarRef.current?.getInstance();
  //   console.log('calendarInstance',calendarInstance)
  //   if (calendarInstance) {
  //     calendarInstance.on('clickEvent', onAfterRenderEvent);
  //   }
  //   return () => {
  //     if (calendarInstance) {
  //       calendarInstance.off('clickEvent', onAfterRenderEvent);
  //     }
  //   };
  // }, []);

  return (
    <div>
      <ToastUIReactCalendar
        key={key}
        height="500px"
        view="month"
        month={{
          dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
          visibleWeeksCount: 4,
          //   startDayOfWeek: 1
        }}
        useDetailPopup={true}
        calendars={calendars}
        isReadOnly={false}
        events={events}
        // onAfterRenderEvent={onAfterRenderEvent}
      /> 

    </div>
  )
}

export default ToastCalendar