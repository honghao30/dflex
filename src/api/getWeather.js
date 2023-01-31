import axios from 'axios';
import { ref } from 'vue';

import { todayData,hh,calcTime,calcHuos,todayPrint,getTodayLabel } from '@/assets/js/common.js';
import   weatherDescKo   from '../assets/js/weaTherKo';

const RankBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const Mykey = '13b55b2bf5bf4b64df063ddbfe1f3c5c'
let citis = 'Seoul'
let baseImgUrl = 'http://openweathermap.org/img/w/'
const Bgbase = `https://raw.githubusercontent.com/honghao30/dflex/main/images/`;

const rainDay = [200,201,202,210,211,212,221,230,231,232,300,301,302,310,311,313,314,321,500,501,502,503,504,511,520,521,522,531];
const cloudDay = [721,731,741,804,802];

let bgimg1 = Bgbase + 'morning.jpg';
let bgimg2 = Bgbase + 'clearday.jpg';
let bgimg3 = Bgbase + 'sunset.jpg';
let bgimg4 = Bgbase + 'night.jpg';
let bgimg5 = Bgbase + 'cloud.jpg';
let bgimg6 = Bgbase + 'rain.jpg';

const getWeathers = () => { 
    
    const citiName = ref('');
    const todayWeather = ref('');
    const todaytemp = ref('');
    const todaywind = ref('');
    const todayhumidity = ref('');
    const todayNowtime = ref('');
    const todayWeek = ref('');
    const sunriseTimeIs = ref('');
    const sunsetTimeIs = ref('');
    const WeatherIcon = ref('');
    const backgroundImage = ref('');

    
    const Weather= async () => {
        axios
        .get(`${RankBaseUrl}${citis}&APPID=${Mykey}&units=metric`,)
        .then(res => {            
            console.log(res.data);

            todayWeather.value = weatherDescKo[res.data.weather[0].id];
            todaytemp.value = res.data.main.temp ;
            todaywind.value = res.data.wind.speed;
            todayhumidity.value = res.data.main.humidity;
            citiName.value = res.data.name;
            todayNowtime.value = todayPrint;
            todayWeek.value = getTodayLabel();
            WeatherIcon.value =  baseImgUrl + res.data.weather[0].icon + '.png'

            sunriseTimeIs.value = calcTime(res.data.sys.sunrise);
            sunsetTimeIs.value = calcTime(res.data.sys.sunset);

            //배경 이미지
             if(hh == calcHuos(res.data.sys.sunrise)){
                backgroundImage.value = bgimg1;
             }else if(hh > calcHuos(res.data.sys.sunrise) && hh < calcHuos(res.data.sys.sunset)){
                if(rainDay.includes(res.data.weather[0].id)){
                    backgroundImage.value = bgimg6;
                } else if(cloudDay.includes(res.data.weather[0].id)){
                    backgroundImage.value = bgimg5;
                } else {
                    backgroundImage.value = bgimg2;
                }         
             } else if(hh == calcHuos(res.data.sys.sunset)){
                backgroundImage.value = bgimg3;
             }else{
                backgroundImage.value = bgimg4;
             }



        })
        .catch(err => {
            console.log(err.message);
        });
        console.log('날씨',todayNowtime)        
    }
    return { Weather,citiName,todayWeather, todaytemp,todaywind,todayhumidity,todayNowtime,todayWeek,sunriseTimeIs,sunsetTimeIs,WeatherIcon,backgroundImage};
}
export default getWeathers;