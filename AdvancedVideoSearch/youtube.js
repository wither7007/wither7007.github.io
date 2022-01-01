localStore = []
allItems = []
// const notes = JSON.parse(localStorage.getItem('notes'))
document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target
    text = target.textContent || target.innerText;
    if (target.getAttribute("data-id")) {
        console.log("yes")
        id = target.dataset.id
        desc = target.dataset.desc
        duration = target.dataset.duration
        console.log(id)
        item = [
            {
                "id": id,
                "desc": desc,
                "duration": duration
            }
        ]
        allItems.push(item)
        localStore.push(id)
        localStorage.setItem('notes', text)
        // data attribute doesn't exist or is empty
    }
    else {
        console.log("no")
    }

}, false);
window.onload = function () {
    document.getElementById("subject").focus();
}
document.getElementById('subSubject').addEventListener('click', mReload);
function mReload() {
    location.reload()
}

document.getElementById('formS').addEventListener('submit', sumClick)
url = ""
function sumClick(event) {
    sub = document.getElementById('subject').value
    sub = sub.replace(/\s+/g, '+');
    // alert(document.getElementById('subject').value)
    // alert("form submitted")
    event.preventDefault()

    // alert(sub)
    url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyC4Yhlk-ADYBzSyiqD0QEgrvjB3plD4jao&part=snippet&q=${sub}&maxResults=10&publishedAfter=2021-12-21T02:49:05.100Z&publishedBefore=2021-12-21T02:49:05.100Z&order=relevance&videoDuration=long&type=video`
    console.log(url)
    // document.getElementById('test').innerHTML = url
    getYouTube(url)
}
apiKey = "AIzaSyC4Yhlk-ADYBzSyiqD0QEgrvjB3plD4jao"
dur = "https://www.googleapis.com/youtube/v3/videos?id=k8JD1A9uVaM&part=contentDetails&key=AIzaSyC4Yhlk-ADYBzSyiqD0QEgrvjB3plD4jao"
xy = {}
xd = {}
duration = ""
// localStorage.setItem('notes', JSON.stringify(allItems))
// const todos = JSON.parse(localStorage.getItem('notes'))
// localStorage.clear()
function getYouTube(url) {
    axios.get(url)
        .then(function (response) {
            // handle success
            xy = response.data
            ObjtoHtml(xy)
            // console.log(xy);
        })
    function ObjtoHtml(lines) {
        // console.log("lines are: ", lines)
        // debugger
        lines.items.forEach(a => {
            // console.log(a.id.videoId)
            vId = a.id.videoId
            dur = `https://www.googleapis.com/youtube/v3/videos?id=${vId}&part=contentDetails&key=AIzaSyC4Yhlk-ADYBzSyiqD0QEgrvjB3plD4jao`
            // console.log(dur)
            axios.get(dur)
                .then(function (durRes) {
                    xd = durRes.data
                    duration = xd.items[0].contentDetails.duration
                    document.getElementById('mainItem').innerHTML +=
                        `<div class="col">
                <div class="p-3 border bg-light" data-id=${a.id.videoId} data-desc="${a.snippet.description}" data-duration=${duration}>
                    https://www.youtube.com/watch?v=${a.id.videoId}<br>
                    Video id is : ${a.id.videoId}<br>
                    Channel: <a target="_blank" href="https://www.youtube.com/channel/${a.snippet.channelId}">${a.snippet.channelTitle}</a>
                    <hr> ${a.snippet.description}<br>
                    ${a.snippet.publishedAt}
                    <br>Duration is ${duration} <br> <a href="https://www.youtube.com/watch?v=${a.id.videoId}"
                        target="_blank">video</a>
                </div>
            </div> `
                    // console.log("duration is " + duration)
                })
        })
    }
}
res = ''
resArray = []
console.log("script start")
            // "publishedAt": "2019-09-23T15:00:22Z",