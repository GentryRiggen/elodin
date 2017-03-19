import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

const Tab = ({
  image,
  onPress,
  title,
  selected,
  style,
}) => {
  const textStyle = [style.footerTabText];
  const imageStyle = [style.footerTabImage];
  if (selected) {
    textStyle.push(style.footerTabTextSelected);
    imageStyle.push(style.footerTabImageSelected);
  }

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="transparent"
      style={style.footerTab}
    >
      <View style={style.footerTabContent}>
        <Image
          source={image}
          style={imageStyle}
        />
        <Text style={textStyle}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

Tab.propTypes = {
  image: React.PropTypes.any.isRequired,
  onPress: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool.isRequired,
  style: React.PropTypes.any,
};

export default connectStyle(Constants.components.Tab)(Tab);
