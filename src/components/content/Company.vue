<template>
    <div>
        <el-card>
            <el-row :gutter="20">
                <el-col :span="8" :offset="5">
                    <el-input placeholder="请输入内容" :value="query_info.query" v-model="content">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="searchCompany">搜索</el-button>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="addCompany">添加公司</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="20" :offset="2">
                    <table class="search-cell">
                        <tbody>
                        <div style="display: contents" v-for="(item, index) in companies" :key="index">
                            <tr class="portait-tr" @click="getStaffList($event)">
                                <p class="component-name" style="display: none">{{ item.name }}</p>
                                <td>
                                    <el-row>
                                        <el-col>
                                            <h4>{{ item.name }}</h4>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="8" class="company-message">{{ item.english_name }}</el-col>
                                        <el-col :span="8" class="company-message">性质：{{ item.nature }}</el-col>
                                        <el-col :span="4" class="company-message">所在地：{{ item.city }}</el-col>
                                        <el-button :span="4" type="primary" style="margin-top: -10px" @click.stop="addStaff(item.name)">添加员工</el-button>
                                    </el-row>
                                    <el-row>
                                        <el-col class="company-message">注册地址：{{ item.address }}</el-col>
                                    </el-row>
                                </td>
                            </tr>
                            <tr class="portait-tr client_message">
                                <div>
                                    <Client :dataObj="show_staff" :staffData="staff_data" :tableHeads="table_heads" v-if="is_show_component == item.name"/>
                                </div>
                            </tr>
                        </div>
                        <div style="text-align: center">
                            <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="query_info.page_num"
                                :page-sizes="[5, 10, 15, 20]"
                                :page-size="query_info.page_size"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total">
                            </el-pagination>
                        </div>
                        </tbody>
                    </table>
                </el-col>
            </el-row>
            <el-row>
                <el-dialog title="添加公司信息" :visible.sync="show_add_company" width="40%" center>
                    <addCompany @onSubmit="handleSubmit"/>
                </el-dialog>
            </el-row>
            <el-row>
                <addStaff :showAddStaff="show_add_staff" />
            </el-row>
        </el-card>
    </div>
</template>

<script>
import API from '@/api/index.js'
import Client from './Client.vue'
import AddCompany from './AddCompany.vue'
import AddStaff from './AddStaff.vue'

export default {
    name: "Company",
    components: {
        Client,
        AddCompany,
        AddStaff,
    },
    data() {
        return {
            content: '',
            query_info: {
                query: '',
                page_num: 1,
                page_size: 10,
            },
            active_company_index: -1,
            companies: [],
            total: 0,
            show_staff: false,
            show_add_company: false,
            show_add_staff: false,
            is_show_component: '',
            staff_data: '',
            table_heads: '',
        }
    },
    created() {
        this.getCompaniesList()
    },
    methods: {
        handleSubmit() {
            this.show_add_company = false
        },
        searchCompany() {
            if (this.content != '') {
                this.query_info.query = this.content.trim()
                this.getCompaniesList()
            }
        },
        getCompaniesList() {
            API.getCompanies(this.query_info).then(res => {
                this.total = res.data[2][0]['company_count']
                this.companies = res.data[0]
                this.table_heads = res.data[1][0]
            }).catch(err => {
                this.$message('无法获取数据！' + err)
            })
        },
        getStaffList(event) {
            if (this.is_show_component != event.currentTarget.firstElementChild.innerText) {
                this.show_staff = false
            }
            this.updateColor()
            event.currentTarget.style.background = 'rgba(48,182,241,0.3)'
            event.currentTarget.nextElementSibling.style.background = '#31f23152'
            this.is_show_component = event.currentTarget.firstElementChild.innerText;
            var data = {"company_name": event.currentTarget.firstElementChild.innerText}
            API.getStaffData(data).then(res => {
                this.staff_data = res.data
                this.show_staff ? this.show_staff = false : this.show_staff = true
            }).catch(err => {
                this.$message('无法获取数据！' + err)
            })
        },
        handleSizeChange(newSize) {
            this.query_info.page_size = newSize
            this.getCompaniesList()
        },
        handleCurrentChange(newPage) {
            this.query_info.page_num = newPage
            this.getCompaniesList()
        },
        updateColor() {
            var elList = document.querySelectorAll(".portait-tr")
            for(var i = 0; i < elList.length; i++){
                elList[i].style.background = ''
            }
        },
        addStaff() {
            console.log(11111)
        },
        addCompany() {
            this.show_add_company = true
        }
    },
}
</script>

<style lang="scss" scoped>
.search-cell {
    width: 100%;
    border: 1px solid #DCDFE6;
    border-collapse: separate;
    border-radius: 4px;
    margin-top: 1%;

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

.portait-tr {
    font-family: Arial, Helvetica, sans-serif;
}
</style>
