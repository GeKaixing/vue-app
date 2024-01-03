import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
export const useLogin = defineStore('login', () => {
    const loginState = ref({
        name: localStorage.getItem('name') || '',
        account: localStorage.getItem('account') || null,
        password: null
    })
    const isShowLogin = ref(false)
    const isShowLoginHandler = () => {
        isShowLogin.value = !isShowLogin.value
    }
    const loginhander = async () => {
        try {
            const response = await axios.get('/Data/account_password.json')
            if ((+response.data.account === 1) && (+response.data.password === 1)) {
                console.log('登陆成功')
                localStorage.setItem('name', response.data.name)
                localStorage.setItem('account', response.data.account )
                isShowLogin.value = !isShowLogin.value
                location.reload();
            } else {
                console.log('账号或者密码错误')
            }
        } catch (error) {
            throw new error;
        }


    }
    const loguphander = () => {
        localStorage.removeItem('name')
        localStorage.removeItem('account')
        console.log('登出成功')
    }
    return {
        loginState, loginhander, loguphander, isShowLogin, isShowLoginHandler
    }
})