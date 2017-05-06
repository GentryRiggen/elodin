const getStyle = (colors, font, dimensions) => ({
  searchBox: {
    backgroundColor: colors.grey[100],
  },
  icon: {
    color: colors.secondaryDarkTextColor,
    paddingHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 4,
    height: 44,
  },
});

export default getStyle;
