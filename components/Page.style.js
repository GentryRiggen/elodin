const getStyle = (colors) => ({
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
