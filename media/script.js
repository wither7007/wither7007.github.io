// console.log('this is my github script')
// console.log('https://raw.githubusercontent.com/wither7007/htmlTemplate/main/html/global.js')
// console.log('')
// let mydeliver = 'https://cdn.jsdelivr.net/gh/wither7007/htmlTemplate/html/script.js'
// let myd = document.createElement('div')
// myd.textContent = mydeliver
// document.body.prepend(myd)
// document.addEventListener('DOMContentLoaded', function () {
//     console.log('DOMContentLoaded');
// });

var w = window.innerWidth;
var h = window.innerHeight;
var size = document.querySelector('#size');
size.innerHTML = w;
size.innerHTML = window.innerWidth + " x " + window.innerHeight

window.addEventListener('resize', function () {
    // Get the new window width
    const width = window.innerWidth;

    // Do something with the new width

    size.innerHTML = window.innerWidth + " x " + window.innerHeight

    // Add your logic here based on the window width
    if (width < 768) {
        // Code for small screens
    } else {
        // Code for larger screens
    }
});

