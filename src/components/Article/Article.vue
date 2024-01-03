<script setup>
import VideOrArticleLayout from '../Layout/VideOrArticleLayout.vue'
import BodyContextLayout from '../Layout/BodyContextLayout.vue'
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';
const articleArr = ref(null);
axios.get('./Data/articleArr.json').then((response) => {
    articleArr.value = response.data.data
}).catch((error) => {
    console.log(error);
}
)
const router = useRouter()
const clickurl = (url) => {
    router.push(`/article/${url}`)
}
</script>
<template>
    <BodyContextLayout class="bcy">
        <VideOrArticleLayout v-for="(item, index) in articleArr" :key="index" @click="clickurl(item.title)">
            {{ item.title }}
        </VideOrArticleLayout>
    </BodyContextLayout>
</template>
<style>
.bcy {
    display: grid;
    grid-template-columns: repeat(3, 280px);
    grid-column-gap: 58px;
    grid-row-gap: 40px;
}
</style>