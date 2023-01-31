<template>
        <v-card-item>
          <h3>{{ citiName }} </h3>
          <p class="day-info">{{ todayNowtime }} {{ todayWeek }}</p>
          <p class="day-info"> 일출 : {{ sunriseTimeIs }} 일몰 : {{ sunsetTimeIs }}</p>
          <p class="weather-status">{{ todayWeather }} </p>
        </v-card-item>
        <v-card-text class="py-0 weather-infor-temp">
           <div class="weather-info">
                <div class="weatehr-icon">
                    <img :src="WeatherIcon" alt="" />                    
                </div>
                <div class="weatehr-deg">
                    온도 : {{ todaytemp }} °C
                </div>
           </div>
        </v-card-text>
        <v-card-text  class="weather-infor-subinfo">
            <div class="w-item">습도: {{ todayhumidity }}%</div>
            <div class="w-item">풍속: {{ todaywind }}m/s</div>
        </v-card-text>
          <v-btn
            variant="outlined"
            color="primary"
          >
            자세히 보기
          </v-btn>
</template>

<script>
import { onMounted } from 'vue';
import getWeather from '@/api/getWeather';

export default {

  setup () {    
    const { Weather,citiName,todayWeather, todaytemp,todaywind,todayhumidity,todayNowtime,todayWeek,sunriseTimeIs,sunsetTimeIs,WeatherIcon,backgroundImage } =  getWeather();
    onMounted(() => {
      Weather();      
    });
    return {
      Weather,  
      citiName,
      todayWeather, 
      todaytemp,
      todaywind,
      todayhumidity,
      todayNowtime,
      todayWeek,
      sunriseTimeIs,
      sunsetTimeIs,
      WeatherIcon,
      backgroundImage,    
    };
  }
}
</script>
<style lang="scss" scoped>
.v-card {
    width:100%;
    .v-card-item__content {
        h3 {
            font-size: 22px;
            font-weight: 700;
        }
    }
    .weather-infor-subinfo {
        display: flex;
        justify-content: space-between;
        gap:20px;
    }
}
.main-img__full-bg .v-card {
    width:100%;
}
.weather-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.day-info {
    margin-top:10px;
    font-size:15px;
}
.weather-status {
    margin-top:10px;
    font-size:18px;
    font-weight: 700;
    color:#000;
}
</style>