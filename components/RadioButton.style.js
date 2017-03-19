const getStyle = (colors, font, dimensions) => ({
  container: {
    backgroundColor: 'transparent',
    borderColor: colors.primaryColor,
    borderRadius: dimensions.radioButtonSize / 2,
    borderWidth: 2,
    width: dimensions.radioButtonSize,
    height: dimensions.radioButtonSize,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerButton: {
    width: dimensions.radioButtonSize - 8,
    height: dimensions.radioButtonSize - 8,
    borderRadius: (dimensions.radioButtonSize - 8) / 2,
  },
  checked: {
    backgroundColor: colors.primaryColor,
  },
  unChecked: {
    backgroundColor: 'transparent',
  },
});

export default getStyle;
