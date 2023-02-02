<template>
           <div class="movie-list__wrap">
                <div class="movie-list__wrap--scroll" 
                >
                  <v-card
                    :loading="loading"
                    class="mx-auto my-6"
                    max-width="250"
                    v-for="(nowPlaying, index) in nowPlayingList"
                    :key="`${nowPlaying.id}-${index}`"
 
                  >
                    <vCardItemNowPlaying :Playing="nowPlaying" />
                  </v-card> 
                </div>                                                         
              </div>
</template>
<script>
import getMovie from '@/api/getMovie';
import vCardItemNowPlaying from '@/components/movie/card/vCardItemNowPlaying.vue';
import { onMounted } from 'vue';

export default {
  components: {
    vCardItemNowPlaying,
  },
  setup () {
    const { nowPlaying,nowPlayingList } =  getMovie();

    onMounted(() => {
        nowPlaying(); 
    });
    return {          
        nowPlaying,
        nowPlayingList,
    };
  }
}

</script>
<style lang="scss" scoped>

</style>