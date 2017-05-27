import React from 'react';
import { View } from 'react-native';
import {
  Button,
  Modal,
  Text,
  Page,
  StyleSheet,
} from '../../../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

class ModalsPage extends React.Component {
  static navigationOptions = { headerTitle: 'Modals' };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleModal() {
    return () => {
      this.setState({ open: !this.state.open });
    };
  }

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Button
            styleName="raised primary"
            text="Open"
            onPress={this.toggleModal()}
          />
        </View>

        <Modal
          title="Dope Modal"
          visible={this.state.open}
          secondaryTitle="CANCEL"
          secondaryAction={this.toggleModal(1)}
          primaryTitle="DONE"
          primaryAction={this.toggleModal(1)}
        >
          <View style={{ padding: 16 }}>
            <Text>This is a dope modal!</Text>
            <Text>Put whatever you want in here</Text>
            <Button
              styleName="raised accent"
              text="Close"
              onPress={this.toggleModal()}
            />
          </View>
        </Modal>
      </Page>
    );
  }
}

export default ModalsPage;
