// const fetch = require('node-fetch');
import fetch from 'node-fetch';
// fetch('https://google.com')
//     .then(res => res.text())
//     .then(text => console.log(text));
let lat = 45.01977340933548
let lon = -93.42030115198955
let key = 'c1226a736dac2e52a2c456f0dc2c03ba';
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units="imperial"&appid=${key}`
console.log(url)
fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        console.log(json.main)
        // console.log("First user in the array:");
        // console.log(json[0]);
        // console.log("Name of the first user in the array:");
        // console.log(json[0].name);
    })
// url = 'http://api.openweathermap.org/data/2.5/weather?q={}&appid={}&units=metric'.format(city, key)