const getStyle = (colors, font, dimensions) => ({
  container: {
    backgroundColor: 'transparent',
    borderColor: colors.primaryColor,
    borderWidth: 2,
    borderRadius: 3,
    width: dimensions.checkboxSize,
    height: dimensions.checkboxSize,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: colors.primaryColor,
  },
});

export default getStyle;
