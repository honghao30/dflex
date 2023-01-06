<template>
    <div class="container">
      <div class="movie-title">
        영화 제목 길게 
      </div>
      <div class="article__wrap">
                       
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
.movie-title {
  width: 100%;
  height:150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 500;
  background-color: #EBEAE6;
}
</style>