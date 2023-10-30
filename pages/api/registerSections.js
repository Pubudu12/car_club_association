import { get } from "./GRAPHQL_CLIENT_KIT";

const RegistersData = {
    async get() {
        const data = await get(`query {
          registers(pagination:{limit:200}){
            data{
              id,
              attributes{
                person_name,
                designation,
                registers_section{
                  data{
                    attributes{
                      Code,
                      Name
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

        // console.log('data from register section ::: ',data.registers.data)

        return data.registers.data
    }
}

export default RegistersData