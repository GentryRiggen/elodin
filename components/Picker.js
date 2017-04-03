import React from 'react';
import R from 'ramda';
import { connectStyle } from '@shoutem/theme';

import Constants from './lib/constants';
import Icon from './Icon';
import List from './List';
import ListItem from './ListItem';
import Modal from './Modal';
import Text from './Text';
import View from './View';

class Picker extends React.Component {
  static propTypes = {
    header: React.PropTypes.string,
    items: React.PropTypes.object.isRequired,
    selected: React.PropTypes.any.isRequired,
    onItemSelected: React.PropTypes.func.isRequired,
    style: React.PropTypes.any,
  };

  static defaultProps = {
    header: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleOpen() {
    return () => {
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

  render() {
    const {
      items,
      header,
      style,
    } = this.props;
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
        >
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
