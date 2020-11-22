<div>
  <div className="row">
    <div className="col-sm-6">
      <div className="location-box">
        <h1>Hourly Forecast</h1>
        <div className=" flip-card">
          <div className="flip-card-inner">
              <div className="flip-card-front">
                  <div className="location">{dateBuilder(new Date(hourly.forecast.forecastday[1].date))}</div>
                  {/* <div className="row"> */}
                  <div className="col-sm-6">

                    <div id="addInfo">12 AM: {hourly.forecast.forecastday[1].hour[0].temp_f}°F</div>
                    <div id="addInfo">1 AM: {hourly.forecast.forecastday[1].hour[1].temp_f}°F</div>
                    <div id="addInfo">2 AM: {hourly.forecast.forecastday[1].hour[2].temp_f}°F</div>
                    <div id="addInfo">3 AM: {hourly.forecast.forecastday[1].hour[3].temp_f}°F</div>
                    <div id="addInfo">4 AM: {hourly.forecast.forecastday[1].hour[4].temp_f}°F</div>
                    <div id="addInfo">5 AM: {hourly.forecast.forecastday[1].hour[5].temp_f}°F</div>
                    <div id="addInfo">6 AM: {hourly.forecast.forecastday[1].hour[6].temp_f}°F</div>
                    <div id="addInfo">7 AM: {hourly.forecast.forecastday[1].hour[7].temp_f}°F</div>
                    <div id="addInfo">8 AM: {hourly.forecast.forecastday[1].hour[8].temp_f}°F</div>
                    <div id="addInfo">9 AM: {hourly.forecast.forecastday[1].hour[9].temp_f}°F</div>
                    <div id="addInfo">10 AM: {hourly.forecast.forecastday[1].hour[10].temp_f}°F</div>
                    <div id="addInfo">11 AM: {hourly.forecast.forecastday[1].hour[11].temp_f}°F</div>
                  </div>
                  <div className="col-sm-6">

                    <div id="addInfo">12 PM: {hourly.forecast.forecastday[1].hour[12].temp_f}°F</div>
                    <div id="addInfo">1 PM: {hourly.forecast.forecastday[1].hour[13].temp_f}°F</div>
                    <div id="addInfo">2 PM: {hourly.forecast.forecastday[1].hour[14].temp_f}°F</div>
                    <div id="addInfo">3 PM: {hourly.forecast.forecastday[1].hour[15].temp_f}°F</div>
                    <div id="addInfo">4 PM: {hourly.forecast.forecastday[1].hour[16].temp_f}°F</div>
                    <div id="addInfo">5 PM: {hourly.forecast.forecastday[1].hour[17].temp_f}°F</div>
                    <div id="addInfo">6 PM: {hourly.forecast.forecastday[1].hour[18].temp_f}°F</div>
                    <div id="addInfo">7 PM: {hourly.forecast.forecastday[1].hour[19].temp_f}°F</div>
                    <div id="addInfo">8 PM: {hourly.forecast.forecastday[1].hour[20].temp_f}°F</div>
                    <div id="addInfo">9 PM: {hourly.forecast.forecastday[1].hour[21].temp_f}°F</div>
                    <div id="addInfo">10 PM: {hourly.forecast.forecastday[1].hour[22].temp_f}°F</div>
                    <div id="addInfo">11 PM: {hourly.forecast.forecastday[1].hour[23].temp_f}°F</div>

                  </div>
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
    </div>


    <div className="col-sm-6">
      <div className="location-box">
        <h1>Hourly Forecast</h1>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="location">{dateBuilder(new Date(hourly.forecast.forecastday[2].date))}</div>

              <div id="addInfo">12 AM: {hourly.forecast.forecastday[2].hour[0].temp_f}°F</div>
              <div id="addInfo">1 AM: {hourly.forecast.forecastday[2].hour[1].temp_f}°F</div>
              <div id="addInfo">2 AM: {hourly.forecast.forecastday[2].hour[2].temp_f}°F</div>
              <div id="addInfo">3 AM: {hourly.forecast.forecastday[2].hour[3].temp_f}°F</div>
              <div id="addInfo">4 AM: {hourly.forecast.forecastday[2].hour[4].temp_f}°F</div>
              <div id="addInfo">5 AM: {hourly.forecast.forecastday[2].hour[5].temp_f}°F</div>
              <div id="addInfo">6 AM: {hourly.forecast.forecastday[2].hour[6].temp_f}°F</div>
              <div id="addInfo">7 AM: {hourly.forecast.forecastday[2].hour[7].temp_f}°F</div>
              <div id="addInfo">8 AM: {hourly.forecast.forecastday[2].hour[8].temp_f}°F</div>
              <div id="addInfo">9 AM: {hourly.forecast.forecastday[2].hour[9].temp_f}°F</div>
              <div id="addInfo">10 AM: {hourly.forecast.forecastday[2].hour[10].temp_f}°F</div>
              <div id="addInfo">11 AM: {hourly.forecast.forecastday[2].hour[11].temp_f}°F</div>
              <div id="addInfo">12 PM: {hourly.forecast.forecastday[2].hour[12].temp_f}°F</div>
              <div id="addInfo">1 PM: {hourly.forecast.forecastday[2].hour[13].temp_f}°F</div>
              <div id="addInfo">2 PM: {hourly.forecast.forecastday[2].hour[14].temp_f}°F</div>
              <div id="addInfo">3 PM: {hourly.forecast.forecastday[2].hour[15].temp_f}°F</div>
              <div id="addInfo">4 PM: {hourly.forecast.forecastday[2].hour[16].temp_f}°F</div>
              <div id="addInfo">5 PM: {hourly.forecast.forecastday[2].hour[17].temp_f}°F</div>
              <div id="addInfo">6 PM: {hourly.forecast.forecastday[2].hour[18].temp_f}°F</div>
              <div id="addInfo">7 PM: {hourly.forecast.forecastday[2].hour[19].temp_f}°F</div>
              <div id="addInfo">8 PM: {hourly.forecast.forecastday[2].hour[20].temp_f}°F</div>
              <div id="addInfo">9 PM: {hourly.forecast.forecastday[2].hour[21].temp_f}°F</div>
              <div id="addInfo">10 PM: {hourly.forecast.forecastday[2].hour[22].temp_f}°F</div>
              <div id="addInfo">11 PM: {hourly.forecast.forecastday[2].hour[23].temp_f}°F</div>

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
      </div>
    </div>
  </div>
</div>