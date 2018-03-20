<template>
    <div id="Index" @keyup.enter="enterEvent">

        <!--<el-button >主要按钮</el-button>-->
        <el-button type="success" @click.stop="testClick">测试点击</el-button>
        <el-button type="info" @click.ctrl="testClick2">按着Ctrl并点击</el-button>
        <el-button type="warning" @click="$router.push('/Map')">点击查看地图</el-button>
        <el-button type="danger" @click="$router.push('/Form')">点击查看表单</el-button>

        <div class="area yellow-area"></div>

        <div class="area white-area" @click="areaClick"></div>

        <input type="text" placeholder="输入后回车"  @keyup.enterEvent="testClick2" />

        <Carousel></Carousel>
    </div>
 </div>
</template>

<script>
    import Carousel from './subViews/Carousel.vue'

    export default {
        data() {
            return {
            }
        },
        mounted: function () {

        },
        updated: function () {

        },
        activated: function () {

        },
        components: {
            Carousel
        },
        methods:{
            testClick(){
                this.$message('您点击了按钮！');
            },
            testClick2(){
                this.$message('您点击了Ctrl+按钮！');
            },
            areaClick(){
                this.$message('您点击了块！');
            },
            enterEvent(){
                this.$message('我按了回车！');
            }
        }
    }
</script>

<style>
  .area{
      width: 100%;
      height: 100px;

  }
  input{
      width: 320px;
      margin: 5px;
      background-color: #ffffff;
  }
    .yellow-area{
        background-color: yellow;
    }

    .white-area{
        background-color: white;
    }
</style>