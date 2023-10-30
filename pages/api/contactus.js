import { get } from "./GRAPHQL_CLIENT_KIT";

const ContactUs = {
    async get() {
        const data = await get(`query {
          contactUses(pagination:{limit:200}){
            data{
              id,
              attributes{
                person_name,
                designation,
                section_type{
                  data{
                    attributes{
                      code,
                      name
                    }
                  }
                },
                phone,
                email,
                small_description,
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

        return data.contactUses.data
    }
}

export default ContactUs