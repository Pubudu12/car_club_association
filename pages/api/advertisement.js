import { get } from "./GRAPHQL_CLIENT_KIT";

const Advertisement = { 
  get: {
    async all(code) {
      const data = await get(`query {
                advertisements(pagination:{limit:40}){
                  data{
                    id,
                    attributes{
                      title,
                      advertisement_link,
                      image_desktop{
                        data{
                          id,
                          attributes{
                            url
                          }
                        }
                      },
                      image_tablet{
                        data{
                          id,
                          attributes{
                            url
                          }
                        }
                      },
                      image_mobile{
                        data{
                          id,
                          attributes{
                            url
                          }
                        }
                      },
                    }
                  }
                }
              }`)
              // console.log(data.advertisements.data)
      return data.advertisements.data

    }
  }
}

export default Advertisement