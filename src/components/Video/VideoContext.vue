<script setup>
import BodyContextLayout from '../Layout/BodyContextLayout.vue';
import { Pause, PlayOne, Tub } from "@icon-park/vue-next";
import { ref, onMounted } from 'vue';
const video = ref(null)
const videoplay = ref(null)
const videotiem = ref(null)
const isvideoplay = ref(true)
const progress_bar = ref(null)
const currentTimes = ref(null)
onMounted(() => {
    videoplay.value.onclick = () => {
        if (isvideoplay.value) {
            video.value.play();
            isvideoplay.value = false;
            var settiem = setInterval(run, 1000)
        } else {
            video.value.pause()
            isvideoplay.value = true;
            clearInterval(settiem)
        }
    }
    video.value.addEventListener('loadedmetadata', function () {
        const videoDuration = Math.floor(video.value.duration / 60);
        const seconds = Math.floor(video.value.duration % 60)
        videotiem.value.textContent = `${videoDuration}:${seconds}`
    });
    const run = () => {
        const ll = (video.value.currentTime / video.value.duration).toFixed(2)
        const ff = Math.floor(progress_bar.value.clientWidth * ll)
        currentTimes.value.style.width = ff + 'px';
    }
    progress_bar.value.onclick = (e) => {
        const gg = (e.clientX / progress_bar.value.clientWidth).toFixed(2)
        //当前时间
        const cc = video.duration * gg
        video.currentTime = cc;
        run()
    }
})
</script>
<template>
    <!-- 外围的div，画圈 -->
    <div class='video_box'>
        <video ref="video">
            <source src="../../video/test.mp4">
        </video>
        <div class="controller">
            <div class="progress_bar" ref="progress_bar">
                <div class="currentTime" ref="currentTimes">
                </div>
            </div>
            <div class="controller_play">
                <div class="videoplay" ref="videoplay">
                    <Pause theme="outline" size="24" fill="#e0e0e0" v-if="isvideoplay" />
                    <play-one theme="outline" size="24" fill="#e0e0e0" v-else />
                </div>
                <div class="videotiem" ref='videotiem'>
                </div>
            </div>
        </div>
        <span>Lorem Ipsum，也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem Ipsum从西</span>
    </div>
</template>
<style>
.video_box {
    margin: 0 auto;
    margin-top: 16px;
    position: relative;
    width: 813px;
    height: 480px;
    background-color: #f7f7f7;

}

video {
    width: 100%;
    height: 100%;
    /* 视频占满 */
    object-fit: cover;
}

.controller {
    width: 100%;
    position: absolute;
    bottom: 4px;
    display: flex;
    flex-direction: column;
}

.progress_bar {
    width: 100%;
    height: 4px;
    background: #D9D9D9;
}

.videotiem {
    color: #E0E0E0;
    text-align: center;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.currentTime {
    width: 0px;
    height: 100%;
    background: #2F2F31;
}

.controller_play {
    display: flex;
    justify-content: space-between;
}
.videotiem {
    display: flex;
    align-items: center
}
span {
    color: #FFF;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
span::before{
    content:'';
    font-size: 40px;
}
</style>
