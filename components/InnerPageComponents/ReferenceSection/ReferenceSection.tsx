import React, { Component } from 'react'
import RedirectButton from '../../CommonComponents/callToActions/rediredtButton/RedirectButton';
import HeaderSwitch from '../../CommonComponents/headerswitch/HeaderSwitch';

const ReferencesSection= () =>{
    return(
        <div>
             <HeaderSwitch text="References" type="secondary"/>
                    <div className="py-2">
                        <RedirectButton 
                            redirectButton="Road Safety (Vehicles) Regulations 2021"
                            directedlink= "https://www.vicroads.vic.gov.au/about-vicroads/acts-and-regulations/road-safety-vehicles-regulations-2021" 
                            target="_blank"
                            TextType = ""
                        />
                    </div>
                    <div className="py-2">
                        <RedirectButton 
                            redirectButton="Road Safety Act 1986"
                            directedlink= "https://www.legislation.vic.gov.au/in-force/acts/road-safety-act-1986" 
                            target="_blank"
                            TextType = ""
                        />
                    </div>
                    <HeaderSwitch text="Website References" type="secondary"/>
                    <div className="py-2">
                        <RedirectButton 
                            redirectButton="VicRoads6"
                            directedlink= "https://www.vicroads.vic.gov.au/registration/limited-use-permits/club-permit-scheme/car-club-permits" 
                            target="_blank"
                            TextType = ""
                        />
                    </div>
                    <div className="py-2">
                        <RedirectButton 
                            redirectButton="Association of Motoring Clubs (AOMC)"
                            directedlink= "https://www.aomc.asn.au/" 
                            target="_blank"
                            TextType = ""
                        />
                    </div>
        </div>

    );

}
export default ReferencesSection;