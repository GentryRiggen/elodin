const getStyle = (colors, font, dimensions) => ({
  '.v-spacing': {
    container: {
      paddingVertical: dimensions.pagePadding,
    },
  },
  '.h-spacing': {
    container: {
      paddingHorizontal: dimensions.pagePadding,
    },
  },
  '.spacing': {
    container: {
      padding: dimensions.pagePadding,
    },
  },
  '.t-spacing': { container: { paddingTop: dimensions.pagePadding } },
  '.r-spacing': { container: { paddingRight: dimensions.pagePadding } },
  '.b-spacing': { container: { paddingBottom: dimensions.pagePadding } },
  '.l-spacing': { container: { paddingLeft: dimensions.pagePadding } },
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: null,
    width: null,
    backgroundColor: colors.pageBackgroundColor,
  },
  statusBarStyle: colors.statusBarStyle,
  content: {
    flex: 1,
    backgroundColor: colors.pageBackgroundColor,
  },
  scrollableContent: {
    backgroundColor: colors.pageBackgroundColor,
  },
});

export default getStyle;
