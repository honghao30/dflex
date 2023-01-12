<template>
          <div class="boxoffice__sect">
          <div class="title">
            <h2>주간 박스 오피스</h2>
          </div>
          <div class="movie-rangking__wrap">
              <table class="table table-list">
                <caption><span class="ir-text">순위,영화명,개봉일,누적관객수,매출액으로 구성된 주간 박스 오피스</span></caption>
                <colgroup>
                  <col width="100" />
                  <col width="600" />
                  <col width="150" />
                  <col width="150" />
                  <col width="150" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">순위</th>
                    <th scope="col">영화명</th>
                    <th scope="col">개봉일</th>
                    <th scope="col">누적관객수</th>
                    <th scope="col">매출액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(Rangk, index) in WeekRaingKing"
                    :key="`${Rangk.id}-${index}`"                  
                  >
                    <WeekTable                     
                    :weekRk="Rangk" />
                  </tr>                                                                 
                </tbody>
              </table>                                                     
          </div>
      </div>     
</template>

<script>
import { onMounted } from 'vue';

import getBoxRangking from '@/api/getBoxRangking';
import WeekTable from './WeekTable.vue';

export default {
  components: { WeekTable },
  setup () {
    const { BoxData,WeekRaingKing } =  getBoxRangking();

    onMounted(() => {
      BoxData();      
    });
    return {
      BoxData,  
      WeekRaingKing, 
    };
  }
}
</script>