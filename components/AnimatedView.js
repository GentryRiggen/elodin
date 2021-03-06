import { Animated } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

export default connectStyle(Constants.components.AnimatedView)(Animated.View);
