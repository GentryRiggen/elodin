import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectStyle } from '@shoutem/theme';
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Constants from './lib/constants';
import View from './View';

// eslint-disable-next-line
class SearchBar extends Component {
  static propTypes = {
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    style: PropTypes.any.isRequired,
  };

  render() {
    const {
      onChangeText,
      value,
      style,
    } = this.props;
    return (
      <View
        styleName="horizontal v-center"
        style={style.searchBox}
      >
        <Icon size={24} style={style.icon} name="search" />
        <TextInput
          placeholder="Search"
          value={value}
          onChangeText={onChangeText}
          autoCorrect={false}
          style={style.searchInput}
          clearButtonMode="always"
        />
      </View>
    );
  }
}

export default connectStyle(Constants.components.SearchBar)(SearchBar);
