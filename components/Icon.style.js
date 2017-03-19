const getStyle = (colors, font, dimensions) => ({
  '.regular': {
    color: colors.darkTextColor,
    '.inverse': {
      color: colors.lightTextColor,
    },
  },
  '.secondary': {
    color: colors.secondaryDarkTextColor,
    '.inverse': {
      color: colors.secondaryLightTextColor,
    },
  },
  '.disabled': {
    color: colors.disabledDarkTextColor,
    '.inverse': {
      color: colors.disabledLightTextColor,
    },
  },
  '.primary': {
    color: colors.primaryColor,
  },
  '.accent': {
    color: colors.accentColor,
  },
  '.error': {
    color: colors.errorColor,
  },
  '.warning': {
    color: colors.warningColor,
  },
  '.success': {
    color: colors.successColor,
  },

  color: colors.darkTextColor,
});

export default getStyle;
