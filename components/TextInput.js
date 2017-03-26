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
    validateOn: PropTypes.oneOf(['blur', 'change', 'submit']),
  };

  static defaultProps = {
    placeholder: '',
    disabled: false,
    minLength: 0,
    minLengthError: 'Too short',
    multiline: false,
    required: false,
    requiredError: 'Field is required',
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

  onBlur(isSubmit = false) {
    return (event) => {
      const { validateOn } = this.props;
      this.setState({ focused: false });
      const value = R.pathOr(false, ['nativeEvent', 'text'], event);
      if (value === false) return;

      if (validateOn === 'blur' || validateOn === 'submit') {
        this.getError(value);
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
        this.getError(value);
      }

      this.props.onChangeText(value);
    };
  }

  errors() {
    return this.getError(this.state.value);
  }

  getError(value) {
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

    return validationError;
  }

  validate(value) {
    return checker => {
      const validatorFunction = R.prop('validator')(checker);
      return validatorFunction(value);
    }
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
