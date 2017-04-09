import React from 'react';
import { View } from 'react-native';
import {
  Page,
  StyleSheet,
  Spinner,
  Text,
} from '../../../../components';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

class SpinnersPage extends React.Component {
  static navigationOptions = {
    header: {
      title: <Text styleName="title">Spinners</Text>,
    },
  };

  renderSpinners() {
    return (
      <View style={styles.container}>
        <View>
          <Spinner styleName="primary big" />
          <Spinner styleName="accent big" />
          <Spinner styleName="regular big" />
          <Spinner styleName="secondary big" />
          <Spinner styleName="disabled big" />
          <Spinner styleName="error big" />
          <Spinner styleName="warning big" />
        </View>

        <View>
          <Spinner styleName="primary" />
          <Spinner styleName="accent" />
          <Spinner styleName="regular" />
          <Spinner styleName="secondary" />
          <Spinner styleName="disabled" />
          <Spinner styleName="error" />
          <Spinner styleName="warning" />
        </View>

        <View>
          <Spinner styleName="primary small" />
          <Spinner styleName="accent small" />
          <Spinner styleName="regular small" />
          <Spinner styleName="secondary small" />
          <Spinner styleName="disabled small" />
          <Spinner styleName="error small" />
          <Spinner styleName="warning small" />
        </View>
      </View>
    );
  }

  render() {
    return (
      <Page scrollablr>
        {this.renderSpinners()}
      </Page>
    );
  }
}

export default SpinnersPage;
