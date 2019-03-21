import React from "react";

import ColorChooser from '../../ColorChooser'
import MUITextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import 'react-hint/css/index.css'

/**
 * The first three elements to add a series. the textfield, add button, and color chooser
 */
class BarChartForm extends React.Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.colorSelected = this.colorSelected.bind(this);
    this.onChangeText = this.onChangeText.bind(this);

    this.state = {
      enableButton: false,
      showModalColorPicker: false
    };
  }

  //the job of this component is only to create a new series
  static propTypes = {
    createSeries: PropTypes.func.isRequired
  };

  handleSubmit(event) {

    event.preventDefault();

    let val =  this.refs.seriesName.input.value

    let series = {
      name: val,
      color: this.state.selectedColor,
    };

    this.props.createSeries(series);
  }

  colorSelected(color) {
    this.setState({selectedColor: color});
  }

  /**
   * Detect text change in field. Makes 'add series' button enabled
   * if there is some text
   */
  onChangeText(e, value) {
    if (!value) {
      this.setState({enableButton: false});
    }else {
      this.setState({enableButton: true});
    }
  }


  render() {
    let enableButton = this.state.enableButton

    let style = {
      // "padding": "3px",
      "margin": "6px"
    }
    return (
      <MuiThemeProvider>
      <div style={style}>
        <h3>Series :</h3>
        <form onSubmit={this.handleSubmit}>

          <table>
            <tbody>
            <tr>
            <td>
          <MUITextField
            id="enterSeriesNameField"
            style={{width:170}}
            hintText="Enter Series Name"
            type="text"
            ref="seriesName"
            name="newSlice"
            onChange={this.onChangeText}
            data-rh="Bottom" data-rh-at="bottom" />
            </td>
              <td>
                <ColorChooser onChooseColor={this.colorSelected}/>
              </td>
              <td>
                <RaisedButton style={style}
                              type="submit"
                              label="Add Series"
                              disabled={!enableButton}
                />
              </td>
            </tr>
            </tbody>
          </table>
        </form>
      </div>
      </MuiThemeProvider>
    )
  }
}
export default BarChartForm;

