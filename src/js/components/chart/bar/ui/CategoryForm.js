import React from "react";

import MUITextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import PropTypes from 'prop-types';

class CategoryForm extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeText = this.onChangeText.bind(this); //todo no need to bind here

    this.state = {
      enableButton: false,
    };
  }

  static propTypes = {
    createCategory: PropTypes.func.isRequired
  };

  handleSubmit(event) {
    event.preventDefault();

    let val = this.refs.categoryName.input.value

    let category = {
      name: val,
    }
    this.props.createCategory(category);
  }

  onChangeText(e, value) {
    if (!value) {
      this.setState({enableButton: false});
    } else {
      this.setState({enableButton: true});
    }
  }

  colorSelected(color) {
    this.setState({selectedColor: color});
  }

  render() {

    let enableButton = this.state.enableButton;

    let style = {
      "padding": "3px",
      "margin": "3px",
    }

    return (
      <MuiThemeProvider>
        <div style={style}>
          <form onSubmit={this.handleSubmit}>
            <h3>Category :</h3>
            <MUITextField
              id="enterCatName"
              hintText="Enter Category Name"
              type="text"
              ref="categoryName"
              onChange={this.onChangeText}
            />
            <RaisedButton type="submit" label="Add Category" disabled={!enableButton}/>
          </form>
        </div>
      </MuiThemeProvider>
    )
  }
}
export default CategoryForm;