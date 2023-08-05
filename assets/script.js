// global variables 
const key = '5d4862fa13354a7e3c01431d3829c345';

$(document).ready(function () {
    // Show today's date and time 
    let currentDate = moment();
    $('#currentDay').text(currentDate.format('Do MMMM YYYY, H:mm'));

    // Get current weather
    $('#search-button').on('click', function (event) {
        event.preventDefault();
        let city = $('#search-input').val().trim();

        const currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&lang=en&appid=' + key;

        $.ajax({
            url: currentWeatherURL,
            method: "GET"
        }).then(function (response) {
            $('#current-weather-card').empty();

            // Fetch data from API 
            let cityName = response.name + ', ' + response.sys.country;
            let icon = response.weather[0].icon;
            const iconIMG = 'https://openweathermap.org/img/wn/' + icon + '.png';
            let currentTemp = Math.round(response.main.temp) + '°C';
            let currentWind = response.wind.speed + ' m/s';
            let currentHumidity = response.main.humidity + '%';
            const searchHistoryButton = $('<button>').text(cityName).addClass('search-history-button');

            // Append data to elements
            $('.hidden').removeClass('hidden');
            $('#current-weather-card').append('<h3>Current weather for ' + cityName + '</h3>');
            $('#current-weather-card').append('<img src=' + iconIMG + '></img>');
            $('#current-weather-card').append('<p>Temperature: ' + currentTemp + '</p>');
            $('#current-weather-card').append('<p>Wind speed: ' + currentWind + '</p>');
            $('#current-weather-card').append('<p>Humidity: ' + currentHumidity + '</p>');
            $('#history').prepend(searchHistoryButton);
        });

        // Get forecasted weather 
        const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&lang=en&appid=' + key;

        $.ajax({
            url: forecastURL,
            method: "GET"
        }).then(function (response) {
            $('#forecast-wrapper').empty();
            $('#forecast-header').empty();

            const showHeader = $('<h3>').text('5-day forecast');
            $('#forecast-header').append(showHeader);

            for (let i = 7; i < response.list.length; i += 8) {
                let getDate = response.list[i].dt_txt;
                let convertedDate = moment(getDate).format('DD MMM YYYY');
                let temp = Math.round(response.list[i].main.temp) + '°C';
                let FCicon = response.list[i].weather[0].icon;
                const FCiconIMG = 'https://openweathermap.org/img/wn/' + FCicon + '.png';
                let wind = response.list[i].wind.speed + ' m/s';
                let humidity = response.list[i].main.humidity + '%';

                // Creating new card to append data to
                const newCard = $('<div>').addClass('forecast-card');
                // Data items to be appended to card
                const showDate = $('<h5>').text(convertedDate);
                const showIcon = $('<img>', { src: FCiconIMG });
                const showTemp = $('<p>').text('Temperature: ' + temp);
                const showWind = $('<p>').text('Wind speed: ' + wind);
                const showHumidity = $('<p>').text('Humidity: ' + humidity);
                newCard.append(showDate, showIcon, showTemp, showWind, showHumidity);
                $('#forecast-wrapper').append(newCard);
            }
        });
    });
});
