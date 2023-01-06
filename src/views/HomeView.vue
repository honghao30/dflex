<template>
  <div class="container">
    <div class="movie__slider">
      <swiper class="mySwiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :speed="1200"
      :parallax="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>      
    </swiper>
    </div>
    <!-- //슬라이드 -->
    <div class="article__wrap">
      
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const onSwiper = swiper => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {      
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Autoplay, Parallax],
    };
  },
};
</script>

<style lang="scss" scoped>
  .movie__slider {height:80vh;}
</style>