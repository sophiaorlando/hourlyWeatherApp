import React, { useEffect, useState } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';
import moment from 'moment'

var Component = React.Component;

// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// import React from 'react';
// import React, { Component } from 'react-com';


export default function PieChart(props) {
	const [pieData, setPieData] = useState({})

	useEffect(() => {
		let options = {
			theme: "dark2",
			animationEnabled: true,
			exportFileName: "New Year Resolutions",
			exportEnabled: true,
			title: {
				text: []
			},
			data: [
				{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: [], label: "sunlight" },
					// { y: 22, label: "Finance" },
					// { y: 15, label: "Education" },
					// { y: 19, label: "Career" },
					// { y: 5, label: "Family" },
					// { y: 7, label: "Real Estate" }
				]
			}]
			

		}

		let timeData = props.data?.forecast?.forecastday.map(eachHour => {
			// chart.labels.push(new Date(eachHour.time).getHours())
			options.title.text.push(eachHour.date)

			let sunRiseTime = moment(eachHour.astro.sunrise, ["h:mm A"])
			let sunSetTime = moment(eachHour.astro.sunset, ["h:mm A"])
			let moonRiseTime = moment(eachHour.astro.moonrise, ["h:mm A"])
			let moonSetTime = moment(eachHour.astro.moonset, ["h:mm A"])


			
			let sunlight = sunSetTime.diff(sunRiseTime, "hours")
			let twilight = sunSetTime.diff(moonRiseTime, "minutes")
			let darkness = sunSetTime.diff(moonSetTime, "hours")


			// logs the amount of Sunlight in a day
			console.log(sunlight + " hours of sunlight.")
			console.log(sunlight + " this is sunlight.")

			console.log(twilight + " minutes of twilight.")
			console.log(darkness + " hours of nighttime.")
			console.log(options.data[0].dataPoints[0].y)

			options.data[0].dataPoints[0].y.push(sunlight)
// options.data[0].dataPoints
			// console.log(sunRiseTime.format("HH:mm A"))
			// console.log(sunSetTime.format("HH:mm A"))
			return sunlight


    })

		options.data[0].dataPoints[0].y = timeData


		setPieData(options)
	}, [props.data])
	return (
		<div>
			<CanvasJSChart options={pieData}
			/* onRef={ref => this.chart = ref} */
			/>
						<CanvasJSChart options={pieData}
			/* onRef={ref => this.chart = ref} */
			/>
						<CanvasJSChart options={pieData}
			/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
	)
}
