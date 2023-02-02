<template>
           <div class="movie-list__wrap">
                <div class="movie-list__wrap--scroll" 
                >
                  <v-card
                    :loading="loading"
                    class="mx-auto my-6"
                    max-width="250"
                    v-for="(comingmovie, index) in getUpcomingMovieList"
                    :key="`${comingmovie.id}-${index}`"
 
                  >
                    <vCardItemUncomming :unPlaying="comingmovie" />
                  </v-card> 
                </div>                                                         
              </div>
</template>
<script>
import getUpcomingMovie from '@/api/getUncomming';
import vCardItemUncomming from '@/components/movie/card/vCardItemUncomming.vue';
import { onMounted } from 'vue';

export default {
  components: {
    vCardItemUncomming,
  },
  setup () {
    const { UpcomingMovie,getUpcomingMovieList } =  getUpcomingMovie();

    onMounted(() => {
      UpcomingMovie(); 
    });
    return {          
        UpcomingMovie,
        getUpcomingMovieList,
    };
  }
}

</script>
<style lang="scss" scoped>

</style>