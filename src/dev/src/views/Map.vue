<template>
    <div>
        <div class="container" id="container"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                map: null,
            }
        },
        mounted(){
            this.map = new AMap.Map("container", {
                showBuildingBlock: true,
                animateEnable: true,
                resizeEnable: true,
                zoom: 12 //地图显示的缩放级别
            });
        },
        updated: function () {

        },
        activated: function () {
            let that = this;
            that.initData();
        },
        deactivated: function () {
            // 清理地图之前的标记
            this.map.clearMap();
        },
        methods: {
            initData: function () {}
        }
    }
</script>

<style>
    #container{
        width: 100%;
    height: 500px;
    }
</style>