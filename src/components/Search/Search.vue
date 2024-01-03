<script setup>
import BodyContextLayout from '../Layout/BodyContextLayout.vue'
import VideOrArticleLayout from '../Layout/VideOrArticleLayout.vue'
</script>
<template>
    <BodyContextLayout>
        <div class="select">
            <div class="article_button">文章</div>
            <div class="video_button">视频</div>
        </div>
        <div class="search_context">
            <VideOrArticleLayout>
                搜索内容
            </VideOrArticleLayout>
        </div>
    </BodyContextLayout>
</template>
<style scoped>
.search {
    margin: 0 auto;
    margin-top: 16px;
    list-style: none;
    width: 957px;
}
.search_context{
    display: grid;
    grid-template-columns: repeat(3, 280px);
    grid-column-gap: 58px;
    grid-row-gap: 40px;
}
</style>