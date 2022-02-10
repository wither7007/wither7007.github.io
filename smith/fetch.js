// let TemUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units="imperial"&appid=${key}`
let one = "https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"

const requestOne = axios.get(TemUrl);
// const requestTwo = axios.get(url);



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

