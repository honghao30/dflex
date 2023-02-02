<template>
    <div class="movie__info"  data-swiper-parallax="-200">        
        <h2>{{ TopRatemovie['title'] }}</h2>
        <div class="movie__info-detail">
            <strong>인기</strong> {{ TopRatemovie['popularity'] }}
            <strong style="margin-left:20px;">투표</strong> {{ TopRatemovie['vote_average'] }}
        </div>
        <div class="description">{{ TopRatemovie['overview'] }}</div>
    </div>   
   <image-or-placeholder :result="TopRatemovie" />
</template>

<script>
  import ImageOrPlaceholder from './ImageOrPlaceholder.vue';
  export default {
    components: { ImageOrPlaceholder },
    props: ['TopRatemovie'],
  };
</script>