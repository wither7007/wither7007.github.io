var now = moment();
let lat = 45.01977340933548
let lon = -93.42030115198955
let units = "imperial"
let lang = 'en'
let wKey = 'c1226a736dac2e52a2c456f0dc2c03ba';
let sKey = 'AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw'
let Turl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units='imperial'&appid=${wKey}`
let Durl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units='imperial'&appid=${wKey}`
// let Durl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${wKey}&units=${units}&lang=${lang}`;
var url = `https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/menu?alt=json&key=${sKey}`
var kelvin = 0
const requestOne = axios.get(Turl);
const requestTwo = axios.get(url);
const requestThree = axios.get(Durl);
axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
  const responseOne = responses[0].data

  const responseTwo = responses[1].data
  console.log(responseTwo)
  const responseThree = responses[2].data



  // rText(responseOne, responseTwo)
  ObjtoHtml(responseTwo, responseOne, responseThree)
  // console.log(responseOne.data)
  // console.log(responseTwo.data.values)
  me = (responseTwo.data.values)


  // use/access the results 
})).catch(errors => {
  // react on errors.
})


// const requestOne = axios.get(TemUrl);
// const requestWeather = axios.get(Turl);
function ktof(k) {
  var one = k - 273.5
  var two = one * (9 / 5)
  var three = two + 32
  return Math.round(three)
}
var html = ""
// console.log("moment date", now.format('dddd MMMM Do'));
// console.log(`${now.add('3', 'days')}`)
// console.log(`Adding three days: ${now.format('ll')}`);

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
}
console.log(timeConverter(0));


const objArray = []

function ObjtoHtml(xy, zz, yy) {
  gg = yy.daily
  gg.forEach(a => { console.log(ktof(a.temp.min), ktof(a.temp.max), timeConverter(a.dt)) })
  xy.values.forEach((a, i) => {
    // console.log(`a is ${a}`)
    html += `
            <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}"
          aria-expanded="true" aria-controls="collapseOne">
          ${moment().add(i, 'days').format('dddd MMMM Do')}
          <br>
          
         ${i == 0 ? "Temp: " + ktof(zz.main.temp) + "&deg" : ''}
        </button>
      </h2>
      <div id="collapse${i}" class="accordion-collapse collapse ${i == 0 ? 'show' : ''} 
      " aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
        
        <b>Meals</b>
        <br>
          ${a[1]}
          <br> <i class="fa-thin fa-block"></i><br>
         ${a[2]}
                   <br>  <br>
         ${a[3]}
          <hr>
          <b>Trips</b>
          <br>
                   ${a[4]}
          <br>
                   ${a[5]}
        </div>
      </div>
    </div>


          `
  })
  // console.log(html)
  var hText = document.getElementById('replace')
  hText.innerHTML = html

}