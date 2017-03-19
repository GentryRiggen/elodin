import React from 'react';
import {
  ListView,
  RefreshControl,
  View,
} from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import SortableListView from 'react-native-sortable-listview';
import Icon from './Icon';
import ListItem from './ListItem';
import Spinner from './Spinner';

const noOp = () => null;

class List extends React.Component {
  static propTypes = {
    dataSource: React.PropTypes.any.isRequired,
    onRefreshRequested: React.PropTypes.func,
    isRefreshing: React.PropTypes.bool,
    onEndReached: React.PropTypes.func,
    onEndReachedThreshold: React.PropTypes.number,
    isFetchingMore: React.PropTypes.bool,
    isSorting: React.PropTypes.bool,
    sortOrder: React.PropTypes.array,
    onRowMoved: React.PropTypes.func,
    style: React.PropTypes.any.isRequired,
  };

  static defaultProps = {
    dataSource: [],
    onRefreshRequested: noOp,
    isRefreshing: false,
    onEndReached: noOp,
    onEndReachedThreshold: 250,
    isFetchingMore: false,
    isSorting: false,
    sortOrder: [],
    onRowMoved: noOp,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(props.dataSource),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
    });
  }

  getRefreshControl() {
    const {
      onRefreshRequested,
      isRefreshing,
      style,
    } = this.props;
    if (onRefreshRequested !== noOp) {
      return (
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefreshRequested}
          tintColor={style.refreshColor}
        />
      );
    }

    return null;
  }

  renderFetchingMore() {
    if (this.props.isFetchingMore) {
      return (
        <View style={this.props.style.fetchingMore}>
          <Spinner />
        </View>
      );
    }

    return null;
  }

  render() {
    const {
      dataSource,
      isSorting,
      sortOrder,
      onRowMoved,
      onEndReached,
      onEndReachedThreshold,
      style,
    } = this.props;

    if (isSorting) {
      return (
        <SortableListView
          style={{ flex: 1 }}
          data={dataSource}
          order={sortOrder}
          onRowMoved={(e) => {
            onRowMoved(e);
            this.forceUpdate();
          }}
          renderRow={row => (
            <ListItem
              {...{
                ...row,
                rightContent: (
                  <Icon
                    name="md-reorder"
                    size={24}
                    type="regular"
                  />
                ),
                leftSwipeButtons: [],
                rightSwipeButtons: [],
              }}
            />
          )}
        />
      );
    }

    return (
      <View style={style.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <ListItem {...rowData} />}
          refreshControl={this.getRefreshControl()}
          enableEmptySections
          onEndReached={onEndReached}
          onEndReachedThreshold={onEndReachedThreshold}
        />
        {this.renderFetchingMore()}
      </View>
    );
  }
}

export default connectStyle(Constants.components.List)(List);
