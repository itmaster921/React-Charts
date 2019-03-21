import React from "react";

import ColorChooser from '../../ColorChooser'

import {barChartLogic} from "../barChartLogic";

import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import './BarSeriesList.less';

class BarSeriesList extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    deleteSeries: PropTypes.func.isRequired,
    colorSelected: PropTypes.func.isRequired,
    barData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isFetching: PropTypes.bool.isRequired,
        categories: PropTypes.array.isRequired,
        series: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
          data: PropTypes.arrayOf(PropTypes.shape({
              y: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            })
          ),
        }))
      }
    )
  };

  render() {
    let barData = this.props.barData; //pass through
    const series = barChartLogic.getSeries(barData);
    // console.info(JSON.stringify(barData))

    let deleteSeries = this.props.deleteSeries;
    let colorSelected = this.props.colorSelected;

    return (
      <MuiThemeProvider>
        <div className="listStyle">
          <table>
            <tbody>
            {series.map(function (series, i) {
              var key = 'xx_' + i;
              return (
                <tr key={key}>
                  <td>
                    {series.name}
                  </td>
                  <td>
                    <ColorChooser color={series.color}
                        onChooseColor={
                          (color) => {
                            colorSelected(color, series.name)
                          }
                        }
                    />
                  </td>
                  <td>
                    <FlatButton secondary={true}
                                onClick={
                                  (e) => deleteSeries(series.name)}>
                      <svg width="20" height="20" viewBox="0 0 1024 1024">
                        <path d="M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z"></path>
                      </svg>
                    </FlatButton>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default BarSeriesList;
