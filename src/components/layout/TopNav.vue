<template>
    <header class="header" :class="headerShownClass">
        <div class="head__nav">
            <NavMenu />
            <TopSearch />
        </div>
    </header>
</template>
<script>
    import TopSearch from '@/components/util/TopSearch.vue';
    import NavMenu from '@/components/util/NavMenu.vue';

    import { ref,computed } from 'vue';

    export default{
        components:{
            TopSearch,
            NavMenu,
        },
        props:{
          scrollDirection:Number,
        },
    	setup(props){
         	const headerShownClass=computed(()=>{
            	if(props.scrollDirection === 1) return 'header_fix';
             	return '';	
           	});
	
            return {
            	headerShownClass 
         	}
      	 }, 
     
   	}  


</script>
<style lang="scss" scoped>


  .header{

  }
  .header_fix{
    position: fixed;
      left:0;
      top:0;
      width: 100%;
      background: #fff;
      z-index:10;
      transition: all 0.3s;
  }
</style>