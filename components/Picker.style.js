const getStyle = (colors, font, dimensions) => ({
  container: {
    flex: 1,
    paddingTop: dimensions.navBarHeight,
  },
  label: {
    marginLeft: dimensions.pickerLabelLeftMargin,
  },
  searchBox: {
    paddingVertical: 4,
    paddingHorizontal: dimensions.pickerLabelLeftMargin,
    backgroundColor: colors.grey[100],
  },
});

export default getStyle;
