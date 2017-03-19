import React from 'react';
import { Text as RNText } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

const Text = props => <RNText {...props}>{props.children}</RNText>;
Text.propTypes = {
  ...RNText.propTypes,
};

export default connectStyle(Constants.components.Text)(Text);
