import React from 'react';
import {
  TextInput as NativeTextInput,
  View,
} from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

class TextInput extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    onChangeText: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool,
    multiline: React.PropTypes.bool,
    style: React.PropTypes.any.isRequired,
  };

  static defaultProps = {
    placeholder: '',
    disabled: false,
    multiline: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  onFocus() {
    return () => this.setState({ focused: true });
  }

  onBlur() {
    return () => this.setState({ focused: false });
  }

  setNativeProps(nativeProps) {
    this.component.setNativeProps(nativeProps);
  }

  render() {
    const {
      disabled,
      multiline,
      onChangeText,
      placeholder,
      style,
      value,
    } = this.props;
    const borderStyle = this.state.focused ? style.focusedBorder : style.border;
    const height = multiline ? 80 : 40;

    return (
      <View
        style={{
          ...style.container,
          height,
        }}
      >
        <NativeTextInput
          ref={component => this.component = component}
          style={{
            ...style.input,
            height: height - 4,
          }}
          editable={!disabled}
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor={style.placeholderTextColor}
          value={value}
          onFocus={this.onFocus()}
          onBlur={this.onBlur()}
          onChangeText={onChangeText}
        />

        <View style={borderStyle} />
      </View>
    );
  }
}

export default connectStyle(Constants.components.TextInput)(TextInput);
