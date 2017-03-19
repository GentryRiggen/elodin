import React from 'react';
import { View } from 'react-native';
import {
  Button,
  Page,
  Text,
  StyleSheet,
} from '../../../../components';

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class ButtonsPage extends React.Component {
  static navigationOptions = {
    header: {
      title: <Text styleName="title">Buttons</Text>,
    },
  };

  getButtons(inverse = false) {
    const noOp = () => null;
    const inverseStyleName = inverse ? 'inverse-' : '';

    return (
      <View>
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              styleName={`flat primary ${inverseStyleName}`}
              text="Primary"
              onPress={noOp}
            />
          </View>
          <View style={styles.button}>
            <Button
              styleName={`raised primary ${inverseStyleName}`}
              text="Primary"
              onPress={noOp}
            />
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              styleName={`flat accent ${inverseStyleName}`}
              text="Accent"
              onPress={noOp}
            />
          </View>
          <View style={styles.button}>
            <Button
              styleName={`raised accent ${inverseStyleName}`}
              text="Accent"
              onPress={noOp}
            />
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              styleName={`flat ${inverseStyleName}secondary`}
              text="Secondary"
              onPress={noOp}
            />
          </View>
          <View style={styles.button}>
            <Button
              styleName={`raised secondary ${inverseStyleName}`}
              text="Secondary"
              onPress={noOp}
            />
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              styleName={`flat ${inverseStyleName}disabled`}
              text="Disabled"
              onPress={noOp}
              disabled
            />
          </View>
          <View style={styles.button}>
            <Button
              styleName={`raised disabled ${inverseStyleName}`}
              text="Disabled"
              onPress={noOp}
              disabled
            />
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Page>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',
          }}
        >
          {this.getButtons()}
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: '#343434',
          }}
        >
          {this.getButtons(true)}
        </View>
      </Page>
    );
  }
}

export default ButtonsPage;
