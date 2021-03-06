import React from 'react';
import { View } from 'react-native';
import { Button, Page, StyleSheet } from '../../../../components';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  bigButton: {
    margin: 4,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class ButtonsPage extends React.Component {
  static navigationOptions = { headerTitle: 'Buttons' };

  getButtons(inverse = false) {
    const noOp = () => null;
    const inverseStyleName = inverse ? 'inverse-' : '';

    return (
      <View style={styles.container}>
        <View style={styles.bigButton}>
          <Button
            styleName={`flat primary ${inverseStyleName}`}
            text="Primary"
            onPress={noOp}
          />
        </View>
        <View style={styles.bigButton}>
          <Button
            styleName={`raised primary ${inverseStyleName}`}
            text="Primary"
            onPress={noOp}
          />
        </View>

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
      <Page scrollable>
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
