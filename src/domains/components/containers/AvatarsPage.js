import React from 'react';
import { View } from 'react-native';
import {
  Avatar,
  Page,
  StyleSheet,
  Text,
} from '../../../../components';

const styles = StyleSheet.create({
  container: {
    padding: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

class AvatarsPage extends React.Component {
  static navigationOptions = {
    header: {
      title: <Text styleName="title">Avatars</Text>,
    },
  };

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Avatar
            kind="person"
            styleName="big"
            name="gentry ryan riggen"
          />
          <Avatar
            kind="person"
            styleName="normal"
            name="gentry ryan riggen"
          />
          <Avatar
            kind="person"
            styleName="small"
            name="gentry ryan riggen"
          />
        </View>

        <View style={styles.container}>
          <Avatar
            kind="person"
            styleName="big"
            name="gentry ryan riggen"
            image="https://unsplash.it/1920/1080/?random"
          />
          <Avatar
            kind="person"
            styleName="normal"
            name="gentry ryan riggen"
            image="https://unsplash.it/1920/1080/?random"
          />
          <Avatar
            kind="person"
            styleName="small"
            name="Gentry Ryan Riggen"
            image="https://unsplash.it/1920/1080/?random"
          />
        </View>
      </Page>
    );
  }
}

export default AvatarsPage;
