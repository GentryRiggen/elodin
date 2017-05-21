const getStyle = (colors, font) => ({
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
    marginBottom: -8,
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
});

export default getStyle;
