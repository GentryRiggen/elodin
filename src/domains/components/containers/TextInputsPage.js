import React from 'react';
import { View } from 'react-native';
import {
  focusTextInput,
  Gap,
  Page,
  StyleSheet,
  TextInput,
  Text,
} from '../../../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  bottom: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
  },
});


class TextInputsPage extends React.Component {
  static navigationOptions = { headerTitle: 'Text Inputs' };

  constructor(props) {
    super(props);

    this.state = {
      text1: 'Hello, World',
      text2: '',
      text3: '',
      text4: '',
    };
  }

  setRef(key) {
    return (element) => {
      this[key] = element;
    };
  }

  focusInput(key) {
    return () => {
      focusTextInput(this[key]);
    };
  }

  renderTextInput(value, placeholder, multiline, refName, nextInput = false) {
    return (
      <View>
        <TextInput
          ref={this.setRef(refName)}
          value={this.state[value]}
          onChangeText={text => this.setState({ [value]: text })}
          placeholder={placeholder}
          minLength={5}
          minLengthError={`${placeholder} must be at least 5 characters`}
          multiline={multiline}
          required
          requiredError={`${placeholder} is required`}
          returnKeyType="next"
          validateOn="submit"
          onSubmitEditing={this.focusInput(nextInput)}
          styleName={`${multiline ? 'multiline' : ''}`}
        />
        <Gap top={8} />
      </View>
    );
  }

  render() {
    return (
      <Page scrollable>
        <View style={styles.container}>
          {this.renderTextInput('text1', 'Text Input', false, 't1', 't2')}
          {this.renderTextInput('text2', 'Text Input', false, 't2', 't3')}
          {this.renderTextInput('text3', 'Text Area', true, 't3', 't4')}
          <Gap top={100} />
          <Text styleName="bold subheading">
            The view adjusts to move out of the way of the keyboard
          </Text>
          {this.renderTextInput('text4', 'Text Area', true, 't4')}
        </View>
      </Page>
    );
  }
}

export default TextInputsPage;
