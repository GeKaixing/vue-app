import { ref } from "vue";
import { defineStore } from "pinia";
export const useImgSelect = defineStore('useImgSelect', () => {
  const imgarr = ref([
    {
      name: '车',
      imgurl: './img/chean-ang-heng-2ijGsqwQmPk-unsplash.jpg'
    },
    {
      name: "桥底",
      imgurl: './img/peter-herrmann-ZImdf70KrSU-unsplash.jpg'
    },
    {
      name: "楼低",
      imgurl: './img/cai-fang-mIXAcsAQaNg-unsplash.jpg'
    }
  ])
  const show_img = ref(0);
  //切换图片 life
  const select_imgl = () => {
    if (show_img.value === 0) {
      show_img.value = imgarr.value.length - 1
    } else {
      show_img.value--
    }
  }
  // right
  const select_imgr = () => {
    if (show_img.value === imgarr.value.length - 1) {
      show_img.value = 0;
    } else {
      show_img.value++; 
    }
  }
  return {
    imgarr, show_img, select_imgl, select_imgr
  }
})