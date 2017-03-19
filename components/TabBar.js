import React from 'react';
import {
  Dimensions,
  View,
} from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

const windowHeight = Dimensions.get('window').height;

class TabBar extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    tabViews: React.PropTypes.array.isRequired,
    selectedIndex: React.PropTypes.number.isRequired,
    style: React.PropTypes.any,
  };

  getPageStyle(index) {
    const {
      selectedIndex,
      style,
    } = this.props;
    if (index !== selectedIndex) {
      return {
        ...style.content,
        position: 'absolute',
        bottom: -windowHeight * 2,
      };
    }

    return style.content;
  }

  renderTabViews() {
    return this.props.tabViews.map((view, index) => (
      <View
        key={index}
        style={this.getPageStyle(index)}
      >
        {view}
      </View>
    ));
  }

  render() {
    const { style } = this.props;
    return (
      <View style={style.container}>
        {this.renderTabViews()}
        <View style={style.footer}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

export default connectStyle(Constants.components.TabBar)(TabBar);
