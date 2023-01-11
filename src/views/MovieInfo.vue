<template>
    <div class="container">
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows="hover"
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            :color="colors[i]"
            height="100%"
          >
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                {{ slide }} Slide
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <div class="article__wrap">
          <div class="movie__sect">
              <div class="title">
                <h2>최신 예고편</h2>
              </div>
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
          </div>
          <div class="movie__sect">
              <div class="title">
                <h2>현재 상영중</h2>
              </div>
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
          </div>
          <div class="movie__sect">
              <div class="title">
                <h2>높은 평점</h2>
              </div>
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
          </div>          
          <div class="movie__sect">
              <div class="title">
                <h2>개봉 예정</h2>
              </div>
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
          </div>     
          <div class="movie__sect">
              <div class="title">
                <h2>TV 프로그램</h2>
              </div>
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
          </div>   
          <div class="movie__sect">
              <div class="title">
                <h2>인기 배우</h2>
              </div>
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
          </div>                         
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