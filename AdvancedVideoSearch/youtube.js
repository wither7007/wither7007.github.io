
window.onload = function () {
    document.getElementById("subject").focus();
}
// sub = document.getElementById('subject').focus()
// document.getElementById('subSubject').addEventListener('click', sumClick)

document.getElementById('formS').addEventListener('submit', sumClick)
url = ""
function sumClick(event) {
    sub = document.getElementById('subject').value
    // alert(document.getElementById('subject').value)
    // alert("form submitted")
    event.preventDefault()

    // alert(sub)
    url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyC4Yhlk-ADYBzSyiqD0QEgrvjB3plD4jao&part=snippet&q=${sub}&maxResults=5&publishedAfter=2021-12-21T02:49:05.100Z&publishedBefore=2021-12-21T02:49:05.100Z&order=relevance&videoDuration=long&type=video`
    console.log(url)
    document.getElementById('test').innerHTML = url
    getYouTube(url)
}
apiKey = "AIzaSyC4Yhlk-ADYBzSyiqD0QEgrvjB3plD4jao"
dur = "https://www.googleapis.com/youtube/v3/videos?id=k8JD1A9uVaM&part=contentDetails&key=AIzaSyC4Yhlk-ADYBzSyiqD0QEgrvjB3plD4jao"
xy = {}
xd = {}
duration = ""
// url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyC4Yhlk-ADYBzSyiqD0QEgrvjB3plD4jao&part=snippet&q=axiosjavascript&maxResults=5&publishedAfter=2021-12-21T02:49:05.100Z&publishedBefore=2021-12-21T02:49:05.100Z&order=relevance&videoDuration=long&type=video"
function getYouTube(url) {
    document.getElementById('test2').innerHTML = 'The thing that hath been, it is that which shall be; and that which is done is that which shall be done: and there is no new thing under the sun.'
    axios.get(url)
        .then(function (response) {
            // handle success
            xy = response.data
            ObjtoHtml(xy)
            console.log(xy);
        })
    function ObjtoHtml(lines) {
        console.log("lines are: ", lines)
        // debugger
        lines.items.forEach(a => {
            // console.log(a.id.videoId)
            vId = a.id.videoId
            dur = `https://www.googleapis.com/youtube/v3/videos?id=${vId}&part=contentDetails&key=AIzaSyC4Yhlk-ADYBzSyiqD0QEgrvjB3plD4jao`
            console.log(dur)
            axios.get(dur)
                .then(function (durRes) {
                    xd = durRes.data
                    duration = xd.items[0].contentDetails.duration
                    document.getElementById('test2').innerHTML +=
                        `Video id is : ${a.id.videoId}<hr> ${a.snippet.description}<br>
                        ${lines.items[1].snippet.publishedAt}
                        <br>Duration is ${duration} <br>  <a href="https://www.youtube.com/watch?v=${lines.items[1].id.videoId}" target="_blank">video</a>`
                    console.log("duration is " + duration)
                })
        })
    }
}
res = ''
resArray = []
console.log("script start")
            // "publishedAt": "2019-09-23T15:00:22Z",