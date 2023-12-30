<script setup>
</script>
<template>
        <div class="article_box">
        <slot></slot>
        </div>
</template>
<style>
.article_box {
    text-decoration: none;
    overflow: hidden;
    border-radius: 8px;
    height: 114px;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(30px);
}

.article_box:hover {
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>