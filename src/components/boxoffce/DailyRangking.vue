<template>
          <div class="boxoffice__sect">
          <div class="title">
            <h2>일간 박스 오피스</h2>
          </div>
          <div class="movie-rangking__wrap">
              <table class="table table-list">
                <caption><span class="ir-text">순위,영화명,개봉일,누적관객수,전주대비 로 구성된 일간 박스 오피스</span></caption>
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
                    <th scope="col">순위변화</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(Rangking, index) in DailyRaingKing"
                    :key="`${Rangking.id}-${index}`"                  
                  >
                    <DailyTable                     
                    :dailyRk="Rangking" />
                  </tr>                                                                                         
                </tbody>
              </table>                                                     
          </div>
      </div>  
</template>

<script>
import getBoxRangking from '@/api/getBoxRangking';
import DailyTable from './DailyTable.vue';

import { onMounted } from 'vue';

export default {
  components: { DailyTable },
  setup () {
    const { BoxData,DailyRaingKing } =  getBoxRangking();

    onMounted(() => {
      BoxData(); 
    });
    return {
      BoxData,    
      DailyRaingKing,
    };
  }
}
</script>