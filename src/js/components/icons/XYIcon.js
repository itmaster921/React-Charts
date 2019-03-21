import React from "react";

const size = 40;

export default class BarIcon extends React.Component {

	constructor(props) {
		super(props);


		const serieses = [
			{percent: [0.3, 0.6, 0.1], color: '#c1d138'},
			{percent: [0.6, 0.1, 0.2], color: '#7e97db'},
			{percent: [0.2, 0.3, 0.4], color: '#00ab6b'},
		];


		// const slices = [
		// 	{percent: 0.1, color: '#c1d138'},
		// 	{percent: 0.7, color: '#7e97db'},
		// 	{percent: 0.2, color: '#00ab6b'},
		// ];


		this.state = {
			size:size,
			serieses:serieses
		}
		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);

	}

	render() {

		let viewBox=` -${size} -${size} ${size*2} ${size*2}`
		return (
			<div onMouseOver={() => this.mouseEnter()} onMouseLeave={() => this.mouseLeave()}>
				<svg className={this.state.animateClass} width={size} height={size} transform = "rotate(0 100 100)">
					{getPaths(this.state.serieses)}
				</svg>
			</div>
		);
	}



	mouseLeave()  {
		// const slices = [
		// 	{percent: 0.1, color: '#c1d138'},
		// 	{percent: 0.7, color: '#7e97db'},
		// 	{percent: 0.2, color: '#00ab6b'},
		// ];

		this.setState(
			{
				animateClass : ""
			}
		)

		// this.setState({
		// 	slices:s2
		// })


	}

	mouseEnter()  {

		this.setState(
			{
				animateClass : "animated wobble infinite"
			}
		)

		// const s2 = [
		// 	{percent: 0.4, color: '#c1d138'},
		// 	{percent: 0.1, color: '#7e97db'},
		// 	{percent: 0.3, color: '#00ab6b'},
		// ];
		//
		// this.setState({
		// 	slices:s2
		// })

	}


}

const getPaths = (serieses) => {
	let paths = [];
	let widthSlice = size/(serieses.length-1);
	let heightSlice = 0;

	serieses.forEach(series => {
		let xPos = 0;
		let yPos = 0;

		let pointString = ""

		series.percent.forEach((pct) => {
			heightSlice = size*series.percent;
			let offset = size - size*pct;
			yPos = offset;


			pointString = pointString + xPos + "," + yPos + " ";
			xPos = xPos + widthSlice;
		})

		paths.push(<polyline points={pointString} style={{'fill':'none','stroke':series.color,'strokeWidth':2}}></polyline>)
	});
	return paths;
}

