import React from 'react';
import { Image, View } from 'react-native';
import {
  Page,
  Text,
} from '../../../../components';

class TypographyPage extends React.Component {
  static navigationOptions = {
    headerTitle: 'Typography',
    tabBarLabel: 'Typography',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../../images/typography.png')}
        style={{ tintColor }}
      />
    ),
  }

  render() {
    return (
      <Page>
        <View
          style={{
            flex: 1,
            padding: 16,
          }}
        >
          <Text styleName="bold title">Title Display BOLD</Text>
          <Text styleName="regular title">Title Display REGULAR</Text>
          <Text styleName="light title">Title Display LIGHT</Text>

          <Text styleName="bold subheading">Subheading Caption BOLD</Text>
          <Text styleName="regular subheading">Subheading Caption REGULAR</Text>
          <Text styleName="light subheading">Subheading Caption LIGHT</Text>

          <Text styleName="bold body">Body Body 1 BOLD</Text>
          <Text styleName="regular body">Body Body 1 REGULAR</Text>
          <Text styleName="light body">Body Body 1 LIGHT</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#343434',
            padding: 16,
          }}
        >
          <Text styleName="regular body inverse">Body Body 1 REGULAR</Text>

          <Text styleName="secondary inverse">Secondary</Text>
          <Text styleName="disabled inverse">Disabled</Text>
          <Text styleName="primary">Button/Hyperlink</Text>
          <Text styleName="accent">Button/Hyperlink</Text>
          <Text styleName="success">Success</Text>
          <Text styleName="warning">Warning</Text>
          <Text styleName="error">Error</Text>
        </View>
      </Page>
    );
  }
}

export default TypographyPage;
