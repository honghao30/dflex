<template>
    <swiper
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
        <swiper-slide 
            v-for="(topRated, index) in topRatedList"
            :key="`${topRated.id}-${index}`"
        >
            <movieSwiperItems :TopRatemovie="topRated"  />
        </swiper-slide>
    </swiper>
  </template>
  <script>    
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import getRateMovie from '@/api/getMovieTopRate';    
    import { onMounted } from 'vue';

    import movieSwiperItems from '@/components/common/SwiperItems.vue';
    import { Navigation, Pagination, Autoplay, Parallax } from 'swiper';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
        movieSwiperItems,
      },
      setup() {
        const { topRatedList,topRatedMovie } =  getRateMovie();        

        onMounted(() => {
            topRatedMovie(); 
        });
        return {          
          topRatedMovie,
          topRatedList,
          modules: [Navigation, Pagination, Autoplay, Parallax],
        };
      },
    };
  </script>
<style lang="scss" scoped>

</style>