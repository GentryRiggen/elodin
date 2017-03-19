const getStyle = (colors, font, dimensions) => ({
  '.primary': {
    backgroundColor: colors.primaryColor,
  },
  '.accent': {
    backgroundColor: colors.accentColor,
  },
  '.success': {
    backgroundColor: colors.successColor,
  },
  '.warning': {
    backgroundColor: colors.warningColor,
  },
  '.error': {
    backgroundColor: colors.errorColor,
  },

  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

export default getStyle;
