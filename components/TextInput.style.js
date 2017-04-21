const getStyle = (colors, font) => ({
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
      height: 106,
    },
    input: {
      height: 80,
    },
  },

  container: {
    height: 60,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  label: {
    marginTop: 4,
  },
  emptyLabel: {
    height: 12,
  },
  input: {
    height: 36,
    fontFamily: font.fontFamilyRegular,
    fontSize: font.fontSizeBody,
    color: colors.darkTextColor,
  },
  placeholderTextColor: colors.disabledDarkTextColor,
  border: {
    height: 2,
    borderBottomColor: colors.grey[300],
    borderBottomWidth: 1,
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
