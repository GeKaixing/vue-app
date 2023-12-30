<script setup>
//old name:News
//new name:login
import Login from '../Login/Login.vue';
import { useLogin } from "../../Login";
import { storeToRefs } from "pinia";
const useLoginStore = useLogin()
const { loginState } = storeToRefs(useLoginStore)
</script>
<template>
    <Login v-if="!loginState.name"></Login>
    <div v-else class="ddddd">尚未设计</div>
</template>
<style>
</style>