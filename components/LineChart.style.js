const getStyle = (colors, font) => ({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  stroke: colors.primaryColor,
  fill: colors.primaryColor,
  ticksYContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  tickLabelY: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'transparent',
  },
  tickLabelYText: {
    fontSize: font.fontSizeBody,
    textAlign: 'center',
  },
  ticksYDot: {
    position: 'absolute',
    width: 8,
    height: 8,
    backgroundColor: colors.accentColor,
    borderRadius: 4,
    '.primary': {
      backgroundColor: colors.primaryColor,
    },
    '.accent': {
      backgroundColor: colors.accentColor,
    },
  },
  tickLabelX: {
    position: 'absolute',
    bottom: 12,
    fontSize: font.fontSizeSmall,
    fontFamily: font.fontFamilyRegular,
    textAlign: 'center',
    transform: [{
      rotate: '-82deg',
    }],
  },
});

export default getStyle;
