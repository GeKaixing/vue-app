<script setup>
import { computed, ref, watchEffect } from "vue";
import NvigetionBar from './NavigationBar.vue'
import { Search, Dianziqian } from "@icon-park/vue-next";
import { useRoute, useRouter } from 'vue-router';
import { useImgSelect } from '../../Store/SelectBlackImgStore'
import { storeToRefs } from "pinia";
import axios from "axios";
const store = useImgSelect()
const { imgarr, show_img } = storeToRefs(store)
const selectlanguage = ref('简体中文')
const router = useRouter()
const route = useRoute()
const log_color = ref('#ffffff')
const search_text = ref('')
watchEffect(() => {
  if (route.path == '/') {
    log_color.value = '#ffffff'
  } else {
    log_color.value = '#8a8a8a'
  }
})
const clickpush = () => {
  search_text.value = search_text.value.replace(/\s*/g, '');
  if (!(search_text.value === "")) {
    router.push(`/search/${search_text.value}`)
  }
}
</script>
<template>
  <div class="header">
    <div class="logo">
      <Dianziqian class="logoimg" theme="filled" size="22" :fill="log_color" />
    </div>
    <NvigetionBar></NvigetionBar>
    <div class="translate">
      <div class="translate-img">
        <sphere theme="filled" size="12" fill="#ffffff" />
      </div>
      <select class="translate-text" v-model="selectlanguage">
        <option>简体中文</option>
        <option>English</option>
      </select>
    </div>
    <form @submit="clickpush" class="search_form">
      <input class="search" v-model="search_text" />
      <div class="search-icon">
        <search theme="multi-color" size="24" :fill="['#ffffff', '#ffffff', '#4b3720', '#4b3720']" @submit="clickpush" />
      </div>
    </form>
  </div>
  <hr />
  <img class="backimg" :src="`src/${imgarr[show_img].imgurl}`" :alt="`src/${imgarr[show_img].name}`" />
</template>
<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Microsoft YaHei" !important;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 1151px;
  margin: 0 auto;

}

.logo {
  display: flex;
  flex-direction: column;
}

.translate {
  cursor: default;
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  margin-left: 177px;
  margin-right: 33px;
}

/* .translate:hover {
  background-color: rgba(51, 51, 51, 0.4);
  border-radius: 50px;
} */
.translate-img {
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
}

.translate-text {
  border-style: none;
  background-color: #f0f0f0;
  color: rgb(255, 255, 255, );
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

.search_form {
  display: flex;
  border-style: none;
  align-items: center;
  justify-content: center;
}

.search {
  border-style: none;
  font-size: 16px;
  border-radius: 50px;
  width: 134px;
  height: 35px;
  flex-shrink: 0;
  background-color: rgba(178, 178, 178, 0.5);
}

.search:hover {
  background-color: rgba(51, 51, 51, 0.4);
}
</style>