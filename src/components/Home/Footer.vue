<script setup>
import { ArrowRight, Left, Right, Avatar, Log, MapDistance, DoubleBed } from "@icon-park/vue-next";
import {useImgSelect }from '../../Store'
import { storeToRefs } from "pinia";
import { useLogin } from "../../Login";
import Login from "../Login/Login.vue";
import FooterImg from "./FooterImg.vue";
import { useRouter } from 'vue-router';
const router=useRouter();
const store =useImgSelect()
const {imgarr,show_img}=storeToRefs(store)
const useLoginStore=useLogin()
const {loginState,isShowLogin}=storeToRefs(useLoginStore)
const clickurl=(url)=>{
    router.push(`/article/${url}`)
}
</script>
<template>
  <div class="footer">
  
    <FooterImg></FooterImg>

    <div class="footer-text-box" @click="clickurl('非必要的仿古是一种丑陋')">
      <div class="new-icon">
        <arrow-right
          theme="multi-color"
          size="26"
          :fill="['#ffffff', '#ffffff', '#4b3720', '#4b3720']"
        />
      </div>
      <div class="new-title">非必要的仿古是一种丑陋</div>
      <div class="new-content">
        给大家看的网页设计课,大家除了可以免费听课，我还会把本课...
      </div>
    </div>
    <div class="footer-text-box" @click="clickurl('非必要的仿古是一种丑陋')">
      <div class="new-icon">
        <arrow-right
          theme="multi-color"
          size="26"
          :fill="['#ffffff', '#ffffff', '#4b3720', '#4b3720']"
        />
      </div>
      <div class="new-title">非必要的仿古是一种丑陋</div>
      <div class="new-content">
        给大家看的网页设计课,大家除了可以免费听课，我还会把本课...
      </div>
    </div>
    <div class="left-right-icon" >
      <div class="new-left-icon " @click="store.select_imgl()">
        <left
          theme="multi-color"
          size="24"
          :fill="['#ffffff', '#ffffff', '#4b3720', '#4b3720']"
        />
      </div>
      <div class="new-right-icon" @click="store.select_imgr()">
        <right
          theme="multi-color"
          size="24"
          :fill="['#ffffff', '#ffffff', '#4b3720', '#4b3720']"
        />  
      </div>
    </div>
  </div>
  <Login v-show="isShowLogin" :isShowLoginHandler="useLoginStore.isShowLoginHandler"></Login>
</template>
<style>
.backimg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  filter: brightness(80%);
}
.footer {
  position: absolute;
  bottom: 32px;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 1153px;
  height: 114px;
}
.bottom-header {
  display: flex;
  gap: 4px;
}
.header-img {
  width: 45px;
  height: 45px;
  border-radius: 45px;
  background-color: rgba(178, 178, 178, 0.2);
}
.header-img:hover{
  background-color: rgba(51, 51, 51, 0.4)
}
.name {
  color: #fff;
  font-family: Inter;
  font-size: 16px;
}
.footer-text-box {
  width: 265px;
}
.new-title {
  margin-bottom: 6px;
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.new-icon {
  margin-bottom: 16px;
  width: 28px;
  height: 28px;
}
.new-icon:hover{
  
  background-color: rgba(51, 51, 51, 0.4);
  border-radius: 50px;
}
.new-content {
  width: 265px;
  height: 44px;
  flex-shrink: 0;
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-weight: normal;
}
.left-right-icon {
  display: flex;
  gap: 10px;
}
.new-left-icon,
.new-right-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(178, 178, 178, 0.2);
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 50px;
}
.new-left-icon:hover,
.new-right-icon:hover{
  background-color: rgba(51, 51, 51, 0.4);
}
</style>