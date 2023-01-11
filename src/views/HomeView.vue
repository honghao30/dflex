<template>
  <div class="container">
    <WeatherMain />
    <LuckCard />    
    <LunchMenu />
  </div>
</template>

<script>
import WeatherMain from '@/components/weather/WeatherMain.vue';
import LuckCard from '@/components/playground/LuckCard.vue';
import LunchMenu from '@/components/playground/LunchMenu.vue';

export default {
  components: {
    WeatherMain,
    LuckCard,
    LunchMenu,
  },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
  .movie__slider {height:80vh;}
 
</style>