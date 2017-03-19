const getStyle = (colors, font, dimensions) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stroke: colors.primaryColor,
  fill: colors.primaryColor,
});

export default getStyle;
