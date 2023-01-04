<template>
  <TopNav />
  <HelloWorld />
  <Footer />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import TopNav from '../components/layout/TopNav.vue';
import Footer from '../components/layout/Footer.vue';
export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    TopNav,
    Footer,
  },
});
</script>
