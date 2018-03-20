<template>
    <div>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        methods: {
            onSubmit() {
                this.$message('提交22222222222222222222222!');
            }
        }
    }
</script>

<style>
</style>