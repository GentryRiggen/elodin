import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import View from './View';
import Text from './Text';

class Button extends React.Component {
  static propTypes = {
    disabled: React.PropTypes.bool,
    noRipple: React.PropTypes.bool,
    onPress: React.PropTypes.func.isRequired,
    text: React.PropTypes.string,
    style: React.PropTypes.any,
  };

  static defaultProps = {
    disabled: false,
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
    const content = text
      ? (
        <Text>
          {text.toUpperCase()}
        </Text>
      )
      : children;

    console.log(style);
    const finalStyle = {
      ...style,
    };
    delete finalStyle.underlayColor;
    console.log(finalStyle);

    return (
      <TouchableOpacity
        onPress={buttonOnPress}
        underlayColor={style.underlayColor}
        ref={component => this.component = component}
        style={finalStyle}
      >
        <View>
          {content}
        </View>
      </TouchableOpacity>
    );
  }
}

export default connectStyle(Constants.components.Button)(Button);
