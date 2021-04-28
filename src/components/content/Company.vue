<template>
    <div class="msearch">
        <el-row>
            <el-col :xs="16" :sm="16" :offset="4">
                <div class="search-cell">
                    <table>
                        <tr>
                            <td>
                                <h3>上海佳研实业有限公司</h3>
                                <div class="rline">
                                    <span>ShanghaiJiaYanShiYe</span>
                                    <span>性质:</span>
                                    <span>城市:上海市</span>
                                </div>
                                <div class="rline">
                                    <span>注册地址：上海市徐汇区上海五洲国际大厦</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// import API from '@/api/index'

export default {
    name: "Company",
    data() {
        return {
            companies: []
        }
    },
    // created() {
    //     API.getCompanies().then(res => {
    //         console.log(res.data);
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
}
</script>

<style lang="scss" scoped>
    $margin-auto: 0 auto;
    .msearch {
        text-align: center;
        font-size: 1rem;
    }
    .search-cell {
        margin: $margin-auto;
        table {
            width: 100%;
            border: 1px solid grey;
            border-collapse: collapse;
            tr {
                height: 100px;
                border-top: 1px solid grey;
                border-bottom: 1px solid grey;
                td {
                    text-align: left;
                    padding-left: 5%;
                    padding-bottom: 2%;
                }
            }
        }
    }
    .rline {
        height: 25px;
        span {
            margin-right: 20%;
        }
    }
</style>
