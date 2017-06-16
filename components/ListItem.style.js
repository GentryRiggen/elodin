const getStyle = (colors, font, dimensions) => ({
  listItem: {
    minHeight: dimensions.listItemMinHeight,
    backgroundColor: colors.pageBackgroundColor,
  },
  underlayColor: colors.darkListItemBackgroundColor,
  container: {
    flex: 1,
    backgroundColor: colors.pageBackgroundColor,
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
  allActionsWrapper: {
    position: 'absolute',
    height: '100%',
    right: 0,
    left: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftActionsWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  rightActionsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  action: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    width: dimensions.listItemSwipeButtonWidth,
    height: '100%',
    backgroundColor: colors.errorColor,
  },
  standard: {
    width: dimensions.listItemSwipeButtonWidth,
    height: '100%',
    backgroundColor: colors.grey[400],
  },
  success: {
    width: dimensions.listItemSwipeButtonWidth,
    height: '100%',
    backgroundColor: colors.successColor,
  },
  listItemSwipeButtonWidth: dimensions.listItemSwipeButtonWidth,
});

export default getStyle;
