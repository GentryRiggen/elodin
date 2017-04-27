import React from 'react';
import PropTypes from 'prop-types';
import {
  StatusBar,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

class Page extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    scrollable: PropTypes.bool,
    style: PropTypes.any,
    keyboardShouldPersistTaps: PropTypes.string,
    extraScrollHeight: PropTypes.number,
  };

  static defaultProps = {
    scrollable: false,
    keyboardShouldPersistTaps: 'never',
    extraScrollHeight: 0,
  };

  renderContent() {
    const {
      children,
      keyboardShouldPersistTaps,
      extraScrollHeight,
      scrollable,
      style,
    } = this.props;

    if (scrollable) {
      return (
        <KeyboardAwareScrollView
          contentContainerStyle={style.scrollableContent}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
          extraScrollHeight={extraScrollHeight}
        >
          {children}
        </KeyboardAwareScrollView>
      );
    }

    return children;
  }

  render() {
    const { style } = this.props;
    StatusBar.setBarStyle(style.statusBarStyle, false);

    return (
      <View style={style.container}>
        {this.renderContent()}
      </View>
    );
  }
}

export default connectStyle(Constants.components.Page)(Page);
