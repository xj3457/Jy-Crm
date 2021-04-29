import {request} from "@/network/request";

export default {
    getCompanies() {
        return request({
            url: '/crm/companies/'
        })
    },
    getClientMessage(data) {
        return request({
            url: '',
            method: 'post',
            data: data,
        })
    }
}
