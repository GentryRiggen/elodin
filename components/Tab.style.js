const getStyle = (colors, font, dimensions) => ({
  footerTab: {
    flex: 1,
  },
  footerTabContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerTabText: {
    color: colors.tabBarUnSelectedColor,
    fontSize: 12,
    marginTop: 4,
  },
  footerTabTextSelected: {
    color: colors.primaryColor,
  },
  footerTabImage: {
    tintColor: colors.tabBarUnSelectedColor,
  },
  footerTabImageSelected: {
    tintColor: colors.primaryColor,
  },
});

export default getStyle;
