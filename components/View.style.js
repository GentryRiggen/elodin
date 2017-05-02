const justifyContent = (horizontal = true) => {
  const h = horizontal ? 'justifyContent' : 'alignItems';
  const v = horizontal ? 'alignItems' : 'justifyContent';
  return {
    '.h-center': {
      [h]: 'center',
    },
    '.h-start': {
      [h]: 'flex-start',
    },
    '.h-end': {
      [h]: 'flex-end',
    },
    '.v-center': {
      [v]: 'center',
    },
    '.v-start': {
      [v]: 'flex-start',
    },
    '.v-end': {
      [v]: 'flex-end',
    },
  };
};

const getStyle = () => ({
  '.flexible': {
    flex: 1,
  },
  '.horizontal': {
    flexDirection: 'row',
    ...justifyContent(),
  },
  '.vertical': {
    flexDirection: 'column',
    ...justifyContent(false),
  },
});

export default getStyle;
