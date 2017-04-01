const getStyle = (colors, font, dimensions) => ({
  '.disabled': {
    input: {
      color: colors.disabledDarkTextColor,
    },
    placeholderTextColor: colors.disabledDarkTextColor,
    '.inverse': {
      input: {
        color: colors.disabledLightTextColor,
      },
      placeholderTextColor: colors.disabledLightTextColor,
    },
  },

  '.multiline': {
    container: {
      height: 96,
    },
    input: {
      height: 92,
    },
  },

  container: {
    height: 48,
    flexDirection: 'column',
  },
  input: {
    height: 44,
    fontFamily: font.fontFamilyRegular,
    fontSize: font.fontSizeBody,
    color: colors.darkTextColor,
  },
  placeholderTextColor: colors.disabledDarkTextColor,
  border: {
    height: 1,
    backgroundColor: colors.grey[300],
  },
  focusedBorder: {
    height: 2,
    backgroundColor: colors.primaryColor,
  },
  errorBorder: {
    backgroundColor: colors.errorColor,
  },
});

export default getStyle;
