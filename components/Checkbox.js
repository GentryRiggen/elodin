import React from 'react';
import {
  TouchableHighlight,
  View,
} from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import Icon from './Icon';

// eslint-disable-next-line
class Checkbox extends React.Component {
  static propTypes = {
    checked: React.PropTypes.bool.isRequired,
    onPress: React.PropTypes.func.isRequired,
    style: React.PropTypes.any.isRequired,
  };

  render() {
    const { checked, onPress, style } = this.props;
    let checkedContainer = <View />;
    let checkboxStyle = style.container;

    if (checked) {
      checkedContainer = (
        <Icon
          name="md-checkmark"
          size={20}
          styleName="regular inverse"
        />
      );
      checkboxStyle = {
        ...style.container,
        ...style.checked,
      };
    }

    return (
      <TouchableHighlight
        style={checkboxStyle}
        onPress={onPress}
        underlayColor="transparent"
      >
        {checkedContainer}
      </TouchableHighlight>
    );
  }
}

export default connectStyle(Constants.components.Checkbox)(Checkbox);
