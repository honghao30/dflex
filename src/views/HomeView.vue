<template>
  <div class="container">
    <div class="main-img__full-bg">
      <v-card
        class="mx-auto"
        max-width="368"
      >
        <v-card-item title="Florida">
          <template v-slot:subtitle>
            <v-icon
              icon="mdi-alert"
              size="18"
              color="error"
              class="mr-1 pb-1"
            ></v-icon>

            Extreme Weather Alert
          </template>
        </v-card-item>

        <v-card-text class="py-0">
          <v-row align="center" no-gutters>
            <v-col
              class="text-h2"
              cols="6"
            >
              64&deg;F
            </v-col>

            <v-col cols="6" class="text-right">
              <v-icon
                color="error"
                icon="mdi-weather-hurricane"
                size="88"
              ></v-icon>
            </v-col>
          </v-row>
        </v-card-text>
        <div class="d-flex py-3 justify-space-between">
          <v-list-item
            density="compact"
            prepend-icon="mdi-weather-windy"
          >
            <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
          </v-list-item>

          <v-list-item
            density="compact"
            prepend-icon="mdi-weather-pouring"
          >
            <v-list-item-subtitle>48%</v-list-item-subtitle>
          </v-list-item>
        </div>
          <v-btn
            variant="outlined"
            color="primary"
          >
            자세히 보기
          </v-btn>
      </v-card>
    </div>
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
    <!-- <div class="out-biz__wrap">
        <ul>
            <li>
              <h3></h3>
            </li>
            <li>
              <h3></h3>
            </li>
            <li>
              <h3></h3>
            </li>                        
        </ul>
    </div> -->
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .movie__slider {height:80vh;}
  .main-img__full-bg {
    position: relative;
    width:100%;
    height:60vw;
    background-color: azure;
    .v-card {
      padding: 20px;
      position: absolute;
      right:10%;
      top:20%;
    }
  }
  .luck-card__wrap {
    padding:50px 0;
    text-align: center;
    h2 {
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
  .luck-card__list {
    display: flex;
    align-items: center;
    justify-content: center;
  }
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