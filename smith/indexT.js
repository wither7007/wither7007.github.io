replace = document.getElementById('replace')
var matches
url = "https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/work?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  console.log(hour)
  var second = time.getSeconds();
  var temp = '' + ((hour > 12) ? hour - 12 : hour);
  if (hour == 0)
    temp = '12';
  temp += ((minute < 10) ? ':0' : ':') + minute;
  temp += ((second < 10) ? ':0' : ':') + second;
  temp += (hour >= 12) ? ' P.M.' : ' A.M.';
  return temp;
}
var week = dayjs().add(7, 'day')
var today = dayjs().format('ddd MM/D/YYYY') // '25/01/2019'
console.log(today)
var dt = dayjs('2019-01-25').format('DDD/MM/YYYY') // '25/01/2019'
const sendGetRequest = async () => {
  try {
    const resp = await axios.get(url);
    // console.log(resp.data);
    myRes = resp.data
    myVal = myRes.values
    outputHTML(myVal)
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

te = JSClock()
var H = ""
sendGetRequest();
const outputHTML = matches => {
  console.log(matches)
  matches.forEach(element => {
    console.log(element)
    // debugger
    H +=
      `
<div class="card card-body">
${today}
<b>${element[2]} </b>
      ${element[0]}  ${element[1]} 

</div>


    `
    replace.innerHTML = H
    // console.log(H)
  });
}
