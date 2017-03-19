const getStyle = (colors) => ({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  refreshColor: colors.primaryColor,
  fetchingMore: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default getStyle;
