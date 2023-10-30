import React from 'react'
import RedirectButton from '../../CommonComponents/callToActions/rediredtButton/RedirectButton'

function UpcomingEventTItle() {
  return (
    <div className={`flex justify-between max-sm:flex-col max-sm:text-center pb-[2rem]`}>
        <h2 className={`uppercase text-3xl`}>Club <span className="font-bold">Calendar</span></h2>
        <div className='flex items-end max-sm:py-4 max-sm:justify-center'>
          <RedirectButton
            redirectButton="View All Events"
            directedlink="/calendar"
            target=""
            TextType=''
          />
        </div>
      </div>
  )
}

export default UpcomingEventTItle