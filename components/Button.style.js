import Constants from './lib/constants';

const getStyle = (colors, font, dimensions) => ({
  '.flat': {
    underlayColor: 'transparent',
    '.accent': {
      underlayColor: colors.accentColor,
      [`${Constants.domain}.Text`]: {
        color: colors.accentColor,
      },
    },
    '.secondary': {
      underlayColor: colors.secondaryDarkTextColor,
      [`${Constants.domain}.Text`]: {
        color: colors.secondaryDarkTextColor,
      },
    },
    '.inverse-secondary': {
      underlayColor: colors.secondaryLightTextColor,
      [`${Constants.domain}.Text`]: {
        color: colors.secondaryLightTextColor,
      },
    },
    '.disabled': {
      [`${Constants.domain}.Text`]: {
        color: colors.disabledDarkTextColor,
      },
    },
    '.inverse-disabled': {
      [`${Constants.domain}.Text`]: {
        color: colors.disabledLightTextColor,
      },
    },
  },

  '.raised': {
    underlayColor: colors.white.full,
    [Constants.components.View]: {
      backgroundColor: colors.primaryColor,
      [`${Constants.domain}.Text`]: {
        color: colors.white.full,
      },
    },
    '.accent': {
      underlayColor: colors.white.full,
      [Constants.components.View]: {
        backgroundColor: colors.accentColor,
        [`${Constants.domain}.Text`]: {
          color: colors.white.full,
        },
      },
    },
    '.secondary': {
      underlayColor: colors.white.full,
      [Constants.components.View]: {
        backgroundColor: colors.grey[200],
        [`${Constants.domain}.Text`]: {
          color: colors.secondaryDarkTextColor,
        },
      },
    },
    '.disabled': {
      underlayColor: colors.white.full,
      [Constants.components.View]: {
        backgroundColor: colors.grey[500],
        [`${Constants.domain}.Text`]: {
          color: colors.disabledLightTextColor,
        },
      },
    },
  },

  '.narrow': {
    [Constants.components.View]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  '.flex-start': {
    [Constants.components.View]: {
      paddingLeft: 12,
      justifyContent: 'flex-start',
    },
  },
  '.flex-end': {
    [Constants.components.View]: {
      paddingRight: 12,
      justifyContent: 'flex-end',
    },
  },

  underlayColor: colors.primaryColor,
  [Constants.components.View]: {
    height: 36,
    minWidth: 64,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    [`${Constants.domain}.Text`]: {
      fontFamily: font.fontFamilyBold,
      fontWeight: font.fontWeightBold,
      color: colors.primaryColor,
    },
  },
});

export default getStyle;
