import {request} from "@/network/request";

export default {
    getCompanies(data) {
        return request({
            url: '/crm/companies',
            method: 'post',
            data: data
        })
    },
    getStaffData(data) {
        return request({
            url: '/crm/staff_all',
            method: 'post',
            data: data,
        })
    }
}
