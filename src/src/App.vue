<template>
  <v-app>
    <v-main>
      <TopNav
      :scrollDirection="scrollDirection" />
      <router-view/>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
  import { onMounted,ref } from 'vue';

  import TopNav from '@/components/layout/TopNav.vue';
  import Footer from '@/components/layout/Footer.vue';

  export default {
      components:{
          TopNav,
          Footer,
      },
     	setup(){        
          // 스크롤 방향 정보
          const scrollDirection = ref(0); // 1: up, -1 : down
          // Throttle을 위한 ref
          const waiting = ref(false);
          // 이전 스크롤 방향을 저장하기 위한 ref
          const scrollTrace = ref(0);
          
          // Throttle이 적용된 이벤트 핸들러
          function scrollHandler(e){
            if(!waiting.value){
              	waiting.value = true; // throttle check
            
            	const currentScroll = window.scrollY; // current scrollY
            	// scroll down = -1
            	if(currentScroll > scrollTrace.value) scrollDirection.value = -1;
            	// scroll up = 1
            	else if(currentScroll < scrollTrace.value) scrollDirection.value = 1;
            	scrollTrace.value = currentScroll;
            
            	// Event Throttle 100 ms
            	setTimeout(()=>{
                	waiting.value = false;
                }, 100); 
            }
          }
          
          onMounted(()=>{
            // DOM이 마운트 되었을 때 이벤트 핸들러를 등록한다.
            document.addEventListener('scroll',scrollHandler);
          });
          
          return {
           	 scrollDirection
          }
        }
    }
</script>
<!-- https://next.vuetifyjs.com/en/ -->