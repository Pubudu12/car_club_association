import { get } from "./GRAPHQL_CLIENT_KIT";

const Home = {
  upComing: {
    get: {
      async all() {
        const data = await get(`query {
                    upcomingEvents{
                      data{
                        id,
                        attributes{
                          name,
                          venue,
                          date,
                          image{
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
        return data.upcomingEvents.data
      }
    }
  },

  noticeBoard: {
    get: {
      async all(count = 2) {
        const data = await get(`query {
            clubNewses(filters :{highlited: {eq:true}}, pagination:{limit:${count}}){
              data{
                id,
                attributes{
                  title,
                  published_date,
                  content,
                  slug_url,
                  small_description
                }
              }
            }
          }`)
        return data.clubNewses.data
      }
    }
  },

  clubNews: {
    get: {
      async all() {
        const data = await get(`query {
          techTips(pagination:{limit:10},sort:["id:DESC"]){
            data{
              id,
              attributes{
                title,
                published_date,
                smalll_description,
                slug_url,
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
        return data.techTips.data
      }
    }
  },

  models: {
    get: {
      async all() {
        const data = await get(`query {
          models(sort :"year:DESC", pagination: {limit:10}){
            data{
              id,
              attributes{
                name,
                description,
                year,
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
        return data.models.data
      }
    }
  }
}

export default Home