import React from 'react';
import { TouchableHighlight as RNTH } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

class TouchableHighlight extends React.Component {
  setNativeProps(nativeProps) {
    this.component.setNativeProps(nativeProps);
  }

  render() {
    return (
      <RNTH
        ref={component => this.component = component}
        {...this.props}
      />
    );
  }
}

TouchableHighlight.propTypes = {
  ...RNTH.propTypes,
};

export default connectStyle(Constants.components.TouchableHighlight)(TouchableHighlight);
