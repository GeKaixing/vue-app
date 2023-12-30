<script setup>
import { reactive } from 'vue';
const articleContext =
{
    spreadhead: '非必要的仿古是一种丑陋'
    , context: 'feugiat nunc aliquam condimentum velit faucibus. Eget massa ultricies quisque amet. Elementum velit ultrices convallis neque id lectus diam pellentesque. Eu odio nunc ipsum in. Facilisis lobortis '
    ,
    subheading: '标题一'
    , subheading1: 'Pariatur et tempor exercitation excepteur duis laboris'
}
const articleContextRef = reactive(articleContext)
</script>
<template>
    <div class="articleContext">
        <div class="articleContext_box">
            <br>
            <h4>{{ articleContextRef.spreadhead }}</h4>
            <span>
                {{ articleContextRef.context }}
            </span>
            <br>
            <br>
            <br>
            <h4>
                {{ articleContextRef.subheading }}
            </h4>

            <span>
                {{ articleContextRef.subheading1 }}
            </span>
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
    margin-top: 24px;
    margin-left: 49px;
    margin-right: 49px;
}
</style>
