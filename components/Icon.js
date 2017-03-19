import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

class MyIcon extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    size: React.PropTypes.number,
    style: React.PropTypes.any,
  };

  static defaultProps = {
    size: 24,
  };

  setNativeProps(nativeProps) {
    this.component.setNativeProps(nativeProps);
  }

  render() {
    const {
      name,
      size,
      style,
    } = this.props;

    return (
      <Icon
        ref={component => this.component = component}
        size={size}
        name={name}
        style={style}
      />
    );
  }
}

export default connectStyle(Constants.components.Icon)(MyIcon);
