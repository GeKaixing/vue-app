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
const router = useRouter()
const clickurl = (url) => {
    router.push(`/article/${url}`)
}
</script>
<template>
    <BodyContextLayout>
        <VideOrArticleLayout v-for="(item, index) in articleArr" :key="index" @click="clickurl(item.title)">
            {{ item.title }}
        </VideOrArticleLayout>
    </BodyContextLayout>
</template>
<style></style>