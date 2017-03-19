import React from 'react';
import {
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import AnimatedView from './AnimatedView';
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
    noripple: false,
  };

  constructor(props, context) {
    super(props, context);

    const maxOpacity = 0.12;

    this.state = {
      maxOpacity,
      scaleValue: new Animated.Value(0.01),
      opacityValue: new Animated.Value(maxOpacity),
      width: 48,
    };
  }

  onPressedIn() {
    return () => {
      Animated.timing(this.state.scaleValue, {
        toValue: 10,
        duration: 5000,
        easing: Easing.bezier(0.0, 0.0, 0.2, 1),
      }).start();
    };
  }

  onPressedOut() {
    return () => {
      Animated.timing(this.state.opacityValue, {
        toValue: 0,
      }).start(() => {
        this.state.scaleValue.setValue(0.01);
        this.state.opacityValue.setValue(this.state.maxOpacity);
      });
    };
  }

  renderRippleView() {
    if (this.props.disabled || this.props.noRipple) {
      return null;
    }

    const {
      scaleValue,
      opacityValue,
      width,
    } = this.state;
    return (
      <AnimatedView
        style={{
          transform: [{ scale: scaleValue }],
          opacity: opacityValue,
          width,
          height: width,
          borderRadius: width / 2,
          top: -1 * (width / 3.5),
          left: (width / 12),
        }}
      />
    );
  }

  onLayout() {
    return (e) => {
      const { width } = e.nativeEvent.layout;
      this.setState({ width });
    };
  }

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
        <Text style={style.text}>
          {text.toUpperCase()}
        </Text>
      )
      : children;

    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressedIn()}
        onPressOut={this.onPressedOut()}
        onPress={buttonOnPress}
        underlayColor="transparent"
        styleName="dark"
        style={style}
        ref={component => this.component = component}
        onLayout={this.onLayout()}
      >
        <View
          style={style.container}
        >
          {this.renderRippleView()}
          {content}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connectStyle(Constants.components.Button)(Button);
