<template>
  <div class="poster__thum">
    <img
    :src="`https://image.tmdb.org/t/p/w300/${poster.profile_path}`"
    alt="poster"
  />
  </div>

</template>

<script>
export default {
  props: ['poster'],
};
</script>
<style lang="scss" scoped>
.poster__thum {
  width: 250px;
  height: 350px;
  overflow: hidden;
  img {
    width: 100%;
  }
  &:hover {
    img {
      transform: scale(1.1);
      transition: all 0.3s;
    }
  }
}
</style>
