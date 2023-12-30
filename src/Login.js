import { defineStore } from "pinia";
import { ref } from "vue";
export const useLogin = defineStore('login', () => {
    const loginState = ref({
        name: localStorage.getItem('name')||'',
        account: localStorage.getItem('account')||null,
        password: null
    })
    const isShowLogin = ref(false)
    const isShowLoginHandler = () => {
        isShowLogin.value = !isShowLogin.value
    }
    const loginhander = () => {
        if ((+loginState.value.account ===1) && (+loginState.value.password === 1)) {
            console.log('登陆成功')
            localStorage.setItem('name','开星')
            localStorage.setItem('account', loginState.value.account)
            isShowLogin.value = !isShowLogin.value
            location.reload();
        } else {
            console.log('账号或者密码错误')
        }
    }
    const loguphander = () => {
            localStorage.removeItem('name')
            localStorage.removeItem('account')
        console.log('登出成功')
    }
    return {
        loginState, loginhander, loguphander,isShowLogin,isShowLoginHandler
    }
})