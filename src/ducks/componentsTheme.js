import {
  getTheme,
  theme,
} from '../../components';

const myTheme = {
  ...theme,
  colors: {
    ...theme.colors,
  },
  font: {
    ...theme.font,
  },
  dimensions: {
    ...theme.dimensions,
  },
};

export const CHANGE_COLOR = 'CHANGE_COLOR';
export const updateColor = (name, value) => ({
  type: CHANGE_COLOR,
  name,
  value,
});

export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const toggleDarkMode = () => ({ type: TOGGLE_DARK_MODE });

const initialState = {
  theme: getTheme(myTheme),
  options: myTheme,
};

const componentsTheme = (state = initialState, action) => {
  let newTheme;
  switch (action.type) {
    case CHANGE_COLOR:
      newTheme = {
        ...state.options,
        colors: {
          ...state.options.colors,
          [action.name]: action.value,
        },
      };
      return {
        theme: getTheme(newTheme),
        options: newTheme,
      };
    case TOGGLE_DARK_MODE:
      const { colors } = state.options;
      const isInDarkMode = colors.pageBackgroundColor !== colors.white.full;
      newTheme = {
        ...state.options,
        colors: {
          ...state.options.colors,
          darkTextColor: isInDarkMode ? colors.black[700] : colors.white.full,
          secondaryDarkTextColor: isInDarkMode ? colors.black[600] : colors.grey[500],
          disabledDarkTextColor: isInDarkMode ? colors.black[400] : colors.grey[700],

          lightTextColor: isInDarkMode ? colors.white.full : colors.black[700],
          secondaryLightTextColor: isInDarkMode ? colors.grey[500] : colors.black[600],
          disabledLightTextColor: isInDarkMode ? colors.grey[700] : colors.black[400],

          pageBackgroundColor: isInDarkMode ? colors.white.full : colors.black[700],
          navBarBackgroundColor: isInDarkMode ? colors.grey[50] : colors.black[800],
          headerTitleTextColor: isInDarkMode ? colors.black[700] : colors.grey[50],
          headerTextColor: isInDarkMode ? colors.black[700] : colors.grey[50],
          tabBarBackgroundColor: isInDarkMode ? colors.grey[50] : colors.black[800],
          statusBarStyle: isInDarkMode ? 'dark-content' : 'light-content',
        },
      };
      return {
        theme: getTheme(newTheme),
        options: newTheme,
      };

    default:
      return state;
  }
};

export default componentsTheme;
