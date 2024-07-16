function updateTime() {
  let canaryElement = document.querySelector("#Canary");
  let canaryDateElement = canaryElement.querySelector(".date");
  let canaryTimeElement = canaryElement.querySelector(".time");
  let canaryTime = moment().tz("Atlantic/Canary");

  canaryDateElement.innerHTML = canaryTime.format("MMMM	Do YYYY");
  canaryTimeElement.innerHTML = canaryTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let adelaideElement = document.querySelector("#Adelaide");
  let adelaideDateElement = adelaideElement.querySelector(".date");
  let adelaideTimeElement = adelaideElement.querySelector(".time");
  let adelaideTime = moment().tz("Australia/Adelaide");

  adelaideDateElement.innerHTML = adelaideTime.format("MMMM	Do YYYY");
  adelaideTimeElement.innerHTML = adelaideTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#Paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
