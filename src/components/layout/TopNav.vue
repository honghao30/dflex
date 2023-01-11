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
            	if(props.scrollDirection === -1) return 'header_off';
             	return '';	
           	});
	
            return {
            	headerShownClass 
         	}
      	 }, 
     
   	}  


</script>
<style lang="scss" scoped>

  .mobile-menu {
    display: none;
    @media only screen and (max-width: 768px) {
        display:block;
        button {
            position: relative;
            margin-right: 16px;
            .bar {
                &:nth-child(1) {
                    top:3px;
                    left:0;
                }
                &:nth-child(2) {
                    top:12px;
                    left:0;
                }   
            }
            &.menuOpen {
            .bar {
                &:nth-child(1) {
                    transform: rotate(-47deg);
                    top: 11px;
                }
                &:nth-child(2) {
                    transform: rotate(47deg);
                }                
               }
            }

        }
    }
    .bar {
            display: block;
            position: absolute;
            height:3px;
            width:25px;
            margin:5px 0;
            background-color: #666;
            transition: all 0.3s;
        }
  }
  .header{
    position: fixed;
      left:0;
      top:0;
      width: 100%;
      background: #fff;
      z-index:10;
  }
  .header_off{
      top:-70px;
      transition: all 0.3s;
  }
</style>