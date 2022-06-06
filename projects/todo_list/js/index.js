const clock     = document.getElementById('todo_clock');
const todoList  = document.getElementById('todo_list');

/**
 * @author 2022-05-28 21:48:45 동환
 * 
 * @category clock active
 */
function activeClock() {

    const time      = new Date();
    const time_str  = date_format(time, 'ko');

    clock.textContent = time_str;
}
activeClock();
const clock_interval = setInterval(activeClock, 1000);

/**
 * @author 2022-05-28 21:01:07 동환
 * 
 * @category Date Object -> YYYY.MM.DD(day) HH:MM:SS 형태로 변환
 * 
 * @param {Object} dateObj : Date Object
 * 
 * @returns {String} result
 */
function date_format(dateObj = new Date(), lang = 'ko') {

    const year  = dateObj.getFullYear();
    const month = add_zero(dateObj.getMonth() + 1);
    const date  = add_zero(dateObj.getDate());
    const day   = dateObj.getDay();

    let dayStr = '';
    switch(lang) {
        case "ko":
            if(day == 0) dayStr = '일';
            if(day == 1) dayStr = '월';
            if(day == 2) dayStr = '화';
            if(day == 3) dayStr = '수';
            if(day == 4) dayStr = '목';
            if(day == 5) dayStr = '금';
            if(day == 6) dayStr = '토';

            break;

        case "en":
            if(day == 0) dayStr = 'Sun';
            if(day == 1) dayStr = 'Mon';
            if(day == 2) dayStr = 'Tue';
            if(day == 3) dayStr = 'Wed';
            if(day == 4) dayStr = 'Thu';
            if(day == 5) dayStr = 'Fri';
            if(day == 6) dayStr = 'Sat';

            break;
    }

    const hours     = add_zero(dateObj.getHours());
    const minutes   = add_zero(dateObj.getMinutes());
    const seconds   = add_zero(dateObj.getSeconds());

    const result = `${year}.${month}.${date}(${dayStr}) ${hours}:${minutes}:${seconds}`;

    return result;
}

/**
 * @author 2022-05-28 21:46:15 동환
 * 
 * @cateogry 10보다 작은숫자 두자릿수로 변환
 * 
 * @param {Number} number 
 * 
 * @returns {String} result
 */
function add_zero(number) {

    const result = number < 10 ? `0${number}` : number;

    return result;
}