<template>
    <div>
        <transition name="el-zoom-in-top">
            <div v-show="dataObj" class="transition-box">
                <table>
                    <thead>
                    <tr>
                        <el-row>
                            <el-col :span="4">
                                <td>姓名</td>
                            </el-col>
                            <el-col :span="4">
                                <td>部门</td>
                            </el-col>
                            <el-col :span="4">
                                <td>职务</td>
                            </el-col>
                            <el-col :span="4">
                                <td>座机</td>
                            </el-col>
                            <el-col :span="4">
                                <td>手机</td>
                            </el-col>
                            <el-col :span="4">
                                <td>邮箱</td>
                            </el-col>
                        </el-row>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in staffData" :key="item.name">
                        <el-row>
                            <el-col :span="4" v-if="item.name != undefined">
                                <td>{{ item.name }}</td>
                            </el-col>
                            <el-col :span="4" v-if="item.department != undefined">
                                <td>{{ item.department }}</td>
                            </el-col>
                            <el-col :span="4" v-if="item.position != undefined">
                                <td>{{ item.position }}</td>
                            </el-col>
                            <el-col :span="4" v-if="item.telephone != undefined">
                                <td>{{ item.telephone }}</td>
                            </el-col>
                            <el-col :span="4" v-if="item.mobilephone != undefined">
                                <td>{{ item.mobilephone }}</td>
                            </el-col>
                            <el-col :span="4" v-if="item.email != undefined">
                                <td>{{ item.email }}</td>
                            </el-col>
                        </el-row>
                    </tr>
                    </tbody>
                </table>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "Client",
    props: [
        'dataObj',
        'staffData'
    ]
}
</script>

<style lang="scss" scoped>

.transition-box table {
    width: 100%;
    padding: 0 12% 0 7%;

    td {
        width: 1%;
    }

}
</style>
