<template>
    <div class="container">
      <div class="movie__swiper">
        <MovieSwiper />
      </div>     
      <div class="article__wrap">
          <div class="movie__sect">
              <div class="title">
                <h2>인기 영화</h2>
              </div>
              <PuplerMovie />
          </div>
          <div class="movie__sect">
              <div class="title">
                <h2>현재 상영중</h2>
              </div>
              <NowPlayingList />

          </div>
          <div class="movie__sect">
              <div class="title">
                <h2>높은 평점</h2>
              </div>
              <TopRated />
          </div>          
          <div class="movie__sect">
              <div class="title">
                <h2>개봉 예정</h2>
              </div>
              <Uncomming />
          </div>     
          <div class="movie__sect">
              <div class="title">
                <h2>TV 프로그램</h2>
              </div>
              <Tv />
          </div>   
          <div class="movie__sect">
              <div class="title">
                <h2>인기 배우</h2>
              </div>
              <Person />
          </div>                         
    </div>
  </div>
</template>
<script>
import NowPlayingList from '@/components/movie/NowPlayingList.vue'
import MovieSwiper from '@/components/common/MovieSwiper.vue'
import TopRated from '@/components/movie/TopRated.vue'
import Uncomming from '@/components/movie/Uncomming.vue'
import Tv from '@/components/movie/Tv.vue'
import Person from '@/components/movie/Person.vue'
import PuplerMovie from '@/components/movie/PuplerMovie.vue'


  export default {
    components: {
      MovieSwiper,
      NowPlayingList,
      TopRated,
      Uncomming,
      Tv,
      Person,
      PuplerMovie,
    }

  }
</script>
<style lang="scss" scoped>
.movie__sect {
  h2 {
    font-size: 28px;
    font-weight: 500;
  }
}
.movie-list__wrap {
  @media screen and (max-width: 768px) {
    overflow-x: auto;
  }
  .movie-list__wrap--scroll {
      display: flex;
      gap:20px;
      @media screen and (max-width: 768px) {
        width:200%;
      }
  }
}
</style>