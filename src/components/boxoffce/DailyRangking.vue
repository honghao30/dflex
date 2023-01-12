<template>
          <div class="boxoffice__sect">
          <div class="title">
            <h2>일간 박스 오피스</h2>
          </div>
          <div class="movie-rangking__wrap">
              <table class="table table-list">
                <caption></caption>
                <thead>
                  <tr>
                    <th scope="col">순위</th>
                    <th scope="col">영화명</th>
                    <th scope="col">개봉일</th>
                    <th scope="col">누적관객수</th>
                    <th scope="col">전주대비</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td class="text-l">물의 길 : 아바타</td>
                    <td>2022.12.30</td>
                    <td>20000</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td class="text-l">물의 길 : 아바타</td>
                    <td>2022.12.30</td>
                    <td>20000</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td class="text-l">물의 길 : 아바타</td>
                    <td>2022.12.30</td>
                    <td>20000</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td class="text-l">물의 길 : 아바타</td>
                    <td>2022.12.30</td>
                    <td>20000</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td class="text-l">물의 길 : 아바타</td>
                    <td>2022.12.30</td>
                    <td>20000</td>
                    <td>150</td>
                  </tr>                                                                        
                </tbody>
              </table>                                                     
          </div>
      </div>  
</template>

<script>
import { onMounted } from 'vue';

import getBoxRangking from '@/api/getBoxRangking';
export default {
  setup () {
    const { DailyRangk } =  getBoxRangking();

    onMounted(() => {
      DailyRangk();
    });
    return {
      DailyRangk,
    };
  }
}
</script>