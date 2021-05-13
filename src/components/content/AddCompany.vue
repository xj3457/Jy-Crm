<template>
    <div>
        <el-form ref="addCompanyRef" :model="form" :rules="addCompanyRules">
            <el-form-item label="公司名称" :label-width="formLabelWidth" prop="company_name">
                <el-input v-model="form.company_name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="英文名称" :label-width="formLabelWidth" prop="english_name">
                <el-input v-model="form.english_name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="公司性质" :label-width="formLabelWidth" prop="company_type">
                <el-input v-model="form.company_type" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="公司所在地" :label-width="formLabelWidth" prop="company_home">
                <el-input v-model="form.company_home" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="注册地址" :label-width="formLabelWidth" prop="registered_address">
                <el-input v-model="form.registered_address" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align: center">
            <el-button type="primary" @click="subForm">确 定</el-button>
            <el-button @click="cancel">重 置</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddCompany",
    data() {
        return {
            form: {
                company_name: '',
                english_name: '',
                company_type: '',
                company_home: '',
                registered_address: '',
            },
            addCompanyRules: {
                company_name: [
                    {
                        required: true,
                        message: '请输入公司名称',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 10,
                        message: '长度在 3 到 10 个字符',
                        trigger: 'blur'
                    }
                ],
                english_name: [
                    {
                        required: true,
                        message: '请输入英文名称',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 10,
                        message: '长度在 3 到 10 个字符',
                        trigger: 'blur'
                    }
                ],
                company_type: [
                    {
                        required: true,
                        message: '请输入公司性质',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 10,
                        message: '长度在 3 到 10 个字符',
                        trigger: 'blur'
                    }
                ],
                company_home: [
                    {
                        required: true,
                        message: '请输入公司所在地',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 10,
                        message: '长度在 3 到 10 个字符',
                        trigger: 'blur'
                    }
                ],
                registered_address: [
                    {
                        required: true,
                        message: '请输入注册地址',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 10,
                        message: '长度在 3 到 10 个字符',
                        trigger: 'blur'
                    }
                ],
            },
            formLabelWidth: '120px'
        }
    },
    methods: {
        cancel() {
            this.$refs.addCompanyRef.resetFields()
        },
        subForm() {
            this.$emit('onSubmit')
        },
    }
}
</script>

<style scoped>
.prompt {
    color: red;
    line-height: 0px;
}
</style>
