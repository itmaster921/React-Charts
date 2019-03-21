import React from "react";

import ColorChooser from '../../ColorChooser'

import MUITextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';

export default class PieChartForm extends React.Component {

  constructor(props) {

    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.colorSelected = this.colorSelected.bind(this);

    this.state = {
      selectedColor: '#3f7aff'
    };
  }

  handleSubmit(event) {

    let name =  this.refs.sliceName.input.value;
    let value =  this.refs.value.input.value;

    let slice = {
      name: name,
      color: this.state.selectedColor,
      value: Number(value)
    };

    this.props.createSlice(slice, event);
  }

  colorSelected(color) {
    this.setState({selectedColor: color});
  }
  render() {

    let style = {
      width:"150px"
      // "padding": "3px",
      // "margin": "6px"
    }

    let enableButton = true;
    let pieData = this.props.pieData;
    return (
    <MuiThemeProvider>
      <form>

        <div>
          <div>
              <h3>Pie Slices :</h3>
          </div>

          <table>
            <tbody>
            <tr>
              <td width="50px" >
                <MUITextField style={{width:100}} id="newSliceField" type="text" ref="sliceName"
                   name="newSlice" placeholder="Slice Name"></MUITextField>
              </td>
              <td width="50px" >
                <MUITextField style={{width:100}} id="newValueField" type="number" ref="value"
                   name="newValue" placeholder="Value"></MUITextField>
              </td>
              <td>
                <ColorChooser color={this.state.selectedColor} onChooseColor={this.colorSelected}/>
              </td>

              <td>
                <RaisedButton style={style}
                              type="button"
                              label="Add Pie Slice"
                              onClick={this.handleSubmit}
                              disabled={!enableButton} />
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </form>
    </MuiThemeProvider>
    );
  }
}