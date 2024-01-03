<script setup>
import { onMounted } from 'vue';
import { marked } from "marked";
import dffffff from '../../../public/markdown/vue3文档速读.md?raw'
marked.setOptions({
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
})
onMounted(() => {
    const html = marked(dffffff)
    document.querySelector('.articleContext_box').innerHTML=html
})
</script>
<template>
    <div class="articleContext">
        <div class="articleContext_box">
        </div>
    </div>
</template>
<style>
.articleContext {
    
    width: 813px;
    margin: 0 auto;
    margin-top: 16px;
    background: #D9D9D9;
    
}

.articleContext_box {
    width: 715px;
    padding-top: 24px;
    padding-bottom: 24px;
    margin-left: 49px;
    margin-right: 49px;
    margin-bottom: 24px;
    margin-right: calc(100% - 100vw);
}
</style>
