var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"
var now = moment();
var html = ""
// console.log("moment date", now.format('dddd MMMM Do'));
// console.log(`${now.add('3', 'days')}`)
// console.log(`Adding three days: ${now.format('ll')}`);

const objArray = []
var url = 'https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/menu?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw'
// console.log(moment().add(1, 'weeks').format("dddd [the] Do YYYY "))
axios.get(url)
  .then(function (response) {
    // handle success
    var xy = response.data
    console.log(`xy is ${xy}`)
    var zz = xy.values
    ObjtoHtml(xy)
    console.log(xy);
  })

function ObjtoHtml(xy) {
  // xy.values.forEach(a => console.log(a[1]))
  // rValues = xy.values
  xy.values.forEach((a, i) => {
    console.log(`a is ${a}`)
    html += `
            <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}"
          aria-expanded="true" aria-controls="collapseOne">
          ${moment().add(i, 'days').format('dddd MMMM Do')}
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