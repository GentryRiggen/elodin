import {
  StyleSheet as RNStyleSheet,
  Platform,
} from 'react-native';

const create = (styles: Object): {[name: string]: number} => {
  const platformStyles = {};
  Object.keys(styles).forEach((name) => {
    let {ios, android, ...style} = {...styles[name]};
    if (ios && Platform.OS === 'ios') {
      style = {...style, ...ios};
    }
    if (android && Platform.OS === 'android') {
      style = {...style, ...android};
    }
    platformStyles[name] = style;
  });
  return RNStyleSheet.create(platformStyles);
};

const StyleSheet = {
  create,
};

export default StyleSheet;