import { get } from "./GRAPHQL_CLIENT_KIT";

const News = {
  club: {
    get: {
      async all() {
        const data = await get(`query {
          clubNewses{
            data{
              id,
              attributes{
                title, 
                content,
                slug_url,
                news_single_page_image{
                  data {
                    id,
                    attributes{
                      url
                    }
                  }
                },
                image {
                  data {
                    id,
                    attributes{
                      url
                    }
                  }
                },
                published_date,
                small_description,
                slug_url
              }
            }
          }
        }`)

        return data.clubNewses.data
      },
      async single(slug) {
        const data = await get(`query {
          clubNewses(filters : {slug_url : {eq:"${slug}"}}){
            data{
              id,
              attributes{
                title,
                content,
                news_single_page_image{
                  data {
                    id,
                    attributes{
                      url
                    }
                  }
                },
                image {
                  data {
                    id,
                    attributes{
                      url
                    }
                  }
                },
                published_date,
                small_description,
                slug_url
              }
            }
          }
        }`)
        return data.clubNewses.data
      },
    }
  },
  catalogs: {
    get: {
      async   all() {
        const data = await get(`query {
          catalogs(pagination:{limit:200}, sort:["year:DESC"]) {
            data {
              id,
              attributes {
                title,
                link,
                year,
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
        return data.catalogs.data
      },
      async single(slug) {
        const data = await get(`query {
          catalogs(filters : {slug_url : {eq:"${slug}"}}) {
            data {
              id,
              attributes {
                title,
                link,
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
        return data.catalogs.data
      },
    }
  },
  restorastion: {
    get: {
      async all() {
        const data = await get(`query {
          restorations(pagination:{limit:200}){
            data{
              id,
              attributes{
                author,
                title,
                small_description,
                slug_url,
                parts {
                  ...on ComponentRestorationParts{
                    title,
                    content
                  }
                },
                news_single_page_image{
                  data {
                    id,
                    attributes{
                      url
                    }
                  }
                },
                image {
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
        return data.restorations.data
      },
      async single(slug) {
        const data = await get(`query {
          restorations(filters : {slug_url : {eq:"${slug}"}}){
            data{
              id,
              attributes{
                author,
                title,
                small_description,
                parts {
                  ...on ComponentRestorationParts{
                    title,
                    content
                  }
                },
                news_single_page_image{
                  data {
                    id,
                    attributes{
                      url
                    }
                  }
                },
                image {
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
        return data.restorations.data
      }
    }
  },
  techTip: {
    get: {
      async all() {
        const data = await get(`query {
          techTips(pagination:{limit:200}){
            data{
              id,
              attributes{
                title,
                smalll_description,
                content,
                slug_url,
                published_date,
                news_single_page_image{
                  data {
                    id,
                    attributes{
                      url
                    }
                  }
                },
                image {
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
        return data.techTips.data
      },
      async single(slug) {
        const data = await get(`query {
          techTips(filters : {slug_url : {eq:"${slug}"}}){
            data{
              id,
              attributes{
                title,
                smalll_description,
                content,
                news_single_page_image{
                  data {
                    id,
                    attributes{
                      url
                    }
                  }
                },
                image {
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
        return data.techTips.data
      }
    }
  },

  presidentReport : {
      get: {
        async report() {
            const data = await get(`query {
              presidentReport{
                data{
                  id,
                  attributes{
                    title,
                    content,
                    small_description,
                    published_date,
                    image {
                      data {
                        attributes{
                          url
                        }
                      }
                    },
                    news_single_page_image {
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
            return data.presidentReport.data
        }
    }
  }
}

export default News