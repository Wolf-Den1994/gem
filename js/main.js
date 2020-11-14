document.documentElement.style.setProperty('--animate-duration', '2.1s');
alert('Уважаемый Проверяющий, перед началом, прочитайте пожалуйста READ ME :)')
let arr = [],
  arrLoad = [],
  box,
  ei,
  ej,
  count = 0;
/* time for seconder */
let today = new Date(),
  dateNumber = today.getDate(),
  monthNumber = today.getMonth(),
  yearNumber = today.getFullYear(),
  monthStr = '';
switch (monthNumber) {
  case 0:
    monthStr = 'Jan';
    break;
  case 1:
    monthStr = 'Feb';
    break;
  case 2:
    monthStr = 'Mar';
    break;
  case 3:
    monthStr = 'Apr';
    break;
  case 4:
    monthStr = 'May';
    break;
  case 5:
    monthStr = 'Jun';
    break;
  case 6:
    monthStr = 'Jul';
    break;
  case 7:
    monthStr = 'Aug';
    break;
  case 8:
    monthStr = 'Sept';
    break;
  case 9:
    monthStr = 'Oct';
    break;
  case 10:
    monthStr = 'Nov';
    break;
  case 11:
    monthStr = 'Dec';
    break;
}
// перемешаем элементы в массиве
function swap(arr, i1, j1, i2, j2) {
  t = arr[i1][j1];
  arr[i1][j1] = arr[i2][j2];
  arr[i2][j2] = t;
}

function linksNoActive() {
  links.classList.add('active-link');
  reset.style.display = 'block';
  pause.style.display = 'none';
  resume.style.display = 'block';
  overlay.style.display = 'block';
  save.style.display = 'block';
  load.style.display = 'block';
  score.style.display = 'block';
  size.style.display = 'block';
  rules.style.display = 'block';
  read.style.display = 'block';
  num.style.display = 'block';
  imagex.style.display = 'block';
  mix.style.display = 'block';

};

function linksActive() {
  links.classList.remove('active-link');
  reset.style.display = 'none';
  pause.style.display = 'block';
  resume.style.display = 'none';
  overlay.style.display = 'none';
  save.style.display = 'none';
  if (scoreBox.classList.contains('active-score')) {
    scoreBox.classList.remove('active-score');
  };
  if (sizeBox.classList.contains('active-size')) {
    sizeBox.classList.remove('active-size');
  }
  save.style.display = 'none';
  load.style.display = 'none';
  score.style.display = 'none';
  size.style.display = 'none';
  rules.style.display = 'none';
  read.style.display = 'none';
  num.style.display = 'none';
  imagex.style.display = 'none';
  mix.style.display = 'none';
  topBlock.classList.remove('transpar');
};

let body = document.querySelector("body");

body.insertAdjacentHTML('afterbegin', '<div id="wrapper"></div>')
wrapper = document.getElementById('wrapper');

body.insertAdjacentHTML('afterbegin', '<div class="top-block"><div class="top-block-timer-start"><span class="timer-simb"> &#8986; </span><span class="timer-des">Time:</span><span>&nbsp;</span><div class="sw"><p class="hours">00</p><span>&nbsp;</span></div><div class="colon"><span>: </span></div><div class="sw"><p class="mins">00</p><span>&nbsp;</span></div><div class="colon"><span>: </span></div><div class="sw"><p class="secs">00</p><span>&nbsp;</span></div><div class="colon"><span>: </span></div><div class="sw"><p class="milis">00</p></div></div><div class="top-block-timer"><span class="timer-simb"> &#8986; </span><span class="timer-des">Time:</span><span>&nbsp;</span><div class="sw"><p class="hours">00</p><span>&nbsp;</span></div><div class="colon"><span>: </span></div><div class="sw"><p class="mins">00</p><span>&nbsp;</span></div><div class="colon"><span>: </span></div><div class="sw"><p class="secs">00</p><span>&nbsp;</span></div><div class="colon"><span>: </span></div><div class="sw"><p class="milis">00</p></div></div><div class="top-block-moves"><span class="mov-simb"> &#128293; </span><span class="moves-des">Moves:</span><span>&nbsp;</span><p class="moves-count">0</p></div></div>');
topBlock = document.querySelector('.top-block');
topBlockTimer = document.querySelector('.top-block-timer');
topBlockTimerStart = document.querySelector('.top-block-timer-start');

wrapper.insertAdjacentHTML('afterend', '<audio data-key="Digit1" src="assets/sounds/04716.mp3"></audio>');

wrapper.insertAdjacentHTML('afterend', '<div class="modal-victory"></div>');
modal = document.querySelector('.modal-victory');

wrapper.insertAdjacentHTML('afterend', '<div class="read-block"><div class="read-block-title">Привет, Уважаемый Проверяющий!</div><div class="read-block-disc">Игра сделана стандартного размера поля 4х4 и с цифрами. Чтобы играть, нажмите кнопку GO. Новая игра генерируется нажатием на кнопку New Game. Размер поля можно выбирать от 3х3 до 8х8, если нажать кнопку Size game.  Присутствует сохранение игру (одно, перезаписывает друг друга). Но для каждого размера поля есть своё сохранение. Игру можно загрузить в любой момент (не читерите). Добавлен выбор поля (цифры, картинки, цифры+картинки). Соответствующее поле подсвечено зеленым цветом кнопки. Чтобы продолжить игру начатую допустим на цифрах, то сохраните игру и переключите на нужное поле, а затем загрузите игру. Это не баг, а фича :). Результаты топ 10 игр, отсортированные по наименьшему количеству шагов (в какой игре меньше шагов, та игра и выше в топе). Результаты топ 10 игр можно получить, нажав кнопку Best score. Присутствует анимация fade при перемещении плиток.</div><div class="read-block-footer">Спасибо за внимание и проверку. Успехов на курсе! :)</div><div class="read-go-back">go back</div></div>')
readBox = document.querySelector('.read-block');
readGoBack = document.querySelector('.read-go-back');

wrapper.insertAdjacentHTML('afterend', '<div class="rules-block"><div class="rules-en">EN</div><div class="rules-desc"> The object of the puzzle is to place the tiles in order by making sliding moves that use the empty space.</div><div class="rules-en">RU</div><div class="rules-desc"> Цель головоломки - разместить плитки по порядку, выполняя скользящие движения, используя пустое пространство.</div><div class="rules-go-back">go back</div></div>');
rulesBox = document.querySelector('.rules-block');
rulesGoBack = document.querySelector('.rules-go-back');

wrapper.insertAdjacentHTML('afterbegin', '<div id="box"></div>');
box = document.getElementById('box');

wrapper.insertAdjacentHTML('afterbegin', '<div id="overlay" style="display: block;"></div>');
overlay = document.getElementById('overlay');

box.insertAdjacentHTML('afterend', '<div class="size-box"><a id="size3" class="button-size" style="display: block;">Size 3x3</a><a id="size4" class="button-size" style="display: block;">Size 4x4</a><a id="size5" class="button-size" style="display: block;">Size 5x5</a><a id="size6" class="button-size" style="display: block;">Size 6x6</a><a id="size7" class="button-size" style="display: block;">Size 7x7</a><a id="size8" class="button-size" style="display: block;">Size 8x8</a><div class="size-go-back">go back</div></div>');
sizeBox = document.querySelector('.size-box')
sizeBtnAll = document.querySelectorAll('.button-size');
sizeGoBack = document.querySelector('.size-go-back');
size4 = document.getElementById('size4');
size3 = document.getElementById('size3');

box.insertAdjacentHTML('afterend', '<div class="main-score"><div class="score-box"><div class="score-titile">Best scores</div><div class="score-desc"><div class="score-date"><span class="score-green">Date</span><span>&nbsp;</span></div><div class="score-moves"><span class="score-green">Moves</span><span>&nbsp;</span></div><div class="score-size"><span class="score-green">Size</span><span>&nbsp;</span></div><div class="score-time"><span class="score-green">Time</span><span>&nbsp;</span></div></div><div class="score-go-back">go back</div></div></div>');
scoreBox = document.querySelector('.score-box');
scoreGoBack = document.querySelector('.score-go-back');
scoreDateBox = document.querySelector('.score-date');
scoreMovesBox = document.querySelector('.score-moves');
scoreSizeBox = document.querySelector('.score-size');
scoreTimeBox = document.querySelector('.score-time');

box.insertAdjacentHTML('afterend', '<div id="links" class="active-link"></div>');
links = document.getElementById('links');

links.insertAdjacentHTML('afterbegin', '<a id="pause" style="display: none;">Settings</a>');
pause = document.getElementById('pause');

pause.insertAdjacentHTML('beforebegin', '<a id="resume" style="display: block;">Go</a>');
resume = document.getElementById('resume');

pause.insertAdjacentHTML('beforebegin', '<a id="size" style="display: block;">Size game</a>');
size = document.getElementById('size');

pause.insertAdjacentHTML('beforebegin', '<a id="save" style="display: block;">Save game</a>');
save = document.getElementById('save');

pause.insertAdjacentHTML('beforebegin', '<a id="load" style="display: block;">Load game</a>');
load = document.getElementById('load');

pause.insertAdjacentHTML('beforebegin', '<a id="score" style="display: block;">Best score</a>');
score = document.getElementById('score');

pause.insertAdjacentHTML('beforebegin', '<a id="num" style="display: block;">Numbers</a>');
num = document.getElementById('num');

pause.insertAdjacentHTML('beforebegin', '<a id="imagex" style="display: block;">Images</a>');
imagex = document.getElementById('imagex');

pause.insertAdjacentHTML('beforebegin', '<a id="mix" style="display: block;">Numbers and Images</a>');
mix = document.getElementById('mix');

pause.insertAdjacentHTML('beforebegin', '<a id="rules" style="display: block;">Rules</a>');
rules = document.getElementById('rules');

pause.insertAdjacentHTML('beforebegin', '<a id="read" style="display: block;">READ ME PLZ!</a>');
read = document.getElementById('read');

pause.insertAdjacentHTML('afterend', '<a id="reset" style="display: block;">New Game</a>');
reset = document.getElementById('reset');

newGame();
document.getElementById('reset').onclick = newGame;

pause.addEventListener('click', () => {
  if (!links.classList.contains('active-link')) {
    linksNoActive();
  }
});
resume.addEventListener('click', () => {
  if (links.classList.contains('active-link')) {
    linksActive();
  }
});
rules.addEventListener('click', () => {
  if (!rulesBox.classList.contains('rrr')) {
    rulesBox.classList.add('rrr');
    linksActive();
    if (modal.classList.contains('mmm')) {
      overlay.style.display = 'block';
    }
    overlay.style.display = 'block';
    pause.style.pointerEvents = 'none';
  }
});
rulesGoBack.addEventListener('click', () => {
  if (rulesBox.classList.contains('rrr')) {
    rulesBox.classList.remove('rrr');
    linksNoActive();
    if (!modal.classList.contains('mmm')) {
      overlay.style.display = 'none';
    }
    overlay.style.display = 'block';
    pause.style.pointerEvents = 'auto';
  }
});

read.addEventListener('click', () => {
  if (!readBox.classList.contains('ggg')) {
    readBox.classList.add('ggg');
    linksActive();
    if (modal.classList.contains('mmm')) {
      overlay.style.display = 'block';
    }
    overlay.style.display = 'block';
    pause.style.pointerEvents = 'none';
  }
});
readGoBack.addEventListener('click', () => {
  if (readBox.classList.contains('ggg')) {
    readBox.classList.remove('ggg');
    linksNoActive();
    if (!modal.classList.contains('mmm')) {
      overlay.style.display = 'none';
    }
    overlay.style.display = 'block';
    pause.style.pointerEvents = 'auto';
  }
});


let tbody = document.querySelector("#box > table > tbody");

var mil = document.querySelector('.milis');
var sec = document.querySelector('.secs');
var min = document.querySelector('.mins');
var hours = document.querySelector('.hours');
var flag = false;

// Create blocks for time markers
function createTimeSection(timeType) { // timeType = min/sec/ms/ :
  var lapTime = document.createElement('div');
  lapTime.classList.add('lapSection');
  lapBlock.appendChild(lapTime);
  lapTime.innerHTML = (timeType);
}

function createTimeBlock(type) {
  lapBlock = document.createElement('div');
  lapBlock.classList.add('lapBlock');
  lapContainer.appendChild(lapBlock);
  var lapText = document.createElement('div');

  lapText.classList.add('lapText');
  lapBlock.appendChild(lapText);
  lapText.innerHTML = (type);

  createTimeSection(hours);
  createTimeSection(':');
  createTimeSection(minutes);
  createTimeSection(':');
  createTimeSection(seconds);
  createTimeSection(':');
  createTimeSection(milliseconds);
}

function startStopwatch() {
  if (!flag) initialDate = new Date;
}

