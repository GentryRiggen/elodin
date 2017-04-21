import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import Text from './Text';
import View from './View';

// eslint-disable-next-line
class ListSwipeButton extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    onPress: React.PropTypes.func.isRequired,
    style: React.PropTypes.any.isRequired,
  };

  render() {
    const { text, onPress, style } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={style}>
          <Text styleName="regular bold inverse">
            {text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connectStyle(Constants.components.ListSwipeButton)(ListSwipeButton);
