import React from 'react';
import {
  TouchableHighlight,
  View,
} from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

const RadioButton = ({ checked, onPress, style }) => {
  const checkedContainer = checked
    ? <View style={{ ...style.innerButton, ...style.checked }} />
    : <View style={{ ...style.innerButton, ...style.unChecked }} />;

  return (
    <TouchableHighlight
      style={style.container}
      onPress={onPress}
      underlayColor="transparent"
    >
      {checkedContainer}
    </TouchableHighlight>
  );
};

RadioButton.propTypes = {
  checked: React.PropTypes.bool.isRequired,
  onPress: React.PropTypes.func.isRequired,
  style: React.PropTypes.any.isRequired,
};

export default connectStyle(Constants.components.RadioButton)(RadioButton);