// calculate timer
function getTime() {

  var currentDate = new Date;
  timer = new Date(currentDate - initialDate);

  milliseconds = timer.getMilliseconds();
  seconds = timer.getSeconds();
  minutes = timer.getMinutes();
  hours = timer.getUTCHours();

  if (milliseconds < 100) {
    milliseconds = '0' + milliseconds;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
}

// display timer in document
function counter() {
  getTime();
  mil.innerHTML = milliseconds;
  sec.innerHTML = seconds;
  min.innerHTML = minutes;
  hours.innerHTML = hours;
}

// interval for display
function displayTimer(timerId) {
  timerId = setInterval(counter, 10);
}

function stopTimer(timerId) {
  clearInterval(timerId);
  getTime();
  flag = true;
}

function resetTimer(timerId) {
  flag = false;
  clearInterval(timerId);
  mil.innerHTML = '00';
  min.innerHTML = '00';
  sec.innerHTML = '00';
}

resume.addEventListener('click', startStopwatch);
resume.addEventListener('click', displayTimer);
pause.addEventListener('click', stopTimer)
reset.addEventListener('click', resetTimer);

function cellClick(event) {
  topBlock.classList.remove('transpar');
  topBlockTimer.classList.add('transpar');
  topBlockTimerStart.classList.remove('transpar');
  var event = event || window.event;
  let el = event.srcElement || event.target;
  /*
   * получаем номер строки и столбца, на пересечении которых
   * расположена ячейка. Мы записали их ранее в её id ячейки.
   */
  let i = el.id.charAt(0);
  let j = el.id.charAt(2);
  const audio = document.querySelector(`audio[data-key="Digit1"]`); // for audio
  /*
   * Если пустая ячейка расположена в одном стобце или строке
   * с ячейкой, по которой кликнули, и расстояние между
   * этими ячейками 1, то меняем их содержимое местами
   */
  if (
    (i == ei && Math.abs(j - ej) == 1) ||
    (j == ej && Math.abs(i - ei) == 1)
  ) {
    event.target.innerHTML !== '' && audio.play(); // for audio
    audio.currentTime = 0;
    if (document.getElementById(ei + " " + ej).classList.contains('animate__bounceOut')) {
      document.getElementById(ei + " " + ej).classList.remove('animate__bounceOut')
    }
    document.getElementById(ei + " " + ej).classList.add('animate__bounceIn');
    document.getElementById(ei + ' ' + ej).innerHTML = el.innerHTML;
    if (imagex.classList.contains('img')) {
      if (size4.classList.contains('act')) {
        image4(el);
      }
      if (size3.classList.contains('act')) {
        image3(el);
      }
      if (size5.classList.contains('act')) {
        image5(el);
      }
      if (size6.classList.contains('act')) {
        image6(el);
      }
      if (size7.classList.contains('act')) {
        image7(el);
      }
      if (size8.classList.contains('act')) {
        image8(el);
      }
      event.target.innerHTML == '' && audio.play(); // for audio
      audio.currentTime = 0;
    }
    if (mix.classList.contains('img')) {
      if (size4.classList.contains('act')) {
        image4(el);
      }
      if (size3.classList.contains('act')) {
        image3(el);
      }
      if (size5.classList.contains('act')) {
        image5(el);
      }
      if (size6.classList.contains('act')) {
        image6(el);
      }
      if (size7.classList.contains('act')) {
        image7(el);
      }
      if (size8.classList.contains('act')) {
        image8(el);
      }
    }
    if (el.classList.contains('animate__bounceIn')) {
      el.classList.remove('animate__bounceIn')
    }
    el.classList.add('animate__bounceOut');
    el.innerHTML = '';
    count++;
    document.querySelector('.moves-count').innerHTML = count;
    //Запоминаем положение пустой ячейки
    ei = i;
    ej = j;
    let q = true;
    // Проверяем не в выигрышной ли комбинации находятся ячейки.
    function victoryFn() {
      let sizeGame = document.querySelectorAll("td").length ** 0.5;
      /* modal-window */
      modal.classList.add('mmm');
      topBlock.classList.add('transpar');
      topBlockTimer.classList.add('transpar');
      topBlockTimerStart.classList.remove('transpar');
      hours = document.querySelector('.hours').textContent;
      mins = document.querySelector('.mins').textContent;
      secs = document.querySelector('.secs').textContent;
      modal.innerHTML = `Cool! You solved the puzzle in ${hours} hours ${mins} mins ${secs} secs and ${count} moves`;
      stopTimer();
      linksNoActive(); // показать меню
      resume.style.pointerEvents = 'none';

      let counterArrLocal = localStorage.getItem('counterArr');
      let countLocal = localStorage.getItem('count0');
      let counterArr = [];
      let compareArr = [];
      let idx;
      if (counterArrLocal !== null) {
        compareArr = counterArrLocal.split(',').map(Number);
        compareArr.push(count);
        compareArr.sort((a, b) => a - b);
        idx = compareArr.indexOf(count);
      }

      /* функции перезаписи */
      function rewriting01() {
        let dateLocal0 = localStorage.getItem('date0');
        let monthLocal0 = localStorage.getItem('month0');
        let yearLocal0 = localStorage.getItem('year0');
        let countLocal0 = localStorage.getItem('count0');
        let hoursLocal0 = localStorage.getItem('hours0');
        let minsLocal0 = localStorage.getItem('mins0');
        let secsLocal0 = localStorage.getItem('secs0');
        let sizeLocal0 = localStorage.getItem('size0');
        localStorage.setItem('hours1', hoursLocal0);
        localStorage.setItem('mins1', minsLocal0);
        localStorage.setItem('secs1', secsLocal0);
        localStorage.setItem('count1', countLocal0);
        localStorage.setItem('date1', dateLocal0);
        localStorage.setItem('month1', monthLocal0);
        localStorage.setItem('year1', yearLocal0);
        localStorage.setItem(`counterArr`, counterArr);
        localStorage.setItem(`size1`, sizeLocal0);
      };
      function rewriting12() {
        let dateLocal1 = localStorage.getItem('date1');
        let monthLocal1 = localStorage.getItem('month1');
        let yearLocal1 = localStorage.getItem('year1');
        let countLocal1 = localStorage.getItem('count1');
        let hoursLocal1 = localStorage.getItem('hours1');
        let minsLocal1 = localStorage.getItem('mins1');
        let secsLocal1 = localStorage.getItem('secs1');
        let sizeLocal1 = localStorage.getItem('size1');
        localStorage.setItem('hours2', hoursLocal1);
        localStorage.setItem('mins2', minsLocal1);
        localStorage.setItem('secs2', secsLocal1);
        localStorage.setItem('count2', countLocal1);
        localStorage.setItem('date2', dateLocal1);
        localStorage.setItem('month2', monthLocal1);
        localStorage.setItem('year2', yearLocal1);
        localStorage.setItem(`counterArr`, counterArr);
        localStorage.setItem(`size2`, sizeLocal1);
      };
      function rewriting23() {
        let dateLocal2 = localStorage.getItem('date2');
        let monthLocal2 = localStorage.getItem('month2');
        let yearLocal2 = localStorage.getItem('year2');
        let countLocal2 = localStorage.getItem('count2');
        let hoursLocal2 = localStorage.getItem('hours2');
        let minsLocal2 = localStorage.getItem('mins2');
        let secsLocal2 = localStorage.getItem('secs2');
        let sizeLocal2 = localStorage.getItem('size2');
        localStorage.setItem('hours3', hoursLocal2);
        localStorage.setItem('mins3', minsLocal2);
        localStorage.setItem('secs3', secsLocal2);
        localStorage.setItem('count3', countLocal2);
        localStorage.setItem('date3', dateLocal2);
        localStorage.setItem('month3', monthLocal2);
        localStorage.setItem('year3', yearLocal2);
        localStorage.setItem(`counterArr`, counterArr);
        localStorage.setItem(`size3`, sizeLocal2);
      };
      function rewriting34() {
        let dateLocal3 = localStorage.getItem('date3');
        let monthLocal3 = localStorage.getItem('month3');
        let yearLocal3 = localStorage.getItem('year3');
        let countLocal3 = localStorage.getItem('count3');
        let hoursLocal3 = localStorage.getItem('hours3');
        let minsLocal3 = localStorage.getItem('mins3');
        let secsLocal3 = localStorage.getItem('secs3');
        let sizeLocal3 = localStorage.getItem('size3');
        localStorage.setItem('hours4', hoursLocal3);
        localStorage.setItem('mins4', minsLocal3);
        localStorage.setItem('secs4', secsLocal3);
        localStorage.setItem('count4', countLocal3);
        localStorage.setItem('date4', dateLocal3);
        localStorage.setItem('month4', monthLocal3);
        localStorage.setItem('year4', yearLocal3);
        localStorage.setItem(`counterArr`, counterArr);
        localStorage.setItem(`size4`, sizeLocal3);
      };
      function rewriting45() {
        let dateLocal4 = localStorage.getItem('date4');
        let monthLocal4 = localStorage.getItem('month4');
        let yearLocal4 = localStorage.getItem('year4');
        let countLocal4 = localStorage.getItem('count4');
        let hoursLocal4 = localStorage.getItem('hours4');
        let minsLocal4 = localStorage.getItem('mins4');
        let secsLocal4 = localStorage.getItem('secs4');
        let sizeLocal4 = localStorage.getItem('secs4');
        localStorage.setItem('hours5', hoursLocal4);
        localStorage.setItem('mins5', minsLocal4);
        localStorage.setItem('secs5', secsLocal4);
        localStorage.setItem('count5', countLocal4);
        localStorage.setItem('date5', dateLocal4);
        localStorage.setItem('month5', monthLocal4);
        localStorage.setItem('year5', yearLocal4);
        localStorage.setItem(`counterArr`, counterArr);
        localStorage.setItem(`size5`, sizeLocal4);
      };
      function rewriting56() {
        let dateLocal5 = localStorage.getItem('date5');
        let monthLocal5 = localStorage.getItem('month5');
        let yearLocal5 = localStorage.getItem('year5');
        let countLocal5 = localStorage.getItem('count5');
        let hoursLocal5 = localStorage.getItem('hours5');
        let minsLocal5 = localStorage.getItem('mins5');
        let secsLocal5 = localStorage.getItem('secs5');
        let sizeLocal5 = localStorage.getItem('secs5');
        localStorage.setItem('hours6', hoursLocal5);
        localStorage.setItem('mins6', minsLocal5);
        localStorage.setItem('secs6', secsLocal5);
        localStorage.setItem('count6', countLocal5);
        localStorage.setItem('date6', dateLocal5);
        localStorage.setItem('month6', monthLocal5);
        localStorage.setItem('year6', yearLocal5);
        localStorage.setItem(`counterArr`, counterArr);
        localStorage.setItem(`size6`, sizeLocal5);
      };
      function rewriting67() {
        let dateLocal6 = localStorage.getItem('date6');
        let monthLocal6 = localStorage.getItem('month6');
        let yearLocal6 = localStorage.getItem('year6');
        let countLocal6 = localStorage.getItem('count6');
        let hoursLocal6 = localStorage.getItem('hours6');
        let minsLocal6 = localStorage.getItem('mins6');
        let secsLocal6 = localStorage.getItem('secs6');
        let sizeLocal6 = localStorage.getItem('secs6');
        localStorage.setItem('hours7', hoursLocal6);
        localStorage.setItem('mins7', minsLocal6);
        localStorage.setItem('secs7', secsLocal6);
        localStorage.setItem('count7', countLocal6);
        localStorage.setItem('date7', dateLocal6);
        localStorage.setItem('month7', monthLocal6);
        localStorage.setItem('year7', yearLocal6);
        localStorage.setItem(`counterArr`, counterArr);
        localStorage.setItem(`size7`, sizeLocal6);
      };
      function rewriting78() {
        let dateLocal7 = localStorage.getItem('date7');
        let monthLocal7 = localStorage.getItem('month7');
        let yearLocal7 = localStorage.getItem('year7');
        let countLocal7 = localStorage.getItem('count7');
        let hoursLocal7 = localStorage.getItem('hours7');
        let minsLocal7 = localStorage.getItem('mins7');
        let secsLocal7 = localStorage.getItem('secs7');
        let sizeLocal7 = localStorage.getItem('secs7');
        localStorage.setItem('hours8', hoursLocal7);
        localStorage.setItem('mins8', minsLocal7);
        localStorage.setItem('secs8', secsLocal7);
        localStorage.setItem('count8', countLocal7);
        localStorage.setItem('date8', dateLocal7);
        localStorage.setItem('month8', monthLocal7);
        localStorage.setItem('year8', yearLocal7);
        localStorage.setItem(`counterArr`, counterArr);
        localStorage.setItem(`size8`, sizeLocal7);
      };
      function rewriting89() {
        let dateLocal8 = localStorage.getItem('date8');
        let monthLocal8 = localStorage.getItem('month8');
        let yearLocal8 = localStorage.getItem('year8');
        let countLocal8 = localStorage.getItem('count8');
        let hoursLocal8 = localStorage.getItem('hours8');
        let minsLocal8 = localStorage.getItem('mins8');
        let secsLocal8 = localStorage.getItem('secs8');
        let sizeLocal8 = localStorage.getItem('secs8');
        localStorage.setItem('hours9', hoursLocal8);
        localStorage.setItem('mins9', minsLocal8);
        localStorage.setItem('secs9', secsLocal8);
        localStorage.setItem('count9', countLocal8);
        localStorage.setItem('date9', dateLocal8);
        localStorage.setItem('month9', monthLocal8);
        localStorage.setItem('year9', yearLocal8);
        localStorage.setItem(`counterArr`, counterArr);
        localStorage.setItem(`size9`, sizeLocal8);
      };

      function writeDown0() {
        if (counterArrLocal === null) {
          counterArr.push(count);
        } else {
          counterArr.push(counterArrLocal);
          counterArr.push(count);
        }
        function recordin() {
          localStorage.setItem('hours0', hours);
          localStorage.setItem('mins0', mins);
          localStorage.setItem('secs0', secs);
          localStorage.setItem('count0', count);
          localStorage.setItem('date0', dateNumber);
          localStorage.setItem('month0', monthStr);
          localStorage.setItem('year0', yearNumber);
          localStorage.setItem(`counterArr`, counterArr);
          localStorage.setItem(`size0`, sizeGame);
        };

        if (localStorage.getItem('count0') === null) {
          recordin();
        } else if (localStorage.getItem('count1') === null) {
          rewriting01();
          recordin();
        } else if (localStorage.getItem('count2') === null) {
          rewriting12();
          rewriting01();
          recordin();
        } else if (localStorage.getItem('count3') === null) {
          rewriting23();
          rewriting12();
          rewriting01();
          recordin();
        } else if (localStorage.getItem('count4') === null) {
          rewriting34();
          rewriting23();
          rewriting12();
          rewriting01();
          recordin();
        } else if (localStorage.getItem('count5') === null) {
          rewriting45();
          rewriting34();
          rewriting23();
          rewriting12();
          rewriting01();
          recordin();
        } else if (localStorage.getItem('count6') === null) {
          rewriting56();
          rewriting45();
          rewriting34();
          rewriting23();
          rewriting12();
          rewriting01();
          recordin();
        } else if (localStorage.getItem('count7') === null) {
          rewriting67();
          rewriting56();
          rewriting45();
          rewriting34();
          rewriting23();
          rewriting12();
          rewriting01();
          recordin();
        } else if (localStorage.getItem('count8') === null) {
          rewriting78();
          rewriting67();
          rewriting56();
          rewriting45();
          rewriting34();
          rewriting23();
          rewriting12();
          rewriting01();
          recordin();
        } else {
          rewriting89();
          rewriting78();
          rewriting67();
          rewriting56();
          rewriting45();
          rewriting34();
          rewriting23();
          rewriting12();
          rewriting01();
          recordin();
        }
      };

      function writeDown1() {
        if (counterArrLocal === null) {
          counterArr.push(count);
        } else {
          counterArr.push(counterArrLocal);
          counterArr.push(count);
        }
        function recordin() {
          localStorage.setItem('hours1', hours);
          localStorage.setItem('mins1', mins);
          localStorage.setItem('secs1', secs);
          localStorage.setItem('count1', count);
          localStorage.setItem('date1', dateNumber);
          localStorage.setItem('month1', monthStr);
          localStorage.setItem('year1', yearNumber);
          localStorage.setItem(`counterArr`, counterArr);
          localStorage.setItem(`size1`, sizeGame);
        };

        if (localStorage.getItem('count1') === null) {
          recordin();
        } else if (localStorage.getItem('count2') === null) {
          rewriting12();
          recordin();
        } else if (localStorage.getItem('count3') === null) {
          rewriting23();
          rewriting12();
          recordin();
        } else if (localStorage.getItem('count4') === null) {
          rewriting34();
          rewriting23();
          rewriting12();
          recordin();
        } else if (localStorage.getItem('count5') === null) {
          rewriting45();
          rewriting34();
          rewriting23();
          rewriting12();
          recordin();
        } else if (localStorage.getItem('count6') === null) {
          rewriting56();
          rewriting45();
          rewriting34();
          rewriting23();
          rewriting12();
          recordin();
        } else if (localStorage.getItem('count7') === null) {
          rewriting67();
          rewriting56();
          rewriting45();
          rewriting34();
          rewriting23();
          rewriting12();
          recordin();
        } else if (localStorage.getItem('count8') === null) {
          rewriting78();
          rewriting67();
          rewriting56();
          rewriting45();
          rewriting34();
          rewriting23();
          rewriting12();
          recordin();
        } else {
          rewriting89();
          rewriting78();
          rewriting67();
          rewriting56();
          rewriting45();
          rewriting34();
          rewriting23();
          rewriting12();
          recordin();
        }
      };

      function writeDown2() {
        if (counterArrLocal === null) {
          counterArr.push(count);
        } else {
          counterArr.push(counterArrLocal);
          counterArr.push(count);
        }
        function recordin() {
          localStorage.setItem('hours2', hours);
          localStorage.setItem('mins2', mins);
          localStorage.setItem('secs2', secs);
          localStorage.setItem('count2', count);
          localStorage.setItem('date2', dateNumber);
          localStorage.setItem('month2', monthStr);
          localStorage.setItem('year2', yearNumber);
          localStorage.setItem(`counterArr`, counterArr);
          localStorage.setItem(`size2`, sizeGame);
        };

        if (localStorage.getItem('count2') === null) {
          recordin();
        } else if (localStorage.getItem('count3') === null) {
          rewriting23();
          recordin();
        } else if (localStorage.getItem('count4') === null) {
          rewriting34();
          rewriting23();
          recordin();
        } else if (localStorage.getItem('count5') === null) {
          rewriting45();
          rewriting34();
          rewriting23();
          recordin();
        } else if (localStorage.getItem('count6') === null) {
          rewriting56();
          rewriting45();
          rewriting34();
          rewriting23();
          recordin();
        } else if (localStorage.getItem('count7') === null) {
          rewriting67();
          rewriting56();
          rewriting45();
          rewriting34();
          rewriting23();
          recordin();
        } else if (localStorage.getItem('count8') === null) {
          rewriting78();
          rewriting67();
          rewriting56();
          rewriting45();
          rewriting34();
          rewriting23();
          recordin();
        } else {
          rewriting89();
          rewriting78();
          rewriting67();
          rewriting56();
          rewriting45();
          rewriting34();
          rewriting23();
          recordin();
        }
      };

      function writeDown3() {
        if (counterArrLocal === null) {
          counterArr.push(count);
        } else {
          counterArr.push(counterArrLocal);
          counterArr.push(count);
        }
        function recordin() {
          localStorage.setItem('hours3', hours);
          localStorage.setItem('mins3', mins);
          localStorage.setItem('secs3', secs);
          localStorage.setItem('count3', count);
          localStorage.setItem('date3', dateNumber);
          localStorage.setItem('month3', monthStr);
          localStorage.setItem('year3', yearNumber);
          localStorage.setItem(`counterArr`, counterArr);
          localStorage.setItem(`size3`, sizeGame);
        };

        if (localStorage.getItem('count3') === null) {
          recordin();
        } else if (localStorage.getItem('count4') === null) {
          rewriting34();
          recordin();
        } else if (localStorage.getItem('count5') === null) {
          rewriting45();
          rewriting34();
          recordin();
        } else if (localStorage.getItem('count6') === null) {
          rewriting56();
          rewriting45();
          rewriting34();
          recordin();
        } else if (localStorage.getItem('count7') === null) {
          rewriting67();
          rewriting56();
          rewriting45();
          rewriting34();
          recordin();
        } else if (localStorage.getItem('count8') === null) {
          rewriting78();
          rewriting67();
          rewriting56();
          rewriting45();
          rewriting34();
          recordin();
        } else {
          rewriting89();
          rewriting78();
          rewriting67();
          rewriting56();
          rewriting45();
          rewriting34();
          recordin();
        }
      };

      function writeDown4() {
        if (counterArrLocal === null) {
          counterArr.push(count);
        } else {
          counterArr.push(counterArrLocal);
          counterArr.push(count);
        }
        function recordin() {
          localStorage.setItem('hours4', hours);
          localStorage.setItem('mins4', mins);
          localStorage.setItem('secs4', secs);
          localStorage.setItem('count4', count);
          localStorage.setItem('date4', dateNumber);
          localStorage.setItem('month4', monthStr);
          localStorage.setItem('year4', yearNumber);
          localStorage.setItem(`counterArr`, counterArr);
          localStorage.setItem(`size4`, sizeGame);
        };

        if (localStorage.getItem('count4') === null) {
          recordin();
        } else if (localStorage.getItem('count5') === null) {
          rewriting45();
          recordin();
        } else if (localStorage.getItem('count6') === null) {
          rewriting56();
          rewriting45();
          recordin();
        } else if (localStorage.getItem('count7') === null) {
          rewriting67();
          rewriting56();
          rewriting45();
          recordin();
        } else if (localStorage.getItem('count8') === null) {
          rewriting78();
          rewriting67();
          rewriting56();
          rewriting45();
          recordin();
        } else {
          rewriting89();
          rewriting78();
          rewriting67();
          rewriting56();
          rewriting45();
          recordin();
        }
      };

      function writeDown5() {
        if (counterArrLocal === null) {
          counterArr.push(count);
        } else {
          counterArr.push(counterArrLocal);
          counterArr.push(count);
        }
        function recordin() {
          localStorage.setItem('hours5', hours);
          localStorage.setItem('mins5', mins);
          localStorage.setItem('secs5', secs);
          localStorage.setItem('count5', count);
          localStorage.setItem('date5', dateNumber);
          localStorage.setItem('month5', monthStr);
          localStorage.setItem('year5', yearNumber);
          localStorage.setItem(`counterArr`, counterArr);
          localStorage.setItem(`size5`, sizeGame);
        };

        if (localStorage.getItem('count5') === null) {
          recordin();
        } else if (localStorage.getItem('count6') === null) {
          rewriting56();
          recordin();
        } else if (localStorage.getItem('count7') === null) {
          rewriting67();
          rewriting56();
          recordin();
        } else if (localStorage.getItem('count8') === null) {
          rewriting78();
          rewriting67();
          rewriting56();
          recordin();
        } else {
          rewriting89();
          rewriting78();
          rewriting67();
          rewriting56();
          recordin();
        }
      };

      function writeDown6() {
        if (counterArrLocal === null) {
          counterArr.push(count);
        } else {
          counterArr.push(counterArrLocal);
          counterArr.push(count);
        }
        function recordin() {
          localStorage.setItem('hours6', hours);
          localStorage.setItem('mins6', mins);
          localStorage.setItem('secs6', secs);
          localStorage.setItem('count6', count);
          localStorage.setItem('date6', dateNumber);
          localStorage.setItem('month6', monthStr);
          localStorage.setItem('year6', yearNumber);
          localStorage.setItem(`counterArr`, counterArr);
          localStorage.setItem(`size6`, sizeGame);
        };

        if (localStorage.getItem('count6') === null) {
          recordin();
        } else if (localStorage.getItem('count7') === null) {
          rewriting67();
          recordin();
        } else if (localStorage.getItem('count8') === null) {
          rewriting78();
          rewriting67();
          recordin();
        } else {
          rewriting89();
          rewriting78();
          rewriting67();
          recordin();
        }
      };

      function writeDown7() {
        if (counterArrLocal === null) {
          counterArr.push(count);
        } else {
          counterArr.push(counterArrLocal);
          counterArr.push(count);
        }
        function recordin() {
          localStorage.setItem('hours7', hours);
          localStorage.setItem('mins7', mins);
          localStorage.setItem('secs7', secs);
          localStorage.setItem('count7', count);
          localStorage.setItem('date7', dateNumber);
          localStorage.setItem('month7', monthStr);
          localStorage.setItem('year7', yearNumber);
          localStorage.setItem(`counterArr`, counterArr);
          localStorage.setItem(`size7`, sizeGame);
        };

        if (localStorage.getItem('count7') === null) {
          recordin();
        } else if (localStorage.getItem('count8') === null) {
          rewriting78();
          recordin();
        } else {
          rewriting89();
          rewriting78();
          recordin();
        }
      };

      function writeDown8() {
        if (counterArrLocal === null) {
          counterArr.push(count);
        } else {
          counterArr.push(counterArrLocal);
          counterArr.push(count);
        }
        function recordin() {
          localStorage.setItem('hours8', hours);
          localStorage.setItem('mins8', mins);
          localStorage.setItem('secs8', secs);
          localStorage.setItem('count8', count);
          localStorage.setItem('date8', dateNumber);
          localStorage.setItem('month8', monthStr);
          localStorage.setItem('year8', yearNumber);
          localStorage.setItem(`counterArr`, counterArr);
          localStorage.setItem(`size8`, sizeGame);
        };

        if (localStorage.getItem('count8') === null) {
          recordin();
        } else {
          rewriting89();
          recordin();
        }
      };

      function writeDown9() {
        if (counterArrLocal === null) {
          counterArr.push(count);
        } else {
          counterArr.push(counterArrLocal);
          counterArr.push(count);
        }
        function recordin() {
          localStorage.setItem('hours9', hours);
          localStorage.setItem('mins9', mins);
          localStorage.setItem('secs9', secs);
          localStorage.setItem('count9', count);
          localStorage.setItem('date9', dateNumber);
          localStorage.setItem('month9', monthStr);
          localStorage.setItem('year9', yearNumber);
          localStorage.setItem(`counterArr`, counterArr);
          localStorage.setItem(`size9`, sizeGame);
        };
        recordin();
      };

      if (countLocal === null) {
        writeDown0();
      } else if (idx === 0) {
        writeDown0();
      } else if (idx === 1) {
        writeDown1();
      } else if (idx === 2) {
        writeDown2();
      } else if (idx === 3) {
        writeDown3();
      } else if (idx === 4) {
        writeDown4();
      } else if (idx === 5) {
        writeDown5();
      } else if (idx === 6) {
        writeDown6();
      } else if (idx === 7) {
        writeDown7();
      } else if (idx === 8) {
        writeDown8();
      } else if (idx === 9) {
        writeDown9();
      }
    }
    if (document.querySelector("#\\30 \\ 0").innerText.length > 0) {
      if (size3.classList.contains('act')) {
        for (i = 0; i < 3; ++i)
          for (j = 0; j < 3; ++j)
            if (i + j != 4 && document.getElementById(i + " " + j).innerHTML != i * 3 + j + 1) {
              q = false;
              break;
            }
        if (q) victoryFn();
      }
      if (size4.classList.contains('act')) {
        for (i = 0; i < 4; ++i)
          for (j = 0; j < 4; ++j)
            if (i + j != 6 && document.getElementById(i + " " + j).innerHTML != i * 4 + j + 1) {
              q = false;
              break;
            }
        if (q) victoryFn();
      }
      if (size5.classList.contains('act')) {
        for (i = 0; i < 5; ++i)
          for (j = 0; j < 5; ++j)
            if (i + j != 8 && document.getElementById(i + " " + j).innerHTML != i * 5 + j + 1) {
              q = false;
              break;
            }
        if (q) victoryFn();
      }
      if (size6.classList.contains('act')) {
        for (i = 0; i < 6; ++i)
          for (j = 0; j < 6; ++j)
            if (i + j != 10 && document.getElementById(i + " " + j).innerHTML != i * 6 + j + 1) {
              q = false;
              break;
            }
        if (q) victoryFn();
      }
      if (size7.classList.contains('act')) {
        for (i = 0; i < 7; ++i)
          for (j = 0; j < 7; ++j)
            if (i + j != 12 && document.getElementById(i + " " + j).innerHTML != i * 7 + j + 1) {
              q = false;
              break;
            }
        if (q) victoryFn();
      }
      if (size8.classList.contains('act')) {
        for (i = 0; i < 8; ++i)
          for (j = 0; j < 8; ++j)
            if (i + j != 14 && document.getElementById(i + " " + j).innerHTML != i * 8 + j + 1) {
              q = false;
              break;
            }
        if (q) victoryFn();
      }
    } else {
      if (size3.classList.contains('act')) {
        for (i = 0; i < 3; ++i)
          for (j = 0; j < 3; ++j)
            if (document.querySelector("#\\30 \\ 0").classList.contains('b31') &&
              document.querySelector("#\\30 \\ 1").classList.contains('b32') &&
              document.querySelector("#\\30 \\ 2").classList.contains('b33') &&
              document.querySelector("#\\30 \\ 3").classList.contains('b34') &&
              document.querySelector("#\\31 \\ 0").classList.contains('b35') &&
              document.querySelector("#\\31 \\ 1").classList.contains('b36') &&
              document.querySelector("#\\31 \\ 2").classList.contains('b37') &&
              document.querySelector("#\\31 \\ 3").classList.contains('b38') &&
              document.querySelector("#\\32 \\ 0").classList.contains('b39')) {
              q = false;
              break;
            }
        if (!q) victoryFn();
      }
      if (size4.classList.contains('act')) {
        for (i = 0; i < 4; ++i)
          for (j = 0; j < 4; ++j)
            if (document.querySelector("#\\30 \\ 0").classList.contains('b41') &&
              document.querySelector("#\\30 \\ 1").classList.contains('b42') &&
              document.querySelector("#\\30 \\ 2").classList.contains('b43') &&
              document.querySelector("#\\30 \\ 3").classList.contains('b44') &&
              document.querySelector("#\\31 \\ 0").classList.contains('b45') &&
              document.querySelector("#\\31 \\ 1").classList.contains('b46') &&
              document.querySelector("#\\31 \\ 2").classList.contains('b47') &&
              document.querySelector("#\\31 \\ 3").classList.contains('b48') &&
              document.querySelector("#\\32 \\ 0").classList.contains('b49') &&
              document.querySelector("#\\32 \\ 1").classList.contains('b410') &&
              document.querySelector("#\\32 \\ 2").classList.contains('b411') &&
              document.querySelector("#\\32 \\ 3").classList.contains('b412') &&
              document.querySelector("#\\33 \\ 0").classList.contains('b413') &&
              document.querySelector("#\\33 \\ 1").classList.contains('b414') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b415')) {
              q = false;
              break;
            }
        if (!q) victoryFn();
      }
      if (size5.classList.contains('act')) {
        for (i = 0; i < 5; ++i)
          for (j = 0; j < 5; ++j)
            if (document.querySelector("#\\30 \\ 0").classList.contains('b51') &&
              document.querySelector("#\\30 \\ 1").classList.contains('b52') &&
              document.querySelector("#\\30 \\ 2").classList.contains('b53') &&
              document.querySelector("#\\30 \\ 3").classList.contains('b54') &&
              document.querySelector("#\\31 \\ 0").classList.contains('b55') &&
              document.querySelector("#\\31 \\ 1").classList.contains('b56') &&
              document.querySelector("#\\31 \\ 2").classList.contains('b57') &&
              document.querySelector("#\\31 \\ 3").classList.contains('b58') &&
              document.querySelector("#\\32 \\ 0").classList.contains('b59') &&
              document.querySelector("#\\32 \\ 1").classList.contains('b510') &&
              document.querySelector("#\\32 \\ 2").classList.contains('b511') &&
              document.querySelector("#\\32 \\ 3").classList.contains('b512') &&
              document.querySelector("#\\33 \\ 0").classList.contains('b513') &&
              document.querySelector("#\\33 \\ 1").classList.contains('b514') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b515') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b516') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b517') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b518') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b519') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b520') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b521') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b522') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b523') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b524') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b525')) {
              q = false;
              break;
            }
        if (!q) victoryFn();
      }
      if (size6.classList.contains('act')) {
        for (i = 0; i < 6; ++i)
          for (j = 0; j < 6; ++j)
            if (document.querySelector("#\\30 \\ 0").classList.contains('b61') &&
              document.querySelector("#\\30 \\ 1").classList.contains('b62') &&
              document.querySelector("#\\30 \\ 2").classList.contains('b63') &&
              document.querySelector("#\\30 \\ 3").classList.contains('b64') &&
              document.querySelector("#\\31 \\ 0").classList.contains('b65') &&
              document.querySelector("#\\31 \\ 1").classList.contains('b66') &&
              document.querySelector("#\\31 \\ 2").classList.contains('b67') &&
              document.querySelector("#\\31 \\ 3").classList.contains('b68') &&
              document.querySelector("#\\32 \\ 0").classList.contains('b69') &&
              document.querySelector("#\\32 \\ 1").classList.contains('b610') &&
              document.querySelector("#\\32 \\ 2").classList.contains('b611') &&
              document.querySelector("#\\32 \\ 3").classList.contains('b612') &&
              document.querySelector("#\\33 \\ 0").classList.contains('b613') &&
              document.querySelector("#\\33 \\ 1").classList.contains('b614') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b615') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b616') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b617') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b618') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b619') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b620') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b621') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b622') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b623') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b624') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b625') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b626') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b627') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b628') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b629') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b630') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b631') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b632') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b633') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b634') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b635') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b636')) {
              q = false;
              break;
            }
        if (!q) victoryFn();
      }
      if (size7.classList.contains('act')) {
        for (i = 0; i < 7; ++i)
          for (j = 0; j < 7; ++j)
            if (document.querySelector("#\\30 \\ 0").classList.contains('b71') &&
              document.querySelector("#\\30 \\ 1").classList.contains('b72') &&
              document.querySelector("#\\30 \\ 2").classList.contains('b73') &&
              document.querySelector("#\\30 \\ 3").classList.contains('b74') &&
              document.querySelector("#\\31 \\ 0").classList.contains('b75') &&
              document.querySelector("#\\31 \\ 1").classList.contains('b76') &&
              document.querySelector("#\\31 \\ 2").classList.contains('b77') &&
              document.querySelector("#\\31 \\ 3").classList.contains('b78') &&
              document.querySelector("#\\32 \\ 0").classList.contains('b79') &&
              document.querySelector("#\\32 \\ 1").classList.contains('b710') &&
              document.querySelector("#\\32 \\ 2").classList.contains('b711') &&
              document.querySelector("#\\32 \\ 3").classList.contains('b712') &&
              document.querySelector("#\\33 \\ 0").classList.contains('b713') &&
              document.querySelector("#\\33 \\ 1").classList.contains('b714') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b715') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b716') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b717') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b718') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b719') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b720') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b721') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b722') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b723') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b724') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b725') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b726') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b727') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b728') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b729') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b730') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b731') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b732') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b733') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b734') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b735') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b736') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b737') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b738') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b739') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b740') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b741') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b742') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b743') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b744') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b745') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b746') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b747') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b748') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b749')) {
              q = false;
              break;
            }
        if (!q) victoryFn();
      }
      if (size8.classList.contains('act')) {
        for (i = 0; i < 8; ++i)
          for (j = 0; j < 8; ++j)
            if (document.querySelector("#\\30 \\ 0").classList.contains('b81') &&
              document.querySelector("#\\30 \\ 1").classList.contains('b82') &&
              document.querySelector("#\\30 \\ 2").classList.contains('b83') &&
              document.querySelector("#\\30 \\ 3").classList.contains('b84') &&
              document.querySelector("#\\31 \\ 0").classList.contains('b85') &&
              document.querySelector("#\\31 \\ 1").classList.contains('b86') &&
              document.querySelector("#\\31 \\ 2").classList.contains('b87') &&
              document.querySelector("#\\31 \\ 3").classList.contains('b88') &&
              document.querySelector("#\\32 \\ 0").classList.contains('b89') &&
              document.querySelector("#\\32 \\ 1").classList.contains('b810') &&
              document.querySelector("#\\32 \\ 2").classList.contains('b811') &&
              document.querySelector("#\\32 \\ 3").classList.contains('b812') &&
              document.querySelector("#\\33 \\ 0").classList.contains('b813') &&
              document.querySelector("#\\33 \\ 1").classList.contains('b814') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b815') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b816') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b817') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b818') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b819') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b820') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b821') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b822') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b823') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b824') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b825') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b826') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b827') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b828') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b829') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b830') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b831') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b832') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b833') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b834') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b835') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b836') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b837') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b838') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b839') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b840') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b841') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b842') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b843') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b844') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b845') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b846') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b847') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b848') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b849') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b850') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b851') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b852') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b853') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b854') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b855') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b856') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b857') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b858') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b859') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b860') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b861') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b862') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b863') &&
              document.querySelector("#\\33 \\ 2").classList.contains('b864')) {
              q = false;
              break;
            }
        if (!q) victoryFn();
      }
    }
  }
  function image3(e) {
    let s = 0;
    if (e.classList.contains('b31')) {
      s = 1;
    } else if (e.classList.contains('b32')) {
      s = 2;
    } else if (e.classList.contains('b33')) {
      s = 3;
    } else if (e.classList.contains('b34')) {
      s = 4;
    } else if (e.classList.contains('b35')) {
      s = 5;
    } else if (e.classList.contains('b36')) {
      s = 6;
    } else if (e.classList.contains('b37')) {
      s = 7;
    } else if (e.classList.contains('b38')) {
      s = 8;
    } else if (e.classList.contains('b39')) {
      s = 9;
    } else if (e.classList.contains('bnone')) {
      s = none;
    }
    document.getElementById(ei + " " + ej).className = `b3${s}`;
    e.className = `bnone`;
    document.getElementById(ei + " " + ej).classList.add('animate__bounceIn');
    e.classList.add('animate__animated');
    if (e.classList.contains('animate__bounceIn')) {
      e.classList.remove('animate__bounceIn')
    }
  }
  function image4(e) {
    let s = 0;
    if (e.classList.contains('b41')) {
      s = 1;
    } else if (e.classList.contains('b42')) {
      s = 2;
    } else if (e.classList.contains('b43')) {
      s = 3;
    } else if (e.classList.contains('b44')) {
      s = 4;
    } else if (e.classList.contains('b45')) {
      s = 5;
    } else if (e.classList.contains('b46')) {
      s = 6;
    } else if (e.classList.contains('b47')) {
      s = 7;
    } else if (e.classList.contains('b48')) {
      s = 8;
    } else if (e.classList.contains('b49')) {
      s = 9;
    } else if (e.classList.contains('b410')) {
      s = 10;
    } else if (e.classList.contains('b411')) {
      s = 11;
    } else if (e.classList.contains('b412')) {
      s = 12;
    } else if (e.classList.contains('b413')) {
      s = 13;
    } else if (e.classList.contains('b414')) {
      s = 14;
    } else if (e.classList.contains('b415')) {
      s = 15;
    } else if (e.classList.contains('b416')) {
      s = 16;
    } else if (e.classList.contains('bnone')) {
      s = none;
    }
    document.getElementById(ei + " " + ej).className = `b4${s}`;
    e.className = `bnone`;
    document.getElementById(ei + " " + ej).classList.add('animate__bounceIn');
    e.classList.add('animate__animated');
    if (e.classList.contains('animate__bounceIn')) {
      e.classList.remove('animate__bounceIn')
    }
  }
  function image5(e) {
    let s = 0;
    if (e.classList.contains('b51')) {
      s = 1;
    } else if (e.classList.contains('b52')) {
      s = 2;
    } else if (e.classList.contains('b53')) {
      s = 3;
    } else if (e.classList.contains('b54')) {
      s = 4;
    } else if (e.classList.contains('b55')) {
      s = 5;
    } else if (e.classList.contains('b56')) {
      s = 6;
    } else if (e.classList.contains('b57')) {
      s = 7;
    } else if (e.classList.contains('b58')) {
      s = 8;
    } else if (e.classList.contains('b59')) {
      s = 9;
    } else if (e.classList.contains('b510')) {
      s = 10;
    } else if (e.classList.contains('b511')) {
      s = 11;
    } else if (e.classList.contains('b512')) {
      s = 12;
    } else if (e.classList.contains('b513')) {
      s = 13;
    } else if (e.classList.contains('b514')) {
      s = 14;
    } else if (e.classList.contains('b515')) {
      s = 15;
    } else if (e.classList.contains('b516')) {
      s = 16;
    } else if (e.classList.contains('b517')) {
      s = 17;
    } else if (e.classList.contains('b518')) {
      s = 18;
    } else if (e.classList.contains('b519')) {
      s = 19;
    } else if (e.classList.contains('b520')) {
      s = 20;
    } else if (e.classList.contains('b521')) {
      s = 21;
    } else if (e.classList.contains('b522')) {
      s = 22;
    } else if (e.classList.contains('b523')) {
      s = 23;
    } else if (e.classList.contains('b524')) {
      s = 24;
    } else if (e.classList.contains('b525')) {
      s = 25;
    } else if (e.classList.contains('bnone')) {
      s = none;
    }
    document.getElementById(ei + " " + ej).className = `b5${s}`;
    e.className = `bnone`;
    document.getElementById(ei + " " + ej).classList.add('animate__bounceIn');
    e.classList.add('animate__animated');
    if (e.classList.contains('animate__bounceIn')) {
      e.classList.remove('animate__bounceIn')
    }
  }
  function image6(e) {
    let s = 0;
    if (e.classList.contains('b61')) {
      s = 1;
    } else if (e.classList.contains('b62')) {
      s = 2;
    } else if (e.classList.contains('b63')) {
      s = 3;
    } else if (e.classList.contains('b64')) {
      s = 4;
    } else if (e.classList.contains('b65')) {
      s = 5;
    } else if (e.classList.contains('b66')) {
      s = 6;
    } else if (e.classList.contains('b67')) {
      s = 7;
    } else if (e.classList.contains('b68')) {
      s = 8;
    } else if (e.classList.contains('b69')) {
      s = 9;
    } else if (e.classList.contains('b610')) {
      s = 10;
    } else if (e.classList.contains('b611')) {
      s = 11;
    } else if (e.classList.contains('b612')) {
      s = 12;
    } else if (e.classList.contains('b613')) {
      s = 13;
    } else if (e.classList.contains('b614')) {
      s = 14;
    } else if (e.classList.contains('b615')) {
      s = 15;
    } else if (e.classList.contains('b616')) {
      s = 16;
    } else if (e.classList.contains('b617')) {
      s = 17;
    } else if (e.classList.contains('b618')) {
      s = 18;
    } else if (e.classList.contains('b619')) {
      s = 19;
    } else if (e.classList.contains('b620')) {
      s = 20;
    } else if (e.classList.contains('b621')) {
      s = 21;
    } else if (e.classList.contains('b622')) {
      s = 22;
    } else if (e.classList.contains('b623')) {
      s = 23;
    } else if (e.classList.contains('b624')) {
      s = 24;
    } else if (e.classList.contains('b625')) {
      s = 25;
    } else if (e.classList.contains('b626')) {
      s = 26;
    } else if (e.classList.contains('b627')) {
      s = 27;
    } else if (e.classList.contains('b628')) {
      s = 28;
    } else if (e.classList.contains('b629')) {
      s = 29;
    } else if (e.classList.contains('b630')) {
      s = 30;
    } else if (e.classList.contains('b631')) {
      s = 31;
    } else if (e.classList.contains('b632')) {
      s = 32;
    } else if (e.classList.contains('b633')) {
      s = 33;
    } else if (e.classList.contains('b634')) {
      s = 34;
    } else if (e.classList.contains('b635')) {
      s = 35;
    } else if (e.classList.contains('b636')) {
      s = 36;
    } else if (e.classList.contains('bnone')) {
      s = none;
    }
    document.getElementById(ei + " " + ej).className = `b6${s}`;
    e.className = `bnone`;
    document.getElementById(ei + " " + ej).classList.add('animate__bounceIn');
    e.classList.add('animate__animated');
    if (e.classList.contains('animate__bounceIn')) {
      e.classList.remove('animate__bounceIn')
    }
  }
  function image7(e) {
    let s = 0;
    if (e.classList.contains('b71')) {
      s = 1;
    } else if (e.classList.contains('b72')) {
      s = 2;
    } else if (e.classList.contains('b73')) {
      s = 3;
    } else if (e.classList.contains('b74')) {
      s = 4;
    } else if (e.classList.contains('b75')) {
      s = 5;
    } else if (e.classList.contains('b76')) {
      s = 6;
    } else if (e.classList.contains('b77')) {
      s = 7;
    } else if (e.classList.contains('b78')) {
      s = 8;
    } else if (e.classList.contains('b79')) {
      s = 9;
    } else if (e.classList.contains('b710')) {
      s = 10;
    } else if (e.classList.contains('b711')) {
      s = 11;
    } else if (e.classList.contains('b712')) {
      s = 12;
    } else if (e.classList.contains('b713')) {
      s = 13;
    } else if (e.classList.contains('b714')) {
      s = 14;
    } else if (e.classList.contains('b715')) {
      s = 15;
    } else if (e.classList.contains('b716')) {
      s = 16;
    } else if (e.classList.contains('b717')) {
      s = 17;
    } else if (e.classList.contains('b718')) {
      s = 18;
    } else if (e.classList.contains('b719')) {
      s = 19;
    } else if (e.classList.contains('b720')) {
      s = 20;
    } else if (e.classList.contains('b721')) {
      s = 21;
    } else if (e.classList.contains('b722')) {
      s = 22;
    } else if (e.classList.contains('b723')) {
      s = 23;
    } else if (e.classList.contains('b724')) {
      s = 24;
    } else if (e.classList.contains('b725')) {
      s = 25;
    } else if (e.classList.contains('b726')) {
      s = 26;
    } else if (e.classList.contains('b727')) {
      s = 27;
    } else if (e.classList.contains('b728')) {
      s = 28;
    } else if (e.classList.contains('b729')) {
      s = 29;
    } else if (e.classList.contains('b730')) {
      s = 30;
    } else if (e.classList.contains('b731')) {
      s = 31;
    } else if (e.classList.contains('b732')) {
      s = 32;
    } else if (e.classList.contains('b733')) {
      s = 33;
    } else if (e.classList.contains('b734')) {
      s = 34;
    } else if (e.classList.contains('b735')) {
      s = 35;
    } else if (e.classList.contains('b736')) {
      s = 36;
    } else if (e.classList.contains('b737')) {
      s = 37;
    } else if (e.classList.contains('b738')) {
      s = 38;
    } else if (e.classList.contains('b739')) {
      s = 39;
    } else if (e.classList.contains('b740')) {
      s = 40;
    } else if (e.classList.contains('b741')) {
      s = 41;
    } else if (e.classList.contains('b742')) {
      s = 42;
    } else if (e.classList.contains('b743')) {
      s = 43;
    } else if (e.classList.contains('b744')) {
      s = 44;
    } else if (e.classList.contains('b745')) {
      s = 45;
    } else if (e.classList.contains('b746')) {
      s = 46;
    } else if (e.classList.contains('b747')) {
      s = 47;
    } else if (e.classList.contains('b748')) {
      s = 48;
    } else if (e.classList.contains('b749')) {
      s = 49;
    } else if (e.classList.contains('bnone')) {
      s = none;
    }
    document.getElementById(ei + " " + ej).className = `b7${s}`;
    e.className = `bnone`;
    document.getElementById(ei + " " + ej).classList.add('animate__bounceIn');
    e.classList.add('animate__animated');
    if (e.classList.contains('animate__bounceIn')) {
      e.classList.remove('animate__bounceIn')
    }
  }
  function image8(e) {
    let s = 0;
    if (e.classList.contains('b81')) {
      s = 1;
    } else if (e.classList.contains('b82')) {
      s = 2;
    } else if (e.classList.contains('b83')) {
      s = 3;
    } else if (e.classList.contains('b84')) {
      s = 4;
    } else if (e.classList.contains('b85')) {
      s = 5;
    } else if (e.classList.contains('b86')) {
      s = 6;
    } else if (e.classList.contains('b87')) {
      s = 7;
    } else if (e.classList.contains('b88')) {
      s = 8;
    } else if (e.classList.contains('b89')) {
      s = 9;
    } else if (e.classList.contains('b810')) {
      s = 10;
    } else if (e.classList.contains('b811')) {
      s = 11;
    } else if (e.classList.contains('b812')) {
      s = 12;
    } else if (e.classList.contains('b813')) {
      s = 13;
    } else if (e.classList.contains('b814')) {
      s = 14;
    } else if (e.classList.contains('b815')) {
      s = 15;
    } else if (e.classList.contains('b816')) {
      s = 16;
    } else if (e.classList.contains('b817')) {
      s = 17;
    } else if (e.classList.contains('b818')) {
      s = 18;
    } else if (e.classList.contains('b819')) {
      s = 19;
    } else if (e.classList.contains('b820')) {
      s = 20;
    } else if (e.classList.contains('b821')) {
      s = 21;
    } else if (e.classList.contains('b822')) {
      s = 22;
    } else if (e.classList.contains('b823')) {
      s = 23;
    } else if (e.classList.contains('b824')) {
      s = 24;
    } else if (e.classList.contains('b825')) {
      s = 25;
    } else if (e.classList.contains('b826')) {
      s = 26;
    } else if (e.classList.contains('b827')) {
      s = 27;
    } else if (e.classList.contains('b828')) {
      s = 28;
    } else if (e.classList.contains('b829')) {
      s = 29;
    } else if (e.classList.contains('b830')) {
      s = 30;
    } else if (e.classList.contains('b831')) {
      s = 31;
    } else if (e.classList.contains('b832')) {
      s = 32;
    } else if (e.classList.contains('b833')) {
      s = 33;
    } else if (e.classList.contains('b834')) {
      s = 34;
    } else if (e.classList.contains('b835')) {
      s = 35;
    } else if (e.classList.contains('b836')) {
      s = 36;
    } else if (e.classList.contains('b837')) {
      s = 37;
    } else if (e.classList.contains('b838')) {
      s = 38;
    } else if (e.classList.contains('b839')) {
      s = 39;
    } else if (e.classList.contains('b840')) {
      s = 40;
    } else if (e.classList.contains('b841')) {
      s = 41;
    } else if (e.classList.contains('b842')) {
      s = 42;
    } else if (e.classList.contains('b843')) {
      s = 43;
    } else if (e.classList.contains('b844')) {
      s = 44;
    } else if (e.classList.contains('b845')) {
      s = 45;
    } else if (e.classList.contains('b846')) {
      s = 46;
    } else if (e.classList.contains('b847')) {
      s = 47;
    } else if (e.classList.contains('b848')) {
      s = 48;
    } else if (e.classList.contains('b849')) {
      s = 49;
    } else if (e.classList.contains('b850')) {
      s = 50;
    } else if (e.classList.contains('b851')) {
      s = 51;
    } else if (e.classList.contains('b852')) {
      s = 52;
    } else if (e.classList.contains('b853')) {
      s = 53;
    } else if (e.classList.contains('b854')) {
      s = 54;
    } else if (e.classList.contains('b855')) {
      s = 55;
    } else if (e.classList.contains('b856')) {
      s = 56;
    } else if (e.classList.contains('b857')) {
      s = 57;
    } else if (e.classList.contains('b858')) {
      s = 58;
    } else if (e.classList.contains('b859')) {
      s = 59;
    } else if (e.classList.contains('b860')) {
      s = 60;
    } else if (e.classList.contains('b861')) {
      s = 61;
    } else if (e.classList.contains('b862')) {
      s = 62;
    } else if (e.classList.contains('b863')) {
      s = 63;
    } else if (e.classList.contains('b864')) {
      s = 64;
    } else if (e.classList.contains('bnone')) {
      s = none;
    }
    document.getElementById(ei + " " + ej).className = `b8${s}`;
    e.className = `bnone`;
    document.getElementById(ei + " " + ej).classList.add('animate__bounceIn');
    e.classList.add('animate__animated');
    if (e.classList.contains('animate__bounceIn')) {
      e.classList.remove('animate__bounceIn')
    }
  }
}

