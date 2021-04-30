import {request} from "@/network/request";

export default {
    getCompanies() {
        return request({
            url: '/crm/companies/'
        })
    },
    getClientMessage(data) {
        return request({
            url: '/crm/staff_all',
            method: 'post',
            data: data,
        })
    }
}
