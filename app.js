function countDown() {
  // Retrieve current time - stores as miliseconds
  const currentTime = new Date().getTime();

  // Time of the count down - stores as miliseconds
  const christmas = new Date("Dec 24, 2018 23:59:59").getTime();
  // Remaining time until christmas - in miliseconds
  let difference = christmas - currentTime;

  // Time calculations
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}

setInterval(countDown, 1000);