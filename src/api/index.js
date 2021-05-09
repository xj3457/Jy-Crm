import {request} from "@/network/request";

export default {
    getCompanies(data) {
        console.log(data);
        return request({
            url: '/crm/companies',
            method: 'get',
            params: data,
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
