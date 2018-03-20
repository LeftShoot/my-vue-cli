<template>
  <div id="Home">
      <!--放一些全局模块，例如通用头，通用用底部-->
      <transition name="slide-fade">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive">
            </router-view>
        </keep-alive>
      </transition>
      <transition name="slide-fade">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
  </div>
</template>

<script>
   export default {
       data() {
         return {
           user: {}
        }
       },
       created(){
       },
       watch:{
       },
       methods: {
       }
   }
</script>

<style>
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all 2s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>