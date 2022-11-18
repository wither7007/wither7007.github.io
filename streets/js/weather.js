
function fetchWeather() {
    //use the values from latitude and longitude to fetch the weather
    // let lat = 42.98
    // let lon = -81.23
    let lat = 45.01977340933548
    let lon = -93.42030115198955
    let key = 'c1226a736dac2e52a2c456f0dc2c03ba';
    let lang = 'en';
    let units = 'imperial';
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;
    //fetch the weather
    fetch(url)
        .then((resp) => {
            if (!resp.ok) throw new Error(resp.statusText);
            return resp.json();
        })
        .then((data) => {
            showWeather(data);
        })
        .catch(console.err);
}
function showWeather(resp) {
    // debugger
    let row = document.querySelector('#weather');
    //clear out the old weather and add the new
    // row.innerHTML = '';
    weather = resp.daily.map((day, idx) => {
        if (idx <= 2) {
            let dt = new Date(day.dt * 1000); //timestamp * 1000
            // debugger
            let sr = new Date(day.sunrise * 1000).toTimeString();
            let ss = new Date(day.sunset * 1000).toTimeString();
            // debugger
            return `<div class="item">
              ${dt.toDateString().substring(0, 3)}
                   Low ${Math.trunc(day.temp.min)}&deg;
                </div>
              </div>
            </div>
            <small class="yellow-text"> Test release </small>
          </div>`;
        }
    })
        .join(' ');
    row.innerHTML = weather
}