function newGame() {
  count = 0;
  modal.classList.remove('mmm');
  topBlockTimer.classList.add('transpar');
  topBlockTimerStart.classList.remove('transpar');
  resume.style.pointerEvents = 'auto';
  document.querySelector('.moves-count').innerHTML = '0';
  // хранения номеров костяшек
  if (!size4.classList.contains('act')) {
    for (i = 0; i < 4; ++i) {
      arr[i] = [];
      for (j = 0; j < 4; ++j) {
        if (i + j != 6) {
          arr[i][j] = i * 4 + j + 1;
        } else {
          arr[i][j] = '';
        }
      }
    }

    // перемешивание
    ei = 3; //Запоминаем индексы элемента массива,
    ej = 3; // в котором записана пустая строка.
    for (i = 0; i < 1200; ++i) { // 1200 перемешиваний
      // Случайным образом выбираем число от 0 до 3
      switch (Math.round(3 * Math.random())) {
        /*
         * 0 соответсвует верхней соседней костяшке, 1 - правой  и т.д.
         * обратим внимание что обмен местами, например,
         * с верхней костяшкой возможен, если "пустое место"
         * не ноходится у верхней границы игрового поля. Аналогично и для
         * других соседних костяшек. При обмене изменяем переменные ei и ej.
         */
        case 0:
          if (ei != 0) swap(arr, ei, ej, --ei, ej);
          break; // up
        case 1:
          if (ej != 3) swap(arr, ei, ej, ei, ++ej);
          break; // right
        case 2:
          if (ei != 3) swap(arr, ei, ej, ++ei, ej);
          break; // down
        case 3:
          if (ej != 0) swap(arr, ei, ej, ei, --ej); // left
      }
    }


    let table = document.createElement('table'); // создаем таблицу
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (i = 0; i < 4; ++i) {
      let row = document.createElement('tr'); // создаем строки таблицы
      for (j = 0; j < 4; ++j) {
        let cell = document.createElement('td'); // создаем ячейки
        for (k = 0; k < 1; ++k) {
          let ce = document.createElement("div");
          ce.id = i + " " + j;
          ce.onclick = cellClick;
          ce.innerHTML = arr[i][j];
          if (imagex.classList.contains('img')) {
            if (size4.classList.contains('act')) {
              imageRendering4(ce)
            }
          }
          if (mix.classList.contains('img')) {
            if (size4.classList.contains('act')) {
              imageRenderingMix4(ce)
            }
          }
          cell.appendChild(ce);
          ce.classList.add('animate__animated');
        }
        row.appendChild(cell); // добавляем ячейчку в строку
      }
      tbody.appendChild(row); // добавляем строку в таблицу
    }
    dragAndDrop();
    if (box.childNodes.length == 1) {
      box.removeChild(box.firstChild); // удаляем страницу если она есть
    }
    box.appendChild(table); // Запихиваем в box table</div>
  }

  /*
   * Проверяем, нет ли у <div id="box"> дочернего эл-та.
   * То есть таблицы. Она уже будет на странице
   * если  функция newGame вызвана нажатием
   * кнопки "New game", а не при загрузки страницы.
   */

  if (size3.classList.contains('act')) {
    for (i = 0; i < 3; ++i) {
      arr[i] = [];
      for (j = 0; j < 3; ++j) {
        if (i + j != 4) {
          arr[i][j] = i * 3 + j + 1;
        } else {
          arr[i][j] = '';
        }
      }
    }

    // перемешивание
    ei = 2; //Запоминаем индексы элемента массива,
    ej = 2; // в котором записана пустая строка.
    for (i = 0; i < 1200; ++i) { // 1200 перемешиваний
      // Случайным образом выбираем число от 0 до 3
      switch (Math.round(3 * Math.random())) {
        /*
         * 0 соответсвует верхней соседней костяшке, 1 - правой  и т.д.
         * обратим внимание что обмен местами, например,
         * с верхней костяшкой возможен, если "пустое место"
         * не ноходится у верхней границы игрового поля. Аналогично и для
         * других соседних костяшек. При обмене изменяем переменные ei и ej.
         */
        case 0:
          if (ei != 0) swap(arr, ei, ej, --ei, ej);
          break; // up
        case 1:
          if (ej != 2) swap(arr, ei, ej, ei, ++ej);
          break; // right
        case 2:
          if (ei != 2) swap(arr, ei, ej, ++ei, ej);
          break; // down
        case 3:
          if (ej != 0) swap(arr, ei, ej, ei, --ej); // left
      }
    }

    // удаление старого tbody в table и создание нового
    var table1 = document.querySelector("#box > table")
    var tbody1 = document.querySelector("#box > table > tbody")
    table1.removeChild(tbody1)

    let table = document.createElement('table'); // создаем таблицу
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (i = 0; i < 3; ++i) {
      let row = document.createElement('tr'); // создаем строки таблицы
      for (j = 0; j < 3; ++j) {
        let cell = document.createElement('td'); // создаем ячейки
        for (k = 0; k < 1; ++k) {
          let ce = document.createElement("div");
          ce.id = i + " " + j;
          ce.onclick = cellClick;
          ce.innerHTML = arr[i][j];
          if (imagex.classList.contains('img')) {
            if (size3.classList.contains('act')) {
              imageRendering3(ce)
            }
          }
          if (mix.classList.contains('img')) {
            if (size3.classList.contains('act')) {
              imageRenderingMix3(ce)
            }
          }
          cell.appendChild(ce);
          ce.classList.add('animate__animated');
        }
        row.appendChild(cell); // добавляем ячейчку в строку
      }
      tbody.appendChild(row); // добавляем строку в таблицу
    }
    dragAndDrop();
    if (box.childNodes.length == 1) {
      box.removeChild(box.firstChild); // удаляем страницу если она есть
    }
    box.appendChild(table); // Запихиваем в box table</div>
  }

  if (size4.classList.contains('act')) {
    for (i = 0; i < 4; ++i) {
      arr[i] = [];
      for (j = 0; j < 4; ++j) {
        if (i + j != 6) {
          arr[i][j] = i * 4 + j + 1;
        } else {
          arr[i][j] = '';
        }
      }
    }

    // перемешивание
    ei = 3; //Запоминаем индексы элемента массива,
    ej = 3; // в котором записана пустая строка.
    for (i = 0; i < 1200; ++i) { // 1200 перемешиваний
      // Случайным образом выбираем число от 0 до 3
      switch (Math.round(3 * Math.random())) {
        /*
         * 0 соответсвует верхней соседней костяшке, 1 - правой  и т.д.
         * обратим внимание что обмен местами, например,
         * с верхней костяшкой возможен, если "пустое место"
         * не ноходится у верхней границы игрового поля. Аналогично и для
         * других соседних костяшек. При обмене изменяем переменные ei и ej.
         */
        case 0:
          if (ei != 0) swap(arr, ei, ej, --ei, ej);
          break; // up
        case 1:
          if (ej != 3) swap(arr, ei, ej, ei, ++ej);
          break; // right
        case 2:
          if (ei != 3) swap(arr, ei, ej, ++ei, ej);
          break; // down
        case 3:
          if (ej != 0) swap(arr, ei, ej, ei, --ej); // left
      }
    }

    // удаление старого tbody в table и создание нового
    var table1 = document.querySelector("#box > table")
    var tbody1 = document.querySelector("#box > table > tbody")
    table1.removeChild(tbody1)

    let table = document.createElement('table'); // создаем таблицу
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (i = 0; i < 4; ++i) {
      let row = document.createElement('tr'); // создаем строки таблицы
      for (j = 0; j < 4; ++j) {
        let cell = document.createElement('td'); // создаем ячейки
        for (k = 0; k < 1; ++k) {
          let ce = document.createElement("div");
          ce.id = i + " " + j;
          ce.onclick = cellClick;
          ce.innerHTML = arr[i][j];
          if (imagex.classList.contains('img')) {
            if (size4.classList.contains('act')) {
              imageRendering4(ce)
            }
          }
          if (mix.classList.contains('img')) {
            if (size4.classList.contains('act')) {
              imageRenderingMix4(ce)
            }
          }
          cell.appendChild(ce);
          ce.classList.add('animate__animated');
        }
        row.appendChild(cell); // добавляем ячейчку в строку
      }
      tbody.appendChild(row); // добавляем строку в таблицу
    }
    dragAndDrop();
    if (box.childNodes.length == 1) {
      box.removeChild(box.firstChild); // удаляем страницу если она есть
    }
    box.appendChild(table); // Запихиваем в box table</div>
  }

  if (size5.classList.contains('act')) {
    for (i = 0; i < 5; ++i) {
      arr[i] = [];
      for (j = 0; j < 5; ++j) {
        if (i + j != 8) {
          arr[i][j] = i * 5 + j + 1;
        } else {
          arr[i][j] = '';
        }
      }
    }

    // перемешивание
    ei = 4; //Запоминаем индексы элемента массива,
    ej = 4; // в котором записана пустая строка.
    for (i = 0; i < 1600; ++i) { // 1200 перемешиваний
      // Случайным образом выбираем число от 0 до 3
      switch (Math.round(4 * Math.random())) {
        /*
         * 0 соответсвует верхней соседней костяшке, 1 - правой  и т.д.
         * обратим внимание что обмен местами, например,
         * с верхней костяшкой возможен, если "пустое место"
         * не ноходится у верхней границы игрового поля. Аналогично и для
         * других соседних костяшек. При обмене изменяем переменные ei и ej.
         */
        case 0:
          if (ei != 0) swap(arr, ei, ej, --ei, ej);
          break; // up
        case 1:
          if (ej != 4) swap(arr, ei, ej, ei, ++ej);
          break; // right
        case 2:
          if (ei != 4) swap(arr, ei, ej, ++ei, ej);
          break; // down
        case 3:
          if (ej != 0) swap(arr, ei, ej, ei, --ej); // left
      }
    }

    // удаление старого tbody в table и создание нового
    var table1 = document.querySelector("#box > table")
    var tbody1 = document.querySelector("#box > table > tbody")
    table1.removeChild(tbody1)

    let table = document.createElement('table'); // создаем таблицу
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (i = 0; i < 5; ++i) {
      let row = document.createElement('tr'); // создаем строки таблицы
      for (j = 0; j < 5; ++j) {
        let cell = document.createElement('td'); // создаем ячейки
        for (k = 0; k < 1; ++k) {
          let ce = document.createElement("div");
          ce.id = i + " " + j;
          ce.onclick = cellClick;
          ce.innerHTML = arr[i][j];
          if (imagex.classList.contains('img')) {
            if (size5.classList.contains('act')) {
              imageRendering5(ce)
            }
          }
          if (mix.classList.contains('img')) {
            if (size5.classList.contains('act')) {
              imageRenderingMix5(ce)
            }
          }
          cell.appendChild(ce);
          ce.classList.add('animate__animated');
        }
        row.appendChild(cell); // добавляем ячейчку в строку
      }
      tbody.appendChild(row); // добавляем строку в таблицу
    }
    dragAndDrop();
    if (box.childNodes.length == 1) {
      box.removeChild(box.firstChild); // удаляем страницу если она есть
    }
    box.appendChild(table); // Запихиваем в box table</div>
  }

  if (size6.classList.contains('act')) {
    for (i = 0; i < 6; ++i) {
      arr[i] = [];
      for (j = 0; j < 6; ++j) {
        if (i + j != 10) {
          arr[i][j] = i * 6 + j + 1;
        } else {
          arr[i][j] = '';
        }
      }
    }

    // перемешивание
    ei = 5; //Запоминаем индексы элемента массива,
    ej = 5; // в котором записана пустая строка.
    for (i = 0; i < 4000; ++i) { // 1200 перемешиваний
      // Случайным образом выбираем число от 0 до 3
      switch (Math.round(5 * Math.random())) {
        /*
         * 0 соответсвует верхней соседней костяшке, 1 - правой  и т.д.
         * обратим внимание что обмен местами, например,
         * с верхней костяшкой возможен, если "пустое место"
         * не ноходится у верхней границы игрового поля. Аналогично и для
         * других соседних костяшек. При обмене изменяем переменные ei и ej.
         */
        case 0:
          if (ei != 0) swap(arr, ei, ej, --ei, ej);
          break; // up
        case 1:
          if (ej != 5) swap(arr, ei, ej, ei, ++ej);
          break; // right
        case 2:
          if (ei != 5) swap(arr, ei, ej, ++ei, ej);
          break; // down
        case 3:
          if (ej != 0) swap(arr, ei, ej, ei, --ej); // left
      }
    }

    // удаление старого tbody в table и создание нового
    var table1 = document.querySelector("#box > table")
    var tbody1 = document.querySelector("#box > table > tbody")
    table1.removeChild(tbody1)

    let table = document.createElement('table'); // создаем таблицу
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (i = 0; i < 6; ++i) {
      let row = document.createElement('tr'); // создаем строки таблицы
      for (j = 0; j < 6; ++j) {
        let cell = document.createElement('td'); // создаем ячейки
        for (k = 0; k < 1; ++k) {
          let ce = document.createElement("div");
          ce.id = i + " " + j;
          ce.onclick = cellClick;
          ce.innerHTML = arr[i][j];
          if (imagex.classList.contains('img')) {
            if (size6.classList.contains('act')) {
              imageRendering6(ce)
            }
          }
          if (mix.classList.contains('img')) {
            if (size6.classList.contains('act')) {
              imageRenderingMix6(ce)
            }
          }
          cell.appendChild(ce);
          ce.classList.add('animate__animated');
        }
        row.appendChild(cell); // добавляем ячейчку в строку
      }
      tbody.appendChild(row); // добавляем строку в таблицу
    }
    dragAndDrop();
    if (box.childNodes.length == 1) {
      box.removeChild(box.firstChild); // удаляем страницу если она есть
    }
    box.appendChild(table); // Запихиваем в box table</div>
  }

  if (size7.classList.contains('act')) {
    for (i = 0; i < 7; ++i) {
      arr[i] = [];
      for (j = 0; j < 7; ++j) {
        if (i + j != 12) {
          arr[i][j] = i * 7 + j + 1;
        } else {
          arr[i][j] = '';
        }
      }
    }

    // перемешивание
    ei = 6; //Запоминаем индексы элемента массива,
    ej = 6; // в котором записана пустая строка.
    for (i = 0; i < 15600; ++i) { // 1200 перемешиваний
      // Случайным образом выбираем число от 0 до 3
      switch (Math.round(8 * Math.random())) {
        /*
         * 0 соответсвует верхней соседней костяшке, 1 - правой  и т.д.
         * обратим внимание что обмен местами, например,
         * с верхней костяшкой возможен, если "пустое место"
         * не ноходится у верхней границы игрового поля. Аналогично и для
         * других соседних костяшек. При обмене изменяем переменные ei и ej.
         */
        case 0:
          if (ei != 0) swap(arr, ei, ej, --ei, ej);
          break; // up
        case 1:
          if (ej != 6) swap(arr, ei, ej, ei, ++ej);
          break; // right
        case 2:
          if (ei != 6) swap(arr, ei, ej, ++ei, ej);
          break; // down
        case 3:
          if (ej != 0) swap(arr, ei, ej, ei, --ej); // left
      }
    }

    // удаление старого tbody в table и создание нового
    var table1 = document.querySelector("#box > table")
    var tbody1 = document.querySelector("#box > table > tbody")
    table1.removeChild(tbody1)

    let table = document.createElement('table'); // создаем таблицу
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (i = 0; i < 7; ++i) {
      let row = document.createElement('tr'); // создаем строки таблицы
      for (j = 0; j < 7; ++j) {
        let cell = document.createElement('td'); // создаем ячейки
        for (k = 0; k < 1; ++k) {
          let ce = document.createElement("div");
          ce.id = i + " " + j;
          ce.onclick = cellClick;
          ce.innerHTML = arr[i][j];
          if (imagex.classList.contains('img')) {
            if (size7.classList.contains('act')) {
              imageRendering7(ce)
            }
          }
          if (mix.classList.contains('img')) {
            if (size7.classList.contains('act')) {
              imageRenderingMix7(ce)
            }
          }
          cell.appendChild(ce);
          ce.classList.add('animate__animated');
        }
        row.appendChild(cell); // добавляем ячейчку в строку
      }
      tbody.appendChild(row); // добавляем строку в таблицу
    }
    dragAndDrop();
    if (box.childNodes.length == 1) {
      box.removeChild(box.firstChild); // удаляем страницу если она есть
    }
    box.appendChild(table); // Запихиваем в box table</div>
  }

  if (size8.classList.contains('act')) {
    for (i = 0; i < 8; ++i) {
      arr[i] = [];
      for (j = 0; j < 8; ++j) {
        if (i + j != 14) {
          arr[i][j] = i * 8 + j + 1;
        } else {
          arr[i][j] = '';
        }
      }
    }

    // перемешивание
    ei = 7; //Запоминаем индексы элемента массива,
    ej = 7; // в котором записана пустая строка.
    for (i = 0; i < 30000; ++i) { // 1200 перемешиваний
      // Случайным образом выбираем число от 0 до 3
      switch (Math.round(25 * Math.random())) {
        /*
         * 0 соответсвует верхней соседней костяшке, 1 - правой  и т.д.
         * обратим внимание что обмен местами, например,
         * с верхней костяшкой возможен, если "пустое место"
         * не ноходится у верхней границы игрового поля. Аналогично и для
         * других соседних костяшек. При обмене изменяем переменные ei и ej.
         */
        case 0:
          if (ei != 0) swap(arr, ei, ej, --ei, ej);
          break; // up
        case 1:
          if (ej != 7) swap(arr, ei, ej, ei, ++ej);
          break; // right
        case 2:
          if (ei != 7) swap(arr, ei, ej, ++ei, ej);
          break; // down
        case 3:
          if (ej != 0) swap(arr, ei, ej, ei, --ej); // left
      }
    }

    // удаление старого tbody в table и создание нового
    var table1 = document.querySelector("#box > table")
    var tbody1 = document.querySelector("#box > table > tbody")
    table1.removeChild(tbody1)

    let table = document.createElement('table'); // создаем таблицу
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (i = 0; i < 8; ++i) {
      let row = document.createElement('tr'); // создаем строки таблицы
      for (j = 0; j < 8; ++j) {
        let cell = document.createElement('td'); // создаем ячейки
        for (k = 0; k < 1; ++k) {
          let ce = document.createElement("div");
          ce.id = i + " " + j;
          ce.onclick = cellClick;
          ce.innerHTML = arr[i][j];
          if (imagex.classList.contains('img')) {
            if (size8.classList.contains('act')) {
              imageRendering8(ce)
            }
          }
          if (mix.classList.contains('img')) {
            if (size8.classList.contains('act')) {
              imageRenderingMix8(ce)
            }
          }
          cell.appendChild(ce);
          ce.classList.add('animate__animated');
        }
        row.appendChild(cell); // добавляем ячейчку в строку
      }
      tbody.appendChild(row); // добавляем строку в таблицу
    }
    dragAndDrop();
    if (box.childNodes.length == 1) {
      box.removeChild(box.firstChild); // удаляем страницу если она есть
    }
    box.appendChild(table); // Запихиваем в box table</div>
  }

  dragAndDrop();
}

