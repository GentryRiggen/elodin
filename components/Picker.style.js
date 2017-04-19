const getStyle = (colors, font, dimensions) => ({
  label: {
    marginLeft: dimensions.pickerLabelLeftMargin,
  },
  searchBox: {
    paddingTop: dimensions.navBarHeight + 4,
    paddingRight: dimensions.pickerLabelLeftMargin,
    paddingBottom: 4,
    paddingLeft: dimensions.pickerLabelLeftMargin,
    backgroundColor: colors.grey[100],
  },
});

export default getStyle;
