import {request} from "@/network/request";

export default {
    getCompanies() {
        return request({
            url: '/crm/companies/'
        })
    }
}
