<script setup>
import { useStore } from './Pinia'
import { storeToRefs} from 'pinia'
import { computed, ref } from 'vue';
const store=useStore();
//这样获取数据有响应式
const countref=computed(()=>store.count)
console.log(countref.value);
// 获取响应式数据使用storetoref action则可以直接结构
// 并且会跳过所有的 action 或非响应式 (不是 ref 或 reactive) 的属性
const {count:counts}=storeToRefs(store)
console.log(counts.value);

const count=ref(0)
const add=()=>{
    count.value++
}
const red=()=>{ 
    count.value--
}
</script>
<template>
    <div @click="add">添加</div>
    <div @click="red">减少</div>
    <div>
        <div>{{count  }}</div>
    </div>
</template>