<template>
           <div class="movie-list__wrap">
                <div class="movie-list__wrap--scroll" 
                >
                  <v-card
                    :loading="loading"
                    class="mx-auto my-6"
                    max-width="250"
                    v-for="(lattestmovie, index) in latestMovieList"
                    :key="`${lattestmovie.id}-${index}`"
 
                  >
                    <vCardItemPupler :lattest="lattestmovie" />
                  </v-card> 
                </div>                                                         
              </div>
</template>
<script>
import getLatest from '@/api/getLattest';
import vCardItemPupler from '@/components/movie/card/vCardItemPupler.vue';
import { onMounted } from 'vue';

export default {
  components: {
    vCardItemPupler,
  },
  setup () {
    const { latestMovieList,latestMovie } =  getLatest();

    onMounted(() => {
      latestMovie(); 
    });
    return {          
      latestMovie,
      latestMovieList,
    };
  }
}

</script>
<style lang="scss" scoped>

</style>