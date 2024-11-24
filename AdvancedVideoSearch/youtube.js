function SaveDataToLocalStorage(data) {
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('session')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Alert the array valuei
    console.log(a);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('session', JSON.stringify(a));
}
const localStore = []
const allItems=[]
var localString=allItems.map((a)=>{a.id})
i =JSON.parse(localStorage.getItem('youtubes')) 
if (JSON.parse(localStorage.getItem('youtubes'))) {
    console.log("youtubes yes")
    allItems.push(JSON.parse(localStorage.getItem('youtubes')))
}

// allItems.forEach(v=>console.log(v.id))
// const notes = JSON.parse(localStorage.getItem('notes'))
document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target
    text = target.textContent || target.innerText;
    if (target.getAttribute("data-id")) {
        target.classList.toggle("bg-light");
        id = target.dataset.id
        desc = target.dataset.desc
        duration = target.dataset.duration
        // console.log(id)
        item = 
            {
                "id": id,
                "desc": desc,
                "duration": duration
            }
        
        allItems.push(item)
        // localStore.push(id)
        localStorage.setItem('youtubes', JSON.stringify(allItems))
        // debugger
        // data attribute doesn't exist or is empty
    }
    else {
        console.log("no")
    }

}, false);
window.onload = function () {
    document.getElementById("subject").focus();
    document.getElementById('formS').addEventListener('submit', sumClick)
}
document.getElementById('subSubject').addEventListener('click', mReload);
function mReload() {
    location.reload()
}

url = ""
function sumClick(event) {
    // document.getElementById('subject').value="john lennon"
    sub = document.getElementById('subject').value
    //replace spaces with plus sign for search api
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
// /*
// const div = document.createElement('div');
// div.className = 'foo';

// // our starting state: <div class="foo"></div>
// console.log(div.outerHTML);

// // use the classList API to remove and add classes
// div.classList.remove("foo");
// div.classList.add("anotherclass");

// // <div class="anotherclass"></div>
// console.log(div.outerHTML);

// // if visible is set remove it, otherwise add it
// div.classList.toggle("visible");

// // add/remove visible, depending on test conditional, i less than 10
// div.classList.toggle("visible", i < 10);

// console.log(div.classList.contains("foo"));

// // add or remove multiple classes
// div.classList.add("foo", "bar", "baz");
// div.classList.remove("foo", "bar", "baz");

// // add or remove multiple classes using spread syntax
// const cls = ["foo", "bar"];
// div.classList.add(...cls);
// div.classList.remove(...cls);

// // replace class "foo" with class "bar"
// div.classList.replace("foo", "bar");
//             // "publishedAt": "2019-09-23T15:00:22Z",
        // bg = "rgb(0, 255, 255)"
        // if (target.style.backgroundColor === 'rgb(0, 255, 255)') {
        //     target.classList.add("bg-light")
        //     // $0.classList.add("bg-light")
        //     // $0.style.backgroundColor === bg
        //     // $0.style.backgroundColor 
        //     target.style.backgroundColor = bg
        // } else {
        //     target.style.backgroundColor = bg
        //     target.classList.remove("bg-light")
        // }
        // target.style.backgroundColor = bg