function scoreGame() {
  if (!scoreBox.classList.contains('active-score')) {
    scoreBox.classList.add('active-score');
    links.style.display = 'none';
  };
  let dateLocal0 = localStorage.getItem('date0');
  let monthLocal0 = localStorage.getItem('month0');
  let yearLocal0 = localStorage.getItem('year0');
  let countLocal0 = localStorage.getItem('count0');
  let hoursLocal0 = localStorage.getItem('hours0');
  let minsLocal0 = localStorage.getItem('mins0');
  let secsLocal0 = localStorage.getItem('secs0');
  let sizeLocal0 = localStorage.getItem('size0');

  scoreDateBox.insertAdjacentHTML('beforeend', '<span class="score-date-now" id="score-date0"></span>');
  scoreMovesBox.insertAdjacentHTML('beforeend', '<span class="score-moves-now" id="score-moves0"></span>');
  scoreSizeBox.insertAdjacentHTML('beforeend', '<span class="score-size-now" id="score-size0"></span>');
  scoreTimeBox.insertAdjacentHTML('beforeend', '<span class="score-time-now" id="score-time0"></span>');
  scoreDate0 = document.getElementById('score-date0');
  scoreMoves0 = document.getElementById('score-moves0');
  scoreSize0 = document.getElementById('score-size0');
  scoreTime0 = document.getElementById('score-time0');

  scoreDate0.innerText = `${dateLocal0} ${monthLocal0} ${yearLocal0}`;
  scoreMoves0.innerHTML = `${countLocal0}`;
  scoreSize0.innerHTML = `${sizeLocal0}x${sizeLocal0}`;
  scoreTime0.innerHTML = `${hoursLocal0}h ${minsLocal0}m ${secsLocal0}s`;

  let dateLocal1 = localStorage.getItem('date1');
  let monthLocal1 = localStorage.getItem('month1');
  let yearLocal1 = localStorage.getItem('year1');
  let countLocal1 = localStorage.getItem('count1');
  let hoursLocal1 = localStorage.getItem('hours1');
  let minsLocal1 = localStorage.getItem('mins1');
  let secsLocal1 = localStorage.getItem('secs1');
  let sizeLocal1 = localStorage.getItem('size1');

  scoreDateBox.insertAdjacentHTML('beforeend', '<span class="score-date-now" id="score-date1"></span>');
  scoreMovesBox.insertAdjacentHTML('beforeend', '<span class="score-moves-now" id="score-moves1"></span>');
  scoreSizeBox.insertAdjacentHTML('beforeend', '<span class="score-size-now" id="score-size1"></span>');
  scoreTimeBox.insertAdjacentHTML('beforeend', '<span class="score-time-now" id="score-time1"></span>');
  scoreDate1 = document.getElementById('score-date1');
  scoreMoves1 = document.getElementById('score-moves1');
  scoreSize1 = document.getElementById('score-size1');
  scoreTime1 = document.getElementById('score-time1');

  scoreDate1.innerText = `${dateLocal1} ${monthLocal1} ${yearLocal1}`;
  scoreMoves1.innerHTML = `${countLocal1}`;
  scoreSize1.innerHTML = `${sizeLocal1}x${sizeLocal1}`;
  scoreTime1.innerHTML = `${hoursLocal1}h ${minsLocal1}m ${secsLocal1}s`;

  let dateLocal2 = localStorage.getItem('date2');
  let monthLocal2 = localStorage.getItem('month2');
  let yearLocal2 = localStorage.getItem('year2');
  let countLocal2 = localStorage.getItem('count2');
  let hoursLocal2 = localStorage.getItem('hours2');
  let minsLocal2 = localStorage.getItem('mins2');
  let secsLocal2 = localStorage.getItem('secs2');
  let sizeLocal2 = localStorage.getItem('size2');

  scoreDateBox.insertAdjacentHTML('beforeend', '<span class="score-date-now" id="score-date2"></span>');
  scoreMovesBox.insertAdjacentHTML('beforeend', '<span class="score-moves-now" id="score-moves2"></span>');
  scoreSizeBox.insertAdjacentHTML('beforeend', '<span class="score-size-now" id="score-size2"></span>');
  scoreTimeBox.insertAdjacentHTML('beforeend', '<span class="score-time-now" id="score-time2"></span>');
  scoreDate2 = document.getElementById('score-date2');
  scoreMoves2 = document.getElementById('score-moves2');
  scoreSize2 = document.getElementById('score-size2');
  scoreTime2 = document.getElementById('score-time2');

  scoreDate2.innerText = `${dateLocal2} ${monthLocal2} ${yearLocal2}`;
  scoreMoves2.innerHTML = `${countLocal2}`;
  scoreSize2.innerHTML = `${sizeLocal2}x${sizeLocal2}`;
  scoreTime2.innerHTML = `${hoursLocal2}h ${minsLocal2}m ${secsLocal2}s`;

  let dateLocal3 = localStorage.getItem('date3');
  let monthLocal3 = localStorage.getItem('month3');
  let yearLocal3 = localStorage.getItem('year3');
  let countLocal3 = localStorage.getItem('count3');
  let hoursLocal3 = localStorage.getItem('hours3');
  let minsLocal3 = localStorage.getItem('mins3');
  let secsLocal3 = localStorage.getItem('secs3');
  let sizeLocal3 = localStorage.getItem('size3');

  scoreDateBox.insertAdjacentHTML('beforeend', '<span class="score-date-now" id="score-date3"></span>');
  scoreMovesBox.insertAdjacentHTML('beforeend', '<span class="score-moves-now" id="score-moves3"></span>');
  scoreSizeBox.insertAdjacentHTML('beforeend', '<span class="score-size-now" id="score-size3"></span>');
  scoreTimeBox.insertAdjacentHTML('beforeend', '<span class="score-time-now" id="score-time3"></span>');
  scoreDate3 = document.getElementById('score-date3');
  scoreMoves3 = document.getElementById('score-moves3');
  scoreSize3 = document.getElementById('score-size3');
  scoreTime3 = document.getElementById('score-time3');

  scoreDate3.innerText = `${dateLocal3} ${monthLocal3} ${yearLocal3}`;
  scoreMoves3.innerHTML = `${countLocal3}`;
  scoreSize3.innerHTML = `${sizeLocal3}x${sizeLocal3}`;
  scoreTime3.innerHTML = `${hoursLocal3}h ${minsLocal3}m ${secsLocal3}s`;

  let dateLocal4 = localStorage.getItem('date4');
  let monthLocal4 = localStorage.getItem('month4');
  let yearLocal4 = localStorage.getItem('year4');
  let countLocal4 = localStorage.getItem('count4');
  let hoursLocal4 = localStorage.getItem('hours4');
  let minsLocal4 = localStorage.getItem('mins4');
  let secsLocal4 = localStorage.getItem('secs4');
  let sizeLocal4 = localStorage.getItem('size4');

  scoreDateBox.insertAdjacentHTML('beforeend', '<span class="score-date-now" id="score-date4"></span>');
  scoreMovesBox.insertAdjacentHTML('beforeend', '<span class="score-moves-now" id="score-moves4"></span>');
  scoreSizeBox.insertAdjacentHTML('beforeend', '<span class="score-size-now" id="score-size4"></span>');
  scoreTimeBox.insertAdjacentHTML('beforeend', '<span class="score-time-now" id="score-time4"></span>');
  scoreDate4 = document.getElementById('score-date4');
  scoreMoves4 = document.getElementById('score-moves4');
  scoreSize4 = document.getElementById('score-size4');
  scoreTime4 = document.getElementById('score-time4');

  scoreDate4.innerText = `${dateLocal4} ${monthLocal4} ${yearLocal4}`;
  scoreMoves4.innerHTML = `${countLocal4}`;
  scoreSize4.innerHTML = `${sizeLocal4}x${sizeLocal4}`;
  scoreTime4.innerHTML = `${hoursLocal4}h ${minsLocal4}m ${secsLocal4}s`;

  let dateLocal5 = localStorage.getItem('date5');
  let monthLocal5 = localStorage.getItem('month5');
  let yearLocal5 = localStorage.getItem('year5');
  let countLocal5 = localStorage.getItem('count5');
  let hoursLocal5 = localStorage.getItem('hours5');
  let minsLocal5 = localStorage.getItem('mins5');
  let secsLocal5 = localStorage.getItem('secs5');
  let sizeLocal5 = localStorage.getItem('size5');

  scoreDateBox.insertAdjacentHTML('beforeend', '<span class="score-date-now" id="score-date5"></span>');
  scoreMovesBox.insertAdjacentHTML('beforeend', '<span class="score-moves-now" id="score-moves5"></span>');
  scoreSizeBox.insertAdjacentHTML('beforeend', '<span class="score-size-now" id="score-size5"></span>');
  scoreTimeBox.insertAdjacentHTML('beforeend', '<span class="score-time-now" id="score-time5"></span>');
  scoreDate5 = document.getElementById('score-date5');
  scoreMoves5 = document.getElementById('score-moves5');
  scoreSize5 = document.getElementById('score-size5');
  scoreTime5 = document.getElementById('score-time5');

  scoreDate5.innerText = `${dateLocal5} ${monthLocal5} ${yearLocal5}`;
  scoreMoves5.innerHTML = `${countLocal5}`;
  scoreSize5.innerHTML = `${sizeLocal5}x${sizeLocal5}`;
  scoreTime5.innerHTML = `${hoursLocal5}h ${minsLocal5}m ${secsLocal5}s`;

  let dateLocal6 = localStorage.getItem('date6');
  let monthLocal6 = localStorage.getItem('month6');
  let yearLocal6 = localStorage.getItem('year6');
  let countLocal6 = localStorage.getItem('count6');
  let hoursLocal6 = localStorage.getItem('hours6');
  let minsLocal6 = localStorage.getItem('mins6');
  let secsLocal6 = localStorage.getItem('secs6');
  let sizeLocal6 = localStorage.getItem('size6');

  scoreDateBox.insertAdjacentHTML('beforeend', '<span class="score-date-now" id="score-date6"></span>');
  scoreMovesBox.insertAdjacentHTML('beforeend', '<span class="score-moves-now" id="score-moves6"></span>');
  scoreSizeBox.insertAdjacentHTML('beforeend', '<span class="score-size-now" id="score-size6"></span>');
  scoreTimeBox.insertAdjacentHTML('beforeend', '<span class="score-time-now" id="score-time6"></span>');
  scoreDate6 = document.getElementById('score-date6');
  scoreMoves6 = document.getElementById('score-moves6');
  scoreSize6 = document.getElementById('score-size6');
  scoreTime6 = document.getElementById('score-time6');

  scoreDate6.innerText = `${dateLocal6} ${monthLocal6} ${yearLocal6}`;
  scoreMoves6.innerHTML = `${countLocal6}`;
  scoreSize6.innerHTML = `${sizeLocal6}x${sizeLocal6}`;
  scoreTime6.innerHTML = `${hoursLocal6}h ${minsLocal6}m ${secsLocal6}s`;

  let dateLocal7 = localStorage.getItem('date7');
  let monthLocal7 = localStorage.getItem('month7');
  let yearLocal7 = localStorage.getItem('year7');
  let countLocal7 = localStorage.getItem('count7');
  let hoursLocal7 = localStorage.getItem('hours7');
  let minsLocal7 = localStorage.getItem('mins7');
  let secsLocal7 = localStorage.getItem('secs7');
  let sizeLocal7 = localStorage.getItem('size7');

  scoreDateBox.insertAdjacentHTML('beforeend', '<span class="score-date-now" id="score-date7"></span>');
  scoreMovesBox.insertAdjacentHTML('beforeend', '<span class="score-moves-now" id="score-moves7"></span>');
  scoreSizeBox.insertAdjacentHTML('beforeend', '<span class="score-size-now" id="score-size7"></span>');
  scoreTimeBox.insertAdjacentHTML('beforeend', '<span class="score-time-now" id="score-time7"></span>');
  scoreDate7 = document.getElementById('score-date7');
  scoreMoves7 = document.getElementById('score-moves7');
  scoreSize7 = document.getElementById('score-size7');
  scoreTime7 = document.getElementById('score-time7');

  scoreDate7.innerText = `${dateLocal7} ${monthLocal7} ${yearLocal7}`;
  scoreMoves7.innerHTML = `${countLocal7}`;
  scoreSize7.innerHTML = `${sizeLocal7}x${sizeLocal7}`;
  scoreTime7.innerHTML = `${hoursLocal7}h ${minsLocal7}m ${secsLocal7}s`;

  let dateLocal8 = localStorage.getItem('date8');
  let monthLocal8 = localStorage.getItem('month8');
  let yearLocal8 = localStorage.getItem('year8');
  let countLocal8 = localStorage.getItem('count8');
  let hoursLocal8 = localStorage.getItem('hours8');
  let minsLocal8 = localStorage.getItem('mins8');
  let secsLocal8 = localStorage.getItem('secs8');
  let sizeLocal8 = localStorage.getItem('size8');

  scoreDateBox.insertAdjacentHTML('beforeend', '<span class="score-date-now" id="score-date8"></span>');
  scoreMovesBox.insertAdjacentHTML('beforeend', '<span class="score-moves-now" id="score-moves8"></span>');
  scoreSizeBox.insertAdjacentHTML('beforeend', '<span class="score-size-now" id="score-size8"></span>');
  scoreTimeBox.insertAdjacentHTML('beforeend', '<span class="score-time-now" id="score-time8"></span>');
  scoreDate8 = document.getElementById('score-date8');
  scoreMoves8 = document.getElementById('score-moves8');
  scoreSize8 = document.getElementById('score-size8');
  scoreTime8 = document.getElementById('score-time8');

  scoreDate8.innerText = `${dateLocal8} ${monthLocal8} ${yearLocal8}`;
  scoreMoves8.innerHTML = `${countLocal8}`;
  scoreSize8.innerHTML = `${sizeLocal8}x${sizeLocal8}`;
  scoreTime8.innerHTML = `${hoursLocal8}h ${minsLocal8}m ${secsLocal8}s`;

  let dateLocal9 = localStorage.getItem('date9');
  let monthLocal9 = localStorage.getItem('month9');
  let yearLocal9 = localStorage.getItem('year9');
  let countLocal9 = localStorage.getItem('count9');
  let hoursLocal9 = localStorage.getItem('hours9');
  let minsLocal9 = localStorage.getItem('mins9');
  let secsLocal9 = localStorage.getItem('secs9');
  let sizeLocal9 = localStorage.getItem('size9');

  scoreDateBox.insertAdjacentHTML('beforeend', '<span class="score-date-now" id="score-date9"></span>');
  scoreMovesBox.insertAdjacentHTML('beforeend', '<span class="score-moves-now" id="score-moves9"></span>');
  scoreSizeBox.insertAdjacentHTML('beforeend', '<span class="score-size-now" id="score-size9"></span>');
  scoreTimeBox.insertAdjacentHTML('beforeend', '<span class="score-time-now" id="score-time9"></span>');
  scoreDate9 = document.getElementById('score-date9');
  scoreMoves9 = document.getElementById('score-moves9');
  scoreSize9 = document.getElementById('score-size9');
  scoreTime9 = document.getElementById('score-time9');

  scoreDate9.innerText = `${dateLocal9} ${monthLocal9} ${yearLocal9}`;
  scoreMoves9.innerHTML = `${countLocal9}`;
  scoreSize9.innerHTML = `${sizeLocal9}x${sizeLocal9}`;
  scoreTime9.innerHTML = `${hoursLocal9}h ${minsLocal9}m ${secsLocal9}s`;

  if (localStorage.getItem('count0') === null) {
    scoreDate0.innerText = ``;
    scoreMoves0.innerHTML = ``;
    scoreSize0.innerHTML = ``;
    scoreTime0.innerHTML = ``;
  }
  if (localStorage.getItem('count1') === null) {
    scoreDate1.innerText = ``;
    scoreMoves1.innerHTML = ``;
    scoreSize1.innerHTML = ``;
    scoreTime1.innerHTML = ``;
  }
  if (localStorage.getItem('count2') === null) {
    scoreDate2.innerText = ``;
    scoreMoves2.innerHTML = ``;
    scoreSize2.innerHTML = ``;
    scoreTime2.innerHTML = ``;
  }
  if (localStorage.getItem('count3') === null) {
    scoreDate3.innerText = ``;
    scoreMoves3.innerHTML = ``;
    scoreSize3.innerHTML = ``;
    scoreTime3.innerHTML = ``;
  }
  if (localStorage.getItem('count4') === null) {
    scoreDate4.innerText = ``;
    scoreMoves4.innerHTML = ``;
    scoreSize4.innerHTML = ``;
    scoreTime4.innerHTML = ``;
  }
  if (localStorage.getItem('count5') === null) {
    scoreDate5.innerText = ``;
    scoreMoves5.innerHTML = ``;
    scoreSize5.innerHTML = ``;
    scoreTime5.innerHTML = ``;
  }
  if (localStorage.getItem('count6') === null) {
    scoreDate6.innerText = ``;
    scoreMoves6.innerHTML = ``;
    scoreSize6.innerHTML = ``;
    scoreTime6.innerHTML = ``;
  }
  if (localStorage.getItem('count7') === null) {
    scoreDate7.innerText = ``;
    scoreMoves7.innerHTML = ``;
    scoreSize7.innerHTML = ``;
    scoreTime7.innerHTML = ``;
  }
  if (localStorage.getItem('count8') === null) {
    scoreDate8.innerText = ``;
    scoreMoves8.innerHTML = ``;
    scoreSize8.innerHTML = ``;
    scoreTime8.innerHTML = ``;
  }
  if (localStorage.getItem('count9') === null) {
    scoreDate9.innerText = ``;
    scoreMoves9.innerHTML = ``;
    scoreSize9.innerHTML = ``;
    scoreTime9.innerHTML = ``;
  }
};

