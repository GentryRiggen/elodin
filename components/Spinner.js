import React from 'react';
import { CircleSnail } from 'react-native-progress';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import View from './View';

class Spinner extends React.Component {
  static propTypes = {
    style: React.PropTypes.any.isRequired,
  };

  render() {
    const { style } = this.props;
    return (
      <View style={style.container}>
        <CircleSnail
          color={style.color}
          duration={700}
          size={style.size}
        />
      </View>
    );
  }
}

export default connectStyle(Constants.components.Spinner)(Spinner);
