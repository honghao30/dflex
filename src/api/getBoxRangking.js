import { dailyData, WeeklyData } from '@/assets/js/common.js';


const RankBaseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice';
const Mykey = 'ff4677c1cc97ed619e2bb12bb03f9be5'

const getMovieRaingking = () => { 
    const DailyRangk = () => {
        console.log('일간 랭킹',dailyData,RankBaseUrl)        
    }
    const WeeklyRangk = () => {
        console.log('주간 랭킹',WeeklyData,RankBaseUrl)
    }    
    return { DailyRangk,WeeklyRangk };
}
export default getMovieRaingking;