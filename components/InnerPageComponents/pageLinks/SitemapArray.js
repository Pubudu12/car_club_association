let currentYear = new Date().getFullYear();

const SitemapArray = {

    "classItems":"pageLinksColumns3",
    "links":[
        {
            "Title":"Home",
            "childAvailable":true,
            "innerdata":[
                {
                    "buttonName":"News from the club",  
                    "directedlink":"/#clubNoticeBoard",
                    "buttonId":"club_noticeboard",
                    "target" : ""
                },
                {
                    "buttonName":"Jaguar enthusiasts",  
                    "directedlink":"/#jaguar-enthusiasts",
                    "buttonId":"jaguar_enthusiasts",
                    "target" : ""
                },
                {
                    "buttonName":"Tech Tips",  
                    "directedlink":"/#tech-tips",
                    "buttonId":"tech-tips",
                    "target" : ""
                },
                {
                    "buttonName":"merchandise",  
                    "directedlink":"/#merchandise",
                    "buttonId":"merchandise",
                    "target" : ""
                }
            ]            
        },
        {
            "Title":"about us",
            "childAvailable":true,
            "innerdata":[
                {
                    "buttonName":"About Us",  
                    "directedlink":"/about-us",
                    "buttonId":"about_us"
                },
                {
                    "buttonName":"Fuel the Passion ",  
                    "directedlink":"/about-us#fuelThePassion",
                    "buttonId":"fuel_the_passion"
                },
                {
                    "buttonName":"Family Friendly",  
                    "directedlink":"/about-us#familyFriendly",
                    "buttonId":"family_friendly"
                },
                {
                    "buttonName":"Our Meeting Place",  
                    "directedlink":"/about-us#ourMeetingPlace",
                    "buttonId":"meeting_place"
                }
            ]            
        },
        {
            "Title":"membership",
            "childAvailable":true,
            "innerdata":[
                {
                    "buttonName":"about membership ",  
                    "directedlink":"/membership",
                    "buttonId":"about_membership"
                },
                {
                    "buttonName":"apply for new membership",  
                    "directedlink":"https://memberdesq.sportstg.com/index.cfm?fuseaction=registration_1&RegistrationMode=2&SubscriptionTypeID=278&OrgID=2037",
                    "buttonId":"apply_for_new_membership",
                    "target":"_blank"
                },
                {
                    "buttonName":"membership renewal",  
                    "directedlink":"https://memberdesq.sportstg.com/index.cfm?fuseaction=login&OrgID=2037",
                    "buttonId":"membership_renewal",
                    "target":"_blank"
                },
                {
                    "buttonName":" constitution and by-laws",  
                    "directedlink":"https://memberdesq.sportstg.com/index.cfm?fuseaction=login&OrgID=2037",
                    "buttonId":"constitution_and_by_laws",
                    "target":"_blank"
                }                
            ]            
        },        
        {
            "Title":"Regions",
            "childAvailable":true,
            "innerdata":[
                {
                    "buttonName":"Regions",  
                    "directedlink":"/regions",
                    "buttonId":"regional_registers"
                }
            ]            
        },
        {
            "Title":"Models",
            "childAvailable":true,
            "innerdata":[
                {
                    "buttonName":"Models",  
                    "directedlink":"/models",
                    "buttonId":"regional_registers"
                }
            ]            
        },
        {
            "Title":"News and articles",
            "childAvailable":true,
            "innerdata":[
                {
                    "buttonName":"current president’s report",  
                    "directedlink":"/news/current-president-report",
                    "buttonId":"current_president_report"
                },
                {
                    "buttonName":"Tech tips",  
                    "directedlink":"/news/tech-tips",
                    "buttonId":"tech_tips"
                },
                {
                    "buttonName":"Restorations ",  
                    "directedlink":"/news/restoration",
                    "buttonId":"restorations"
                },
                {
                    "buttonName":"CAT-A-LOG Magazine Archive",  
                    "directedlink":"/news/catalog",
                    "buttonId":"cat_a_log_magazines"
                }
            ]            
        },
        {
            "Title":"sporting",
            "childAvailable":true,
            "innerdata":[
                {
                    "buttonName": "Sporting ",  
                    "directedlink":"/sporting",
                    "buttonId":"winton_"+currentYear
                },
                {
                    "buttonName":"winton " +currentYear,  
                    "directedlink":"/sporting/winton-results/"+currentYear,
                    "buttonId":"winton_"+currentYear
                },
                {
                    "buttonName":"upcoming track events",  
                    "directedlink":"#",
                    "buttonId":"sporting_upcoming_track_events"
                },
                {
                    "buttonName":"the mk1 racer",  
                    "directedlink":"/sporting/sportingMk1",
                    "buttonId":"mk1_racer"
                },
                {
                    "buttonName":"marque sports car association (MSCA)",  
                    "directedlink":"https://msca.net.au/",
                    "buttonId":"marque_sports_car_association",
                    "target" : "_blank" 
                },
                {
                    "buttonName":"sporting photos",  
                    "directedlink":"https://www.flickr.com/photos/102103696@N06/",
                    "buttonId":"sporting_photos",
                    "target" : "_blank" 
                }
            ]            
        },
        {
            "Title":" concours",
            "childAvailable":true,
            "innerdata":[
                {
                    "buttonName":"Concours entry form",  
                    "directedlink":"https://memberdesq.sportstg.com/index.cfm?fuseaction=registration_1&RegistrationMode=2&SubscriptionTypeID=278&OrgID=2037",
                    "buttonId":"concours_entry",
                    "target":"_blank"
                },
                {
                    "buttonName":" Concours Entrants "+ currentYear,  
                    "directedlink":"/concours/entrants",
                    "buttonId":"concours_entrants"
                },
                {
                    "buttonName":"concours rules "+ currentYear,  
                    "directedlink":"/concours/rules",
                    "buttonId":"concours_rules"
                },
                {
                    "buttonName":"concours results ",  
                    "directedlink":"/concours/results",
                    "buttonId":"concours_results"
                },
                {
                    "buttonName":"perpetual trophies ",  
                    "directedlink":"/concours/perpetual",
                    "buttonId":"perpetual_trophies"
                }
            ]            
        },
        {
            "Title":"links",
            "childAvailable":true,
            "innerdata":[
                {
                    "buttonName":"Links",  
                    "directedlink":"/links",
                    "buttonId":"links"
                }
            ]            
        },
        {
            "Title":"club permit",
            "childAvailable":true,
            "innerdata":[
                {
                    "buttonName":"notice to prospective members",  
                    "directedlink":"/club-permit/notice-to-prospective-members",
                    "buttonId":"club_permit_prospective"
                },
                {
                    "buttonName":"background",  
                    "directedlink":"/club-permit/background",
                    "buttonId":"club_permit_background"
                },
                {
                    "buttonName":"club policy",  
                    "directedlink":"/club-permit/club-policy",
                    "buttonId":"club_permit_club_policy"
                },
                {
                    "buttonName":"operation",  
                    "directedlink":"/club-permit/operation",
                    "buttonId":"club_permit_operation"
                },
                {
                    "buttonName":"application process",  
                    "directedlink":"/club-permit/application-process",
                    "buttonId":"club_permit_application_process"
                },
                {
                    "buttonName":"latest from vicroads",  
                    "directedlink":"/club-permit/latest-from-vicRoads",
                    "buttonId":"club_permit_vicroads"
                }
            ]            
        },
        {
            "Title":" classifieds",
            "childAvailable":true,
            "innerdata":[
                {
                    "buttonName":"disclaimer",  
                    "directedlink":"/classifieds/disclaimer",
                    "buttonId":"classifieds_disclaimer"
                },
                {
                    "buttonName":"all classifieds ",  
                    "directedlink":"/classifieds",
                    "buttonId":"classifieds_all"
                },
                // {
                //     "buttonName":"parts for sale",  
                //     "directedlink":"#",
                //     "buttonId":"classifieds_forsale"
                // },
                // {
                //     "buttonName":"wanted ",  
                //     "directedlink":"#",
                //     "buttonId":"classifieds_wanted"
                // },
                // {
                //     "buttonName":"member used vehicles ",  
                //     "directedlink":"#",
                //     "buttonId":"classifieds_member_vehicles"
                // }
            ]            
        },         
        {
            "Title":"contact us",
            "childAvailable":true,
            "innerdata":[
                {
                    "buttonName":"committee",  
                    "directedlink":"/contact#COMMITTEE",
                    "buttonId":"contact_committee"
                },
                {
                    "buttonName":"coordinators",  
                    "directedlink":"/contact#COORDINATORS",
                    "buttonId":"contact_coordinators"
                },
            ]            
        },
    ]    
}

export default SitemapArray