<script setup>
//old name:News
//new name:login
import { Facebook, Twitter, Instagram, } from "@icon-park/vue-next";
import Login from '../Login/Login.vue';
import { useLogin } from "../../Login";
import { storeToRefs } from "pinia";
import { Avatar } from "@icon-park/vue-next";
const useLoginStore = useLogin()
const { loginState } = storeToRefs(useLoginStore)
</script>
<template>
    <Login v-if="!loginState.name"></Login>
    <div class="user" v-else>
        <div class="flex_box">
            <div class="user_message">
                <div>
                    <div class="imghead">
                        <avatar theme="multi-color" size="45"
                            :fill="(loginState.name !== '') ? ['#ffffff', '#ffffff', '#4b3720', '#4b3720'] : ['#80808 ']" />
                    </div>
                </div>
                <div class="user_info">
                    <div class="name">开星</div>
                    <div class="account">kaixing</div>
                </div>
                <div class="user_info2">
                    <div class="user_link">
                        <div>
                            <facebook theme="filled" size="24" fill="#ffffff" />
                        </div>
                        <div>
                            <twitter theme="filled" size="24" fill="#ffffff" />
                        </div>
                        <div>
                            <instagram theme="multi-color" size="24" :fill="['#ffffff', '#ffffff', '#4b3720', '#4b3720']" />
                        </div>
                    </div>
                    <div class="user_introduce">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
            </div>
        </div>
        <div class="select">
            <div class="article_button">文章</div>
            <div class="video_button">视频</div>
        </div>
    </div>
</template>
<style>
.user {
    margin: 0 auto;
    margin-top: 16px;
    list-style: none;
    width: 957px;
}

.user_message {
    display: flex;
    height: 72px;
}

.imghead {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background: linear-gradient(0deg, rgba(178, 178, 178, 0.20) 0%, rgba(178, 178, 178, 0.20) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;
    width: 72px;
    height: 72px;
}

.user_info {
    width: 50px;
    margin-left: 16px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
}


.name {
    width: 50px;
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;

}

.account {
    width: 50px;
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
}

.article_button {
    display: flex;
    justify-content: center;
    /*水平主轴居中*/
    align-items: center;
    /*垂直交叉轴居中*/
    width: 35px;
    height: 35px;
    background-color: #86D4E5;
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    border-radius: 50%;
    font-weight: 100;
    line-height: normal;
}

.video_button {
    margin-left: 16px;
    display: flex;
    justify-content: center;
    /*水平主轴居中*/
    align-items: center;
    /*垂直交叉轴居中*/
    width: 35px;
    height: 35px;
    background-color: #D9D9D9;
    border-radius: 50%;
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
}

.select {
    margin-top: 16px;
    display: flex;
}

.user_info2 {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.user_link {
    display: flex;
    width: 170px;
    justify-content: space-between;
}
</style>