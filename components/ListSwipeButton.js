import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import Text from './Text';
import View from './View';

const ListSwipeButton = ({ text, onPress, style }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={style}>
      <Text styleName="regular bold inverse">
        {text}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

ListSwipeButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired,
  style: React.PropTypes.any,
};

export default connectStyle(Constants.components.ListSwipeButton)(ListSwipeButton);
