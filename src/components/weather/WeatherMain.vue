!<template>
    <div class="main-img__full-bg" style="background: url('https://raw.githubusercontent.com/honghao30/dflex/main/images/clearday.jpg') no-repeat; background-size: 100% auto;
    background-position: bottom center;">
      <div class="main-text">
          너는 평강하라 네 집도 평강하라<br>
          네 소유의 모든 것도 평강하라<br>
          시편 42장 1절
      </div>
      <v-card
        class="mx-auto"
        max-width="368"
      >
        <v-card-item title="Florida">
          <template v-slot:subtitle>
            <v-icon
              icon="mdi-alert"
              size="18"
              color="error"
              class="mr-1 pb-1"
            ></v-icon>

            Extreme Weather Alert
          </template>
        </v-card-item>

        <v-card-text class="py-0">
          <v-row align="center" no-gutters>
            <v-col
              class="text-h2"
              cols="6"
            >
              64&deg;F
            </v-col>

            <v-col cols="6" class="text-right">
              <v-icon
                color="error"
                icon="mdi-weather-hurricane"
                size="88"
              ></v-icon>
            </v-col>
          </v-row>
        </v-card-text>
        <div class="d-flex py-3 justify-space-between">
          <v-list-item
            density="compact"
            prepend-icon="mdi-weather-windy"
          >
            <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
          </v-list-item>

          <v-list-item
            density="compact"
            prepend-icon="mdi-weather-pouring"
          >
            <v-list-item-subtitle>48%</v-list-item-subtitle>
          </v-list-item>
        </div>
          <v-btn
            variant="outlined"
            color="primary"
          >
            자세히 보기
          </v-btn>
      </v-card>
    </div>
</template>

<script>
import { onMounted } from 'vue';

import getWeather from '@/api/getWeather';
export default {
  setup () {
    const { Weather } =  getWeather();

    onMounted(() => {
      Weather();
    });
    return {
      Weather,
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
    @media screen and (max-width: 768px) {
      height: 100vw;
      background-size: auto 100% !important
      
    }
    .v-card {
      padding: 20px;
      position: absolute;
      right:10%;
      top:20%;
    }
  }

</style>