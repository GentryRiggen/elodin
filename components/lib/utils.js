import theme from './theme';

export const getColorFromType = (type, inverse = false) => {
  const { colors } = theme;
  let color;
  switch (type) {
    case 'regular':
      color = inverse ? colors.lightTextColor : colors.darkTextColor;
      break;
    case 'secondary':
      color = inverse ? colors.secondaryLightTextColor : colors.secondaryDarkTextColor;
      break;
    case 'disabled':
      color = inverse ? colors.disabledLightTextColor : colors.disabledDarkTextColor;
      break;
    case 'error':
      color = colors.errorColor;
      break;
    case 'success':
      color = colors.successColor;
      break;
    case 'primary':
    default:
      color = inverse ? colors.primaryColor : colors.white.full;
      break;
  }

  return color;
};
