

const key = '5d4862fa13354a7e3c01431d3829c345';
let city = 'london';
const currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&lang=en&limit=3&appid=' + key;
console.log(currentWeatherURL)





// Get weather now
$.ajax({
    url: currentWeatherURL,
    method: "GET"
}).then(function (response) {

    // SET UP MOMENT.JS FOR TODAY'S DATE AND THEN ADD TO VARIABLE 
    // let todaysDate = 
    let city = (response.name + ', ' + response.sys.country)
    let currentTemp = Math.round((response.main.temp)) + '°C';
    let currentWind = (response.wind.speed) + ' m/s';
    let currentHumidity = (response.main.humidity) + '%';

    // Inner text + append
    $('#todays-weather').text('Current weather for ' + city);
    $('#current-weather-card').append('<p>Temperature: ' + currentTemp + '</p>');
    $('#current-weather-card').append('<p>Wind speed: ' + currentWind + '</p>');
    $('#current-weather-card').append('<p>Humidity: ' + currentHumidity + '</p>');
})

//// APPEND TO currentWeatherCard
const forecastURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&lang=en&limit=3&appid=' + key;
console.log(forecastURL)
// Get forecast
$.ajax({
    url: forecastURL,
    method: "GET"
}).then(function (oneDay) {
    // Forecast data from API
    let getDate = (oneDay.list[8].dt_txt)
    console.log(getDate)




    let temp = Math.round((oneDay.list[8].main.temp)) + '°C'
    console.log(temp)
    let wind = (oneDay.list[8].wind.speed) + ' m/s'
    console.log(wind)
    let humidity = (oneDay.list[8].main.humidity) + '%'
    console.log(humidity)

    // Inner text + append 
    $('.forecast-date').text(getDate)
    $('#card-body-1').append('<p>Temperature: ' + temp + '</p>');
    $('#card-body-1').append('<p>Wind speed: ' + wind + '</p>');
    $('#card-body-1').append('<p>Humidity: ' + humidity + '</p>');

})



// }).then(function (twoDays) {
//     let temp = Math.round((twoDays.list[16].main.temp)) + '°C'
//     console.log(temp)
//     let wind = (twoDays.list[16].wind.speed) + ' m/s'
//     console.log(wind)
//     let humidity = (twoDays.list[16].main.humidity) + '%'
//     console.log(humidity)
// }).then(function (threeDays) {
//     let temp = Math.round((threeDays.list[24].main.temp)) + '°C'
//     console.log(temp)
//     let wind = (threeDays.list[24].wind.speed) + ' m/s'
//     console.log(wind)
//     let humidity = (threeDays.list[24].main.humidity) + '%'
//     console.log(humidity)
// }).then(function (fourDays) {
//     let temp = Math.round((fourDays.list[32].main.temp)) + '°C'
//     console.log(temp)
//     let wind = (fourDays.list[32].wind.speed) + ' m/s'
//     console.log(wind)
//     let humidity = (fourDays.list[32].main.humidity) + '%'
//     console.log(humidity)
// }).then(function (fiveDays) {
//     let temp = Math.round((fiveDays.list[40].main.temp)) + '°C'
//     console.log(temp)
//     let wind = (fiveDays.list[40].wind.speed) + ' m/s'
//     console.log(wind)
//     let humidity = (fiveDays.list[40].main.humidity) + '%'
//     console.log(humidity)
// })

// 1 day in advance
// list[8]
// 2 day in advance
// list[16]
// 3 day in advance
// list[24]
// 4 day in advance
// list[32]
// 5 day in advance
// list[40]



// // get currentWeather
// const currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&lang=en&limit=3&appid=' + key;
// .ajax({
//     url: currentWeatherURL,
//     url: forecastURL,
//     method: "GET"
// }).then(function (response) {
//     // let today = Math.round((response.main.temp))
//     // console.log(today + ' hello')
// })







//list.


// $.ajax({
//     url: cityURL,
//     method: "GET"
// }).then(function (response) {
//     let convertedLat = (response[0].lat);
//     let convertedLon = (response[0].lon);
//     console.log(convertedLat)
//     console.log(convertedLon)
//     let units = 'metric';
//     let lang = 'en';
//     const queryURL = 'api.openweathermap.org/data/2.5/forecast?lat=' + convertedLat + '&lon=' + convertedLon + '&units=' + units + '&lang=' + lang + '&appid=' + key;
//     console.log(queryURL)
// })




// if user searches london > 
// find lat and lon > 
// use the lat and lon data from 





// then display weather based on lat and long from searching city name

// const weatherURL = 'api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=' +key;
// fun

// const fetchForecast = () => {
//     let lang = 'en';
//     let units = 'metric';
//     let url = 'api.openweathermap.org/data/2.5/forecast?';
// }



// Geo to city converter 
// http://api.openweathermap.org/geo/1.0/direct? 
// Example: http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=${key}

// const fetchTodayWeather = () => {


// }

// const showWeather = () => {


// }




// #today = today's weather 


// #forecast = 5-day forecast 


// #search-button = button to call api 
// could think about adding 'get current location' button. using geo-targeted location