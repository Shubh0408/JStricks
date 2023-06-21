import React, { Component } from "react";
// import "./weather.css";

export default class extends Component {
    render() {
        const api = {
            key: "2fa73590fd8b5a4c6e68098ad5625395",
            base: "https://api.openweathermap.org/data/2.5/"
        };

        const searchbox = document.querySelector(".search-box");
        searchbox.addEventListener("keypress", setQuery);

        function setQuery(evt) {
            if (evt.keyCode == 13) {
                getResults(searchbox.value);
            }
        }

        function getResults(query) {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then((weather) => {
                    return weather.json();
                })
                .then(displayResults);
        }

        function displayResults(weather) {
            console.log(weather);
            let city = document.querySelector(".location .city");
            city.innerText = `${weather.name}, ${weather.sys.country}`;

            let now = new Date();
            let date = document.querySelector(".location .date");
            date.innerText = dateBuilder(now);

            let temp = document.querySelector(".current .temp");
            temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

            let weather_el = document.querySelector(".current .weather");
            weather_el.innerText = weather.weather[0].main;

            let hilow = document.querySelector(".hi-low");
            hilow.innerText = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`;
        }

        function dateBuilder(d) {
            let months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];
            let days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ];

            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            return `${day} ${date} ${month} ${year}`;
        }

        return (
            <html lang="en">

                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </head>

                <body className="weatherbody">
                    <header>
                        <input type="text" autocomplete="off" class="search-box" placeholder="Search for a city" />
                    </header>
                    <main>
                        <section class="location">
                            <div class="city">Manila, Las Pinas</div>
                            <div class="date">Monday 30 May</div>
                        </section>

                        <div class="current">
                            <div class="temp">15<span>°C</span></div>
                            <div class="weather">Sunny</div>
                            <div class="hi-low">13°C / 16°C</div>
                        </div>
                    </main>
                </body>

            </html>
        )
    }
}