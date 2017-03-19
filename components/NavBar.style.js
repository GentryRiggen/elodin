const getStyle = (colors, font, dimensions) => ({
  header: {
    minHeight: 64,
    paddingTop: 20,
    backgroundColor: colors.navBarBackgroundColor,
    shadowColor: colors.grey[500],
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    zIndex: 3,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerTitleText: {
    color: colors.headerTitleTextColor,
  },
  headerButton: {
    flex: 1,
  },
  headerTouchableLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 28,
    minWidth: 36,
    paddingLeft: 12,
  },
  headerTouchableRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    minHeight: 28,
    minWidth: 36,
    paddingRight: 12,
  },
  headerTouchableText: {
    color: colors.headerTextColor,
  },
  headerButtonText: {
    color: colors.darkTextColor,
  },
  headerButtonTextDisabled: {
    color: colors.disabledLightTextColor,
  },
});

export default getStyle;
