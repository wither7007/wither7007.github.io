// const fetch = require('node-fetch');
import fetch from 'node-fetch';
// fetch('https://google.com')
//     .then(res => res.text())
//     .then(text => console.log(text));
url = 'api.openweathermap.org/data/2.5/weather?lat=45.0195&lon=-93.420&appid=c1226a736dac2e52a2c456f0dc2c03ba'
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        console.log("First user in the array:");
        console.log(json[0]);
        console.log("Name of the first user in the array:");
        console.log(json[0].name);
    })