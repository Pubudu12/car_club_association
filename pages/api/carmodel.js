import { get } from "./GRAPHQL_CLIENT_KIT";

const CarModels = {
  get: {
    async all(limit) {
      const data = await get(`query{
            models(pagination:{limit:${limit}}){
              data{
                id,
                attributes {
                  name,
                  year,
                  description,
                  class{
                    data{
                      id,
                      attributes{
                        title
                      }
                    }
                  },
                  image{
                    data{
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
      return data.models.data
    },

    async one(id) {
      const data = await get(`query{
  model(id:${id}){
    data{
      id,
      attributes{
        name,
        year,
        description,
        class{
          data{
            id,
            attributes{
              title,
              code,
            }
          }
        },
        image{
          data{
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
      return data.model.data
    },

    async relatedModels(id, limit) {
      const data = await get(`query{
            models(pagination:{limit:${limit}},  filters: { id: { not: {eq: ${id}}}}){
              data{
                id,
                attributes {
                  name,
                  year,
                  description,
                  class{
                    data{
                      id,
                      attributes{
                        title
                      }
                    }
                  },
                  image{
                    data{
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
      return data.models.data
    },
  }
}

export default CarModels