// 날짜계산
let fullyear = new Date().getFullYear();
let month = new Date().getMonth() + 1 < 10  ? '0' + (new Date().getMonth() + 1)  : new Date().getMonth() + 1;
let date = new Date().getDate() < 10  ? '0' + (new Date().getDate() - 1)  : new Date().getDate();
let ydate = (new Date().getDate() - 1 ) < 10  ? '0' + (new Date().getDate() - 1)  : new Date().getDate() - 1;
let ydate2 = (new Date().getDate() - 2) < 10  ? '0' + (new Date().getDate() - 2)  : new Date().getDate() - 2;
let ydate3 = (new Date().getDate() - 3) < 10  ? '0' + (new Date().getDate() - 3)  : new Date().getDate() - 3;

let ydate7 = (new Date().getDate() - 7) < 10 ?  '0' + (new Date().getDate() - 7) : new Date().getDate() - 7;

let ndate1 = (new Date().getDate() + 1) < 10  ? '0' + (new Date().getDate() + 1)  : new Date().getDate() + 1;
let ndate2 = (new Date().getDate() + 2) < 10 ? '0' + (new Date().getDate() + 2)  : new Date().getDate() + 2;
let ndate3 = (new Date().getDate() + 3) < 10  ? '0' + (new Date().getDate() + 3)  : new Date().getDate() + 3;

let hh = new Date().getHours() < 10  ? '0' + new Date().getHours()  : new Date().getHours();
let mm = new Date().getMinutes() < 10  ? '0' + new Date().getMinutes()  : new Date().getMinutes();
let ss = new Date().getSeconds() < 10  ? '0' + new Date().getSeconds()  : new Date().getSeconds();

let nowData = String(fullyear) + String(month) + String(date) + String(hh) + String(mm) + String(ss);
let todayData = String(fullyear) + String(month) + String(date);
let dailyData = String(fullyear) + String(month) + String(ydate);
let WeeklyData = String(fullyear) + String(month) + String(ydate7);

function getTodayLabel() {    
    var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');    
    var today = new Date().getDay();
    var todayLabel = week[today];      
    return todayLabel;
}


let liveTimes = setInterval(() => {
    console.log('실시간',nowData)
}, 1000);

export { dailyData, WeeklyData,liveTimes,todayData,getTodayLabel,ydate7};

 