<template>
    <div>
        <transition name="el-zoom-in-top">
            <div v-show="dataObj" class="transition-box">
                <table>
                    <thead>
                    <tr>
                        <el-row>
                            <el-col :span="4" v-if="tableHeads.name != undefined">
                                <td>{{ tableHeads.name }}</td>
                            </el-col>
                            <el-col :span="4" v-if="tableHeads.department != undefined">
                                <td>{{ tableHeads.department }}</td>
                            </el-col>
                            <el-col :span="4" v-if="tableHeads.position != undefined">
                                <td>{{ tableHeads.position }}</td>
                            </el-col>
                            <el-col :span="4" v-if="tableHeads.telephone != undefined">
                                <td>{{ tableHeads.telephone }}</td>
                            </el-col>
                            <el-col :span="4" v-if="tableHeads.mobilephone != undefined">
                                <td>{{ tableHeads.mobilephone }}</td>
                            </el-col>
                            <el-col :span="4" v-if="tableHeads.email != undefined">
                                <td>{{ tableHeads.email }}</td>
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
        'staffData',
        'tableHeads'
    ]
}
</script>

<style lang="scss" scoped>

.transition-box table {
    width: 100%;
    padding: 0 12% 0 8%;
    border-top: 1px solid #DCDFE6;
    border-bottom: 1px solid #DCDFE6;

    td {
        width: 1%;
    }

}
</style>
