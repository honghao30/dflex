<template>
  <v-app>
    <v-main>
      <TopNav />
      <router-view/>
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
  import TopNav from '@/components/layout/TopNav.vue';
  import Footer from '@/components/layout/Footer.vue';
</script>
<!-- https://next.vuetifyjs.com/en/ -->