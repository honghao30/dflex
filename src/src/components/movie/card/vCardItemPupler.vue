<template>       
        <ImagePopular :poster="lattest" />
        <v-card-item>
            <v-card-title>       
                <a href="#"
                @click="goDetail"
                >                    
                {{ lattest['title'] }}  
                
                </a>       
               
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
                {{ lattest['vote_average'] }} ({{ lattest['vote_count'] }})
            </div>
            </v-row>
            <div class="descriptions"> {{ lattest['overview'] }}</div>
        </v-card-text> 

</template>

<script>
 import ImagePopular from '@/components/common/ImagePopular.vue';
 export default {
    components: { ImagePopular },
    props: ['lattest'],
    methods: {
     goDetail(id){
      // console.log(id);
      this.$router.push(`detail/${id}`);
    }
  },
  };
</script>
<style scoped>
.v-card-item  {padding:10px 5px 0;}
.v-card .v-card-text  {padding:5px 5px;}
.v-img__img--cover{width:250px;}
</style>