const getStyle = (colors, font, dimensions) => ({
  '.small': {
    size: 24,
  },
  '.normal': {
    size: 48,
  },
  '.big': {
    size: 64,
  },

  size: 48,
  personAvatar: {
    backgroundColor: colors.grey[400],
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.grey[400],
    borderWidth: 1,
  },
});

export default getStyle;
