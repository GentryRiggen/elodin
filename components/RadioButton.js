import React from 'react';
import {
  TouchableHighlight,
  View,
} from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

class RadioButton extends React.Component {
  static propTypes = {
    checked: React.PropTypes.bool.isRequired,
    onPress: React.PropTypes.func.isRequired,
    style: React.PropTypes.any.isRequired,
  };

  render() {
    const { checked, onPress, style } = this.props;
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
  }
}

export default connectStyle(Constants.components.RadioButton)(RadioButton);
