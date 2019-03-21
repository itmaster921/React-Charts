import React from "react";


import MUITextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class TitleEditComponent extends React.Component {

  constructor(){
    super()
    this.keyPress = this.keyPress.bind(this);

    //have to disable debounce for now. interfering with the onChange event
    // this.keyPress = debounce(this.keyPress,300);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h3>Title : </h3>
          <MUITextField
            id="enterChartTitleField"
            tooltip="test"
            ref="titleField"
            hintText="Enter Chart Title"
            type="text"
            value={this.props.value}
            onChange={(e)=>this.keyPress(e.target)}
          />
        </div>
      </MuiThemeProvider>
    )
  }

  keyPress(target) {
    this.props.onChange(target.value);
  }
}

function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

