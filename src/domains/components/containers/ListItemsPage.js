import React from 'react';
import {
  Avatar,
  List,
  ListSwipeButton,
  Page,
  Text,
} from '../../../../components';

class ListItemsPage extends React.Component {
  static navigationOptions = {
    header: {
      title: <Text styleName="title">List Items</Text>,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      refreshing: false,
      fetchingMore: false,
      sorting: false,
      sortOrder: [],
    };
  }

  componentWillMount() {
    this.addToList(true, 0)();
  }

  onRowMoved() {
    return (e) => {
      const sortOrder = [...this.state.sortOrder];
      sortOrder.splice(e.to, 0, sortOrder.splice(e.from, 1)[0]);
      this.setState({ sortOrder });
    };
  }

  addItems(reset) {
    return () => {
      const lotsOText = 'Bro! What\'s up?!? Long time no see. How\'s life? Still lifting and getting dem gainz? Yeah me to. Gainz for life. [FIST BUMP]';
      let a = [];
      const amount = Math.floor(Math.random() * 10) + 10;
      const swipeButtons = [
        { component: <ListSwipeButton text="Primary" styleName="primary" onPress={() => null} /> },
        { component: <ListSwipeButton text="Accent" styleName="accent" onPress={() => null} /> },
        { component: <ListSwipeButton text="Success" styleName="success" onPress={() => null} /> },
      ];
      for (let i = 0; i < amount; ++i) a[i] = i;
      const items = a.map((i, index) => {
        const headerText = `List Item ${index}`;
        return {
          headerText,
          secondaryText: lotsOText,
          headerLines: 1,
          secondaryLines: 2,
          onPress: () => null,
          divider: true,
          leftContent: (
            <Avatar
              kind="person"
              name={headerText}
              image="https://unsplash.it/1920/1080/?random"
            />
          ),
          leftSwipeButtons: swipeButtons,
          rightSwipeButtons: swipeButtons,
        };
      });

      this.setState({
        items: reset ? items : [...this.state.items, ...items],
        refreshing: false,
        fetchingMore: false,
      });
    };
  }

  addToList(reset, timeout = 1500) {
    return () => {
      if (this.state.refreshing || this.state.fetchingMore) {
        return;
      }
      if (reset) {
        this.setState({ refreshing: true });
      } else {
        this.setState({ fetchingMore: true });
      }
      setTimeout(this.addItems(reset), timeout);
    };
  }

  toggleSort() {
    return () => {
      const doneSorting = this.state.sorting;
      if (doneSorting) {
        const items = this.state.sortOrder.map(key => this.state.items[key]);
        this.setState({
          sorting: !this.state.sorting,
          items,
        });
      } else {
        const items = {};
        this.state.items.forEach((item, index) => {
          items[index] = item;
        });
        const sortOrder = Object.keys(items);
        this.setState({
          sorting: !this.state.sorting,
          items,
          sortOrder,
        });
        this.setState({ sorting: !this.state.sorting });
      }
    };
  }

  render() {
    const {
      fetchingMore,
      items,
      refreshing,
      sorting,
      sortOrder,
    } = this.state;

    return (
      <Page>
        <List
          dataSource={items}
          onRefreshRequested={this.addToList(true)}
          isRefreshing={refreshing}
          onEndReached={this.addToList()}
          isFetchingMore={fetchingMore}
          isSorting={sorting}
          sortOrder={sortOrder}
          onRowMoved={this.onRowMoved()}
        />
      </Page>
    );
  }
}

export default ListItemsPage;
