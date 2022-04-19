// SELECT ELEMENTS
const time = document.querySelector('.time');
const secCircle = document.querySelector('.svg-seconds');
const minCircle = document.querySelector('.svg-minutes');
const hoursCircle = document.querySelector('.svg-hours');

// 1 TIME FN
function timeFn (){
    let time = new Date();
    let hours = addZero(time.getHours());
    let minutes = addZero(time.getMinutes());
    let seconds = time.getSeconds().toString().padStart(2,0);
    // 4 SVG OFFSET
    secCircle.style.strokeDashoffset = -(63 - (64 * seconds) / 60);
    minCircle.style.strokeDashoffset = -(63 - (64 * minutes) / 60);
    hoursCircle.style.strokeDashoffset = -(63 - (64 * hours) / 24)
    // FULL TIME
    let fullTime = `${hours}:${minutes}:${seconds}`;
    // console.log(fullTime)
    return fullTime;
}
// 3 ADD ZERO FN
function addZero (timeValue) {
    return Number(timeValue) >= 10 ? timeValue : '0'+ timeValue;
};
// 2 SET INTERVAL 1 SECOND
setInterval(()=> time.innerHTML = timeFn());