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
        navigation
        :pagination="{ clickable: true }"   
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >
        <swiper-slide>
            <div class="dflex__inner--box">
                <h2 data-swiper-parallax="-300">D-flix</h2>
                <div class="description" data-swiper-parallax="-200">
                    최고를 지향하는 퍼블리싱 전문가 그룹<br>     
                    flex는 css속성으로 뷰 포트나 요소의 크기가 불명확하거나 동적으로 변할 때에도 효율적으로 요소를 배치, <br>정렬, 분산 시킬 수가 있습니다. <br>            
                    css는 html과 함께 웹 페이지의 뼈대를 구성합니다.  <br>
                    D-flix는 시맨틱 마크업한 마크업으로 개발하기 편한 또한 기획과 디자인이 의도한대로 구현합니다.
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
          <div class="dflex__inner--box">
                <h2  data-swiper-parallax="-300">D-flix</h2>
                <dl class="outbiz__list" data-swiper-parallax="-200">
                  <dt>웹사이트 퍼블리싱</dt>
                  <dd>HTML5와 CSS3.0으로 W3C에서 규정한 표준화된 규격에 적합한 마크업을 구현합니다.</dd>
                  <dt>Javascript 개발</dt>
                  <dd>UI,UX 인터렉션과 API 호출로 UX구현 </dd>
                  <dt>웹접근성 인증 개선</dt>
                  <dd>웹접근성을 준수 및 인증마크 취득을 위한 UI고도화</dd>
                  <dt>React, Vue.js UI개발</dt>
                  <dd>React, Vue.js를 이용한 UI구현</dd>
                </dl>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="dflex__inner--box">
                <h2  data-swiper-parallax="-300">D-flix</h2>
                <div class="description" data-swiper-parallax="-200">
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
  .dflex__wrap {
    padding:100px 50px;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      padding:50px 20px;
    }
  }
  .dflex__inner--box {
    padding:70px;
    height:100%;
    border: 1px solid #d2d2d2;
    height:80vh;
    background-color: #f8f8f8;
    @media screen and (max-width: 768px) {
      padding:20px;
    }
    h2 {
      font-size: 70px;
      @media screen and (max-width: 768px) {
        font-size: 45px;
      }
    }
    .description {
      font-size:20px;
      margin: 30px 0;
      line-height: 40px;
      @media screen and (max-width: 768px) {
        font-size:16px;
        margin: 20px 0;
        line-height: 30px;
      }
    }
    .outbiz__list {
      margin-top:30px;
    dt {
      font-size: 23px;
      font-weight: 500;
      color:#000;
      @media screen and (max-width: 768px) {
        font-size:18px;
      }
    }
    dd {
      font-size:18px;
      margin:5px 0 30px;
      @media screen and (max-width: 768px) {
        font-size:15px;
      }
    }
  }

  }
</style>