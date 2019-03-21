import React from "react";
import "./animate.css";

const size = 40;

export default class BarIcon extends React.Component {

	constructor(props) {
		super(props)

		const slices = [
			{percent: 0.1, color: '#c1d138'},
			{percent: 0.7, color: '#7e97db'},
			{percent: 0.2, color: '#00ab6b'},
		];


		this.state = {
			size: size,
			slices: slices
		}
		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);

	}


	render() {
		return (
			<div>
				<div onMouseOver={() => this.mouseEnter()} onMouseLeave={() => this.mouseLeave()}>
					<svg width={this.state.size} height={this.state.size} transform="rotate(0 100 100)">
						{this.getPaths()}
					</svg>
				</div>
			</div>
		);
	}


	getPaths() {
		let paths = [];
		let xPos = 0;
		let yPos = 0;
		let widthSlice = size / this.state.slices.length;
		let heightSlice = 0;

		let className = "";

		this.state.slices.forEach(slice => {
			heightSlice = size * slice.percent;
			let offset = size - size * slice.percent;
			yPos = offset;
			paths.push(<rect className={this.state.animateClass} x={xPos} y={yPos} width={widthSlice} height={heightSlice}
											 style={{fill: slice.color}}>
				</rect>
			)
			xPos = xPos + widthSlice;
		});
		return paths;
	}

	mouseLeave() {
		// const slices = [
		// 	{percent: 0.1, color: '#c1d138'},
		// 	{percent: 0.7, color: '#7e97db'},
		// 	{percent: 0.2, color: '#00ab6b'},
		// ];

		this.setState(
			{
				animateClass: ""
			}
		)
		// this.setState({
		// 	slices:s2
		// })
	}

	mouseEnter() {

		this.setState(
			{
				animateClass: "animated wobble infinite"
			}
		)
	}
}