
import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';

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

export default function Chart (props) {
  const [ chartData, setChartData ] = useState({})

  useEffect(()=>{
    let chart ={
      labels:[],
      datasets:[
        {
          label: '% chance of rain',
          fill: true,
          backgroundColor: "#742774",
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

   let timeData =  props.data?.forecast?.forecastday.map(eachHour=>{
      // chart.labels.push(new Date(eachHour.time).getHours())
      chart.labels.push(eachHour.date)


      return Math.floor(eachHour.day.daily_chance_of_rain)
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
            title:{
              display:true,
              text:'Daily % Chance of Rain',
              fontSize:20
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100
                  }
                }
              ]
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
}
