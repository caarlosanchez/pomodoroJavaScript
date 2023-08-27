const work = document.getElementById('work');
const breaks = document.getElementById('break');

const randoms = document.getElementById('random');
const randoms1 = document.getElementById('random1');

const workFinal1 = document.getElementById('workFinal1');
const breakFinal1 = document.getElementById('breakFinal1');

let workTime = 1;
let breakTime = 1;

let seconds = '00';

let breakCount = 0;

let rounds = 0;

let start = document.getElementById('start');

window.addEventListener('load', function () {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('second').innerHTML = seconds;

    work.classList.add('active');
});

start.addEventListener('click', () => {
    //change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    //countdown
    let timerFunction = () => {
        document.getElementById('minutes').innerHTML =
            workMinutes < 10 ? '0' + workMinutes : workMinutes;
        document.getElementById('second').innerHTML =
            seconds < 10 ? '0' + seconds : seconds;

        seconds = seconds - 1;

        if (seconds === -1) {
            seconds = 59;

            if (workMinutes === 0) {
                if (breakCount % 2 == 0) {
                    workMinutes = breakMinutes;

                    work.classList.add('active');
                    breaks.classList.remove('active');
                    randoms.classList.remove('minutes');
                    randoms.classList.add('random');
                    randoms1.classList.remove('seconds');
                    randoms1.classList.add('random1');

                    workFinal1.classList.remove('workFinal');
                    workFinal1.classList.add('workFinal1');
                    breakFinal1.classList.remove('breakFinal');
                    breakFinal1.classList.add('breakFinal1');
                    console.log('hola');
                } else {
                    workMinutes = workTime;

                    work.classList.remove('active');
                    breaks.classList.add('active');
                    randoms.classList.add('minutes');
                    randoms.classList.remove('random');
                    randoms1.classList.add('seconds');
                    randoms1.classList.remove('random1');
                    workFinal1.classList.add('workFinal');
                    workFinal1.classList.remove('workFinal1');
                    breakFinal1.classList.add('breakFinal');
                    breakFinal1.classList.remove('breakFinal1');
                    console.log('adios');

                    timerFunction();
                }
            }
        }
    };

    //start countdown
    setInterval(timerFunction, 1000);
});
