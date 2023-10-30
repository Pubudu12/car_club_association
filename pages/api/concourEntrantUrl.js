import {get} from "./GRAPHQL_CLIENT_KIT";

const CouncourEntrantURL = {
    async get() {
        const data = await get(`query{
                                councourEntrantsFormUrl{
                                data{
                                    attributes{
                                    councour_entrant_form_url
                                    }
                                }
                                }
                            }`)

        return data.councourEntrantsFormUrl.data
    }
}

export default CouncourEntrantURL