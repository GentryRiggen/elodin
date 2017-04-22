import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import { TouchableOpacity } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import View from './View';
import Text from './Text';

class Button extends Component {
  static propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    noRipple: PropTypes.bool,
    onPress: PropTypes.func,
    text: PropTypes.string,
    style: PropTypes.any,
  };

  static defaultProps = {
    children: null,
    disabled: false,
    onPress: () => null,
    text: '',
    noRipple: false,
  };

  setNativeProps(nativeProps) {
    this.component.setNativeProps(nativeProps);
  }

  render() {
    const {
      children,
      disabled,
      onPress,
      text,
      style,
    } = this.props;
    const buttonOnPress = disabled ? (() => null) : onPress;
    const content = !R.isEmpty(text)
      ? (
        <Text>
          {text.toUpperCase()}
        </Text>
      )
      : children;

    const finalStyle = {
      ...style,
    };
    delete finalStyle.underlayColor;

    return (
      <TouchableOpacity
        onPress={buttonOnPress}
        underlayColor={style.underlayColor}
        ref={component => this.component = component}
        style={finalStyle}
        disabled={disabled}
      >
        <View>
          {content}
        </View>
      </TouchableOpacity>
    );
  }
}

export default connectStyle(Constants.components.Button)(Button);
