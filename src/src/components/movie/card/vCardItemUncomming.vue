<template>       
        <ImagePosterUncomming :poster="unPlaying" />
        <v-card-item>
            <v-card-title>
                <RouterLink to="/MovieDetail">
                {{ unPlaying['title'] }}
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
                {{ unPlaying['vote_average'] }} ({{ unPlaying['vote_count'] }})
            </div>
            </v-row>
            <div class="descriptions"> {{ unPlaying['overview'] }}</div>
        </v-card-text> 

</template>

<script>
 import ImagePosterUncomming from '@/components/common/ImagePosterUncomming.vue';
 export default {
    components: { ImagePosterUncomming },
    props: ['unPlaying'],
  };
</script>
<style scoped>
.v-card-item  {padding:10px 5px 0;}
.v-card .v-card-text  {padding:5px 5px;}
.v-img__img--cover{width:250px;}
</style>