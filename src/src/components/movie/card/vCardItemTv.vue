<template>       
        <ImageTv :poster="tvPlaying" />
        <v-card-item>
            <v-card-title>
                <RouterLink to="/MovieDetail">
                {{ tvPlaying['name'] }}
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
                {{ tvPlaying['vote_average'] }} ({{ tvPlaying['vote_count'] }})
            </div>
            </v-row>
            <div class="descriptions"> {{ tvPlaying['overview'] }}</div>
        </v-card-text> 

</template>

<script>
 import ImageTv from '@/components/common/ImageTv.vue';
 export default {
    components: { ImageTv },
    props: ['tvPlaying'],
  };
</script>
<style scoped>
.v-card-item  {padding:10px 5px 0;}
.v-card .v-card-text  {padding:5px 5px;}
.v-img__img--cover{width:250px;}
</style>