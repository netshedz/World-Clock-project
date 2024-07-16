function updateTime() {
  let canaryElement = document.querySelector("#Canary");
  if (canaryElement) {
    let canaryDateElement = canaryElement.querySelector(".date");
    let canaryTimeElement = canaryElement.querySelector(".time");
    let canaryTime = moment().tz("Atlantic/Canary");

    canaryDateElement.innerHTML = canaryTime.format("MMMM	Do YYYY");
    canaryTimeElement.innerHTML = canaryTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let adelaideElement = document.querySelector("#Adelaide");
  if (adelaideElement) {
    let adelaideDateElement = adelaideElement.querySelector(".date");
    let adelaideTimeElement = adelaideElement.querySelector(".time");
    let adelaideTime = moment().tz("Australia/Adelaide");

    adelaideDateElement.innerHTML = adelaideTime.format("MMMM	Do YYYY");
    adelaideTimeElement.innerHTML = adelaideTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let parisElement = document.querySelector("#Paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
