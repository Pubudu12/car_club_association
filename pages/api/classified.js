import { get } from "./GRAPHQL_CLIENT_KIT";

const Classified = {
  get: {
    async all() {
      const data = await get(`query {
                classifieds(pagination:{limit:100}) {
                  data {
                    id,
                    attributes {
                      title,
                      description,
                      sale_or_wanted_state,
                      category,
                      price,
                      contact_person,
                      phone,
                      image {
                        data {
                          id,
                          attributes{
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }`)

      return data.classifieds.data
    }
  }
}

export default Classified