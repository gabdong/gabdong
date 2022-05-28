const clock     = document.getElementById('todo_clock');
const todo_list = document.getElementById('todo_list');

/**
 * @author 2022-05-28 21:48:45 동환
 * 
 * @category clock active
 */
function active_clock() {

    const time      = new Date();
    const time_str  = date_format(time, 'en');

    clock.textContent = time_str;
}
const clock_interval = setInterval(active_clock, 1000);

/**
 * @author 2022-05-28 21:01:07 동환
 * 
 * @category Date Object -> YYYY.MM.DD(day) HH:MM:SS 형태로 변환
 * 
 * @param {Object} obj : Date Object
 * 
 * @returns {String} result
 */
function date_format(obj, lang = 'ko') {

    const date_obj = obj ? obj : new Date();

    const year  = date_obj.getFullYear();
    const month = add_zero(date_obj.getMonth() + 1);
    const date  = add_zero(date_obj.getDate());
    const day   = date_obj.getDay();

    let day_str = '';
    switch(lang) {
        case "ko":
            if(day == 0) day_str = '일';
            if(day == 1) day_str = '월';
            if(day == 2) day_str = '화';
            if(day == 3) day_str = '수';
            if(day == 4) day_str = '목';
            if(day == 5) day_str = '금';
            if(day == 6) day_str = '토';

            break;

        case "en":
            if(day == 0) day_str = 'Sun';
            if(day == 1) day_str = 'Mon';
            if(day == 2) day_str = 'Tue';
            if(day == 3) day_str = 'Wed';
            if(day == 4) day_str = 'Thu';
            if(day == 5) day_str = 'Fri';
            if(day == 6) day_str = 'Sat';

            break;
    }

    const hours     = add_zero(date_obj.getHours());
    const minutes   = add_zero(date_obj.getMinutes());
    const seconds   = add_zero(date_obj.getSeconds());

    const result = `${year}.${month}.${date}(${day_str}) ${hours}:${minutes}:${seconds}`;

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