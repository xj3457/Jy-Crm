<template>
    <div class="msearch">
        <div class="search-cell">
            <table>
                <tr>
                    <td><span>上海佳研实业有限公司</span></td>
                    <td>ShanghaiJiaYanShiYe</td>
                    <td>性质：</td>
                    <td>城市：上海</td>
                    <td>注册地址：</td>
                </tr>
                <tr>2</tr>
                <tr>3</tr>
            </table>
        </div>
    </div>
</template>

<script>
import API from '@/api/index'

export default {
    name: "Company",
    data() {
        return {
            companies: []
        }
    },
    created() {
        API.getCompanies().then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
}
</script>

<style lang="scss" scoped>
    $margin-auto: 0 auto;
    .msearch {
        text-align: center;
    }
    .search-cell {
        width: 80%;
        margin: $margin-auto;
        table {
            width: 100%;
            background-color: transparent;
            border: 1px solid grey;
            border-collapse: collapse;
            tr {
                height: 200px;
                border-top: 1px solid grey;
                border-bottom: 1px solid grey;
            }
        }
    }
</style>
