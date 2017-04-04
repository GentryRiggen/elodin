import React from 'react';
import R from 'ramda';
import { connectStyle } from '@shoutem/theme';
import Fuse from 'fuse.js';

import Constants from './lib/constants';
import Icon from './Icon';
import List from './List';
import ListItem from './ListItem';
import Modal from './Modal';
import Text from './Text';
import TextInput from './TextInput';
import View from './View';

const noop = () => null;
const fuzzySearchOptions = {
  shouldSort: true,
  threshold: 0.5,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    'headerText',
  ],
};

class Picker extends React.Component {
  static propTypes = {
    header: React.PropTypes.string,
    items: React.PropTypes.object.isRequired,
    selected: React.PropTypes.any.isRequired,
    onItemSelected: React.PropTypes.func.isRequired,
    style: React.PropTypes.any,
    showSearch: React.PropTypes.bool,
    onSearch: React.PropTypes.func,
    searchKeys: React.PropTypes.array,
  };

  static defaultProps = {
    header: '',
    onSearch: noop,
    showSearch: false,
    searchKeys: ['headerText'],
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      search: '',
      items: props.items,
    };
    this.updateFuzzySearch(props);
  }

  componentWillReceiveProps(next) {
    this.setState({ items: next.items });
    this.updateFuzzySearch(next);
  }

  onSearch() {
    return (search) => {
      let { items } = this.props;
      if (R.length(search) >= 1) {
        items = this.fuzzySearcher.search(search);
      }
      this.setState({
        search,
        items,
      });
    };
  }

  updateFuzzySearch(props) {
    const { items, searchKeys } = props;
    const searchItems = Object.keys(items).map(i => R.prop(i, items));
    const options = {
      ...fuzzySearchOptions,
      keys: searchKeys,
    };
    this.fuzzySearcher = new Fuse(searchItems, options);
  }

  toggleOpen() {
    return () => {
      const closing = this.state.open;
      if (closing) {
        this.setState({
          search: '',
          items: this.props.items,
        });
      }
      this.setState({ open: !this.state.open });
    };
  }

  itemSelected(key) {
    return () => {
      this.props.onItemSelected(key);
      this.toggleOpen()();
    };
  }

  renderSelected(key) {
    if (this.props.selected == key) {
      return (
        <Icon
          name="md-checkmark"
        />
      );
    }

    return null;
  }

  renderButton() {
    const {
      items,
      selected,
    } = this.props;
    const selectedItem = R.propOr({}, selected, items);
    const headerText = R.propOr('None', 'headerText', selectedItem);
    const leftContent = R.propOr(false, 'leftContent', selectedItem);
    return (
      <ListItem
        headerText={headerText}
        leftContent={leftContent}
        rightContent={<Icon name="md-arrow-dropdown" />}
        onPress={this.toggleOpen()}
        divider
      />
    );
  }

  renderSearch() {
    const {
      onSearch,
      showSearch,
      style,
    } = this.props;
    const onChangeText = onSearch === noop ? this.onSearch() : onSearch;
    if (showSearch) {
      return (
        <View style={style.searchBox}>
          <TextInput
            placeholder="Search"
            value={this.state.search}
            onChangeText={onChangeText}
          />
        </View>
      );
    }

    return null;
  }

  render() {
    const { header, style } = this.props;
    const { items } = this.state;
    const headerText = header.length > 0
      ? <Text styleName="small" style={style.label}>{header}</Text>
      : null;
    return (
      <View>
        {headerText}
        {this.renderButton()}

        <Modal
          title="Select one"
          secondaryTitle="Cancel"
          secondaryAction={this.toggleOpen()}
          visible={this.state.open}
          keyboardShouldPersistTaps
        >
          {this.renderSearch()}
          <List
            dataSource={Object.keys(items).map(key => ({
              ...items[key],
              onPress: this.itemSelected(key),
              divider: true,
              rightContent: this.renderSelected(key),
            }))}
          />
        </Modal>
      </View>
    );
  }
}

export default connectStyle(Constants.components.Picker)(Picker);