function scoreGoBackGame() {
  if (scoreBox.classList.contains('active-score')) {
    scoreBox.classList.remove('active-score');
    links.style.display = 'block';
  };
};

score.addEventListener('click', scoreGame);
scoreGoBack.addEventListener('click', scoreGoBackGame);

function sizeGameFn() {
  if (!sizeBox.classList.contains('active-size')) {
    sizeBox.classList.add('active-size');
    links.style.display = 'none';
  };
};

function sizeGoBackGame() {
  if (sizeBox.classList.contains('active-size')) {
    sizeBox.classList.remove('active-size');
    links.style.display = 'block';
  };
};

size.addEventListener('click', sizeGameFn);
sizeGoBack.addEventListener('click', sizeGoBackGame);

function saveGame() {
  let sizeGame = document.querySelectorAll("td").length ** 0.5;
  if (sizeGame === 4) {
    const tdshki = document.querySelectorAll("td");
    let arrTd = new Array;
    tdshki.forEach(tdshka => {
      if (tdshka.innerText === '') {
        arrTd.push('_');
      } else {
        arrTd.push(tdshka.innerText);
      }
      localStorage.setItem('save4', arrTd);
    });
  } else if (sizeGame === 3) {
    const tdshki = document.querySelectorAll("td");
    let arrTd = new Array;
    tdshki.forEach(tdshka => {
      if (tdshka.innerText === '') {
        arrTd.push('_');
      } else {
        arrTd.push(tdshka.innerText);
      }
      localStorage.setItem('save3', arrTd);
    });
  } else if (sizeGame === 5) {
    const tdshki = document.querySelectorAll("td");
    let arrTd = new Array;
    tdshki.forEach(tdshka => {
      if (tdshka.innerText === '') {
        arrTd.push('_');
      } else {
        arrTd.push(tdshka.innerText);
      }
      localStorage.setItem('save5', arrTd);
    });
  } else if (sizeGame === 6) {
    const tdshki = document.querySelectorAll("td");
    let arrTd = new Array;
    tdshki.forEach(tdshka => {
      if (tdshka.innerText === '') {
        arrTd.push('_');
      } else {
        arrTd.push(tdshka.innerText);
      }
      localStorage.setItem('save6', arrTd);
    });
  } else if (sizeGame === 7) {
    const tdshki = document.querySelectorAll("td");
    let arrTd = new Array;
    tdshki.forEach(tdshka => {
      if (tdshka.innerText === '') {
        arrTd.push('_');
      } else {
        arrTd.push(tdshka.innerText);
      }
      localStorage.setItem('save7', arrTd);
    });
  } else if (sizeGame === 8) {
    const tdshki = document.querySelectorAll("td");
    let arrTd = new Array;
    tdshki.forEach(tdshka => {
      if (tdshka.innerText === '') {
        arrTd.push('_');
      } else {
        arrTd.push(tdshka.innerText);
      }
      localStorage.setItem('save8', arrTd);
    });
  }
};

