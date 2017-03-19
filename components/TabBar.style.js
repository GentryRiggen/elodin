const getStyle = (colors, font, dimensions) => ({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.pageBackgroundColor,
  },
  content: {
    flex: 1,
    backgroundColor: colors.pageBackgroundColor,
    marginBottom: dimensions.tabBarHeight,
  },
  tabBarHeight: dimensions.tabBarHeight,
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: dimensions.tabBarHeight,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.tabBarBackgroundColor,
  },
});

export default getStyle;
