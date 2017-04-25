import React from 'react';
import {
  ListView,
  RefreshControl,
  View,
} from 'react-native';
import SortableListView from 'react-native-sortable-listview';
import { connectStyle } from '@shoutem/theme';

import Constants from './lib/constants';
import Icon from './Icon';
import ListItem from './ListItem';
import Spinner from './Spinner';

const noOp = () => null;

class List extends React.Component {
  static propTypes = {
    dataSource: React.PropTypes.any.isRequired,
    isRefreshing: React.PropTypes.bool,
    isFetchingMore: React.PropTypes.bool,
    isSorting: React.PropTypes.bool,
    onEndReached: React.PropTypes.func,
    onEndReachedThreshold: React.PropTypes.number,
    onRowMoved: React.PropTypes.func,
    onRefreshRequested: React.PropTypes.func,
    renderRow: React.PropTypes.func,
    removeClippedSubviews: React.PropTypes.bool,
    sortOrder: React.PropTypes.array,
    style: React.PropTypes.any.isRequired,
  };

  static defaultProps = {
    dataSource: [],
    isFetchingMore: false,
    isRefreshing: false,
    isSorting: false,
    onEndReached: noOp,
    onEndReachedThreshold: 250,
    onRefreshRequested: noOp,
    onRowMoved: noOp,
    renderRow: noOp,
    removeClippedSubviews: false,
    sortOrder: [],
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

  renderRow() {
    const { isSorting, renderRow } = this.props;
    if (renderRow !== noOp) {
      return renderRow;
    } else if (isSorting) {
      return row => (
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
      );
    }

    return rowData => <ListItem {...rowData} />;
  }

  render() {
    const {
      dataSource,
      isSorting,
      sortOrder,
      onRowMoved,
      onEndReached,
      onEndReachedThreshold,
      removeClippedSubviews,
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
          renderRow={this.renderRow()}
        />
      );
    }

    return (
      <View style={style.container}>
        <ListView
          keyboardShouldPersistTaps="handled"
          dataSource={this.state.dataSource}
          renderRow={this.renderRow()}
          refreshControl={this.getRefreshControl()}
          enableEmptySections
          onEndReached={onEndReached}
          onEndReachedThreshold={onEndReachedThreshold}
          removeClippedSubviews={removeClippedSubviews}
        />
        {this.renderFetchingMore()}
      </View>
    );
  }
}

export default connectStyle(Constants.components.List)(List);
