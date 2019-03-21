import React from "react";

import './BarSeriesList.less';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

export class CategoryDataList extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    categories: PropTypes.array.isRequired,
    deleteCategory: PropTypes.func
  };

  render() {
    const categories = this.props.categories;

    let deleteCat = this.props.deleteCategory;
    return (
      <MuiThemeProvider>
        <div className="listStyle">
          <table>
            <tbody>
            {categories.map(function (cat, i) {
              let key = 'key_' + i;
              return (
                <tr key={key}>
                  <td>
                    {cat}
                  </td>
                  <td>
                    <FlatButton label="Delete" secondary={true}
                                onClick={(e) => deleteCat(cat, e, i)}/>

                    {/*<input type="button" value="delete"*/}
                    {/*onClick={(e) => deleteS(e, cat, i)}/>*/}
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

  deleteCategory(event, categoryName, index) {
    event.preventDefault();
    this.props.deleteCategory(categoryName, index);
  }
}

export default CategoryDataList;






