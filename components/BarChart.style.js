import { domain } from './lib/constants';

const getStyle = colors => ({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  yLegend: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 36,
  },

  bar: {
    [`${domain}.AnimatedView`]: {
      backgroundColor: colors.primaryColor,
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    },

    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  xLegend: {
    [`${domain}.Text`]: {
      transform: [{
        rotate: '-82deg',
      }],
    },

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 72,
  },
});

export default getStyle;
