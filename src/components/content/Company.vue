<template>
    <div>
        <el-card>
            <el-row :gutter="20">
                <el-col :span="8" :offset="4">
                    <el-input placeholder="请输入内容">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">添加公司</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="16" :sm="16" :offset="4">
                    <table class="search-cell">
                        <tbody>
                        <div style="display: contents" v-for="item in companies" :key="item.name">
                            <tr class="portait-tr" @click="getStaffList($event)">
                                <p class="component-name" style="display: none">{{ item.name }}</p>
                                <td>
                                    <el-row>
                                        <el-col>
                                            <h4>{{ item.name }}</h4>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :xs="24" :md="8" class="company-message">{{
                                                item.english_name
                                            }}
                                        </el-col>
                                        <el-col :xs="24" :sm="8" class="company-message">性质：{{ item.nature }}</el-col>
                                        <el-col :xs="24" :sm="8" class="company-message">城市：{{ item.city }}</el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col class="company-message">注册地址：{{ item.address }}</el-col>
                                    </el-row>
                                </td>
                            </tr>
                            <tr class="client_message">
                                <div>
                                    <Client :dataObj="show_staff" :staffData="staff_data"
                                            v-if="is_show_component == item.name"/>
                                </div>
                            </tr>
                        </div>
                        </tbody>
                    </table>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
import API from '@/api/index'
import Client from './Client'

export default {
    name: "Company",
    created() {
        this.getCompaniesList()
    },
    methods: {
        getCompaniesList() {
            API.getCompanies(this.query_info).then(res => {
                this.companies = res.data
            }).catch(err => {
                this.$message('无法获取数据！' + err)
            })
        },
        getStaffList(event) {
            if (this.is_show_component != event.currentTarget.firstElementChild.innerText) {
                this.show_staff = false
            }
            this.is_show_component = event.currentTarget.firstElementChild.innerText;
            this.show_staff ? this.show_staff = false : this.show_staff = true
            var data = {"company_name": event.currentTarget.firstElementChild.innerText}
            API.getStaffData(data).then(res => {
                this.staff_data = res.data
            }).catch(err => {
                this.$message('无法获取数据！' + err)
            })
        }
    },
    components: {
        Client,
    },
    data() {
        return {
            query_info: {
                query: '',
                page_num: 1,
                page_size: 10,
            },
            companies: [],
            total: 0,
            show_staff: false,
            is_show_component: '',
            staff_data: '',
        }
    },
}
</script>

<style lang="scss" scoped>
.search-cell {
    width: 100%;
    border: 1px solid #DCDFE6;
    border-collapse: collapse;
    border-radius: 4px !important;

    tr {
        cursor: pointer;
        border-bottom: 1px solid #DCDFE6;

        td {
            padding-left: 8%;
            padding-bottom: 1%;
        }
    }
}

.company-message {
    margin-bottom: 1%;
}
</style>
