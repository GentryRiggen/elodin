import React from 'react';
import { TouchableOpacity as RNTO } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

class TouchableOpacity extends React.Component {
  setNativeProps(nativeProps) {
    this.component.setNativeProps(nativeProps);
  }

  render() {
    return (
      <RNTO
        ref={component => this.component = component}
        {...this.props}
      />
    );
  }
}

TouchableOpacity.propTypes = {
  ...RNTO.propTypes,
};

export default connectStyle(Constants.components.TouchableOpacity)(TouchableOpacity);
