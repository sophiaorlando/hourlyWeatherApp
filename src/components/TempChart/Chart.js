import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';
import moment from 'moment'
import "./style.css"

export default function Chart (props) {
  const [ chartData, setChartData ] = useState({})

  useEffect(()=>{
    let chart ={
      labels:[],
      datasets:[
        {
          label: 'Temp F',
          fill: true,
          lineTension: 0.5,
          backgroundColor: "whitesmoke",
          borderColor: "black",
          borderWidth: 3,
          data: []
        }, 
      ]
    } 

   let timeData =  props.data?.forecast?.forecastday.map(eachHour=>{

    // pushes Date into labels and average temperature into data
      let date = moment(eachHour.date).format("dddd, MMM Do YYYY")
      chart.labels.push(date)


      return Math.floor(eachHour.day.avgtemp_f)
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
              text:'Average Temperature °F',
              fontSize:50,
              fontColor: "white"
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    suggestedMin: -50,
                    suggestedMax: 100,
                    stepSize:5,
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
