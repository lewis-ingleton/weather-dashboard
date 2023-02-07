// global variables 
const key = '5d4862fa13354a7e3c01431d3829c345';


// Show today's date and time 
let currentDate = moment();
$(document).ready(function () {
    $('#currentDay').text(currentDate.format('Do MMMM YYYY, h:mm a'));
});

// Get current weather
$('#search-button').on('click', function (event) {
    let city = $('#search-input').val();
    event.preventDefault();
    const currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&lang=en&limit=4&appid=' + key;
    console.log(currentWeatherURL)

    $.ajax({
        url: currentWeatherURL,
        method: "GET"
    }).then(function (response) {
        //Reset each time submit is clicked
        $('#current-weather-card').empty();

        // Fetch data from API 
        let city = (response.name + ', ' + response.sys.country)
        let currentTemp = Math.round((response.main.temp)) + '°C';
        let currentWind = (response.wind.speed) + ' m/s';
        let currentHumidity = (response.main.humidity) + '%';

        // Inner text + append
        $('.hidden').removeClass('hidden')
        $('#current-weather-card').append('<h3>Current weather for ' + city + '</h3>');
        $('#current-weather-card').append('<p>Temperature: ' + currentTemp + '</p>');
        $('#current-weather-card').append('<p>Wind speed: ' + currentWind + '</p>');
        $('#current-weather-card').append('<p>Humidity: ' + currentHumidity + '</p>');
    })
})

// Get forecasted weather 
$('#search-button').on('click', function (event) {
    let city = $('#search-input').val();
    event.preventDefault();
    const forecastURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&lang=en&limit=3&appid=' + key;
    console.log(forecastURL)

    $.ajax({
        url: forecastURL,
        method: "GET"
    }).then(function (response) {
        //Reset each time submit is clicked
        $('#forecast-wrapper').empty();

        for (i = 7; i < response.list.length; i += 8) {
            let getDate = (response.list[i].dt_txt)
            let convertedDate = moment(getDate).format('DD MMM YYYY');
            let temp = Math.round((response.list[i].main.temp)) + '°C'
            let wind = (response.list[i].wind.speed) + ' m/s'
            let humidity = (response.list[i].main.humidity) + '%'

            const newCard = $('<div>');
            const showHeader = $('<h3>').text('5-day forecast');
            const showDate = $('<h5>').text(convertedDate);
            const showTemp = $('<p>').text('Temperature: ' + temp);
            const showWind = $('<p>').text('Wind speed: ' + wind);
            const showHumidity = $('<p>').text('Humidity: ' + humidity);
            $('#forecast-wrapper').append(newCard, showDate, showTemp, showWind, showHumidity)


        }
    })
})


//PREVIOUSLY WORKING CODE 
// $.ajax({
//     url: forecastURL,
//     method: "GET"
// }).then(function (response) {
//     for (i = 7; i < response.list.length; i += 8) {
//         let getDate = (response.list[i].dt_txt)
//         let convertedDate = moment(getDate).format('DD MMM YYYY');
//         let temp = Math.round((response.list[i].main.temp)) + '°C'
//         let wind = (response.list[i].wind.speed) + ' m/s'
//         let humidity = (response.list[i].main.humidity) + '%'
//         const newCard = $('<div>')
//         const showDate = $('.forecast-date').append(convertedDate);
//         const showTemp = $('.forecast-card').append('<p>Temperature: ' + temp + '</p>');
//         const showWind = $('.forecast-card').append('<p>Wind speed: ' + wind + '</p>');
//         const showHumidity = $('.forecast-card').append('<p>Humidity: ' + humidity + '</p>');
//         $('#forecast-wrapper').append(showDate, showTemp, showWind, showHumidity)

//         console.log(convertedDate)
//     }
// })