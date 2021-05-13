<template>
    <div>
        <el-form :model="form">
            <el-form-item label="公司：" :label-width="formLabelWidth">
                上海弘快1111111111111
            </el-form-item>
<!--            <el-row>-->
<!--                <el-col :span="4" class="headers"><span>姓 名</span></el-col>-->
<!--                <el-col :span="4" class="headers"><span>电 话</span></el-col>-->
<!--                <el-col :span="4" class="headers"><span>手 机</span></el-col>-->
<!--                <el-col :span="4" class="headers"><span>部 门</span></el-col>-->
<!--                <el-col :span="4" class="headers"><span>邮 箱</span></el-col>-->
<!--                <el-col :span="4" class="headers"><span>邮 箱</span></el-col>-->
<!--            </el-row>-->
<!--            <el-form-item style="margin-top: 20px" v-for="index of 5" :key="index">-->
<!--                <el-col :span="4"><el-input v-model="form.name" autocomplete="off"></el-input></el-col>-->
<!--                <el-col :span="4"><el-input autocomplete="off"></el-input></el-col>-->
<!--                <el-col :span="4"><el-input autocomplete="off"></el-input></el-col>-->
<!--                <el-col :span="4"><el-input autocomplete="off"></el-input></el-col>-->
<!--                <el-col :span="4"><el-input autocomplete="off"></el-input></el-col>-->
<!--                <el-col :span="4"><el-input autocomplete="off"></el-input></el-col>-->
<!--            </el-form-item>-->
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align: center;margin-top: 20px">
            <el-button type="primary" @click="subForm">确 定</el-button>
            <el-button>重 置</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddStaff",
    data() {
        return {
            form: {},
            formLabelWidth: '120px'
        }
    },
    methods: {
        subForm() {
            this.$emit('onSubmit')
        }
    }
}
</script>

<style scoped>
.headers {
    text-align: center;
}
</style>
