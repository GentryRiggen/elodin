import React from 'react';
import { View as RNView } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

class View extends React.Component {
  setNativeProps(nativeProps) {
    this.component.setNativeProps(nativeProps);
  }

  render() {
    return (
      <RNView
        ref={component => this.component = component}
        {...this.props}
      />
    );
  }
}

View.propTypes = {
  ...RNView.propTypes,
};

export default connectStyle(Constants.components.View)(View);
