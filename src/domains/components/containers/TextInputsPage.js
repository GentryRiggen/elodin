import React from 'react';
import { View } from 'react-native';
import {
  Gap,
  Page,
  StyleSheet,
  TextInput,
  Text,
} from '../../../../components';

class TextInputsPage extends React.Component {
  static navigationOptions = {
    header: {
      title: <Text styleName="title" >Text Inputs</Text>,
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
    };
  }

  renderTextInput(value, placeholder, multiline) {
    return (
      <View>
        <TextInput
          value={this.state[value]}
          onChangeText={text => this.setState({ [value]: text })}
          placeholder={placeholder}
          minLength={5}
          minLengthError={`${placeholder} must be at least 5 characters`}
          multiline={multiline}
          required
          requiredError={`${placeholder} is required`}
          validateOn="submit"
        />
        <Gap top={8} />
      </View>
    );
  }

  render() {
    return (
      <Page scrollable >
        <View style={styles.container} >
          {this.renderTextInput('text1', 'Text Input', false)}
          {this.renderTextInput('text2', 'Text Area', true)}
          <Gap top={100} />
          <Text styleName="bold subheading">
            The view adjusts to move out of the way of the keyboard
          </Text>
          {this.renderTextInput('text4', 'Text Area', true)}
        </View>
      </Page>
    );
  }
}

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

export default TextInputsPage;
