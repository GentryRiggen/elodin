import React from 'react';
import { Animated } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

const AnimatedView = props => <Animated.View {...props} />;

AnimatedView.propTypes = {
  ...Animated.View.propTypes,
};

export default connectStyle(Constants.components.AnimatedView)(AnimatedView);
