const getStyle = (colors, font, dimensions) => ({
  container: {
    flex: 1,
    paddingTop: dimensions.navBarHeight,
  },
  label: {
    marginLeft: dimensions.pickerLabelLeftMargin,
  },
});

export default getStyle;
