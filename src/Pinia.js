import { ref } from "vue";
import { defineStore } from "pinia";
export const useStore=defineStore('testStore',()=>{
    const count=ref(0);
    function add(){
        count++
    }
    return {
        count,add
    }
})