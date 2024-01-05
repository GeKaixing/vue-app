<script setup>
import { onMounted, ref } from 'vue';
import { marked } from "marked";
import markdown from '../../../public/markdown/vue3文档速读.md?raw'
import { Log } from '@icon-park/vue-next';
const articleContext_box = ref(null)
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
    const html = marked(markdown)
    articleContext_box.value.innerHTML = html
    articleContext_box.value.onmouseup = (e) => {
        const selection = window.getSelection()
        const selectiontext = selection.toString()
        const ranges = selection.getRangeAt(0);
        if (selectiontext) {
            const docObj = ranges.extractContents(); //移动了Range 中的内容从文档树到DocumentFragment（文档片段对象)。
            console.log(docObj);
            let dom = document.createElement('div');
            dom.style.display='inline';
            dom.style.color = 'red';
            dom.style.fontSize = '16px';
            dom.appendChild(docObj);
            ranges.insertNode(dom);
        }
    }

})
</script>
<template>
    <div class="articleContext">
        <div class="articleContext_box" ref="articleContext_box">
        </div>
    </div>
</template>
<style>
span::before {
     content: ''; 
     font-size: 0; 
}

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
