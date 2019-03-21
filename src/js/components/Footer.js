import React from "react";


export default class Footer extends React.Component {

  componentDidMount() {

  }
  render() {
    const footerStyles = {
      marginTop: "30px",
      position: "absolute",
      bottom:0
    };

    return (
      <footer style={footerStyles}>
        <div className="row">
          <div className="col-lg-12">
            {/*<p>Copyright &copy; Frontangle.com</p>*/}
          </div>
        </div>
      </footer>
    );
  }
}
