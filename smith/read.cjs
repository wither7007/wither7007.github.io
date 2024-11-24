const filename = "/projects/wither7007.github.io/streets/data.json"
console.log(filename)
// fetch(filename)
//     .then(response => response.text())
//     .then(data => {
//         // Do something with your data
//         console.log(data);
//     });
// const fs = require('fs')

// fs.readFile(filename)
const fs = require('fs')

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})