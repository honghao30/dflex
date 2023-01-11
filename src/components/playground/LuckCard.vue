!<template>
    <div class="luck-card__wrap">
        <h2>행운 카드 한번 볼까요?</h2>
        <div class="luck-card__list">
          <div class="card-item">
              <div class="card-front"></div>
              <div class="card-back"></div>
          </div>
          <div class="card-item">
              <div class="card-front"></div>
              <div class="card-back"></div>
          </div>
          <div class="card-item">
              <div class="card-front"></div>
              <div class="card-back"></div>
          </div>                          
        </div>
    </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
 .luck-card__wrap {
    padding:50px 0;
    text-align: center;
    h2 {
      font-size: 30px;
      margin-bottom: 30px;
      @media screen and (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 20px;
      }
    }
  }
  .luck-card__list {
    display: flex;
    align-items: center;
    justify-content: center;
  }
 
</style>