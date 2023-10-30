import React from 'react';
import RedirectButton from '../../CommonComponents/callToActions/rediredtButton/RedirectButton';
import SmallCardSection from '../../CommonComponents/cardSections/SmallCardSection/SmallCardSection';
import Calendar from '../../../pages/api/calendar';
import UpcomingEventTItle from './upcomingEventTItle';

const ClubEventsSection = (props: any) => {
  const [events, setEvents] = React.useState<any>([])

  React.useEffect(() => {
    get()
  }, [""])

  const get = async () => {
    const newEvents = await Calendar.onlySix()
    setEvents(newEvents)
  }
  return (
    <div id='upcomingClubEvents'>
      <div id='clubEvents' className={`grid grid-cols-3 max-sm:grid-cols-1 gap-3`}>
        {events.length > 0 && events.map((event: any) => <SmallCardSection key={event.id} event={event} />)}
      </div>
    </div>

  )
}

export default ClubEventsSection