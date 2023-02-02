<template>
           <div class="movie-list__wrap">
                <div class="movie-list__wrap--scroll" 
                >
                  <v-card
                    :loading="loading"
                    class="mx-auto my-6"
                    max-width="250"
                    v-for="(person, index) in personList"
                    :key="`${person.id}-${index}`"
 
                  >
                    <vCardItemPerson :PersonN="person" />
                  </v-card> 
                </div>                                                         
              </div>
</template>
<script>
import getPerson from '@/api/getPeaple';
import vCardItemPerson from '@/components/movie/card/vCardItemPerson.vue';
import { onMounted } from 'vue';

export default {
  components: {
    vCardItemPerson,
  },
  setup () {
    const { personList,PersonNow } =  getPerson();

    onMounted(() => {
      PersonNow(); 
    });
    return {          
      personList,
      PersonNow,
    };
  }
}

</script>
<style lang="scss" scoped>

</style>