const getStyle = (colors, font, dimensions) => ({
  '.sm': {
    size: dimensions.avatarSizeSm,
  },
  '.md': {
    size: dimensions.avatarSizeMd,
  },
  '.lg': {
    size: dimensions.avatarSizeLg,
  },
  '.xl': {
    size: dimensions.avatarSizeXl,
  },

  size: dimensions.avatarSizeMd,
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
