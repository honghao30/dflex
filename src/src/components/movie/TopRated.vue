<template>
           <div class="movie-list__wrap">
                <div class="movie-list__wrap--scroll" 
                >
                  <v-card
                    :loading="loading"
                    class="mx-auto my-6"
                    max-width="250"
                    v-for="(topRated, index) in topRatedList"
                    :key="`${topRated.id}-${index}`"
 
                  >
                    <vCardItemTopRated :TopRatemovie="topRated" />
                  </v-card> 
                </div>                                                         
              </div>
</template>
<script>
import getRateMovie from '@/api/getMovieTopRate';
import vCardItemTopRated from '@/components/movie/card/vCardItemTopRated.vue';
import { onMounted } from 'vue';

export default {
  components: {
    vCardItemTopRated,
  },
  setup () {
    const { topRatedList,topRatedMovie } =  getRateMovie();

    onMounted(() => {
      topRatedMovie(); 
    });
    return {          
      topRatedList,
      topRatedMovie,
    };
  }
}

</script>
<style lang="scss" scoped>

</style>