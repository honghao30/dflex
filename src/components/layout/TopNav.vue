<template>
    <header>
        <div class="head__nav">
            <div class="logo">
                <h1>
                    <RouterLink class="nav-link" active-class="active" to="/"
              >D-Flix</RouterLink>
                </h1>
            </div>
            <div class="nav">
                <ul>
                    <li>
                        <RouterLink class="nav-link" active-class="active" to="/movieInfo"
              >영화정보</RouterLink>                        
                        <ul>
                            <li><a href="#">인기영화</a></li>
                            <li><a href="#">상영중</a></li>                            
                        </ul>
                    </li>
                    <li>
                        <RouterLink class="nav-link" active-class="active" to="/boxOffice"
              >박스오피스</RouterLink>                        
                        <ul>
                            <li><a href="#">일일랭킹</a></li>
                            <li><a href="#">주간랭킹</a></li>                            
                        </ul>                    
                    </li>
                    <li>
                        <RouterLink class="nav-link" active-class="active" to="/youtube"
              >유튜브 영상</RouterLink>
                        </li>
                    <li>
                        <RouterLink class="nav-link" active-class="active" to="/books"
              >책장</RouterLink>
                        </li>
                    <li>
                        <RouterLink class="nav-link" active-class="active" to="/login"
              >로그인</RouterLink>
                        </li>                    
                </ul>
            </div>
            <div class="mobile-menu">
                <button type="button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
            </div>
            <div class="search">
                <button type="button"><v-icon icon="mdi-magnify" ></v-icon></button>
            </div>
            <div class="search__wrap--top " style="display:none">
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
        </div>
    </header>
</template>
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
  .mobile-menu {
    display: none;
    @media only screen and (max-width: 768px) {
        display:block;
    }
    .bar {
        display: block;
        height:3px;
        width:20px;
        margin:5px 0;
        background-color: #666;
        }
  }
</style>