import { get } from "./GRAPHQL_CLIENT_KIT";

const Calendar = {
  get: async () => {
    const data = await get(`query{
            googleEvents(sort:"date:DESC",pagination:{limit:200}){
              data{
                id,
                attributes{
                  title,
                  description,
                  date,
                  start,
                  end,
                  venue,
                  event_link,
                  event_id
                }
              }
            }
          }`)
    return data.googleEvents.data
  },
  onlySix: async () => {
    const data = await get(`query{
        googleEvents(sort:"date:DESC",pagination:{limit:6}){
          data{
            id,
            attributes{
              title,
              description,
              date,
              start,
              end
            }
          }
        }
      }`)
    return data.googleEvents.data
  },
  fetchEventById: async (id) => {
    const data = await get(`query{
      googleEvent(id:${id}){
         data{
              id,
              attributes{
                title,
                event_link,
                start,
                description,
                end,
                venue,
                time_zone,
                date
              }
            }
      }
    }`)
    return data.googleEvent.data
  },

}

export default Calendar