let date = moment().format("LL");
let timeDisplay = document.createElement("time");

const getTime = () => {
  setInterval(() => {
    let time = moment().format("LTS");
    timeDisplay.innerHTML = time;
  }, 1000);
};

document.getElementById("date").innerHTML = date;

getTime();
