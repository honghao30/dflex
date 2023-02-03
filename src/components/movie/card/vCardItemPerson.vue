<template>       
        <ImagePerson :poster="PersonN" />
        <v-card-item>
            <v-card-title>
                <RouterLink to="/MovieDetail">
                {{ PersonN['name'] }}
                </RouterLink> 
            </v-card-title>
        </v-card-item>
        <v-card-text>
            <v-row
            align="center"
            class="mx-0"
            >

            </v-row>
            <div class="descriptions"> {{ PersonN['known_for_department'] }}</div>
        </v-card-text> 

</template>

<script>
 import ImagePerson from '@/components/common/ImagePerson.vue';
 export default {
    components: { ImagePerson },
    props: ['PersonN'],
  };
</script>
<style scoped>
.v-card-item  {padding:10px 5px 0;}
.v-card .v-card-text  {padding:5px 5px;}
.v-img__img--cover{width:250px;}
</style>