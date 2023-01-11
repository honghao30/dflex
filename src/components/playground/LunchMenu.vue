!<template>
    <div class="lunch-choice__wrap">
        <h2>점심 머 먹지?</h2>
        <div class="lunch-menu__add">
          <form>
              <input type="text" />
              <v-btn
              variant="outlined"
              color="primary"
              >
              검색
              </v-btn>
          </form>  
        </div>
        <div class="lunch-display">

        </div>
        <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
          <v-btn variant="outlined">
            메뉴 선택하기
          </v-btn>
        </div>   
        <div class="lunch-menu__list">
            <ul>
              <li>김치찜</li>
              <li>청국장</li>
              <li>중국집</li>
              <li>된장찌개</li>
              <li>제육덮밥</li>
              <li>돈까스</li>              
            </ul>
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

.lunch-display {
    border: 1px solid #dadbdc;
    text-align: center;
    margin: 30px auto;
    width:100%;
    max-width: 500px;
    height:50px;
    font-size: 20px;
    display: flex;
    align-items: center;    
  }
  .lunch-menu__list {
    margin: 30px auto;
    width:100%;
    max-width: 800px;
    ul {
      display: flex;
      justify-content: space-around;
      flex-basis: 1 1 auto;
    }
  }

</style>