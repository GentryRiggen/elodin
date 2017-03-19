const getStyle = (colors, font, dimensions) => ({
  listItem: {
    minHeight: dimensions.listItemMinHeight,
    backgroundColor: colors.pageBackgroundColor,
  },
  underlayColor: colors.darkListItemBackgroundColor,
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingLeft: dimensions.listItemLeftMargin,
    minHeight: dimensions.listItemMinHeight,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    maxWidth: 48,
    paddingRight: 8,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 4,
    paddingRight: 4,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    maxWidth: 48,
    paddingLeft: 8,
  },
  headerTextContainer: {
    flex: 1,
  },
  secondaryTextContainer: {
    flex: 1,
    paddingTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: colors.dividerDarkColor,
  },
});

export default getStyle;
