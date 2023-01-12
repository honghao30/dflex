import axios from 'axios';

import { liveTimes } from '@/assets/js/common.js';

const RankBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const Mykey = '13b55b2bf5bf4b64df063ddbfe1f3c5c'
let citis = ''

const getWeathers = () => { 
    
    const Weather= async () => {
        axios
        .get(`${RankBaseUrl}Seoul&APPID=${Mykey}&units=metric`,)
        .then(res => {
            console.log(res);
            // https://erikflowers.github.io/weather-icons/
        })
        .catch(err => {
            console.log(err.message);
        });
        console.log('날씨',liveTimes)        
    }
    return { Weather };
}
export default getWeathers;