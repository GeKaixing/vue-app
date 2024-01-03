<script setup>
import { Facebook, Twitter, Instagram, } from "@icon-park/vue-next";
import { storeToRefs } from "pinia";
import { useImgSelect } from '../../Store/SelectBlackImgStore'
import { useRouter } from "vue-router";
const router=useRouter();
const store = useImgSelect()
const { imgarr, show_img } = storeToRefs(store)
const now = new Date()
const year = now.getFullYear()
let month = now.getMonth() + 1
let day = now.getDay();
if (month < 10){ month = `0${month}`}
if (day < 10) {day = `0${day}`}
const clickurl=(url)=>{
  router.push(`/article/${url}`)
}
</script>
<template>
  <div class="content">
    <div class="logo-icon">
      <div class="logo-icon-text">
        <span>{{ day }}</span>
        <span>/{{ month }}/{{ year }}</span>
      </div>
      <div>
        <facebook theme="filled" size="24" fill="#ffffff" />
      </div>
      <div>
        <twitter theme="filled" size="24" fill="#ffffff" />
      </div>
      <div>
        <instagram theme="multi-color" size="24" :fill="['#ffffff', '#ffffff', '#4b3720', '#4b3720']" />
      </div>
    </div>
    <div class="text-content" @click="clickurl('现在建筑艺术')">
      <div> 现在建筑艺术 之艺术 </div>
      <div>CCBD 日落大厦 </div>
    </div>
    <div class="page-number">
      <div class="page-number-now">
        <div>0{{ show_img + 1 }}</div>
        <div>Page</div>
      </div>
      <div class="page-number-next">
        <div>0{{ show_img + 1 }}</div>
        <div></div>
        <div class="number02" v-if="show_img <= imgarr.length - 2">0{{ show_img + 2 }}</div>
        <div class="number03" v-else>End</div>
      </div>
    </div>
  </div>
</template>
<style>
img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.content {
  margin: 0 auto;
  margin-top: 88px;
  width: 1153px;
  height: 230px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.logo-icon {
  height: 100%;
  width: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo-icon-text {
  display: table-cell;
  vertical-align: bottom;
}

.logo-icon-text :nth-child(1) {
  font-weight: bold;
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}

.logo-icon-text :nth-child(2) {
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

.logo-icon div {
  width: 24px;
  height: 24px;
}

.logo-icon div:hover {
  background-color: rgba(51, 51, 51, 0.4);
}

.text-content {
  margin-left: -13.69rem;
  display: flex;
  flex-direction: column;
  width: 432px;
  height: 217px;
}

.text-content :nth-child(1) {
  color: #fff;
  font-family: Inter;
  font-size: 72px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}

.text-content :nth-child(2) {
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.page-number {
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  cursor: default;
}

.page-number div {
  width: 23px;
  height: 22px;
}

.page-number-now {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.page-number-now :nth-child(1) {
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  width: 23px;
  height: 22px;
}

.page-number-now :nth-child(2) {
  width: 37px;
  height: 19px;
  color: #fff;
  font-size: 16px;
  font-weight: lighter;
  line-height: normal;
}

.page-number-next :nth-child(1) {
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}

.page-number-next :nth-child(2) {
  width: 1px;
  height: 41px;
  background: #fff;
  margin: 0 auto;
}

.number02 {
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: lighter;
  line-height: normal;
}

.number03 {
  width: 37px;
  height: 19px;
  color: #fff;
  font-size: 16px;
  font-weight: lighter;
  line-height: normal;
  text-align: mixed;
}

.ooo:hover {
  font-weight: 900;
}
</style>