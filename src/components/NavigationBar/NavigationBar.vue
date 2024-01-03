<script setup>
import { computed, reactive, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router';
import { useLogin } from "../../Store/LoginStore";
import { storeToRefs } from "pinia";
const useLoginStore = useLogin()
const { loginState } = storeToRefs(useLoginStore)
const route = useRoute()
const font_color = ref(false)
const ff = ref(true)
const style = reactive({
  color: "black"
})
watchEffect(() => {
  if (route.path == '/') {
    style.color = "white";
  } else {
    style.color = "black";
  }
})
const fontsize = reactive({
  fontSize: '14px',
  fontWeight: 900,
})
const d = computed(() => {
  return (route.path == '/') ? fontsize : reactive({
    fontSize: '12px',
    fontWeight: 100,
  })
})

</script>
<template>
  <div class="bar">
    <div class="title">
      <router-link class="router-link" to="/" > 主页</router-link>
      <router-link :class="['router-link']" to="/video"> 视频</router-link>
      <router-link :class="['router-link']" to="/userinfo">{{ loginState.name ? `${loginState.name}` : '未登陆' }}</router-link>
      <router-link :class="['router-link']" to="/article"> 文章</router-link>
    </div>
  </div>
</template>
<style>
.bar {
  display: flex;
  justify-content: center;
}

.title {
  margin-left: 13.75rem;
  display: flex;
  width: 474px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}

.title .router-link {
  text-decoration: none;
  padding-bottom: 4px;
  width: 48px;
}

.title .router-link:hover {
  font-size: 12px;
  font-weight: 900;
}

.currentpage {
  font-size: 16px;
  font-weight: 900;
}

.font_color {
  color: rgb(187, 81, 81);
}

.title :nth-child(1) {
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

.title :nth-child(2) {
  width: 64px;
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

.title :nth-child(3) {
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

.title :nth-child(4) {
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}
</style>
