const search = document.getElementById('search')
const matchList = document.getElementById('match-list')
console.log("ok")
const searchStates = async searchText => {
    // curl "https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/menu?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"

    const res = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/menu?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw')
    const states = await res.json()
    debugger
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi')
        return state.name.match(regex) || state.abbr.match(regex)
    })
    if (searchText.length == 0) {
        matches = []
        matchList.innerHTML = ''
    }
    html = outputHTML(matches)
    console.log('mataches are', matches)
}
const outputHTML = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
         <div class="card card-body mb-1">
         <h4>${match.name} (${match.abbr}) <span class="text-primary" > ${match.capital}</span> </h4>
         </div>
        `).join('')
        console.log(html)
        matchList.innerHTML = html

    }

}
search.addEventListener('input', () => searchStates(search.value))