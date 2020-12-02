
import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';
import moment from 'moment'

export default function Chart (props) {
  const [ chartData, setChartData ] = useState({})

  useEffect(()=>{
    let chart ={
      labels:[],
      datasets:[
        {
          label: '% chance of rain',
          fill: true,
          lineTension: 0.5,
          backgroundColor: "#afc3cc",
          borderColor: "#81a0ae",
          borderWidth: 3,
          data: []
        }
      ]
    } 

   let timeData =  props.data?.forecast?.forecastday.map(eachHour=>{

    // pushes Date into labels and average temperature into data
    let date = moment(eachHour.date).format("dddd, MMM Do YYYY")
      chart.labels.push(date)

      return Math.floor(eachHour.day.daily_chance_of_rain)
    })

    chart.datasets[0].data = timeData


    setChartData(chart)
  }, [props.data])

    return (
      <div>
        <Line
          data={chartData}
          options={{
            title:{
              display:true,
              text:'Daily % Chance of Rain',
              fontSize:50,
              fontColor: "white"

            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    fontColor: "white"
                  },
                  gridLines:{
                    color:"black"
                  }
                }
              ],
              xAxes:[
                {
                  ticks: {
                    fontColor: "white",
                    fontSize:15,
                    fontStyle:"bold"
                  },
                  gridLines: {
                    color:"black"
                  }
                }
              ]
            },
            legend:{
              display:true,
              position:'right',
              labels: {
                fontColor:"white"
              }
            }
          }}
        />
      </div>
    );
}
