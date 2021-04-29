<template>
    <div>
        <el-row>
            <el-col :xs="16" :sm="16" :offset="4">
                <table class="search-cell">
                    <tbody>
                        <div style="display: contents" v-for="item in companies" :key="item.company_name">
                            <tr class="portait-tr" @click="show_client_data($event)">
                                <td>
                                    <el-row>
                                        <el-col>
                                            <h4>{{ item.company_name }}</h4>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :xs="24" :md="8" class="company-message">ShanghaiJiaYanShiYe</el-col>
                                        <el-col :xs="24" :sm="8" class="company-message">性质：民营</el-col>
                                        <el-col :xs="24" :sm="8" class="company-message">城市：上海市</el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col class="company-message">注册地址：上海市徐汇区</el-col>
                                    </el-row>
                                </td>
                            </tr>
                            <tr class="client-message" style="display: none">
                                <transition name="el-zoom-in-top">
                                    <div v-show="show_client" class="transition-box">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <el-row>
                                                        <el-col :span="4"><td>姓名</td></el-col>
                                                        <el-col :span="4"><td>部门</td></el-col>
                                                        <el-col :span="4"><td>职务</td></el-col>
                                                        <el-col :span="4"><td>座机</td></el-col>
                                                        <el-col :span="4"><td>手机</td></el-col>
                                                        <el-col :span="4"><td>邮箱</td></el-col>
                                                    </el-row>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <el-row>
                                                        <el-col :span="4"><td>Tome</td></el-col>
                                                        <el-col :span="4"><td>研发部</td></el-col>
                                                        <el-col :span="4"><td>开发</td></el-col>
                                                        <el-col :span="4"><td>6427574920</td></el-col>
                                                        <el-col :span="4"><td>1263827932</td></el-col>
                                                        <el-col :span="4"><td>tom1278@gmail.com</td></el-col>
                                                    </el-row>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </transition>
                            </tr>
                        </div>
                    </tbody>
                </table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import API from '@/api/index'

export default {
    name: "Company",
    created() {
        API.getCompanies().then(res => {
            this.companies = res.data
        }).catch(err => {
            this.$message('无法获取数据！' + err)
        })
    },
    methods: {
        show_client_data(event) {
            this.show_client ? this.show_client = false : this.show_client = true
            event.currentTarget.nextElementSibling.style.display = 'inline'
        }
    },
    data() {
        return {
            companies: [],
            show_client: false,
        }
    },
}
</script>

<style lang="scss" scoped>
    $table-border-color: 1px solid grey;
    .search-cell {
        width: 100%;
        border: $table-border-color;
        border-collapse: collapse;
        tr {
            cursor: pointer;
            border-bottom: $table-border-color;
            td {
                padding-left: 8%;
                padding-bottom: 1%;
            }
        }
    }
    .company-message {
        margin-bottom: 1%;
    }
    .transition-box table {
        width: 100%;
        padding: 0 12% 0 7%;
        td {
            width: 1%;
        }
    }
</style>
