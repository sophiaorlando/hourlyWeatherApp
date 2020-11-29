
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
    'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default function Chart(props) {
  const [chartData, setChartData] = useState({})

  useEffect(() => {
    let chart = {
      labels: [],
      datasets: [
        {
          label: 'Time',
          fill: true,
          backgroundColor: "rgb(255,255,0)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 3,
          data: []
        },
        // {
        //   label: 'Temp2 F',
        //   fill: false,
        //   borderColor: "#742774",
        //   borderWidth: 3,
        //   data: []
        // }, 
      ]
    }

    let timeData = props.data?.forecast?.forecastday.map(eachHour => {
      // chart.labels.push(new Date(eachHour.time).getHours())
      chart.labels.push(eachHour.date)

      console.log(eachHour.astro.sunrise)


      let hoursMinutes = eachHour.astro.sunrise.split(/[.:]/);
      // console.log(hoursMinutes)
      let hours = parseInt(hoursMinutes[0], 10);
      // console.log(minutes)
      let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
      // console.log(minutes)
      console.log(hours + ":" + minutes)

      // return hours + minutes / 60;
      // console.log(hours + minutes / 60)
      return hours + ":" + minutes;
      // return eachHour.astro.sunrise;

      // return Math.floor(new Date(eachHour.astro.sunrise).getHours())
    })

    chart.datasets[0].data = timeData
    // chart.datasets[1].data = props.data?.forecast?.forecastday[1].hour.map(eachHour=>{
    //   return Math.floor(eachHour.temp_f)
    // })


    setChartData(chart)
  }, [props.data])

  console.log(chartData)
  return (
    <div>
      <Line
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'Daily Sunrise Times',
            fontSize: 20
          },
          scales: {
            yAxes: [
              {
                type: 'time',
                time: {
                  displayFormats: {
                    minute: "h:mm a"
                  }
                }
              }
            ]
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  );
}
