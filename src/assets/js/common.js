// 날짜계산
let fullyear = new Date().getFullYear();
let month = new Date().getMonth() + 1 < 10  ? '0' + (new Date().getMonth() + 1)  : new Date().getMonth() + 1;
let date = new Date().getDate() < 10  ? '0' + (new Date().getDate() - 1)  : new Date().getDate();
let ydate = new Date().getDate() < 10  ? '0' + (new Date().getDate() - 1)  : new Date().getDate() - 1;
let ydate2 = new Date().getDate() < 10  ? '0' + (new Date().getDate() - 1)  : new Date().getDate() - 2;
let dailyData = String(fullyear) + String(month) + String(ydate);
let WeeklyData = String(fullyear) + String(month) + String(ydate2);

export { dailyData, WeeklyData };

 