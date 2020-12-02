import Chart from "./components/TempChart/Chart"
import Chart2 from "./components/RainChart/Chart2"
import Pie from "./components/PieDay1/index"
import PieDay2 from "./components/PieDay2/index"
import PieDay3 from "./components/PieDay3/index"
import moment from 'moment'
import './index.css'

import React, { useEffect, useState } from 'react';
const api = {
  key: "19787e47944e4b65b7820523202011",
  base: "http://api.weatherapi.com/v1/forecast.json?"

}


function ExtraInfo() {

  const [query, setQuery] = useState('')
  const [hourly, setHourly] = useState({})

// fetches API and sets data to hourly
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}key=${api.key}&q=${query}&days=3`)
        .then(res => res.json())
        .then(result => {
          setQuery('')
          setHourly(result)
          // console.log(result)
        })
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];

    let days = ["Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday", "Sunday"]

    // functions to get relevant day, month, year

    let day = days[d.getDay()]

    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }


  return (

    // changes background photo based on weather
    <div className={(typeof hourly.current != "undefined")
      ? ((hourly.current.temp_f > 60)
        ? 'app warm' : 'app') : 'app'} >

      <main>

        {/* targets the value of the result in the search bar */}
        <div id="frontPage">
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>

        {/* city searched for and current Date/ Time */}

          {(typeof hourly.location != "undefined") ? (

            <div>
              <div className="location-box">
                <div className="location">{hourly.location.name}, {hourly.location.country}</div>
                <div className="date">{moment(hourly.current.last_updated).format("LLLL")}</div>
              </div>
            </div>

          ) : ('')}

        {/* Basic Flip card info */}


          {(typeof hourly.current != "undefined") ? (
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="firstFront flip-card-front">
                  <div className="temp">{Math.round(hourly.current.temp_f)}°F</div>
                  <div id="addInfo">Feels Like: {hourly.current.feelslike_f}°F</div>
                  <div id="addInfo">Humidity: {hourly.current.humidity}%</div>
                  <div id="addInfo">Wind Speed: {hourly.current.wind_mph}mph</div>
                </div>
                <div className="flip-card-back">
                  <div>UV Index: {hourly.current.uv}</div>
                  <div>Visibility: {hourly.current.vis_miles} miles</div>
                  <div>Cloud Cover: {hourly.current.cloud}%</div>
                  <div>Current Forecast: {hourly.current.condition.text}</div>
                  <img src={`https:` + hourly.current.condition.icon}></img>
                </div>
              </div>
            </div>

          ) : ('')}
        </div>

        {/* Hourly forecast on Flip Card*/}

        {(typeof hourly.forecast != "undefined") ? (
          <div className="container-fluid">

            <div className="row">
              <div className="col-sm-4">
                <h1 id="hourlyHeader">{moment(hourly.forecast.forecastday[0].date).format("dddd, MMMM Do")}</h1>


                <div className="hourlyFlipCard flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="location-box">
                        <div className="location">Current Hourly</div>
                        <div className="location">Forecast</div>

                      </div>
                      <div className="row">
                        <div id="column">
                          <div>12 AM: {hourly.forecast.forecastday[0].hour[0].temp_f}°F</div>
                          <div>1 AM: {hourly.forecast.forecastday[0].hour[1].temp_f}°F</div>
                          <div>2 AM: {hourly.forecast.forecastday[0].hour[2].temp_f}°F</div>
                          <div>3 AM: {hourly.forecast.forecastday[0].hour[3].temp_f}°F</div>
                          <div>4 AM: {hourly.forecast.forecastday[0].hour[4].temp_f}°F</div>
                          <div>5 AM: {hourly.forecast.forecastday[0].hour[5].temp_f}°F</div>
                          <div>6 AM: {hourly.forecast.forecastday[0].hour[6].temp_f}°F</div>
                          <div>7 AM: {hourly.forecast.forecastday[0].hour[7].temp_f}°F</div>
                          <div>8 AM: {hourly.forecast.forecastday[0].hour[8].temp_f}°F</div>
                          <div>9 AM: {hourly.forecast.forecastday[0].hour[9].temp_f}°F</div>
                          <div>10 AM: {hourly.forecast.forecastday[0].hour[10].temp_f}°F</div>
                          <div>11 AM: {hourly.forecast.forecastday[0].hour[11].temp_f}°F</div>
                        </div>

                        <div id="column">
                          <div>12 PM: {hourly.forecast.forecastday[0].hour[12].temp_f}°F</div>
                          <div>1 PM: {hourly.forecast.forecastday[0].hour[13].temp_f}°F</div>
                          <div>2 PM: {hourly.forecast.forecastday[0].hour[14].temp_f}°F</div>
                          <div>3 PM: {hourly.forecast.forecastday[0].hour[15].temp_f}°F</div>
                          <div>4 PM: {hourly.forecast.forecastday[0].hour[16].temp_f}°F</div>
                          <div>5 PM: {hourly.forecast.forecastday[0].hour[17].temp_f}°F</div>
                          <div>6 PM: {hourly.forecast.forecastday[0].hour[18].temp_f}°F</div>
                          <div>7 PM: {hourly.forecast.forecastday[0].hour[19].temp_f}°F</div>
                          <div>8 PM: {hourly.forecast.forecastday[0].hour[20].temp_f}°F</div>
                          <div>9 PM: {hourly.forecast.forecastday[0].hour[21].temp_f}°F</div>
                          <div>10 PM: {hourly.forecast.forecastday[0].hour[22].temp_f}°F</div>
                          <div>11 PM: {hourly.forecast.forecastday[0].hour[23].temp_f}°F</div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div id="addInfo">Sunrise: {hourly.forecast.forecastday[0].astro.sunrise}</div>
                      <div id="addInfo">Moon Phase: {hourly.forecast.forecastday[0].astro.moon_phase}</div>
                      <div id="addInfo">Sunset: {hourly.forecast.forecastday[0].astro.sunset}</div>
                      <div id="addInfo">Chance of Rain: {hourly.forecast.forecastday[0].day.daily_chance_of_rain}%</div>
                      <div id="addInfo">Forecast: {hourly.forecast.forecastday[0].day.condition.text}</div>
                      <img src={`https:` + hourly.forecast.forecastday[0].day.condition.icon}></img>
                    </div>
                  </div>
                </div>
                <div>
                  <Pie data={hourly} />
                </div>
              </div>

              <div className="col-sm-4">
                <h1 id="hourlyHeader">{moment(hourly.forecast.forecastday[1].date).format("dddd, MMMM Do")}</h1>


                <div className="hourlyFlipCard flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="location-box">
                        <div className="location">Hourly</div>
                        <div className="location">Forecast</div>

                      </div>
                      <div className="row">
                        <div id="column">
                          <div>12 AM: {hourly.forecast.forecastday[1].hour[0].temp_f}°F</div>
                          <div>1 AM: {hourly.forecast.forecastday[1].hour[1].temp_f}°F</div>
                          <div>2 AM: {hourly.forecast.forecastday[1].hour[2].temp_f}°F</div>
                          <div>3 AM: {hourly.forecast.forecastday[1].hour[3].temp_f}°F</div>
                          <div>4 AM: {hourly.forecast.forecastday[1].hour[4].temp_f}°F</div>
                          <div>5 AM: {hourly.forecast.forecastday[1].hour[5].temp_f}°F</div>
                          <div>6 AM: {hourly.forecast.forecastday[1].hour[6].temp_f}°F</div>
                          <div>7 AM: {hourly.forecast.forecastday[1].hour[7].temp_f}°F</div>
                          <div>8 AM: {hourly.forecast.forecastday[1].hour[8].temp_f}°F</div>
                          <div>9 AM: {hourly.forecast.forecastday[1].hour[9].temp_f}°F</div>
                          <div>10 AM: {hourly.forecast.forecastday[1].hour[10].temp_f}°F</div>
                          <div>11 AM: {hourly.forecast.forecastday[1].hour[11].temp_f}°F</div>
                        </div>

                        <div id="column">
                          <div>12 PM: {hourly.forecast.forecastday[1].hour[12].temp_f}°F</div>
                          <div>1 PM: {hourly.forecast.forecastday[1].hour[13].temp_f}°F</div>
                          <div>2 PM: {hourly.forecast.forecastday[1].hour[14].temp_f}°F</div>
                          <div>3 PM: {hourly.forecast.forecastday[1].hour[15].temp_f}°F</div>
                          <div>4 PM: {hourly.forecast.forecastday[1].hour[16].temp_f}°F</div>
                          <div>5 PM: {hourly.forecast.forecastday[1].hour[17].temp_f}°F</div>
                          <div>6 PM: {hourly.forecast.forecastday[1].hour[18].temp_f}°F</div>
                          <div>7 PM: {hourly.forecast.forecastday[1].hour[19].temp_f}°F</div>
                          <div>8 PM: {hourly.forecast.forecastday[1].hour[20].temp_f}°F</div>
                          <div>9 PM: {hourly.forecast.forecastday[1].hour[21].temp_f}°F</div>
                          <div>10 PM: {hourly.forecast.forecastday[1].hour[22].temp_f}°F</div>
                          <div>11 PM: {hourly.forecast.forecastday[1].hour[23].temp_f}°F</div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div id="addInfo">Sunrise: {hourly.forecast.forecastday[1].astro.sunrise}</div>
                      <div id="addInfo">Moon Phase: {hourly.forecast.forecastday[1].astro.moon_phase}</div>
                      <div id="addInfo">Sunset: {hourly.forecast.forecastday[1].astro.sunset}</div>
                      <div id="addInfo">Chance of Rain: {hourly.forecast.forecastday[1].day.daily_chance_of_rain}%</div>
                      <div id="addInfo">Forecast: {hourly.forecast.forecastday[1].day.condition.text}</div>
                      <img src={`https:` + hourly.forecast.forecastday[1].day.condition.icon}></img>
                    </div>
                  </div>
                </div>
                <div>
                  <PieDay2 data={hourly} />
                </div>
              </div>

              <div className="col-sm-4">
                <h1 id="hourlyHeader">{moment(hourly.forecast.forecastday[2].date).format("dddd, MMMM Do")}</h1>

                <div className="hourlyFlipCard flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="location-box">
                        <div className="location">Hourly</div>
                        <div className="location">Forecast</div>

                      </div>
                      <div className="row">
                        <div id="column">
                          <div>12 AM: {hourly.forecast.forecastday[2].hour[0].temp_f}°F</div>
                          <div>1 AM: {hourly.forecast.forecastday[2].hour[1].temp_f}°F</div>
                          <div>2 AM: {hourly.forecast.forecastday[2].hour[2].temp_f}°F</div>
                          <div>3 AM: {hourly.forecast.forecastday[2].hour[3].temp_f}°F</div>
                          <div>4 AM: {hourly.forecast.forecastday[2].hour[4].temp_f}°F</div>
                          <div>5 AM: {hourly.forecast.forecastday[2].hour[5].temp_f}°F</div>
                          <div>6 AM: {hourly.forecast.forecastday[2].hour[6].temp_f}°F</div>
                          <div>7 AM: {hourly.forecast.forecastday[2].hour[7].temp_f}°F</div>
                          <div>8 AM: {hourly.forecast.forecastday[2].hour[8].temp_f}°F</div>
                          <div>9 AM: {hourly.forecast.forecastday[2].hour[9].temp_f}°F</div>
                          <div>10 AM: {hourly.forecast.forecastday[2].hour[10].temp_f}°F</div>
                          <div>11 AM: {hourly.forecast.forecastday[2].hour[11].temp_f}°F</div>

                        </div>
                        <div id="column">

                          <div>12 PM: {hourly.forecast.forecastday[2].hour[12].temp_f}°F</div>
                          <div>1 PM: {hourly.forecast.forecastday[2].hour[13].temp_f}°F</div>
                          <div>2 PM: {hourly.forecast.forecastday[2].hour[14].temp_f}°F</div>
                          <div>3 PM: {hourly.forecast.forecastday[2].hour[15].temp_f}°F</div>
                          <div>4 PM: {hourly.forecast.forecastday[2].hour[16].temp_f}°F</div>
                          <div>5 PM: {hourly.forecast.forecastday[2].hour[17].temp_f}°F</div>
                          <div>6 PM: {hourly.forecast.forecastday[2].hour[18].temp_f}°F</div>
                          <div>7 PM: {hourly.forecast.forecastday[2].hour[19].temp_f}°F</div>
                          <div>8 PM: {hourly.forecast.forecastday[2].hour[20].temp_f}°F</div>
                          <div>9 PM: {hourly.forecast.forecastday[2].hour[21].temp_f}°F</div>
                          <div>10 PM: {hourly.forecast.forecastday[2].hour[22].temp_f}°F</div>
                          <div>11 PM: {hourly.forecast.forecastday[2].hour[23].temp_f}°F</div>
                        </div>
                      </div>

                    </div>
                    <div className="flip-card-back">


                      <div>Sunrise: {hourly.forecast.forecastday[2].astro.sunrise}</div>
                      <div>Moon Phase: {hourly.forecast.forecastday[2].astro.moon_phase}</div>
                      <div>Sunset: {hourly.forecast.forecastday[2].astro.sunset}</div>
                      <div>Chance of Rain: {hourly.forecast.forecastday[2].day.daily_chance_of_rain}%</div>
                      <div>Forecast: {hourly.forecast.forecastday[2].day.condition.text}</div>
                      <img src={`https:` + hourly.forecast.forecastday[2].day.condition.icon}></img>
                    </div>
                  </div>
                </div>
                <div>
                  <PieDay3 data={hourly} />
                </div>

              </div>
            </div>



          </div>


        ) : ('')
        }

        {/* Average Temperature chart */}

        <Chart data={hourly} />

        {/* Average % Rain char */}

        <Chart2 data={hourly} />

      </main >
    </div >
  );
}

export default ExtraInfo;