<script setup>
import { useLogin } from '../../Store/LoginStore'
import { storeToRefs } from 'pinia';
const { isShowLoginHandler } = defineProps(['isShowLoginHandler'])
const store = useLogin()
const { loginState } = storeToRefs(store)
</script>
<template>
    <div class="login-box">
        <form class="login-form">
            <div @click="isShowLoginHandler()">退出</div>
            <input class="account" type="text" v-model.trim='loginState.account' placeholder="account">
            <input class="password" type="password" v-model.trim="loginState.password" placeholder="password">
        </form>
        <button class="login" @click="store.loginhander()">Login</button>
        <span class="signin">signin</span>
    </div>
</template>
<style>
.login-box {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 522px;
    height: 286px;
    backdrop-filter: blur(30px);
    background-color: rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding-top: 26px;
}

.account,
.password {
    width: 425px;
    height: 44px;
}

button {
    width: 50px;
    height: 50px;
    background-color: white;
}

.login-form {
    display: flex;
    flex-direction: column;
}
.login-form :nth-child(1){
    cursor: pointer; 
}
.login-form input {
    border: none;
    border-radius: 8px;
    background: #FFF;
}

.account {
    margin-bottom: 16px;
}

.login {
    border: none;
    margin-top: 24px;
    width: 135px;
    height: 64px;
    border-radius: 8px;
    background: #D9D9D9;
    color: #000;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}

.signin {
    color: #A30505;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-bottom: 24px;
}</style>