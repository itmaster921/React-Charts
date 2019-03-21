import React from "react";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Switch, Route, withRouter } from 'react-router-dom'
import BarChartPage from "./components/chart/bar/ui/BarChartContainer";
import PieChartPage from "./components/chart/pie/ui/PieChartContainer";
import XYChartPage from "./components/chart/xy/ui/XYChartContainer";
import WelcomePage from "./components/WelcomePage";

import BouncySwitch from "./BouncySwitch"
import FadeSwitch from "./FadeSwitch"




import './style.less';
import { spring, AnimatedSwitch } from 'react-router-transition';

/**
 *
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children.
 */
class Main extends React.Component {
  render() {
    const containerStyle = {
      marginTop: "60px",
    };

// we need to map the `scale` prop we define below
// to the transform style property
    function mapStyles(styles) {
      return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
      };
    }

// wrap the `spring` helper to use a bouncy config
    function bounce(val) {
      return spring(val, {
        stiffness: 330,
        damping: 22,
      });
    }

    // child matches will...
    const bounceTransition = {
      // start in a transparent, upscaled state
      atEnter: {
        opacity: 0,
        scale: 1.2,
      },
      // leave in a transparent, downscaled state
      atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
      },
      // and rest at an opaque, normally-scaled state
      atActive: {
        opacity: bounce(1),
        scale: bounce(1),
      },
    };

    return (
      <div>
        <Nav/>
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">

              {/*<AnimatedSwitch*/}
                {/*atEnter={{ opacity: 0 }}*/}
                {/*atLeave={{ opacity: 0 }}*/}
                {/*atActive={{ opacity: 1 }}*/}
                {/*className="switch-wrapper"*/}
              {/*>*/}


                <FadeSwitch>
                  <Route exact path='/' component={WelcomePage}/>
                  <Route path='/bar' component={BarChartPage}/>
                  <Route path='/pie' component={PieChartPage}/>
                  <Route path='/line' component={XYChartPage}/>
                </FadeSwitch>

              {/*</AnimatedSwitch>*/}
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default withRouter(Main)