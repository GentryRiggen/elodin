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
    onChangeText: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.bool,
    minLength: PropTypes.number,
    minLengthError: PropTypes.string,
    required: PropTypes.bool,
    requiredError: PropTypes.string,
    style: PropTypes.any.isRequired,
    validateOn: PropTypes.oneOf(['blur', 'change', 'submit']),
    value: PropTypes.string.isRequired,
    onSubmitEditing: PropTypes.func,
    onBlur: () => null,
  };

  static defaultProps = {
    disabled: false,
    label: true,
    minLength: 0,
    minLengthError: 'Too short',
    required: false,
    requiredError: 'Field is required',
    validateOn: 'submit',
    onSubmitEditing: () => null,
    onChangeText: () => null,
    onBlur: () => null,
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      value: props.value || '',
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

  errors() {
    return this.getError(this.state.value);
  }

  validate(value) {
    return (checker) => {
      const validatorFunction = R.prop('validator')(checker);
      return validatorFunction(value);
    };
  }

  renderLabel() {
    if (this.props.label && (this.state.focused || !R.isEmpty(this.state.value))) {
      const label = R.propOr('', 'placeholder', this.props);
      return (
        <Text
          style={this.props.style.label}
          styleName="small"
        >
          {label}
        </Text>
      );
    }

    return <View style={this.props.style.emptyLabel} />;
  }

  renderErrorText() {
    if (this.state.hasError) {
      return <Text styleName="small error" >{this.state.errorText}</Text>;
    }
    return <View style={this.props.style.emptyLabel} />;
  }

  renderDivider() {
    const { style } = this.props;
    let borderStyle = this.state.focused ? style.focusedBorder : style.border;
    borderStyle = this.state.hasError
      ? {
        ...borderStyle,
        ...style.errorBorder,
      }
      : borderStyle;
    return (
      <View style={borderStyle} />
    );
  }

  render() {
    const {
      disabled,
      style,
    } = this.props;

    return (
      <View style={style.container}>
        {this.renderLabel()}
        <NativeTextInput
          {...this.props}
          style={style.input}
          editable={!disabled}
          placeholderTextColor={style.placeholderTextColor}
          onFocus={this.onFocus()}
          onSubmitEditing={this.onBlur(true)}
          onChangeText={this.onChangeText()}
          onEndEditing={this.onBlur()}
          ref={(input) => { this.input = input; }}
        />
        {this.renderDivider()}
        {this.renderErrorText()}
      </View>
    );
  }
}

export default connectStyle(Constants.components.TextInput)(TextInput);
