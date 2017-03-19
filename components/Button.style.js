import Constants from './lib/constants';

const getStyle = (colors, font, dimensions) => ({
  '.flat': {
    container: {
      backgroundColor: 'transparent',
    },
    '.accent': {
      container: {
        [`${Constants.domain}.AnimatedView`]: {
          backgroundColor: colors.accentColor,
        },
        [`${Constants.domain}.Text`]: {
          color: colors.accentColor,
        },
      },
    },
    '.secondary': {
      container: {
        [`${Constants.domain}.AnimatedView`]: {
          backgroundColor: colors.secondaryDarkTextColor,
        },
        [`${Constants.domain}.Text`]: {
          color: colors.secondaryDarkTextColor,
        },
      },
    },
    '.inverse-secondary': {
      container: {
        [`${Constants.domain}.AnimatedView`]: {
          backgroundColor: colors.secondaryLightTextColor,
        },
        [`${Constants.domain}.Text`]: {
          color: colors.secondaryLightTextColor,
        },
      },
    },
    '.disabled': {
      container: {
        [`${Constants.domain}.Text`]: {
          color: colors.disabledDarkTextColor,
        },
      },
    },
    '.inverse-disabled': {
      container: {
        [`${Constants.domain}.Text`]: {
          color: colors.disabledLightTextColor,
        },
      },
    },
  },

  '.raised': {
    container: {
      backgroundColor: colors.primaryColor,
      [`${Constants.domain}.AnimatedView`]: {
        backgroundColor: colors.white.full,
      },
      [`${Constants.domain}.Text`]: {
        color: colors.white.full,
      },
    },
    '.accent': {
      container: {
        backgroundColor: colors.accentColor,
        [`${Constants.domain}.AnimatedView`]: {
          backgroundColor: colors.white.full,
        },
        [`${Constants.domain}.Text`]: {
          color: colors.white.full,
        },
      },
    },
    '.secondary': {
      container: {
        backgroundColor: colors.grey[200],
        [`${Constants.domain}.AnimatedView`]: {
          backgroundColor: colors.secondaryDarkTextColor,
        },
        [`${Constants.domain}.Text`]: {
          color: colors.secondaryDarkTextColor,
        },
      },
    },
    '.disabled': {
      container: {
        backgroundColor: colors.grey[500],
        [`${Constants.domain}.Text`]: {
          color: colors.disabledLightTextColor,
        },
      },
    },
  },

  '.narrow': {
    container: {
      paddingLeft: 4,
      paddingRight: 4,
    },
  },
  '.flex-start': {
    container: {
      paddingLeft: 12,
      justifyContent: 'flex-start',
    },
  },
  '.flex-end': {
    container: {
      paddingRight: 12,
      justifyContent: 'flex-end',
    },
  },
  container: {
    height: 36,
    minWidth: 64,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    [`${Constants.domain}.AnimatedView`]: {
      backgroundColor: colors.primaryColor,
      position: 'absolute',
      top: 0,
      left: 24,
      width: 64,
      height: 48,
      borderRadius: 32,
    },
    [`${Constants.domain}.Text`]: {
      fontFamily: font.fontFamilyBold,
      color: colors.primaryColor,
    },
  },
});

export default getStyle;
