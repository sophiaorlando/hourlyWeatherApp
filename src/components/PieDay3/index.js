import React, { useEffect, useState } from 'react';
import {Pie} from 'react-chartjs-2';
import moment from 'moment'


export default function Pies (props){
  const [pieData, setPieData] = useState({})

  useEffect(() => {
     let pieChart= {
      labels: ['sunlight (hrs)', "nighttime (hrs)", "twilight (hrs)", "dawn (hrs)"],
      datasets: [
        {
        data: [],
        backgroundColor: ["#FFEF03", "#2a2a35", "#303F66", "#fa7b62"]
      }
    ]
    }
    
    let Data = props.data?.forecast?.forecastday[2]
    
    // does not load piechart until Data is searched for
    if (Data){
  //  console.log(Data)

   let sunRiseTimeO = moment(Data.astro.sunrise, ["h:mm A"])
   let sunSetTimeO = moment(Data.astro.sunset, ["h:mm A"])
   let moonRiseTimeO = moment(Data.astro.moonrise, ["h:mm A"])
   let moonSetTime0 = moment(Data.astro.moonset, ["h:mm A"])


   let sunlightO = sunSetTimeO.diff(sunRiseTimeO, "hours")
   let twilight0 = moonRiseTimeO.diff(sunSetTimeO, "hours")
   let darknessO = moonRiseTimeO.diff(sunRiseTimeO, "hours")
   let dawn0 = moonSetTime0.diff(sunRiseTimeO, "hours")
   
   pieChart.datasets[0].data.push(sunlightO, darknessO,twilight0, dawn0)

 
  }


    setPieData(pieChart)
  }, [props.data])
    return(
      <div>
        <Pie 
        data={pieData}
        options={{
          legend:{
            labels:{
              fontColor: "whitesmoke"
            }
          }
        }}

        />
      </div>
    )
  }