function loadGame() {
  let sizeGame = document.querySelectorAll("td").length ** 0.5;
  if (sizeGame === 4) {
    let getSaveLocal = localStorage.getItem('save4');
    if (localStorage.getItem('save4') === null) {
      return
    }
    let compareAdd = []; // arr из строки локал save (с NaN)
    if (getSaveLocal !== null) {
      compareAdd = getSaveLocal.split(',').map(Number);
    }

    let newArr = []; // избавление от NaN
    compareAdd.forEach(e => {
      if (isNaN(e)) {
        newArr.push('');
      } else {
        newArr.push(e);
      }
    });

    ei;
    ej;
    if (newArr[0] === '') {
      ei = 0;
      ej = 0;
    } else if (newArr[1] === '') {
      ei = 0;
      ej = 1;
    } else if (newArr[2] === '') {
      ei = 0;
      ej = 2;
    } else if (newArr[3] === '') {
      ei = 0;
      ej = 3;
    } else if (newArr[4] === '') {
      ei = 1;
      ej = 0;
    } else if (newArr[5] === '') {
      ei = 1;
      ej = 1;
    } else if (newArr[6] === '') {
      ei = 1;
      ej = 2;
    } else if (newArr[7] === '') {
      ei = 1;
      ej = 3;
    } else if (newArr[8] === '') {
      ei = 2;
      ej = 0;
    } else if (newArr[9] === '') {
      ei = 2;
      ej = 1;
    } else if (newArr[10] === '') {
      ei = 2;
      ej = 2;
    } else if (newArr[11] === '') {
      ei = 2;
      ej = 3;
    } else if (newArr[12] === '') {
      ei = 3;
      ej = 0;
    } else if (newArr[13] === '') {
      ei = 3;
      ej = 1;
    } else if (newArr[14] === '') {
      ei = 3;
      ej = 2;
    } else if (newArr[15] === '') {
      ei = 3;
      ej = 3;
    }

    var arrays = [], size = 4;
    for (i = 0; i < 4; ++i) {
      arrays.push(newArr.splice(0, size));
    } // 4 массива по 4 (то что нужно вставлять)
    arrLoad = arrays;
    // удаление старого tbody в table и создание нового
    var table = document.querySelector("#box > table")
    var tbody = document.querySelector("#box > table > tbody")
    table.removeChild(tbody)
    var table1 = document.createElement("table");
    var tbody1 = document.createElement("tbody");
    table1.appendChild(tbody1);

    for (i = 0; i < 4; ++i) {
      var row = document.createElement("tr");
      for (j = 0; j < 4; ++j) {
        var cell = document.createElement("td");
        for (k = 0; k < 1; ++k) {
          let ce = document.createElement("div");
          ce.id = i + " " + j;
          ce.onclick = cellClick;
          ce.innerHTML = arrays[i][j];
          if (imagex.classList.contains('img')) {
            if (size4.classList.contains('act')) {
              imageRenderingLoad4(ce)
            }
          }
          if (mix.classList.contains('img')) {
            if (size4.classList.contains('act')) {
              imageRenderingMixLoad4(ce)
            }
          }
          cell.appendChild(ce);
          ce.classList.add('animate__animated');
        }
        row.appendChild(cell);
      }
      tbody1.appendChild(row);
    }

    if (box.childNodes.length == 1)
      box.removeChild(box.firstChild);
    box.appendChild(table1);
    dragAndDrop();
  } else if (sizeGame === 3) {
    if (localStorage.getItem('save3') === null) {
      return
    }
    let getSaveLocal = localStorage.getItem('save3');
    let compareAdd = []; // arr из строки локал save (с NaN)
    if (getSaveLocal !== null) {
      compareAdd = getSaveLocal.split(',').map(Number);
    }

    let newArr = []; // избавление от NaN
    compareAdd.forEach(e => {
      if (isNaN(e)) {
        newArr.push('');
      } else {
        newArr.push(e);
      }
    });

    ei;
    ej;
    if (newArr[0] === '') {
      ei = 0;
      ej = 0;
    } else if (newArr[1] === '') {
      ei = 0;
      ej = 1;
    } else if (newArr[2] === '') {
      ei = 0;
      ej = 2;
    } else if (newArr[3] === '') {
      ei = 1;
      ej = 0;
    } else if (newArr[4] === '') {
      ei = 1;
      ej = 1;
    } else if (newArr[5] === '') {
      ei = 1;
      ej = 2;
    } else if (newArr[6] === '') {
      ei = 2;
      ej = 0;
    } else if (newArr[7] === '') {
      ei = 2;
      ej = 1;
    } else if (newArr[8] === '') {
      ei = 2;
      ej = 2;
    }

    var arrays = [], size = 3;
    for (i = 0; i < 3; ++i) {
      arrays.push(newArr.splice(0, size));
    }
    arrLoad = arrays;
    // удаление старого tbody в table и создание нового
    var table = document.querySelector("#box > table")
    var tbody = document.querySelector("#box > table > tbody")
    table.removeChild(tbody)
    var table1 = document.createElement("table");
    var tbody1 = document.createElement("tbody");
    table1.appendChild(tbody1);

    for (i = 0; i < 3; ++i) {
      var row = document.createElement("tr");
      for (j = 0; j < 3; ++j) {
        var cell = document.createElement("td");
        for (k = 0; k < 1; ++k) {
          let ce = document.createElement("div");
          ce.id = i + " " + j;
          ce.onclick = cellClick;
          ce.innerHTML = arrays[i][j];
          if (imagex.classList.contains('img')) {
            if (size3.classList.contains('act')) {
              imageRenderingLoad3(ce)
            }
          }
          if (mix.classList.contains('img')) {
            if (size3.classList.contains('act')) {
              imageRenderingMixLoad3(ce)
            }
          }
          cell.appendChild(ce);
          ce.classList.add('animate__animated');
        }
        row.appendChild(cell);
      }
      tbody1.appendChild(row);
    }

    if (box.childNodes.length == 1)
      box.removeChild(box.firstChild);
    box.appendChild(table1);
    dragAndDrop();
  } else if (sizeGame === 5) {
    if (localStorage.getItem('save5') === null) {
      return
    }
    let getSaveLocal = localStorage.getItem('save5');
    let compareAdd = []; // arr из строки локал save (с NaN)
    if (getSaveLocal !== null) {
      compareAdd = getSaveLocal.split(',').map(Number);
    }

    let newArr = []; // избавление от NaN
    compareAdd.forEach(e => {
      if (isNaN(e)) {
        newArr.push('');
      } else {
        newArr.push(e);
      }
    });

    ei;
    ej;
    if (newArr[0] === '') {
      ei = 0;
      ej = 0;
    } else if (newArr[1] === '') {
      ei = 0;
      ej = 1;
    } else if (newArr[2] === '') {
      ei = 0;
      ej = 2;
    } else if (newArr[3] === '') {
      ei = 0;
      ej = 3;
    } else if (newArr[4] === '') {
      ei = 0;
      ej = 4;
    } else if (newArr[5] === '') {
      ei = 1;
      ej = 0;
    } else if (newArr[6] === '') {
      ei = 1;
      ej = 1;
    } else if (newArr[7] === '') {
      ei = 1;
      ej = 2;
    } else if (newArr[8] === '') {
      ei = 1;
      ej = 3;
    } else if (newArr[9] === '') {
      ei = 1;
      ej = 4;
    } else if (newArr[10] === '') {
      ei = 2;
      ej = 0;
    } else if (newArr[11] === '') {
      ei = 2;
      ej = 1;
    } else if (newArr[12] === '') {
      ei = 2;
      ej = 2;
    } else if (newArr[13] === '') {
      ei = 2;
      ej = 3;
    } else if (newArr[14] === '') {
      ei = 2;
      ej = 4;
    } else if (newArr[15] === '') {
      ei = 3;
      ej = 0;
    } else if (newArr[16] === '') {
      ei = 3;
      ej = 1;
    } else if (newArr[17] === '') {
      ei = 3;
      ej = 2;
    } else if (newArr[18] === '') {
      ei = 3;
      ej = 3;
    } else if (newArr[19] === '') {
      ei = 3;
      ej = 4;
    } else if (newArr[20] === '') {
      ei = 4;
      ej = 0;
    } else if (newArr[21] === '') {
      ei = 4;
      ej = 1;
    } else if (newArr[22] === '') {
      ei = 4;
      ej = 2;
    } else if (newArr[23] === '') {
      ei = 4;
      ej = 3;
    } else if (newArr[24] === '') {
      ei = 4;
      ej = 4;
    }

    var arrays = [], size = 5;
    for (i = 0; i < 5; ++i) {
      arrays.push(newArr.splice(0, size));
    }
    arrLoad = arrays;
    // удаление старого tbody в table и создание нового
    var table = document.querySelector("#box > table")
    var tbody = document.querySelector("#box > table > tbody")
    table.removeChild(tbody)
    var table1 = document.createElement("table");
    var tbody1 = document.createElement("tbody");
    table1.appendChild(tbody1);

    for (i = 0; i < 5; ++i) {
      var row = document.createElement("tr");
      for (j = 0; j < 5; ++j) {
        var cell = document.createElement("td");
        for (k = 0; k < 1; ++k) {
          let ce = document.createElement("div");
          ce.id = i + " " + j;
          ce.onclick = cellClick;
          ce.innerHTML = arrays[i][j];
          if (imagex.classList.contains('img')) {
            if (size5.classList.contains('act')) {
              imageRenderingLoad5(ce)
            }
          }
          if (mix.classList.contains('img')) {
            if (size5.classList.contains('act')) {
              imageRenderingMixLoad5(ce)
            }
          }
          cell.appendChild(ce);
          ce.classList.add('animate__animated');
        }
        row.appendChild(cell);
      }
      tbody1.appendChild(row);
    }

    if (box.childNodes.length == 1)
      box.removeChild(box.firstChild);
    box.appendChild(table1);
    dragAndDrop();
  } else if (sizeGame === 6) {
    if (localStorage.getItem('save6') === null) {
      return
    }
    let getSaveLocal = localStorage.getItem('save6');
    let compareAdd = []; // arr из строки локал save (с NaN)
    if (getSaveLocal !== null) {
      compareAdd = getSaveLocal.split(',').map(Number);
    }

    let newArr = []; // избавление от NaN
    compareAdd.forEach(e => {
      if (isNaN(e)) {
        newArr.push('');
      } else {
        newArr.push(e);
      }
    });

    ei;
    ej;
    if (newArr[0] === '') {
      ei = 0;
      ej = 0;
    } else if (newArr[1] === '') {
      ei = 0;
      ej = 1;
    } else if (newArr[2] === '') {
      ei = 0;
      ej = 2;
    } else if (newArr[3] === '') {
      ei = 0;
      ej = 3;
    } else if (newArr[4] === '') {
      ei = 0;
      ej = 4;
    } else if (newArr[5] === '') {
      ei = 0;
      ej = 5;
    } else if (newArr[6] === '') {
      ei = 1;
      ej = 0;
    } else if (newArr[7] === '') {
      ei = 1;
      ej = 1;
    } else if (newArr[8] === '') {
      ei = 1;
      ej = 2;
    } else if (newArr[9] === '') {
      ei = 1;
      ej = 3;
    } else if (newArr[10] === '') {
      ei = 1;
      ej = 4;
    } else if (newArr[11] === '') {
      ei = 1;
      ej = 5;
    } else if (newArr[12] === '') {
      ei = 2;
      ej = 0;
    } else if (newArr[13] === '') {
      ei = 2;
      ej = 1;
    } else if (newArr[14] === '') {
      ei = 2;
      ej = 2;
    } else if (newArr[15] === '') {
      ei = 2;
      ej = 3;
    } else if (newArr[16] === '') {
      ei = 2;
      ej = 4;
    } else if (newArr[17] === '') {
      ei = 2;
      ej = 5;
    } else if (newArr[18] === '') {
      ei = 3;
      ej = 0;
    } else if (newArr[19] === '') {
      ei = 3;
      ej = 1;
    } else if (newArr[20] === '') {
      ei = 3;
      ej = 2;
    } else if (newArr[21] === '') {
      ei = 3;
      ej = 3;
    } else if (newArr[22] === '') {
      ei = 3;
      ej = 4;
    } else if (newArr[23] === '') {
      ei = 3;
      ej = 5;
    } else if (newArr[24] === '') {
      ei = 4;
      ej = 0;
    } else if (newArr[25] === '') {
      ei = 4;
      ej = 1;
    } else if (newArr[26] === '') {
      ei = 4;
      ej = 2;
    } else if (newArr[27] === '') {
      ei = 4;
      ej = 3;
    } else if (newArr[28] === '') {
      ei = 4;
      ej = 4;
    } else if (newArr[29] === '') {
      ei = 4;
      ej = 5;
    } else if (newArr[30] === '') {
      ei = 5;
      ej = 0;
    } else if (newArr[31] === '') {
      ei = 5;
      ej = 1;
    } else if (newArr[32] === '') {
      ei = 5;
      ej = 2;
    } else if (newArr[33] === '') {
      ei = 5;
      ej = 3;
    } else if (newArr[34] === '') {
      ei = 5;
      ej = 4;
    } else if (newArr[35] === '') {
      ei = 5;
      ej = 5;
    }

    var arrays = [], size = 6;
    for (i = 0; i < 6; ++i) {
      arrays.push(newArr.splice(0, size));
    }
    arrLoad = arrays;
    // удаление старого tbody в table и создание нового
    var table = document.querySelector("#box > table")
    var tbody = document.querySelector("#box > table > tbody")
    table.removeChild(tbody)
    var table1 = document.createElement("table");
    var tbody1 = document.createElement("tbody");
    table1.appendChild(tbody1);

    for (i = 0; i < 6; ++i) {
      var row = document.createElement("tr");
      for (j = 0; j < 6; ++j) {
        var cell = document.createElement("td");
        for (k = 0; k < 1; ++k) {
          let ce = document.createElement("div");
          ce.id = i + " " + j;
          ce.onclick = cellClick;
          ce.innerHTML = arrays[i][j];
          if (imagex.classList.contains('img')) {
            if (size6.classList.contains('act')) {
              imageRenderingLoad6(ce)
            }
          }
          if (mix.classList.contains('img')) {
            if (size6.classList.contains('act')) {
              imageRenderingMixLoad6(ce)
            }
          }
          cell.appendChild(ce);
          ce.classList.add('animate__animated');
        }
        row.appendChild(cell);
      }
      tbody1.appendChild(row);
    }

    if (box.childNodes.length == 1)
      box.removeChild(box.firstChild);
    box.appendChild(table1);
    dragAndDrop();
  } else if (sizeGame === 7) {
    if (localStorage.getItem('save7') === null) {
      return
    }
    let getSaveLocal = localStorage.getItem('save7');
    let compareAdd = []; // arr из строки локал save (с NaN)
    if (getSaveLocal !== null) {
      compareAdd = getSaveLocal.split(',').map(Number);
    }

    let newArr = []; // избавление от NaN
    compareAdd.forEach(e => {
      if (isNaN(e)) {
        newArr.push('');
      } else {
        newArr.push(e);
      }
    });

    ei;
    ej;
    if (newArr[0] === '') {
      ei = 0;
      ej = 0;
    } else if (newArr[1] === '') {
      ei = 0;
      ej = 1;
    } else if (newArr[2] === '') {
      ei = 0;
      ej = 2;
    } else if (newArr[3] === '') {
      ei = 0;
      ej = 3;
    } else if (newArr[4] === '') {
      ei = 0;
      ej = 4;
    } else if (newArr[5] === '') {
      ei = 0;
      ej = 5;
    } else if (newArr[6] === '') {
      ei = 0;
      ej = 6;
    } else if (newArr[7] === '') {
      ei = 1;
      ej = 0;
    } else if (newArr[8] === '') {
      ei = 1;
      ej = 1;
    } else if (newArr[9] === '') {
      ei = 1;
      ej = 2;
    } else if (newArr[10] === '') {
      ei = 1;
      ej = 3;
    } else if (newArr[11] === '') {
      ei = 1;
      ej = 4;
    } else if (newArr[12] === '') {
      ei = 1;
      ej = 5;
    } else if (newArr[13] === '') {
      ei = 1;
      ej = 6;
    } else if (newArr[14] === '') {
      ei = 2;
      ej = 0;
    } else if (newArr[15] === '') {
      ei = 2;
      ej = 1;
    } else if (newArr[16] === '') {
      ei = 2;
      ej = 2;
    } else if (newArr[17] === '') {
      ei = 2;
      ej = 3;
    } else if (newArr[18] === '') {
      ei = 2;
      ej = 4;
    } else if (newArr[19] === '') {
      ei = 2;
      ej = 5;
    } else if (newArr[20] === '') {
      ei = 2;
      ej = 6;
    } else if (newArr[21] === '') {
      ei = 3;
      ej = 0;
    } else if (newArr[22] === '') {
      ei = 3;
      ej = 1;
    } else if (newArr[23] === '') {
      ei = 3;
      ej = 2;
    } else if (newArr[24] === '') {
      ei = 3;
      ej = 3;
    } else if (newArr[25] === '') {
      ei = 3;
      ej = 4;
    } else if (newArr[26] === '') {
      ei = 3;
      ej = 5;
    } else if (newArr[27] === '') {
      ei = 3;
      ej = 6;
    } else if (newArr[28] === '') {
      ei = 4;
      ej = 0;
    } else if (newArr[29] === '') {
      ei = 4;
      ej = 1;
    } else if (newArr[30] === '') {
      ei = 4;
      ej = 2;
    } else if (newArr[31] === '') {
      ei = 4;
      ej = 3;
    } else if (newArr[32] === '') {
      ei = 4;
      ej = 4;
    } else if (newArr[33] === '') {
      ei = 4;
      ej = 5;
    } else if (newArr[34] === '') {
      ei = 4;
      ej = 6;
    } else if (newArr[35] === '') {
      ei = 5;
      ej = 0;
    } else if (newArr[36] === '') {
      ei = 5;
      ej = 1;
    } else if (newArr[37] === '') {
      ei = 5;
      ej = 2;
    } else if (newArr[38] === '') {
      ei = 5;
      ej = 3;
    } else if (newArr[39] === '') {
      ei = 5;
      ej = 4;
    } else if (newArr[40] === '') {
      ei = 5;
      ej = 5;
    } else if (newArr[41] === '') {
      ei = 5;
      ej = 6;
    } else if (newArr[42] === '') {
      ei = 6;
      ej = 0;
    } else if (newArr[43] === '') {
      ei = 6;
      ej = 1;
    } else if (newArr[44] === '') {
      ei = 6;
      ej = 2;
    } else if (newArr[45] === '') {
      ei = 6;
      ej = 3;
    } else if (newArr[46] === '') {
      ei = 6;
      ej = 4;
    } else if (newArr[47] === '') {
      ei = 6;
      ej = 5;
    } else if (newArr[48] === '') {
      ei = 6;
      ej = 6;
    }

    var arrays = [], size = 7;
    for (i = 0; i < 7; ++i) {
      arrays.push(newArr.splice(0, size));
    }
    arrLoad = arrays;
    // удаление старого tbody в table и создание нового
    var table = document.querySelector("#box > table")
    var tbody = document.querySelector("#box > table > tbody")
    table.removeChild(tbody)
    var table1 = document.createElement("table");
    var tbody1 = document.createElement("tbody");
    table1.appendChild(tbody1);

    for (i = 0; i < 7; ++i) {
      var row = document.createElement("tr");
      for (j = 0; j < 7; ++j) {
        var cell = document.createElement("td");
        for (k = 0; k < 1; ++k) {
          let ce = document.createElement("div");
          ce.id = i + " " + j;
          ce.onclick = cellClick;
          ce.innerHTML = arrays[i][j];
          if (imagex.classList.contains('img')) {
            if (size7.classList.contains('act')) {
              imageRenderingLoad7(ce)
            }
          }
          if (mix.classList.contains('img')) {
            if (size7.classList.contains('act')) {
              imageRenderingMixLoad7(ce)
            }
          }
          cell.appendChild(ce);
          ce.classList.add('animate__animated');
        }
        row.appendChild(cell);
      }
      tbody1.appendChild(row);
    }

    if (box.childNodes.length == 1)
      box.removeChild(box.firstChild);
    box.appendChild(table1);
    dragAndDrop();
  } else if (sizeGame === 8) {
    if (localStorage.getItem('save8') === null) {
      return
    }
    let getSaveLocal = localStorage.getItem('save8');
    let compareAdd = []; // arr из строки локал save (с NaN)
    if (getSaveLocal !== null) {
      compareAdd = getSaveLocal.split(',').map(Number);
    }

    let newArr = []; // избавление от NaN
    compareAdd.forEach(e => {
      if (isNaN(e)) {
        newArr.push('');
      } else {
        newArr.push(e);
      }
    });

    ei;
    ej;
    if (newArr[0] === '') {
      ei = 0;
      ej = 0;
    } else if (newArr[1] === '') {
      ei = 0;
      ej = 1;
    } else if (newArr[2] === '') {
      ei = 0;
      ej = 2;
    } else if (newArr[3] === '') {
      ei = 0;
      ej = 3;
    } else if (newArr[4] === '') {
      ei = 0;
      ej = 4;
    } else if (newArr[5] === '') {
      ei = 0;
      ej = 5;
    } else if (newArr[6] === '') {
      ei = 0;
      ej = 6;
    } else if (newArr[7] === '') {
      ei = 0;
      ej = 7;
    } else if (newArr[8] === '') {
      ei = 1;
      ej = 0;
    } else if (newArr[9] === '') {
      ei = 1;
      ej = 1;
    } else if (newArr[10] === '') {
      ei = 1;
      ej = 2;
    } else if (newArr[11] === '') {
      ei = 1;
      ej = 3;
    } else if (newArr[12] === '') {
      ei = 1;
      ej = 4;
    } else if (newArr[13] === '') {
      ei = 1;
      ej = 5;
    } else if (newArr[14] === '') {
      ei = 1;
      ej = 6;
    } else if (newArr[15] === '') {
      ei = 1;
      ej = 7;
    } else if (newArr[16] === '') {
      ei = 2;
      ej = 0;
    } else if (newArr[17] === '') {
      ei = 2;
      ej = 1;
    } else if (newArr[18] === '') {
      ei = 2;
      ej = 2;
    } else if (newArr[19] === '') {
      ei = 2;
      ej = 3;
    } else if (newArr[20] === '') {
      ei = 2;
      ej = 4;
    } else if (newArr[21] === '') {
      ei = 2;
      ej = 5;
    } else if (newArr[22] === '') {
      ei = 2;
      ej = 6;
    } else if (newArr[23] === '') {
      ei = 2;
      ej = 7;
    } else if (newArr[24] === '') {
      ei = 3;
      ej = 0;
    } else if (newArr[25] === '') {
      ei = 3;
      ej = 1;
    } else if (newArr[26] === '') {
      ei = 3;
      ej = 2;
    } else if (newArr[27] === '') {
      ei = 3;
      ej = 3;
    } else if (newArr[28] === '') {
      ei = 3;
      ej = 4;
    } else if (newArr[29] === '') {
      ei = 3;
      ej = 5;
    } else if (newArr[30] === '') {
      ei = 3;
      ej = 6;
    } else if (newArr[31] === '') {
      ei = 3;
      ej = 7;
    } else if (newArr[32] === '') {
      ei = 4;
      ej = 0;
    } else if (newArr[33] === '') {
      ei = 4;
      ej = 1;
    } else if (newArr[34] === '') {
      ei = 4;
      ej = 2;
    } else if (newArr[35] === '') {
      ei = 4;
      ej = 3;
    } else if (newArr[36] === '') {
      ei = 4;
      ej = 4;
    } else if (newArr[37] === '') {
      ei = 4;
      ej = 5;
    } else if (newArr[38] === '') {
      ei = 4;
      ej = 6;
    } else if (newArr[39] === '') {
      ei = 4;
      ej = 7;
    } else if (newArr[40] === '') {
      ei = 5;
      ej = 0;
    } else if (newArr[41] === '') {
      ei = 5;
      ej = 1;
    } else if (newArr[42] === '') {
      ei = 5;
      ej = 2;
    } else if (newArr[43] === '') {
      ei = 5;
      ej = 3;
    } else if (newArr[44] === '') {
      ei = 5;
      ej = 4;
    } else if (newArr[45] === '') {
      ei = 5;
      ej = 5;
    } else if (newArr[46] === '') {
      ei = 5;
      ej = 6;
    } else if (newArr[47] === '') {
      ei = 5;
      ej = 7;
    } else if (newArr[48] === '') {
      ei = 6;
      ej = 0;
    } else if (newArr[49] === '') {
      ei = 6;
      ej = 1;
    } else if (newArr[50] === '') {
      ei = 6;
      ej = 2;
    } else if (newArr[51] === '') {
      ei = 6;
      ej = 3;
    } else if (newArr[52] === '') {
      ei = 6;
      ej = 4;
    } else if (newArr[53] === '') {
      ei = 6;
      ej = 5;
    } else if (newArr[54] === '') {
      ei = 6;
      ej = 6;
    } else if (newArr[55] === '') {
      ei = 6;
      ej = 7;
    } else if (newArr[56] === '') {
      ei = 7;
      ej = 0;
    } else if (newArr[57] === '') {
      ei = 7;
      ej = 1;
    } else if (newArr[58] === '') {
      ei = 7;
      ej = 2;
    } else if (newArr[59] === '') {
      ei = 7;
      ej = 3;
    } else if (newArr[60] === '') {
      ei = 7;
      ej = 4;
    } else if (newArr[61] === '') {
      ei = 7;
      ej = 5;
    } else if (newArr[62] === '') {
      ei = 7;
      ej = 6;
    } else if (newArr[63] === '') {
      ei = 7;
      ej = 7;
    }

    var arrays = [], size = 8;
    for (i = 0; i < 8; ++i) {
      arrays.push(newArr.splice(0, size));
    }
    arrLoad = arrays;
    // удаление старого tbody в table и создание нового
    var table = document.querySelector("#box > table")
    var tbody = document.querySelector("#box > table > tbody")
    table.removeChild(tbody)
    var table1 = document.createElement("table");
    var tbody1 = document.createElement("tbody");
    table1.appendChild(tbody1);

    for (i = 0; i < 8; ++i) {
      var row = document.createElement("tr");
      for (j = 0; j < 8; ++j) {
        var cell = document.createElement("td");
        for (k = 0; k < 1; ++k) {
          let ce = document.createElement("div");
          ce.id = i + " " + j;
          ce.onclick = cellClick;
          ce.innerHTML = arrays[i][j];
          if (imagex.classList.contains('img')) {
            if (size8.classList.contains('act')) {
              imageRenderingLoad8(ce)
            }
          }
          if (mix.classList.contains('img')) {
            if (size8.classList.contains('act')) {
              imageRenderingMixLoad8(ce)
            }
          }
          cell.appendChild(ce);
          ce.classList.add('animate__animated');
        }
        row.appendChild(cell);
      }
      tbody1.appendChild(row);
    }

    if (box.childNodes.length == 1)
      box.removeChild(box.firstChild);
    box.appendChild(table1);
    dragAndDrop();
  }
};

