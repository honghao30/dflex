<template>
  <div class="container">
    <div class="sub-img">
      박스 오피스
    </div>
    <div class="article__wrap">
      <DailyRangking /> 
      <WeeklyRangking />
    </div>
  </div>
</template>

<script setup>
  import DailyRangking from '@/components/boxoffce/DailyRangking.vue';
  import WeeklyRangking from '@/components/boxoffce/WeeklyRangking.vue';

</script>

<style lang="scss" scoped>
.sub-img {
  background: url('https://raw.githubusercontent.com/honghao30/dflex/main/images/box.jpg') no-repeat center top;
  background-size: auto 250px;
  color:#fff;
}

</style>