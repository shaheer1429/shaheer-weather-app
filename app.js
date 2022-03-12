// Grabbing everything we need
'use strict';
let btn = document.querySelector('.btn');
let temp = document.querySelector('.temp');
let cityName = document.querySelector('.name');
let desc = document.querySelector('.desc');
let inputValue = document.querySelector('.inputValue');
let windSpeed = document.querySelector('.windSpeed');
const show = function (city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=faff4bea2adc5d7f32abca251f343621`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      cityName.textContent = data.list[0].name;
      windSpeed.textContent = data.list[0].wind.speed + ' Mil /h';
      desc.textContent = data.list[0].weather[0].description;
      temp.textContent = Math.trunc(data.list[0].main.temp - 273.15) + ' ° C';
    })
    .catch(error => alert('Wrong City Name'));
};
btn.addEventListener('click', function () {
  const val = document.querySelector('input').value;
  show(val);
});
