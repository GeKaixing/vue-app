<script setup>
import { Avatar, } from "@icon-park/vue-next";
import { useLogin } from "../../Login";
import { storeToRefs } from "pinia";
const useLoginStore = useLogin()
const { loginState } = storeToRefs(useLoginStore)
</script>
<template>
  <div class="bottom-header">
    <div class="header-img">
      <avatar theme="multi-color" size="45"
        :fill="(loginState.name !== '') ? ['#ffffff', '#ffffff', '#4b3720', '#4b3720'] : ['#80808 ']" />
    </div>
    <div class="user-name" v-if="loginState.name !== ''">
      <div class="name">{{ loginState.name }}</div>
      <div class="alias-name">{{ loginState.account }}</div>
    </div>
    <div class="nologin" v-else @click="useLoginStore.isShowLoginHandler()"> 未登录</div>
  </div>
</template>
<style>
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

.header-img:hover {
  background-color: rgba(51, 51, 51, 0.4)
}

.name {
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}

.alias-name {
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  font-weight: lighter;
}

.nologin {
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}</style>