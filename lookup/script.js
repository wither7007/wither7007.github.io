var search = document.getElementById('search')
const matchList = document.getElementById('match-list')
console.log("ok")
search.focus()
function brad(name) {

    console.log(`name from brad: ${name}`)
    // return name == "brad"
    return "brad"
}
search.focus()
const searchStates = async searchText => {
    // curl "https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/menu?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"

    console.log(`search text is:  ${searchText}`)
    const res = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/menu?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw')

    const states = await res.json()

    // search = ''
    values = states.values
    // values.forEach(element => {
    //     console.log(element)

    // });
    va = values.filter(p => p[0] == "")
    // values.forEach(w => console.log(w))
    // fName = values[0].filter(brad(search.value))
    fName = values.filter(p => p[0] == searchText)
    matchList.innerHTML = fName[0][1]
    console.log("fname is: ", fName)
    outputHTML(fName)
    // debugger
    // let matches = states.filter(state => {
    //     const regex = new RegExp(`^${searchText}`, 'gi')
    //     return state.name.match(regex) || state.abbr.match(regex)
    // })
    // if (searchText.length == 0) {
    //     matches = []
    //     matchList.innerHTML = ''
    // }
    // html = outputHTML(matches)
    // console.log('mataches are', matches)
}
const outputHTML = matches => {
    console.log(matches)
    if (matches.length > 0) {
        const html = matches.map(match => `
         <div class="card card-body mb-1">
         <h4>${match[1]} </h4>
         </div>
        `).join('')
        console.log(html)
        matchList.innerHTML = html

    }

}
search.addEventListener('input', () => searchStates(search.value))