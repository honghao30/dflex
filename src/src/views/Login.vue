<template>
  <div class="container">
    <div class="article__wrap">
        <Login />
    </div>
  </div>
</template>

<script>
import Login from '@/components/util/Login.vue';
export default {
  components: {
    Login,
  },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
.loginpage {
  width: 100%;
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>