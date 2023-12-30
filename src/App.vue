<!-- 
还原幻灯片网站设计稿
figma设计稿网址：
https://www.figma.com/file/ggXw87VnOKLqJoPRVxhh44/%E5%B9%BB%E7%81%AF%E7%89%87%E7%BD%91%E7%AB%99(%E7%BB%83%E4%B9%A0)?type=design&mode=design&t=bmYFZ4lRDa7C14L8-1
 -->
<script setup>
import Headervue from './components/NavigationBar/Header.vue'
// import Test from './Test.vue';
import SlotVue from './Slot.vue';
</script>
<template>
  <Headervue/>
  <router-view></router-view> 
<!--   <SlotVue>
      <template #title>hello world</template>
      <template #food>food</template>
  </SlotVue> -->
</template>
<style>
</style>