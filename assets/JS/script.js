$("#today").hide()
$("#forecast").hide()
var btnIcon = document.querySelector("#search-button");
var cities = JSON.parse(localStorage.getItem("cities")) || []
var historyBar = document.querySelector("#history")
var queryURL;

var apiKey = '&appid=88adb8f5ba3b0398e706599889afef78'



function convertKtoC(kTemp) {
    kTemp -= 273.15
    return kTemp
}

btnIcon.addEventListener("click", function (e) {
    e.preventDefault();

    var searchInput = document.querySelector("#search-input").value;
    console.log(searchInput)

    if (!cities.includes(searchInput)) {
        cities.push(searchInput)
        localStorage.setItem("cities", JSON.stringify(cities))

    }

    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + apiKey;
    getWeather(queryURL);
})

for (var i = 0; i < cities.length; i++) {

    var button = $("<button>").text(cities[i]).attr("id", cities[i]).on("click", function () {
        console.log(this)
        queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + $(this).attr("id") + apiKey;

        getWeather(queryURL);
    })

    $("#history").prepend(button)

}


// var lat = "52.205276";
// var lon = "0.119167";
function getWeather(queryURL) {
    $("#today").show()
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            // console.log(response)

            $("#City1").html(response.name + " " + moment().format("(D/MM/YY)") + "<img src=http://openweathermap.org/img/w/" + response.weather[0].icon + ".png>");
            $("#temp1").text("Temperature: " + convertKtoC(response.main.temp).toFixed(2) + "C");
            $("#wind1").text("Wind: " + response.wind.speed + " KPH");
            $("#humidity1").text("Humidity: " + response.main.humidity + "%");
            getForecast(response.name)
        })
}
function getForecast(cityName) {
    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + apiKey;

    $.ajax({
        url: fiveDayUrl,
        method: "GET"
    })
        .then(function (response) {

            console.log(response)
            $("#forecast").show()
            $("#Date2").html(moment().add(1, "days").format("D/MM/YY") + "<img src=http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png>");
            $("#temp2").text("Temperature: " + convertKtoC(response.list[0].main.temp).toFixed(2) + "C");
            $("#wind2").text("Wind: " + response.list[0].wind.speed + " KPH");
            $("#humidity2").text("Humidity: " + response.list[0].main.humidity + "%");

            $("#Date3").html(moment().add(2, "days").format("D/MM/YY") + "<img src=http://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png>");
            $("#temp3").text("Temperature: " + convertKtoC(response.list[8].main.temp).toFixed(2) + "C");
            $("#wind3").text("Wind: " + response.list[8].wind.speed + " KPH");
            $("#humidity3").text("Humidity: " + response.list[8].main.humidity + "%");

            $("#Date4").html(moment().add(3, "days").format("D/MM/YY") + "<img src=http://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png>");
            $("#temp4").text("Temperature: " + convertKtoC(response.list[16].main.temp).toFixed(2) + "C");
            $("#wind4").text("Wind: " + response.list[16].wind.speed + " KPH");
            $("#humidity4").text("Humidity: " + response.list[16].main.humidity + "%");

            $("#Date5").html(moment().add(4, "days").format("D/MM/YY") + "<img src=http://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png>");
            $("#temp5").text("Temperature: " + convertKtoC(response.list[24].main.temp).toFixed(2) + "C");
            $("#wind5").text("Wind: " + response.list[24].wind.speed + " KPH");
            $("#humidity5").text("Humidity: " + response.list[24].main.humidity + "%");

            $("#Date6").html(moment().add(5, "days").format("D/MM/YY") + "<img src=http://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png>");
            $("#temp6").text("Temperature: " + convertKtoC(response.list[32].main.temp).toFixed(2) + "C");
            $("#wind6").text("Wind: " + response.list[32].wind.speed + " KPH");
            $("#humidity6").text("Humidity: " + response.list[32].main.humidity + "%");
        })
}
