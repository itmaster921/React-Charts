import React from "react";
import BarIcon from "./icons/BarIcon";
import XYIcon from "./icons/XYIcon";
import PieIcon from "./icons/PieIcon";

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome </h1>
        <h3>React Charts is a small charting app which demonstrates a number of react.js features </h3>

        <div>

          <ul>
            <li>Controlled Components</li>
            <li>JSX and ES6</li>
            <li>Functional Components</li>
            <li><strike>flux</strike> redux</li>
            <li>simple saga example</li>
            <li>reducers</li>
            <li>Jest tests</li>
            <li>immutable-js</li>
            <li>integration of third party components : recharts and react-grid</li>
            <li>third party components : recharts and react-grid</li>
            <li>debouncing</li>
            <li>Material UI and react bootstrap</li>

          </ul>
					<XYIcon></XYIcon>
					<BarIcon></BarIcon>
					<PieIcon></PieIcon>

        </div>
        All code is
          <a href="https://github.com/oliverwatkins/React-Charts"> available from Github </a>
      </div>
    );
  }
}
