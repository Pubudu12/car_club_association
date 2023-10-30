import { get } from "./GRAPHQL_CLIENT_KIT";

const Concur = {
  entrants: {
    get: {
      async all() {
        const data = await get(`query {
                    entrants(pagination:{limit:100}) {
                      data {
                        id,
                        attributes {
                          venue,
                          date,
                          details {
                            ...on ComponentEntrantsDetails{
                              name,
                              model,
                              year
                            }
                          },
                          class{
                            data{
                              id,
                              attributes{
                                title,
                                code
                              }
                            }
                          }
                        }
                      }
                    }
                  }`)
        return data.entrants.data
      }
    }
  },
  perpetuals: {
    get: {
      async all(year) {
        const data = await get(`query {
                    classes {
                      data {
                        id,
                        attributes {
                          title,
                          perpetuals(filters : {year : {contains: "${year}"},happened: {eq:true}}) {
                            data {
                              id,
                              attributes{
                                person_name,
                                year,
                                description,
                                model,
                                trophy {
                                  data {
                                    id,
                                    attributes {
                                      name
                                    }
                                  }
                                }                                
                              }
                            }
                          }
                        }
                      }
                    }
                  }`)
        return data.classes.data
      }
    }
  },
  individualAwards: {
    get: {
      async all(year) {
        const data = await get(`query {
                    classes {
                      data {
                        id,
                        attributes {
                          title,
                          individual_awards(filters : {year : {contains: "${year}"}}){
                            data{
                              id,
                              attributes{
                                person_name,
                                award_type,
                                year,
                                grams,
                                model
                              }
                            }
                          }
                        }
                      }
                    }
                  }`)
        return data.classes.data
      }
    }
  },
  trophies: {
    get: {
      async all() {
        const data = await get(`query {
                    trophies {
                      data {
                        id,
                        attributes {
                          name,
                          description
                        }
                      }
                    }
                  }`)
        return data.trophies.data
      },

      async trophy(id) {
        const data = await get(`query {
                  perpetuals(filters : {trophy : {id: {contains:${id}}}}, sort: "year:desc", pagination:{limit:100}){
                  data {
                    id,
                    attributes{
                      happened,
                      reason_of_not_happaned,
                      trophy{
                        data{
                          id,
                          attributes{
                            name,
                            description
                          }
                        }
                      },
                      person_name,
                      year,
                      model
                    }
                  }
                }
              }`)
        return data.perpetuals.data
      }
    }
  },
  rule: {
    async get() {
      const data = await get(`query {
        concurRule {
          data {
            id,
            attributes {
              topic,
              year,
              content {
                ...on ComponentConcurRulesContent{
                  sub_topic,
                  content
                }
              }
            }
          }
        }
      }`)
      return data.concurRule.data
    }
  }
}

export default Concur