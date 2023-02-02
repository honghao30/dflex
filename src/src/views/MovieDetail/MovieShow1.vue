<template>
    <div class="container">
      <div class="movie-title">
        영화 제목 길게 
        <p>2022/12/14 (KR) SF, 모험, 액션 3h 12m</p>
      </div>
      <div class="article__wrap">
          <div class="movie-detail__wrap">
              <div class="movie-post">

              </div>
              <div class="movie-detail__info">
                  개요
                  <div class="detail">판도라 행성에서 제이크 설리와 네이티리가 이룬 가족이 겪게 되는 무자비한 위협과 살아남기 위해 떠나야 하는 긴 여정과 전투, 그리고 견뎌내야 할 상처에 대한 이야기를 그렸다. 살아남기 위해 설리 가족이 숲에서 바다로 터전을 옮기면서 겪게 되는 화합의 과정, 그리고 곳곳에서 도사리는 새로운 위협까지 역경 속에서 더 아름답게 펼쳐진다.</div>
              </div>
          </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="scss" scoped>
.movie-title {
  width: 100%;
  height:150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 500;
  background-color: #EBEAE6;
  flex-direction: column;
  p {
    display: block;
    font-size: 15px;
  }
}
.movie-detail__wrap {
  padding-top: 50px;
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: space-around;
  gap: 20px;
  .movie-post {
    width: 450px;
    height: 300px;
    background-color: #EBEAE6;
  }
}
</style>