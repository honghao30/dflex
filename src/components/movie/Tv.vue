<template>
           <div class="movie-list__wrap">
                <div class="movie-list__wrap--scroll" 
                >
                  <v-card
                    :loading="loading"
                    class="mx-auto my-6"
                    max-width="250"
                    v-for="(TheAirList, index) in onTheAirList"
                    :key="`${TheAirList.id}-${index}`"
 
                  >
                    <vCardItemTv :tvPlaying="TheAirList" />
                  </v-card> 
                </div>                                                         
              </div>
</template>
<script>
import getTv from '@/api/getTv';
import vCardItemTv from '@/components/movie/card/vCardItemTv.vue';
import { onMounted } from 'vue';

export default {
  components: {
    vCardItemTv,
  },
  setup () {
    const { nowPlayingTv,onTheAirList } =  getTv();

    onMounted(() => {
      nowPlayingTv(); 
    });
    return {          
       nowPlayingTv,
       onTheAirList,
    };
  }
}

</script>
<style lang="scss" scoped>

</style>