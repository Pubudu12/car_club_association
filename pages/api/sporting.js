import { get } from "./GRAPHQL_CLIENT_KIT";

const Sporting = {
    get: {
        async mk1Race() {
            const data = await get(`query {
                sportingMk1{
                  data{
                    id,
                    attributes{
                      title,
                      content,
                      slug_url,
                      image {
                        data {
                          attributes{
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }`)
            return data.sportingMk1.data
        }
    }
}

export default Sporting