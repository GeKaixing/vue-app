<script setup>
import VideOrArticleLayout from '../Layout/VideOrArticleLayout.vue';
import BodyContextLayout from '../Layout/BodyContextLayout.vue';
import { PlayOne } from "@icon-park/vue-next";
import { useRouter } from 'vue-router';

const url=(url)=>{
    return new URL(`${url}`,import.meta.url).href
}
const SimulateArr=[
    {
        coverPicture:url("../../../public/img/neom-nMzbnMzMjYU-unsplash.jpg"),
        playdate:'01:33'
    },
    {
        coverPicture:url("../../../public/img/cai-fang-mIXAcsAQaNg-unsplash.jpg"),
        playdate:'04:44'
    },
    {
        coverPicture:url("../../../public/img/peter-herrmann-ZImdf70KrSU-unsplash.jpg"),
        playdate:'06:33'
    },
    {
        coverPicture:url("../../../public/img/chean-ang-heng-2ijGsqwQmPk-unsplash.jpg"),
        playdate:'03:00'
    },
]  
const router =useRouter()
const clickurlil=(url)=>{
    router.push(`/video/${url}`)
}
</script>
<template>
    <BodyContextLayout class="byl">
        <VideOrArticleLayout v-for="(item,key,index) in SimulateArr" @click="clickurlil(item.playdate)">
            <img class="imgviode" :src="item.coverPicture">
            <div class="playbutton">
                <PlayOne theme="filled" size="24" fill="#E0E0E0" />
            </div>
            <div class="date">
               {{item.playdate}}
            </div>
        </VideOrArticleLayout>
    </BodyContextLayout>
</template>
<style>
.byl{
    display: grid;
    grid-template-columns: repeat(3, 280px);
    grid-column-gap: 58px;
    grid-row-gap: 40px;
}
/* 子绝父相 */
.imgviode {
    position: relative;
}

.playbutton {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 8px;
    bottom: 4px;
    z-index: 10;
}

.date {
    width: 22px;
    height: 7px;
    font-family: Inter;
    font-size: 6px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: rgba(224, 224, 224, 1);
    position: absolute;
    right: 8px;
    bottom: 12px;
    z-index: 10;
    text-align: center;
}
</style>