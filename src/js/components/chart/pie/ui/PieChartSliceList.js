import React from "react";

import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import ColorChooser from '../../ColorChooser'


export default class PieChartSliceList extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteSlice = this.deleteSlice.bind(this);

  }

  static propTypes = {
    deleteSlice: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired
    }))
  };

  render() {
    let props = this.props;
    let deleteSlice = this.props.deleteSlice;
    let pieData = this.props.data;

    return (
      <MuiThemeProvider>
        <table  >
          <tbody>
          {pieData.map(function (slice, i) {
            var key = 'slice_' + i;

            var style = {
              color: 'black',
              background: slice.color
            };
            return (
              <tr key={key} >
                <td style={{padding:5}}>
                  {slice.name}
                </td>
                <td style={{padding:5}}>
                  {slice.value}
                </td>
                <td style={{padding:5}}>
                  <ColorChooser color={slice.color}
                                onChooseColor={
                                  (color) => {
                                    props.colorSelected(color, slice.name)
                                  }
                                }/>
                </td>
                <td style={{padding:5}}>
                  <FlatButton label="Delete" secondary={true}
                              onClick={
                                (e) => deleteSlice(slice.name, i)}/>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </MuiThemeProvider>
      );
  }
}
