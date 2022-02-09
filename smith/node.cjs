// const fetch = require('node-fetch');
import fetch from 'node-fetch';
// fetch('https://google.com')
//     .then(res => res.text())
//     .then(text => console.log(text));
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        console.log("First user in the array:");
        console.log(json[0]);
        console.log("Name of the first user in the array:");
        console.log(json[0].name);
    })