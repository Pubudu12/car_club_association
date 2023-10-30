import TimezoneSelect, {allTimezones} from 'react-timezone-select';
import React, { useEffect, useState } from 'react';

const Timezone = (props:any) => {

    const { start, end } = props

    const [timezone, setTimezone] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    )

    const change = async (zone: any) => {
        setTimezone(zone)

        console.log(timezone)
    }

    return(
        <div>
            <TimezoneSelect
                value={timezone}
                onChange={(e) => change(e.value)}
                timezones={{
                    ...allTimezones,
                }}
            />
        </div>
    )
}

export default Timezone