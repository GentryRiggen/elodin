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
    padding: 24,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

class AvatarsPage extends React.Component {
  static navigationOptions = { headerTitle: 'Avatars' };

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            <Avatar
              kind="person"
              styleName="sm"
              name="gentry ryan riggen"
            />
            <Avatar
              kind="person"
              styleName="md"
              name="gentry ryan riggen"
            />
            <Avatar
              kind="person"
              styleName="lg"
              name="gentry ryan riggen"
            />
            <Avatar
              kind="person"
              styleName="xl"
              name="gentry ryan riggen"
            />
          </View>

          <View style={styles.avatarContainer}>
            <Avatar
              kind="person"
              styleName="sm"
              name="gentry ryan riggen"
              image="https://unsplash.it/1920/1080/?random"
            />
            <Avatar
              kind="person"
              styleName="md"
              name="gentry ryan riggen"
              image="https://unsplash.it/1920/1080/?random"
            />
            <Avatar
              kind="person"
              styleName="lg"
              name="Gentry Ryan Riggen"
              image="https://unsplash.it/1920/1080/?random"
            />
            <Avatar
              kind="person"
              styleName="xl"
              name="Gentry Ryan Riggen"
              image="https://unsplash.it/1920/1080/?random"
            />
          </View>
        </View>
      </Page>
    );
  }
}

export default AvatarsPage;
