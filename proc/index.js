// import fetch from 'node-fetch';
// const fs = require('fs')
// import obj from "data.json"
import fs from 'fs'
import process from 'process'
const data = fs.readFileSync('data.json',
    { encoding: 'utf8', flag: 'r' });

// Display the file data
const jdata = JSON.parse(data);
console.log(jdata[2]);
// process.exit(1)
fs.readFile('demo.txt', (err, data) => {
    console.log(data);
})
console.log('done')
// process.exit(1)
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})
console.log('done')
// process.exit(1)

let lat = 45.01977340933548
let lon = -93.42030115198955
let units = "imperial"
let lang = 'en'
let wKey = 'c1226a736dac2e52a2c456f0dc2c03ba';
let sKey = 'AIzaSyCZ3y8Es42zvNGON7ezA6q4dxe8RNcyQIs'
let Turl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units='imperial'&appid=${wKey}`
let Durl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units='imperial'&appid=${wKey}`
// let Durl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${wKey}&units=${units}&lang=${lang}`;
var url = `https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/json?alt=json&key=${sKey}`
var kelvin = 0
fetch(url)
    .then(resp => resp.json())
    .then(function (data) {
        console.log(data)
    })

function SortArray(x, y) {
    console.log(x[0], y[0])
    if (x[0] < y[0]) { return -1; }
    if (x[0] > y[0]) { return 1; }
    return 0;
}
function processN(dat) {
    var s = dat.sort(SortArray);
    string = s.map((item, i) => `${i} ${i == 3 ? 'style="color:blue"' : ''}  ${item[0]}  ${item[1]}<br>${item[2]} <hr><br><hr> `).join('\n')
    document.getElementById('txt').innerHTML = string
    console.log('done')
}
var a = [
    { FirsName: "Ellie", LastName: "Williams" },
    { FirstName: "Lara", LastName: "Croft" }
];
// var s = dat.sort(SortArray);
// console.log(s);
