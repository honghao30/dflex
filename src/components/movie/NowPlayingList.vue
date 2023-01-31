<template>
           <div class="movie-list__wrap">
                <div class="movie-list__wrap--scroll">
                  <v-card
                    :loading="loading"
                    class="mx-auto my-6"
                    max-width="374"
                  >
                    <template v-slot:loader="{ isActive }">
                      <v-progress-linear
                        :active="isActive"
                        color="deep-purple"
                        height="4"
                        indeterminate
                      ></v-progress-linear>
                    </template>
                    <v-img
                      cover
                      height="250"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                    <v-card-item>
                      <v-card-title>
                        <RouterLink to="/MovieDetail">Badilico</RouterLink> </v-card-title>
                      <v-card-subtitle>
                        <span class="mr-1">Local Favorite</span>
                        <v-icon
                          color="error"
                          icon="mdi-fire-circle"
                          size="small"
                        ></v-icon>
                      </v-card-subtitle>
                    </v-card-item>
                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0"
                      >
                        <v-rating
                          :model-value="4.5"
                          color="amber"
                          density="compact"
                          half-increments
                          readonly
                          size="small"
                        ></v-rating>
                        <div class="text-grey ms-4">
                          4.5 (413)
                        </div>
                      </v-row>
                      <div class="my-4 text-subtitle-1">
                        $ • Italian, Cafe
                      </div>
                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                    </v-card-text> 
                  </v-card>        
                  <v-card
                    :loading="loading"
                    class="mx-auto my-6"
                    max-width="374"
                  >
                    <template v-slot:loader="{ isActive }">
                      <v-progress-linear
                        :active="isActive"
                        color="deep-purple"
                        height="4"
                        indeterminate
                      ></v-progress-linear>
                    </template>
                    <v-img
                      cover
                      height="250"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                    <v-card-item>
                      <v-card-title>Cafe Badilico</v-card-title>
                      <v-card-subtitle>
                        <span class="mr-1">Local Favorite</span>
                        <v-icon
                          color="error"
                          icon="mdi-fire-circle"
                          size="small"
                        ></v-icon>
                      </v-card-subtitle>
                    </v-card-item>
                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0"
                      >
                        <v-rating
                          :model-value="4.5"
                          color="amber"
                          density="compact"
                          half-increments
                          readonly
                          size="small"
                        ></v-rating>
                        <div class="text-grey ms-4">
                          4.5 (413)
                        </div>
                      </v-row>
                      <div class="my-4 text-subtitle-1">
                        $ • Italian, Cafe
                      </div>
                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                    </v-card-text> 
                  </v-card>     
                  <v-card
                    :loading="loading"
                    class="mx-auto my-6"
                    max-width="374"
                  >
                    <template v-slot:loader="{ isActive }">
                      <v-progress-linear
                        :active="isActive"
                        color="deep-purple"
                        height="4"
                        indeterminate
                      ></v-progress-linear>
                    </template>
                    <v-img
                      cover
                      height="250"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                    <v-card-item>
                      <v-card-title>Cafe Badilico</v-card-title>
                      <v-card-subtitle>
                        <span class="mr-1">Local Favorite</span>
                        <v-icon
                          color="error"
                          icon="mdi-fire-circle"
                          size="small"
                        ></v-icon>
                      </v-card-subtitle>
                    </v-card-item>
                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0"
                      >
                        <v-rating
                          :model-value="4.5"
                          color="amber"
                          density="compact"
                          half-increments
                          readonly
                          size="small"
                        ></v-rating>
                        <div class="text-grey ms-4">
                          4.5 (413)
                        </div>
                      </v-row>
                      <div class="my-4 text-subtitle-1">
                        $ • Italian, Cafe
                      </div>
                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                    </v-card-text> 
                  </v-card>     
                  <v-card
                    :loading="loading"
                    class="mx-auto my-6"
                    max-width="374"
                  >
                    <template v-slot:loader="{ isActive }">
                      <v-progress-linear
                        :active="isActive"
                        color="deep-purple"
                        height="4"
                        indeterminate
                      ></v-progress-linear>
                    </template>
                    <v-img
                      cover
                      height="250"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                    <v-card-item>
                      <v-card-title>Cafe Badilico</v-card-title>
                      <v-card-subtitle>
                        <span class="mr-1">Local Favorite</span>
                        <v-icon
                          color="error"
                          icon="mdi-fire-circle"
                          size="small"
                        ></v-icon>
                      </v-card-subtitle>
                    </v-card-item>
                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0"
                      >
                        <v-rating
                          :model-value="4.5"
                          color="amber"
                          density="compact"
                          half-increments
                          readonly
                          size="small"
                        ></v-rating>
                        <div class="text-grey ms-4">
                          4.5 (413)
                        </div>
                      </v-row>
                      <div class="my-4 text-subtitle-1">
                        $ • Italian, Cafe
                      </div>
                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                    </v-card-text> 
                  </v-card>   
                </div>                                                         
              </div>
</template>
<script>
import getMovie from '@/api/getMovie';

import { onMounted } from 'vue';

export default {
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