<template>
    <div>
        <el-form :model="form">
            <el-form-item label="公司名称" :label-width="formLabelWidth">
                <el-input v-model="form.company_name" autocomplete="off" @blur="detectionContent($event)" @focus="detectionContent($event)"></el-input>
                <p class="prompt" style="display: none">公司名称不能为空</p>
            </el-form-item>
            <el-form-item label="英文名称" :label-width="formLabelWidth">
                <el-input v-model="form.english_name" autocomplete="off" @blur="detectionContent($event)"></el-input>
                <p class="prompt" style="display: none">英文名称不能为空</p>
            </el-form-item>
            <el-form-item label="公司性质" :label-width="formLabelWidth">
                <el-input v-model="form.company_type" autocomplete="off" @blur="detectionContent($event)"></el-input>
                <p class="prompt" style="display: none">公司性质不能为空</p>
            </el-form-item>
            <el-form-item label="公司所在地" :label-width="formLabelWidth">
                <el-input v-model="form.company_home" autocomplete="off" @blur="detectionContent($event)"></el-input>
                <p class="prompt" style="display: none">公司所在地不能为空</p>
            </el-form-item>
            <el-form-item label="注册地址" :label-width="formLabelWidth">
                <el-input v-model="form.registered_address" autocomplete="off" @blur="detectionContent($event)"></el-input>
                <p class="prompt" style="display: none">注册地址不能为空</p>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align: center">
            <el-button type="primary" @click="subForm">确 定</el-button>
            <el-button @click="cancel">取 消</el-button>
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
            formLabelWidth: '120px'
        }
    },
    methods: {
        cancel() {
            this.$emit('onSubmit')
        },
        subForm() {
            this.$emit('onSubmit')
        },
        detectionContent(event) {
            if (event.currentTarget.value == '') {
                event.currentTarget.parentElement.nextElementSibling.style.display = 'inline'
            } else {
                event.currentTarget.parentElement.nextElementSibling.style.display = 'none'
            }
        }
    }
}
</script>

<style scoped>
.prompt {
    color: red;
    line-height: 0px;
}
</style>
