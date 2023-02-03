<template>       
        <ImagePosterRate :poster="TopRatemovie" />
        <v-card-item>
            <v-card-title>
                <RouterLink to="/MovieDetail">
                {{ TopRatemovie['title'] }}

                </RouterLink> 
            </v-card-title>
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
                {{ TopRatemovie['vote_average'] }} ({{ TopRatemovie['vote_count'] }})
            </div>
            </v-row>
            <div class="descriptions"> {{ TopRatemovie['overview'] }}</div>
        </v-card-text> 

</template>

<script>
 import ImagePosterRate from '@/components/common/ImagePosterRate.vue';
 export default {
    components: { ImagePosterRate },
    props: ['TopRatemovie'],
  };
</script>
<style scoped>
.v-card-item  {padding:10px 5px 0;}
.v-card .v-card-text  {padding:5px 5px;}
.v-img__img--cover{width:250px;}
</style>