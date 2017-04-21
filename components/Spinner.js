import React from 'react';
import { CircleSnail } from 'react-native-progress';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import View from './View';

const Spinner = ({ style }) => (
  <View style={style.container}>
    <CircleSnail
      color={style.color}
      duration={700}
      size={style.size}
    />
  </View>
);

Spinner.propTypes = {
  style: React.PropTypes.any.isRequired,
};

export default connectStyle(Constants.components.Spinner)(Spinner);
