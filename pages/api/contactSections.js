import {get} from "./GRAPHQL_CLIENT_KIT";

const Sections = {
    async get() {
        const data = await get(`query {
            sections(sort: "order:asc") {
              data {
                id
                attributes {
                  name
                  code
                  order
                }
              }
            }
          }`)

        return data.sections.data
    }
}

export default Sections