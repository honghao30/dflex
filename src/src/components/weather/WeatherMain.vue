!<template>
    <div class="main-img__full-bg" 
    v-bind:style="{ backgroundImage: 'url(' + backgroundImage + ')' }"    
    >
      <div class="main-text">
          너는 평강하라 네 집도 평강하라<br>
          네 소유의 모든 것도 평강하라<br>
          시편 42장 1절
      </div>
      <v-card
          class="mx-auto"
          max-width="300"
        >
        <WeatherMain />
      </v-card>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import WeatherMain from './WeatherCardMain.vue';
import getWeather from '@/api/getWeather';

export default {
  components: { WeatherMain },
  setup () {    
    const { backgroundImage,Weather } =  getWeather();
    onMounted(() => {
      Weather();     
    });
    return {
      backgroundImage,
    };
  }
}
</script>

<style lang="scss" scoped>
  .main-text {
    position: absolute;
    left:10%;
    top:25%;
    color:#fff;
    font-size: 40px;
    line-height: 64px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .main-img__full-bg {
    position: relative;
    width:100%;
    height:60vw;
    background-color: azure;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: bottom center;
    @media screen and (max-width: 768px) {
      height: 100vw;
      background-size: auto 100% !important
      
    }
    .v-card {
      width: 100%;
      padding: 20px;
      position: absolute;
      right:10%;
      top:20%;
    }
  }

</style>