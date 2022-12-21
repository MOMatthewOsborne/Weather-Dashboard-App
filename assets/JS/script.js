var apiKey = '&appid=88adb8f5ba3b0398e706599889afef78'
var cityName = "london"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + apiKey;

// var lat = "52.205276";
// var lon = "0.119167";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

        console.log(response)
    })