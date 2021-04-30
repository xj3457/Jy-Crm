<template>
    <div>
        <el-row>
            <el-col :xs="16" :sm="16" :offset="4">
                <table class="search-cell">
                    <tbody>
                    <div style="display: contents" v-for="item in companies" :key="item.company_name">
                        <tr class="portait-tr" @click="show_client_data($event)">
                            <p class="component-name" style="display: none">{{ item.company_name }}</p>
                            <td>
                                <el-row>
                                    <el-col>
                                        <h4>{{ item.company_name }}</h4>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :xs="24" :md="8" class="company-message">{{ item.english_name }}</el-col>
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
                                <Client :dataObj="show_client" v-if="is_show_component == item.company_name"/>
                            </div>
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
import Client from './Client'

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
            if (this.is_show_component != event.currentTarget.firstElementChild.innerText) {
                this.show_client = false
            }
            this.is_show_component = event.currentTarget.firstElementChild.innerText;
            this.show_client ? this.show_client = false : this.show_client = true
            var data = {company: event.currentTarget.firstElementChild.innerText}
            API.getClientMessage(data).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }
    },
    components: {
        Client,
    },
    data() {
        return {
            companies: [],
            show_client: false,
            is_show_component: '',
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
</style>
