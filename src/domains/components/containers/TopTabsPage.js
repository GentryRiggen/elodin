import React from 'react';
import { View } from 'react-native';
import {
  Button,
  Page,
  Text,
  TopTabs,
} from '../../../../components';

class TopTabsPage extends React.Component {
  static navigationOptions = { headerTitle: 'Top Tabs' };

  constructor(props) {
    super(props);
    this.state = {
      scrollable: false,
    };
  }

  getPage(id) {
    return (
      <View
        tabLabel={`Tab #${id}`}
        style={{ padding: 16 }}
        key={id}
      >
        <Text size="Title">
          Tab {id}
        </Text>
        <Button
          onPress={this.toggleScrollable()}
          text="Toggle Scrollable"
        />
      </View>
    );
  }

  getArray(size) {
    const arr = [];
    for (let i = 1; i <= (new Array(size)).length; i++) {
      arr.push(i);
    }

    return arr;
  }

  toggleScrollable() {
    return () => this.setState({ scrollable: !this.state.scrollable });
  }

  renderTabs(scrollable, count) {
    const pages = this.getArray(count).map(i => this.getPage(i));
    return (
      <TopTabs
        scrollable={scrollable}
        noSwipe
      >
        {pages}
      </TopTabs>
    );
  }

  render() {
    return (
      <Page>
        {this.state.scrollable ? this.renderTabs(true, 15) : this.renderTabs(false, 3)}
      </Page>
    );
  }
}

export default TopTabsPage;
