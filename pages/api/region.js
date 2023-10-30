import { get } from "./GRAPHQL_CLIENT_KIT";

const Region = {
    get: {
        representatives: async (code) => {
            const data = await get(`query {
                regionRepresentatives (filters: {region : {code : {contains :"${code}"}}}){
                  data{
                    id,
                    attributes{
                        region {
                            data{
                              attributes{
                                code,
                                region_name
                              }
                            }
                          },
                      person_name,
                      title,
                      description,
                      phone{
                        ...on ComponentDetailsPhone{
                          phone
                        }
                      },
                      image {
                        data{
                          attributes{
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }`)
            return data.regionRepresentatives.data
        }
    }
}

export default Region