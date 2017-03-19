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

  container: {
    flexDirection: 'column',
  },
  input: {
    fontFamily: font.fontFamilyRegular,
    fontSize: font.fontSizeBody,
    color: colors.darkTextColor,
  },
  placeholderTextColor: colors.darkTextColor,
  border: {
    height: 1,
    backgroundColor: colors.grey[300],
  },
  focusedBorder: {
    height: 2,
    backgroundColor: colors.primaryColor,
  },
});

export default getStyle;
