import React from "react";

import './style.less';
import { spring, AnimatedSwitch } from 'react-router-transition';

/**
 * Adds bouncy animation to route switching
 */
class FadeSwitch extends React.Component {
  render() {
    return (

      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper">
        {this.props.children}
      </AnimatedSwitch>
    );
  }
}

export default FadeSwitch