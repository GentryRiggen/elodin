import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import LinearGradient from 'react-native-linear-gradient';
import { connectStyle } from '@shoutem/theme';

import Constants from './lib/constants';

// eslint-disable-next-line
class GradientView extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.any.isRequired,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children, style } = this.props;
    const containerStyle = { ...style.container };
    const primaryColor = containerStyle.primaryColor;
    const accentColor = containerStyle.accentColor;
    delete containerStyle.primaryColor;
    delete containerStyle.accentColor;
    return (
      <LinearGradient
        style={containerStyle}
        colors={[primaryColor, accentColor]}
      >
        {children}
      </LinearGradient>
    );
  }
}

export default connectStyle(Constants.components.GradientView)(GradientView);
