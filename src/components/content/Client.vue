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
                    <tr>
                        <el-row>
                            <el-col :span="4">
                                <td>Tome</td>
                            </el-col>
                            <el-col :span="4">
                                <td>研发部</td>
                            </el-col>
                            <el-col :span="4">
                                <td>开发</td>
                            </el-col>
                            <el-col :span="4">
                                <td>6427574920</td>
                            </el-col>
                            <el-col :span="4">
                                <td>1263827932</td>
                            </el-col>
                            <el-col :span="4">
                                <td>tom1278@gmail.com</td>
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
        'dataObj'
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
