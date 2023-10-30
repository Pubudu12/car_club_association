import {get} from './GRAPHQL_CLIENT_KIT'
const Winton = {
    get : {
        async years(){
            const data = await get(`query {
                trackTimes(sort : "year:DESC", pagination:{limit:5}){
                  data{
                    id,
                    attributes{
                      year
                    }
                  }
                }
              }`)
              return data.trackTimes.data
        },

        async trackTimes(year){
          const data = await get(`query {
            trackTimes(filters : {year: {contains: "${year}"}}, pagination:{limit:100}){
              data{
                id,
                attributes{
                  details{
                    ...on ComponentTrackTimesDetails{
                      Position,
                      Number,
                      Name,
                      Car,
                      Time
                    }
                  }
                }
              }
            }
          }`)
          return data.trackTimes.data
        },

        async trophyWinners(year){
          const data = await get(`query {
            trophyWinners(filters : {year: {contains: "${year}"}}, pagination:{limit:100}){
              data{
                id,
                attributes{
                  details{
                    ...on ComponentTrophyWinnersDetails{
                      Trophy,
                      Name,
                      Car,
                      Time
                    }
                  }
                }
              }
            }
          }`)
          return data.trophyWinners.data
        },

        async presentationDinner(year){
          const data = await get(`query {
            presentationDinners(filters : {year: {contains: "${year}"}}, pagination:{limit:20}){
              data {
                id,
                attributes{
                  year,
                  details {
                    ...on ComponentPresentationDinnerDetails{
                      Name,
                      Place,
                      Description,
                      Year
                    }
                  }
                }
              }
            }
          }`)
          return data.presentationDinners.data
        }
    }
}

export default Winton