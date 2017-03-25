const getStyle = (colors, font) => ({
  '.regular': {
    fontWeight: font.fontWeightRegular,
    color: colors.darkTextColor,
    '.inverse': {
      color: colors.lightTextColor,
    },
  },
  '.bold': {
    fontWeight: font.fontWeightBold,
    '.inverse': {
      color: colors.lightTextColor,
    },
  },
  '.light': {
    fontWeight: font.fontWeightLight,
    '.inverse': {
      color: colors.lightTextColor,
    },
  },
  '.title': {
    fontSize: font.fontSizeTitle,
    lineHeight: font.fontHeightTitle,
  },
  '.subheading': {
    fontSize: font.fontSizeSubheading,
    lineHeight: font.fontHeightSubheading,
  },
  '.body': {
    fontSize: font.fontSizeBody,
    lineHeight: font.fontHeightBody,
  },
  '.small': {
    fontSize: font.fontSizeSmall,
    lineHeight: font.fontHeightSmall,
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
  '.center': {
    textAlign: 'center',
  },

  fontFamily: font.fontFamilyRegular,
  fontWeight: font.fontWeightRegular,
  fontSize: font.fontSizeBody,
  color: colors.darkTextColor,
  lineHeight: font.fontHeightBody,
  textAlign: 'auto',
  backgroundColor: 'transparent',
});

export default getStyle;
