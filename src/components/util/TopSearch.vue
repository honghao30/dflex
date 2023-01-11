!<template>
  <div>
    <div class="search">
        <button type="button" 
        @click="isOpen = !isOpen"
        :class="{ active: !isOpen }">
        <v-icon icon="mdi-magnify" ></v-icon>
        <v-icon icon="mdi-window-close" ></v-icon>
        
        </button>
    </div>
    <div class="search__wrap--top " 
    v-if="!isOpen">
        <form>
            <input type="text"
            placeholder="영화 제목 입력" />
            <v-btn
            variant="outlined"
            color="primary"
            >
            검색
            </v-btn>
        </form>      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
//const isOpen = ref(false);
let isOpen = ref(false);
isOpen.value = !isOpen.value;
// export default {
//   setup () {
//     isOpen.value = !isOpen.value;
//     const toggleShow = () => { 
//       this.show = !this.show;
//       console.log('나 클릭했니')
//     }

//     return {
//       toggleShow,
//       isShow: false,
//     }
//   }
// }
</script>

<style lang="scss" scoped>
 .search__wrap--top {
    padding: 20px 20px;
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #dadbdc;
    z-index: 20;
    background: #fff;
    //display: none;
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
  .active { 
    display:block;
  }
  .search button {
    .mdi-window-close {
      display: none;
    }
    .mdi-magnify {
      display: block;
    }
    &.active {
      .mdi-window-close {
        display: block;
      }
      .mdi-magnify {
        display: none;
      }      
    }
  }
</style>