var apiKey = '&appid=88adb8f5ba3b0398e706599889afef78'
var cityName = "paris"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + apiKey;

function convertKtoC(kTemp) {
    kTemp -= 273.15
    return kTemp
}

// var lat = "52.205276";
// var lon = "0.119167";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

        // console.log(response)

        $("#City1").html(response.name + "<img src=http://openweathermap.org/img/w/" + response.weather[0].icon + ".png>");
        $("#temp1").text("Temperature: " + convertKtoC(response.main.temp).toFixed(2) + "C");
        $("#wind1").text("Wind: " + response.wind.speed + " KPH");
        $("#humidity1").text("Humidity: " + response.main.humidity + "%");
    })

var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + apiKey;

$.ajax({
    url: fiveDayUrl,
    method: "GET"
})
    .then(function (response) {

        console.log(response)

        $("#City2").html(response.name + "<img src=http://openweathermap.org/img/w/" + response.weather[0].icon + ".png>");
        $("#temp2").text("Temperature: " + convertKtoC(response.list[0].main.temp).toFixed(2) + "C");
        $("#wind2").text("Wind: " + response.wind.speed + " KPH");
        $("#humidity2").text("Humidity: " + response.main.humidity + "%");

        $("#City3").html(response.name + "<img src=http://openweathermap.org/img/w/" + response.weather[0].icon + ".png>");
        $("#temp3").text("Temperature: " + convertKtoC(response.main.temp).toFixed(2) + "C");
        $("#wind3").text("Wind: " + response.wind.speed + " KPH");
        $("#humidity3").text("Humidity: " + response.main.humidity + "%");

        $("#City4").html(response.name + "<img src=http://openweathermap.org/img/w/" + response.weather[0].icon + ".png>");
        $("#temp4").text("Temperature: " + convertKtoC(response.main.temp).toFixed(2) + "C");
        $("#wind4").text("Wind: " + response.wind.speed + " KPH");
        $("#humidity4").text("Humidity: " + response.main.humidity + "%");

        $("#City5").html(response.name + "<img src=http://openweathermap.org/img/w/" + response.weather[0].icon + ".png>");
        $("#temp5").text("Temperature: " + convertKtoC(response.main.temp).toFixed(2) + "C");
        $("#wind5").text("Wind: " + response.wind.speed + " KPH");
        $("#humidity5").text("Humidity: " + response.main.humidity + "%");

        $("#City6").html(response.name + "<img src=http://openweathermap.org/img/w/" + response.weather[0].icon + ".png>");
        $("#temp6").text("Temperature: " + convertKtoC(response.main.temp).toFixed(2) + "C");
        $("#wind6").text("Wind: " + response.wind.speed + " KPH");
        $("#humidity6").text("Humidity: " + response.main.humidity + "%");
    })
