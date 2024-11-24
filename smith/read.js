import fetch from 'node-fetch';

// const response = await fetch('https://api.github.com/users/github');
// const data = await response.json();

// console.log(data);
const filename = "style.css"
// process.exit()
console.log(filename)
fetch(filename)
    .then(response => response.text())
    .then(data => {
        // Do something with your data
        console.log(data);
    });

// fs.readFile(filename)
// const fs = require('fs')

// fs.readFile(filename, 'utf8', (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data)
// })