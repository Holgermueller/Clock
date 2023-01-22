let timeDisplay = document.getElementById("time");
let dateDisplay = document.getElementById("date");
let dayOfWeekDisplay = document.getElementById("dayOfWeek");

const getTime = () => {
  setInterval(() => {
    let time = moment().format("LTS");
    timeDisplay.innerHTML = time;
  }, 1000);
};

const displayDate = () => {
  let date = moment().format("LL");
  dateDisplay.innerHTML = date;
};

const displayDayOfWeek = () => {
  let dayOfWeek = moment().format("dddd");
  dayOfWeekDisplay.innerHTML = dayOfWeek;
};

getTime();
displayDate();
displayDayOfWeek();
