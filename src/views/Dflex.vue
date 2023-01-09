<template>
  <div class="container">
    <div class="dflex__wrap">
      <div class="movie__slider">
        <swiper class="mySwiper"
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"    
        :speed="1200"
        :parallax="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >
        <swiper-slide>
            <div class="dflex__inner--box">
                <h2>D-flix</h2>
                <div class="description">
                    최고를 지향하는 퍼블리싱 전문가 그룹<br>                  
                    css 의 display:flex 의 의미와 글로벌 OTT 플랫폼인 넷플릭스의 flix 에서 유래했습니다,<br>
                    웹의 가장 기본 골격이 되는 마크업전문가가 되겠습니다.<br>
                    공공기관, 기업, 금융기관 등의 웹 표준<br>
                    사이트 퍼블리싱, 웹 접근성 인증 개선, Vue.js,React 등 다양한 프로젝트를 수행했습니다.
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
          <div class="dflex__inner--box">
                <h2>D-flix</h2>
                <dl class="outbiz__list">
                  <dt>웹사이트 퍼블리싱</dt>
                  <dd></dd>
                  <dt>Javascript 개발</dt>
                  <dd></dd>
                  <dt>웹접근성 인증 개선</dt>
                  <dd></dd>
                  <dt>React, Vue.js UI개발</dt>
                  <dd></dd>
                </dl>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="dflex__inner--box">
                <h2>D-flix</h2>
                <div class="description">
                    프로젝트 문의 <br>
                    sunghoo78@gmail.com
                </div>
            </div>
        </swiper-slide>      
      </swiper>
      </div>
    <!-- //슬라이드 -->
  </div>
</div>
</template>
<!-- 
   navigation
  :pagination="{ clickable: true }"    
  :autoplay="{
  delay: 5000,
  disableOnInteraction: false,
}" -->
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
  .dflex__wrap {padding:100px 50px;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }
  .dflex__inner--box {
    padding:70px;
    height:100%;
    border: 1px solid #d2d2d2;
    height:80vh;
    h2 {
      font-size: 70px;
    }
    .description {
      font-size:20px;
      margin: 30px 0;
      line-height: 40px;
    }
    .outbiz__list {margin-top:30px;
    dt {
      font-size: 20px;
      font-weight: 500;
    }
    dd {
      font-size:18px;
      margin:10px 0 20px;
    }
  }

  }
</style>