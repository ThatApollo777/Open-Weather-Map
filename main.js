'use strict';
const APIKEY = '59cd2a732de7fbb4b4f7477b1e1e63f1';
function getWeather () {
    let city = document.getElementById('city').value;
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKEY;
    fetch(url).then(res=>res.json()).then(data=>{
        document.getElementById('max'      ).innerText = Math.round(data.main.temp_max - 273.15) + ' C';
        document.getElementById('min'      ).innerText = Math.round(data.main.temp_min - 273.15) + ' C';
        document.getElementById('condition').innerText = data.weather[0].description;
    });
}