save.addEventListener('click', saveGame);
load.addEventListener('click', loadGame);

function imageRenderingLoad4(cell) {
  if (arrLoad[i][j] === '') {
    cell.classList.add(`bnone`);
  } else {
    cell.classList.add(`b4${arrLoad[i][j]}`);
  }
  cell.style.color = 'transparent';
  cell.style.textShadow = 'transparent 1px 1px 0, transparent -1px -1px 0, transparent -1px 1px 0, transparent 1px -1px 0';
}

function imageRenderingMixLoad4(cell) {
  if (arrLoad[i][j] === '') {
    cell.classList.add(`bnone`);
  } else {
    cell.classList.add(`b4${arrLoad[i][j]}`);
  }
  // cell.innerHTML = '';
}

function imageRendering4(ce) {
  if (arr[i][j] === '') {
    ce.classList.add(`bnone`);
  } else {
    ce.classList.add(`b4${arr[i][j]}`);
  }
  ce.style.color = 'transparent';
  ce.style.textShadow = 'transparent 1px 1px 0, transparent -1px -1px 0, transparent -1px 1px 0, transparent 1px -1px 0';
}

function imageRenderingMix4(ce) {
  if (arr[i][j] === '') {
    ce.classList.add(`bnone`);
  } else {
    ce.classList.add(`b4${arr[i][j]}`);
  }
  // ce.innerHTML = '';
}

