<script setup>
import { ref, computed } from 'vue';
import { useLogin } from '../../Store/LoginStore'
import { storeToRefs } from 'pinia';
import { CloseSmall } from "@icon-park/vue-next";
import { useRoute, } from 'vue-router';
const { isShowLoginHandler } = defineProps(['isShowLoginHandler'])
const route = useRoute()
const store = useLogin()
const { loginState } = storeToRefs(store)
const signin = ref('')
const login_box_height_ref = ref('263px')
const isSigninPage = ref(false)
const is_show_close_small_ref = ref(false)
const is_signin_page = () => {
    isSigninPage.value = !isSigninPage.value
}
const login_box_height_height = computed(() => {
    return (isSigninPage.value) ? (login_box_height_ref.value = '323px') : (login_box_height_ref.value = '286px')
})

const is_show_close_small = computed(() => {
    return route.path == '/userinfo' ? is_show_close_small_ref.value = false : is_show_close_small_ref.value = true
})
</script>
<template>
    <div class="login-box">
        <div class="icon" @click="isShowLoginHandler()" v-if="is_show_close_small">
            <close-small theme="outline" size="35" fill="#333" />
        </div>
        <div class="login-form">
            <form @submit="store.loginhander()" class="login-forms">
                <input class="account_name" type="text" v-model.trim='signin' placeholder="name" v-if='isSigninPage'>
                <input class="account" type="text" v-model.trim='loginState.account' placeholder="account">
                <input class="password" type="password" v-model.trim="loginState.password" placeholder="password">
            </form>
            <div class="buttonstyle">
                <button class="login" @submit="store.loginhander()">{{ isSigninPage ? "Signin" : "Login" }}</button>
                <div class="signin" @click="is_signin_page">{{ isSigninPage ? "Login" : "Signin" }}</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.login-box {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 522px;
    height: v-bind(login_box_height_height);
    backdrop-filter: blur(30px);
    background-color: rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    padding-top: 26px;
    padding-left: 48px;
    padding-right: 49px;
    padding-bottom: 26px;
    border-radius: 8px;
}

.login-form {
    width: 425px;
    height: 248px;
    display: grid;
    grid-gap: 24px;
    justify-items: center;
}

.login-forms {
    display: grid;
    grid-gap: 16px;
}

.account_name {
    width: 425px;
    height: 44px;
}

.password {
    width: 425px;
    height: 44px;
}

.account {
    width: 425px;
    height: 44px;
}

button {
    width: 50px;
    height: 50px;
    background-color: white;
}

.login-form input {
    border: none;
    border-radius: 8px;
    background: #FFF;
}

.icon {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 35px;
    height: 35px;
    cursor: pointer;
}

.buttonstyle {
    display: grid;
    grid-auto-flow: row dense;
    justify-items: center;
    grid-gap: 4px;
}

.login {
    border: none;
    width: 135px;
    height: 60px;
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
    width: 50px;
    height: 19px;
    cursor: pointer;
    color: #A30505;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}</style>