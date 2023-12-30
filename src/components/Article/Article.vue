<script setup>
import VideOrArticleLayout from '../Layout/VideOrArticleLayout.vue'
import BodyContextLayout from '../Layout/BodyContextLayout.vue'
import { useRouter } from 'vue-router';
const articleArr = [
    {
        title: '非必要的仿古是一种丑陋'
    },

    {
        title: 'Pariatur et tempor exercitation excepteur duis laboris.'
    },
    {
        title: 'Culpa consectetur eiusmod quis laboris cupidatat consequat deserunt nostrud amet incididunt reprehenderit eu in.'
    },
    {
        title: 'Culpa non dolor et et proident id id nulla eu.'
    },
    {
        title: 'Elit nulla nisi ipsum et est.'
    },
    {
        title: 'Consectetur mollit officia cupidatat aute labore consectetur labore Lorem et.'
    },
    {
        title: 'Elit nulla nisi ipsum et est.'
    },
    {
        title: 'Consectetur mollit officia cupidatat aute labore consectetur labore Lorem et.'
    },
    {
        title: 'Elit nulla nisi ipsum et est.'
    },
    {
        title: 'Consectetur mollit officia cupidatat aute labore consectetur labore Lorem et.'
    },
]
const router=useRouter()
const clickurl=(url)=>{
    router.push(`/article/${url}`)
}
</script>
<template>
     <BodyContextLayout>
            <VideOrArticleLayout v-for="(item,index) in articleArr" :key="index" @click="clickurl(item.title)">
                    {{ item.title }}
        </VideOrArticleLayout>
    </BodyContextLayout>
</template>
<style>

/* 
.article_layout{
    margin: 0 auto;
    margin-top: 16px;
    list-style: none;
    width: 957px;
    display: grid;
    grid-template-columns: repeat(3,280px);
    grid-column-gap:58px;
    grid-row-gap:40px;

} */ /* 
.article_box{
    border-radius: 8px;
    height: 114px;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(30px);
}
.article_box:hover{
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
} */
</style>