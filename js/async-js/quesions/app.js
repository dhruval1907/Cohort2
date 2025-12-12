
function  getWeather(city){
    let apikey = `1cc953bb42da005a51a8ee271cc092f6`

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).then(raw=>raw.json())
    .then(function(result){
        console.log(result);
    })
}

getWeather("london")