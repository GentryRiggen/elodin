import React, { Component, PropTypes } from 'react';
import R from 'ramda';
import {
  TextInput as NativeTextInput,
  View,
} from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import Text from './Text';

const checkRequired = value => value.length === 0;
const checkMinLength = (minLength) => {
  return value => value.length < minLength;
};

class TextInput extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    minLength: PropTypes.number,
    minLengthError: PropTypes.string,
    multiline: PropTypes.bool,
    required: PropTypes.bool,
    requiredError: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    style: PropTypes.any.isRequired,
    validateOn: PropTypes.oneOf(['change', 'submit']),
  };

  static defaultProps = {
    placeholder: '',
    disabled: false,
    minLength: 0,
    minLengthError: 'Not long enough',
    multiline: false,
    required: false,
    requiredError: 'required',
    secureTextEntry: false,
    validateOn: 'submit',
    onSubmitEditing: () => null,
    onChangeText: () => null,
    onBlur: () => null,
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      value: '',
      dirty: true,
      errorText: '',
      hasError: false,
    };

    this.validators = [];
    if (props.required) {
      this.validators = [
        ...this.validators,
        {
          validator: checkRequired,
          error: props.requiredError,
        },
      ];
    }
    if (props.minLength) {
      this.validators = [
        ...this.validators,
        {
          validator: checkMinLength(props.minLength),
          error: props.minLengthError,
        },
      ];
    }
  }

  onFocus() {
    return () => this.setState({ focused: true });
  }

  onEndEditing() {
    return (event) => {
      if (this.props.validateOn === 'submit') {
        this.onBlur(true)(event);
      }
    };
  }

  onBlur(isSubmit = false) {
    return (event) => {
      this.setState({ focused: false });
      const value = R.pathOr(false, ['nativeEvent', 'text'], event);
      if (value === false) return;
      const isValid = this.props.validateOn === 'submit'
        ? this.isValid(value)
        : true;

      if (isValid) {
        const handler = isSubmit
          ? this.props.onSubmitEditing
          : this.props.onBlur;

        handler(value);
      }
    };
  }

  onChangeText() {
    return (value) => {
      this.setState({
        value,
      });
      if (this.props.validateOn === 'change' || this.state.hasError) {
        this.isValid(value);
      }

      this.props.onChangeText(value);
    };
  }

  checkIsValid() {
    return this.isValid(this.state.value);
  }

  isValid(value) {
    const validationError = R.find(this.validate(value))(this.validators);
    if (validationError) {
      this.setState({
        dirty: true,
        errorText: validationError.error,
        hasError: true,
      });
    } else {
      this.setState({
        errorText: '',
        hasError: false,
        dirty: true,
      });
    }

    return !validationError;
  }

  validate(value) {
    return checker => {
      const validatorFunction = R.prop('validator')(checker);
      return validatorFunction(value);
    }
  }

  setNativeProps(nativeProps) {
    this.component.setNativeProps(nativeProps);
  }

  renderErrorText() {
    if (this.state.hasError) {
      return <Text styleName="small error" >{this.state.errorText}</Text>
    }
  }

  render() {
    const {
      disabled,
      multiline,
      placeholder,
      secureTextEntry,
      style,
      value,
    } = this.props;
    const borderStyle = this.state.focused ? style.focusedBorder : style.border;
    const height = multiline ? 80 : 36;
    const containerStyle = {
      ...style.container,
      height,
    };
    const inputStyle = {
      ...style.input,
      height: height - 4,
    };

    return (
      <View style={containerStyle} >
        <NativeTextInput
          ref={component => this.component = component}
          {...this.props}
          style={inputStyle}
          editable={!disabled}
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor={style.placeholderTextColor}
          value={value}
          onFocus={this.onFocus()}
          onSubmitEditing={this.onBlur(true)}
          onChangeText={this.onChangeText()}
          onEndEditing={this.onBlur()}
          securetTextEntry={secureTextEntry}
        />
        <View style={borderStyle} />
        {this.renderErrorText()}
      </View>
    );
  }
}

export default connectStyle(Constants.components.TextInput)(TextInput);
