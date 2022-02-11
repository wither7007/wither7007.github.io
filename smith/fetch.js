// let TemUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units="imperial"&appid=${key}`
let one = "https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"

const requestOnes = axios.get(Turl);
const requestTwos = axios.get(Durl);



axios.all([requestOnes, requestTwos]).then(axios.spread((...responses) => {
    const responseOnes = responses[0].data
    const responseTwos = responses[1].data
    // debugger
    rText(responseOnes, responseTwos)
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

