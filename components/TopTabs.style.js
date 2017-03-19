import Constants from './lib/constants';

const getStyle = (colors, font, dimensions) => ({
  tabBar: {
    backgroundColor: colors.tabBarBackgroundColor,
  },
  tabBarUnderline: {
    backgroundColor: colors.primaryColor,
    height: 3,
  },
  tabBarTextStyle: {
    fontFamily: font.fontFamilyRegular,
    fontSize: font.fontSizeBody,
    color: colors.primaryColor,
  },
  fixedTab: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tabBarBackgroundColor,
  },
  scrollableTab: {
    minWidth: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tabBarBackgroundColor,
  },
  [`${Constants.domain}.Button`]: {
    container: {
      height: dimensions.topTabBarHeight,
    },
  },
});

export default getStyle;
