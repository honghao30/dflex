<template>
  <div class="container">
    <div class="sub-search__wrap ">
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
    <div class="article__wrap">
        <div class="books__wrap">
            <div class="book-tab">
                <a href="#" class="is-active">책분류1</a>
                <a href="#">책분류2</a>
                <a href="#">책분류3</a>
                <a href="#">책분류4</a>
                <a href="#">책분류5</a>
            </div>
        </div>
        <v-list lines="three">
            <v-list-item>
                <v-list-item-title>제 4장 : 통합의 장</v-list-item-title>
                <v-list-item-text>
                  무림은 무림맹주 무극검황  옥청학의 갑작스런 실종으로 들끓고 있었다.  그를
호위했던 30명이 넘는  뛰어난 무공을 지닌 무사들까지 함께 사라졌기에  구구
한 억측과 유언비어가 나도는 가운데 정파는 서서히 분열하기  시작했다. 맹주
의 자리를 노리는 사람들은  많았다. 무림맹은 청성(靑城), 점창(點蒼), 무당
(武當), 아미(峨嵋),  소림(小林), 곤륜(崑崙), 종남(終南), 화산(華山),  공
동(空洞)의  구파와  개방( 幇),  또 남궁세가(南宮世家),  악양세가(岳陽世
家),  서문세가(西門世家), 종리세가(鍾里世家),  제갈세가(諸葛世家)의 오대
세가가 연합한 단체인 만큼 그들은 맹주의 실종과  함께 자파에서 맹주직을 차
지하기 위한 치열한 암투가 시작되었던 것이다.

여기서 아미,  소림의 경우 승려들로  이루어 졌기에 맹주직을 차지할  생각이
없었고 무당과  곤륜은 도인들로 이루어  졌기에 권력과는 상관이 없었다.  또
개방의 경우 거지떼로  이뤄졌기에 거지의 특권인 무소유, 무욕에  상반되기에
맹주직을 노릴 가능성은 없었다. 악양세가의 경우 강력한 무력을  가지고는 있
었지만 의가(醫家)였기에 무림의 장악에는 별로 뜻이 없었다.
                </v-list-item-text>
            </v-list-item>
          <v-list-item>
              <v-list-item-title>책분류1</v-list-item-title>
              <v-list-item-text>
                무림은 무림맹주 무극검황  옥청학의 갑작스런 실종으로 들끓고 있었다.  그를
호위했던 30명이 넘는  뛰어난 무공을 지닌 무사들까지 함께 사라졌기에  구구
한 억측과 유언비어가 나도는 가운데 정파는 서서히 분열하기  시작했다. 맹주
의 자리를 노리는 사람들은  많았다. 무림맹은 청성(靑城), 점창(點蒼), 무당
(武當), 아미(峨嵋),  소림(小林), 곤륜(崑崙), 종남(終南), 화산(華山),  공
동(空洞)의  구파와  개방( 幇),  또 남궁세가(南宮世家),  악양세가(岳陽世
家),  서문세가(西門世家), 종리세가(鍾里世家),  제갈세가(諸葛世家)의 오대
세가가 연합한 단체인 만큼 그들은 맹주의 실종과  함께 자파에서 맹주직을 차
지하기 위한 치열한 암투가 시작되었던 것이다.

여기서 아미,  소림의 경우 승려들로  이루어 졌기에 맹주직을 차지할  생각이
없었고 무당과  곤륜은 도인들로 이루어  졌기에 권력과는 상관이 없었다.  또
개방의 경우 거지떼로  이뤄졌기에 거지의 특권인 무소유, 무욕에  상반되기에
맹주직을 노릴 가능성은 없었다. 악양세가의 경우 강력한 무력을  가지고는 있
었지만 의가(醫家)였기에 무림의 장악에는 별로 뜻이 없었다.
              </v-list-item-text>
            </v-list-item>
          </v-list>

    </div>
  </div>
</template>

<script>


</script>

<style lang="scss" scoped>
  .sub-search__wrap {
    padding:20px 20px;
    border-bottom: 1px solid #dadbdc;
    form {
      display: flex;
      margin: 0 auto;
      justify-content: space-around;
      max-width: 1280px;
      input {
        flex-grow: 1;
        border: 1px solid #dadbdc;
        height:36px;
        line-height: 38px;
        font-size: 16px;
        color:#666;
        text-indent: 10px;
      }     
    }
  }
  .books__wrap {
    padding-top: 20px;
  }
  .book-tab {
    display: flex;
    justify-content: space-around;
    a {
      padding: 10px 0px;
      background: #f7f7f7;
      border: 1px solid #dddddd;
      color: #444;
      font-weight: 500;
      width: 100%;
      text-align: center;
      border-left:0;
      &:nth-child(1){
        border-left: 1px solid #dddddd;
      }
      &.is-active {
        background-color: #e57373;
        color:#fff;
      }
    }
  }
</style>