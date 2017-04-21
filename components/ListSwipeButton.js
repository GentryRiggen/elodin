import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import Text from './Text';
import View from './View';

const ListSwipeButton = ({ onPress, style, text }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={style}>
      <Text styleName="regular bold inverse">
        {text}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

ListSwipeButton.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  style: React.PropTypes.any.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default connectStyle(Constants.components.ListSwipeButton)(ListSwipeButton);
