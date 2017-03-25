import React, { PropTypes } from 'react';
import { View } from 'react-native';

const Gap = ({ top, right, bottom, left }) => {
  const style = {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
  };
  return <View style={style} />;
};

Gap.propTypes = {
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
};

Gap.defaultProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export default Gap;
