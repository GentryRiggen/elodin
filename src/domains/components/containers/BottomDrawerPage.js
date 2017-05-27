import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  BottomDrawer,
  Page,
  StyleSheet,
  Text,
} from '../../../../components';


const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#DFDFDF',
  },
  header: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 36,
  },
});

class BottomDrawerPage extends React.Component {
  static navigationOptions = { headerTitle: 'Bottom Drawer' };

  render() {
    return (
      <Page>
        <BottomDrawer>
          <View style={styles.container}>
            <View style={styles.header}>
              <Icon name="view-headline" size={32} />
              <Text styleName="subtitle center">Drag me open bruh</Text>
            </View>
            <Text styleName="center">Put whatever you want in here!</Text>
          </View>
        </BottomDrawer>
      </Page>
    );
  }
}

export default BottomDrawerPage;
