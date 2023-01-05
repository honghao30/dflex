<template>
    <header>
        <div class="head__nav">
            <div class="logo">
                <h1>
                    <RouterLink class="nav-link" active-class="active" to="/"
              >D-Flex</RouterLink>
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
            <div class="search">
                <button type="button"><v-icon icon="mdi-magnify" ></v-icon></button>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
</style>