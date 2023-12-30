<script setup>
import FooterImg from '../Home/FooterImg.vue';
</script>
<template>
    <div class="article_layout">
        <slot></slot>
    </div>
</template>
<style>
.article_layout {
    margin: 0 auto;
    margin-top: 16px;
    list-style: none;
    width: 957px;
    display: grid;
    grid-template-columns: repeat(3, 280px);
    grid-column-gap: 58px;
    grid-row-gap: 40px;

}
</style>