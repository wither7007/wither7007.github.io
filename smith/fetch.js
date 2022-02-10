let TemUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units="imperial"&appid=${key}`
let one = "https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"

const requestOne = axios.get(TemUrl);
const requestTwo = axios.get(url);

var me
// let one = "https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
// let two = "https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt"
// let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"

// const requestOne = axios.get(one);
// const requestTwo = axios.get(two);
// const requestThree = axios.get(three);
requestOne.then(response => {
}).catch(error => {
})
axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
    const responseOne = responses[0]
    const responseTwo = responses[1]
    const responesThree = responses[2]
    // use/access the results 
})).catch(errors => {
    // react on errors.
})
requestTwo.then(response => {
}).catch(error => {
})

// let Turl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units="imperial"&appid=${key}`
// fetchMoviesJSON().then(movies => {
//     movies; // fetched movies
// }
// }
// const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
// const posts = await response.json()
// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(res => res.json())

async function getUserAsync(name) {
    let response = await fetch(`https://api.github.com/users/${name}`);
    let data = await response.json()
    return data;
}
async function getWeatherAsync() {
    let response = await fetch(Turl);
    let data = await response.json()
    return data;
}

getWeatherAsync()
    .then(data => me = data);

// getUserAsync('wither7007')
//     .then(data => me = data);

// const start = async function (a, b) {
//     // const result = await myfunction('test', 'test');
//     await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const posts = await response.json()
// }

// }
axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
    const responseOne = responses[0].data
    const responseTwo = responses[1].data
    // debugger
    rText(responseOne, responseTwo)
    // console.log(responseOne.data)
    // console.log(responseTwo.data.values)
    me = (responseTwo.data.values)


    // use/access the results 
})).catch(errors => {
    // react on errors.
})

function rText(a, b) {
    console.log("this is success")
    debugger
    console.log(a, b)
}