function imageRenderingLoad3(cell) {
  if (arrLoad[i][j] === '') {
    cell.classList.add(`bnone`);
  } else {
    cell.classList.add(`b3${arrLoad[i][j]}`);
  }
  cell.style.color = 'transparent';
  cell.style.textShadow = 'transparent 1px 1px 0, transparent -1px -1px 0, transparent -1px 1px 0, transparent 1px -1px 0';
}

function imageRenderingMixLoad3(cell) {
  if (arrLoad[i][j] === '') {
    cell.classList.add(`bnone`);
  } else {
    cell.classList.add(`b3${arrLoad[i][j]}`);
  }
  // cell.innerHTML = '';
}

function imageRendering3(ce) {
  if (arr[i][j] === '') {
    ce.classList.add(`bnone`);
  } else {
    ce.classList.add(`b3${arr[i][j]}`);
  }
  ce.style.color = 'transparent';
  ce.style.textShadow = 'transparent 1px 1px 0, transparent -1px -1px 0, transparent -1px 1px 0, transparent 1px -1px 0';
}

function imageRenderingMix3(ce) {
  if (arr[i][j] === '') {
    ce.classList.add(`bnone`);
  } else {
    ce.classList.add(`b3${arr[i][j]}`);
  }
  // ce.innerHTML = '';
}

function imageRenderingLoad5(cell) {
  if (arrLoad[i][j] === '') {
    cell.classList.add(`bnone`);
  } else {
    cell.classList.add(`b5${arrLoad[i][j]}`);
  }
  cell.style.color = 'transparent';
  cell.style.textShadow = 'transparent 1px 1px 0, transparent -1px -1px 0, transparent -1px 1px 0, transparent 1px -1px 0';
}

function imageRenderingMixLoad5(cell) {
  if (arrLoad[i][j] === '') {
    cell.classList.add(`bnone`);
  } else {
    cell.classList.add(`b5${arrLoad[i][j]}`);
  }
  // cell.innerHTML = '';
}

function imageRendering5(ce) {
  if (arr[i][j] === '') {
    ce.classList.add(`bnone`);
  } else {
    ce.classList.add(`b5${arr[i][j]}`);
  }
  ce.style.color = 'transparent';
  ce.style.textShadow = 'transparent 1px 1px 0, transparent -1px -1px 0, transparent -1px 1px 0, transparent 1px -1px 0';
}

function imageRenderingMix5(ce) {
  if (arr[i][j] === '') {
    ce.classList.add(`bnone`);
  } else {
    ce.classList.add(`b5${arr[i][j]}`);
  }
  // ce.innerHTML = '';
}

function imageRenderingLoad6(cell) {
  if (arrLoad[i][j] === '') {
    cell.classList.add(`bnone`);
  } else {
    cell.classList.add(`b6${arrLoad[i][j]}`);
  }
  cell.style.color = 'transparent';
  cell.style.textShadow = 'transparent 1px 1px 0, transparent -1px -1px 0, transparent -1px 1px 0, transparent 1px -1px 0';
}

function imageRenderingMixLoad6(cell) {
  if (arrLoad[i][j] === '') {
    cell.classList.add(`bnone`);
  } else {
    cell.classList.add(`b6${arrLoad[i][j]}`);
  }
  // cell.innerHTML = '';
}

function imageRendering6(ce) {
  if (arr[i][j] === '') {
    ce.classList.add(`bnone`);
  } else {
    ce.classList.add(`b6${arr[i][j]}`);
  }
  ce.style.color = 'transparent';
  ce.style.textShadow = 'transparent 1px 1px 0, transparent -1px -1px 0, transparent -1px 1px 0, transparent 1px -1px 0';
}

function imageRenderingMix6(ce) {
  if (arr[i][j] === '') {
    ce.classList.add(`bnone`);
  } else {
    ce.classList.add(`b6${arr[i][j]}`);
  }
  // ce.innerHTML = '';
}

function imageRenderingLoad7(cell) {
  if (arrLoad[i][j] === '') {
    cell.classList.add(`bnone`);
  } else {
    cell.classList.add(`b7${arrLoad[i][j]}`);
  }
  cell.style.color = 'transparent';
  cell.style.textShadow = 'transparent 1px 1px 0, transparent -1px -1px 0, transparent -1px 1px 0, transparent 1px -1px 0';
}

function imageRenderingMixLoad7(cell) {
  if (arrLoad[i][j] === '') {
    cell.classList.add(`bnone`);
  } else {
    cell.classList.add(`b7${arrLoad[i][j]}`);
  }
  // cell.innerHTML = '';
}

function imageRendering7(ce) {
  if (arr[i][j] === '') {
    ce.classList.add(`bnone`);
  } else {
    ce.classList.add(`b7${arr[i][j]}`);
  }
  ce.style.color = 'transparent';
  ce.style.textShadow = 'transparent 1px 1px 0, transparent -1px -1px 0, transparent -1px 1px 0, transparent 1px -1px 0';
}

function imageRenderingMix7(ce) {
  if (arr[i][j] === '') {
    ce.classList.add(`bnone`);
  } else {
    ce.classList.add(`b7${arr[i][j]}`);
  }
  // ce.innerHTML = '';
}

function imageRenderingLoad8(cell) {
  if (arrLoad[i][j] === '') {
    cell.classList.add(`bnone`);
  } else {
    cell.classList.add(`b8${arrLoad[i][j]}`);
  }
  cell.style.color = 'transparent';
  cell.style.textShadow = 'transparent 1px 1px 0, transparent -1px -1px 0, transparent -1px 1px 0, transparent 1px -1px 0';
}

function imageRenderingMixLoad8(cell) {
  if (arrLoad[i][j] === '') {
    cell.classList.add(`bnone`);
  } else {
    cell.classList.add(`b8${arrLoad[i][j]}`);
  }
  // cell.innerHTML = '';
}

function imageRendering8(ce) {
  if (arr[i][j] === '') {
    ce.classList.add(`bnone`);
  } else {
    ce.classList.add(`b8${arr[i][j]}`);
  }
  ce.style.color = 'transparent';
  ce.style.textShadow = 'transparent 1px 1px 0, transparent -1px -1px 0, transparent -1px 1px 0, transparent 1px -1px 0';
}

function imageRenderingMix8(ce) {
  if (arr[i][j] === '') {
    ce.classList.add(`bnone`);
  } else {
    ce.classList.add(`b8${arr[i][j]}`);
  }
  // ce.innerHTML = '';
}

imagex.addEventListener('click', () => {
  if (!imagex.classList.contains('img')) {
    imagex.classList.add('img');
    num.classList.remove('img');
    mix.classList.remove('img');
    newGame();
    dragAndDrop();
    resetTimer();
  } else {
    imagex.classList.remove('img');
    num.classList.add('img');
    newGame();
    dragAndDrop();
    resetTimer();
  }
})

num.classList.add('img');
num.addEventListener('click', () => {
  if (!num.classList.contains('img')) {
    imagex.classList.remove('img');
    mix.classList.remove('img');
    num.classList.add('img');
    newGame();
    dragAndDrop();
    resetTimer();
  } else {
    // imagex.classList.add('img');
    num.classList.add('img');
    newGame();
    dragAndDrop();
    resetTimer();
  }
})

mix.addEventListener('click', () => {
  if (!mix.classList.contains('img')) {
    mix.classList.add('img');
    num.classList.remove('img');
    imagex.classList.remove('img');
    newGame();
    dragAndDrop();
    resetTimer();
  } else {
    mix.classList.remove('img');
    num.classList.add('img');
    newGame();
    dragAndDrop();
    resetTimer();
  }
})

function dragAndDrop() {
  setInterval(function () {
    const tdshki = document.querySelectorAll("#box > table > tbody > tr > td > div"); // все td шки
    tdshki.forEach(tdshka => { // перебор td шок по td шкам
      if (tdshka.textContent === '') {
        tdshka.classList.add('emptyText');
        tdshka.setAttribute('draggable', 'false'); // добавление пустой td шке аттребут
      } else {
        tdshka.setAttribute('draggable', 'true'); // добавление всем td шкам аттребут
        tdshka.classList.remove('emptyText');
      }
    });
  }, 50)

  const cellTds = document.querySelectorAll('#box > table > tbody > tr > td');
  const cellDivs = document.querySelectorAll('#box > table > tbody > tr > td > div');
  let flag = false;
  cellDivs.forEach(cell => {
    cell.addEventListener('dragstart', () => {
      setTimeout(() => {
        cell.classList.add('hide');
      }, 0);
      cell.setAttribute('draggable', 'true');
    });
    cell.addEventListener('dragend', () => {
      cell.classList.remove('hide');
      if (flag === true) {
        cellClick();
      }
    });
    cell.addEventListener('dragover', function (evt) {
      evt.preventDefault();
    });
    cell.addEventListener('dragenter', function (evt) {
      evt.preventDefault();
      cell.classList.add('hovered');
      if (cell.classList.contains('emptyText')) {
        flag = true;
      }
    });
    cell.addEventListener('dragleave', function () {
      cell.classList.remove('hovered');
    });
    cell.addEventListener('drop', function () {
      cell.classList.remove('hovered');
    });
  })
}
dragAndDrop();

setTimeout(function sizeFn() {
  let sizeGame = document.querySelectorAll("td").length ** 0.5;
  if (sizeGame === 4) {
    if (!size4.classList.contains('act')) {
      size4.classList.add('act');
    }
  }
}, 100)

function setSize3() {
  if (!size3.classList.contains('act')) {
    size5.classList.remove('act');
    size4.classList.remove('act');
    size6.classList.remove('act');
    size7.classList.remove('act');
    size8.classList.remove('act');
    size3.classList.add('act');
  }
  newGame();
  dragAndDrop();
  resetTimer();
}
function setSize4() {
  if (!size4.classList.contains('act')) {
    size5.classList.remove('act');
    size3.classList.remove('act');
    size6.classList.remove('act');
    size7.classList.remove('act');
    size8.classList.remove('act');
    size4.classList.add('act');
  }
  newGame();
  dragAndDrop();
  resetTimer();
}
function setSize5() {
  if (!size5.classList.contains('act')) {
    size3.classList.remove('act');
    size4.classList.remove('act');
    size6.classList.remove('act');
    size7.classList.remove('act');
    size8.classList.remove('act');
    size5.classList.add('act');
  }
  newGame();
  dragAndDrop();
  resetTimer();
}
function setSize6() {
  if (!size6.classList.contains('act')) {
    size3.classList.remove('act');
    size4.classList.remove('act');
    size5.classList.remove('act');
    size7.classList.remove('act');
    size8.classList.remove('act');
    size6.classList.add('act');
  }
  newGame();
  dragAndDrop();
  resetTimer();
}
function setSize7() {
  if (!size7.classList.contains('act')) {
    size3.classList.remove('act');
    size4.classList.remove('act');
    size5.classList.remove('act');
    size6.classList.remove('act');
    size8.classList.remove('act');
    size7.classList.add('act');
  }
  newGame();
  dragAndDrop();
  resetTimer();
}
function setSize8() {
  if (!size8.classList.contains('act')) {
    size3.classList.remove('act');
    size4.classList.remove('act');
    size5.classList.remove('act');
    size6.classList.remove('act');
    size7.classList.remove('act');
    size8.classList.add('act');
  }
  newGame();
  dragAndDrop();
  resetTimer();
}
size3.addEventListener('click', setSize3)
size4.addEventListener('click', setSize4)
size5.addEventListener('click', setSize5)
size6.addEventListener('click', setSize6)
size7.addEventListener('click', setSize7)
size8.addEventListener('click', setSize8)