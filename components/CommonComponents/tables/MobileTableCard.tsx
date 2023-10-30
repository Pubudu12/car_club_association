import React from 'react'
import SmallWhiteCard from '../../InnerPageComponents/SmallWhiteCard/SmallWhiteCard'

const MobileTableCard = (props:any) => {

    const details = props;

  return (
    <div className={`px-[2rem] py-[5px]`}>
        
      <SmallWhiteCard>

        {props.children}
          
      </SmallWhiteCard>    
                  
    </div>
  )
}

export default MobileTableCard