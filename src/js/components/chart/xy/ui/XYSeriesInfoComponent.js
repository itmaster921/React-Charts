import React from "react";

import PropTypes from 'prop-types';

import MUITextField from 'material-ui/TextField';

import './List.less';
import FlatButton from 'material-ui/FlatButton';

import ColorChooser from '../../ColorChooser';


export default class XYSeriesInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.colorSelected = this.colorSelected.bind(this);
    this.pointChanged = this.pointChanged.bind(this);
  }

  static propTypes = {
    changeXYSeriesName: PropTypes.func.isRequired,
    deleteSeries: PropTypes.func.isRequired,
    changePoint: PropTypes.func.isRequired,
    changeColor: PropTypes.func.isRequired

    // handleUpdatePointXY: PropTypes.func.isRequired,
    // data: PropTypes.shape({
    //   seriesName: PropTypes.string.isRequired,
    //   color: PropTypes.string.isRequired,
    //   pointShape: PropTypes.string.isRequired
    // })
  };


  render() {
    let deleteSeries = this.props.deleteSeries;
    let changeName = this.props.changeXYSeriesName;
    let changePoint = this.props.changePoint;
    let changeColor = this.props.changeColor;

    let seriesInfo = this.props.data;

    let style = {
      "padding": "3px",
      "margin": "3px",
      // "border": "5px solid blue"
    }
    return (

      <div>
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
              value={this.props.data.name}
              name="newSlice"
              onChange={(e)=>changeName(this.props.data.name, e.target.value)}
              data-rh="Bottom" data-rh-at="bottom" />
          </td>
          <td>
            <ColorChooser style={style} color={this.props.data.color} onChooseColor={this.colorSelected}/>
          </td>
          <td>
            <select onChange={this.pointChanged}>
              <option value="diamond">diamond</option>
              <option value="square">square</option>
              <option value="circle">circle</option>
              <option value="cross">cross</option>
            </select>
          </td>
            <td style={{padding:5}}>
              <FlatButton label="Delete" secondary={true}
                          onClick={
                            (e) => deleteSeries(seriesInfo.name)}/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }

  pointChanged(e) {
    this.setState({selectedPoint: e.target.value});
    this.props.changePoint(e.target.value, this.props.data.name)
  }

  colorSelected(color) {
    this.setState({selectedColor: color}); //local
    this.props.changeColor(color, this.props.data.name)
  }
}




