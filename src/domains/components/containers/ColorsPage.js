import React from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import R from 'ramda';
import {
  Page,
  Picker,
  Text,
} from '../../../../components';
import {
  toggleDarkMode,
  updateColor,
} from '../../../ducks/componentsTheme';

const viewStyle = {
  paddingTop: 16,
  paddingBottom: 16,
};
const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const alphas = ['A100', 'A200', 'A400', 'A700'];
const colors = [
  { name: 'red', numbers: true, alpha: true, full: false },
  { name: 'pink', numbers: true, alpha: true, full: false },
  { name: 'purple', numbers: true, alpha: true, full: false },
  { name: 'deepPurple', numbers: true, alpha: true, full: false },
  { name: 'indigo', numbers: true, alpha: true, full: false },
  { name: 'blue', numbers: true, alpha: true, full: false },
  { name: 'lightBlue', numbers: true, alpha: true, full: false },
  { name: 'cyan', numbers: true, alpha: true, full: false },
  { name: 'teal', numbers: true, alpha: true, full: false },
  { name: 'green', numbers: true, alpha: true, full: false },
  { name: 'lightGreen', numbers: true, alpha: true, full: false },
  { name: 'lime', numbers: true, alpha: true, full: false },
  { name: 'yellow', numbers: true, alpha: true, full: false },
  { name: 'amber', numbers: true, alpha: true, full: false },
  { name: 'orange', numbers: true, alpha: true, full: false },
  { name: 'deepOrange', numbers: true, alpha: true, full: false },
  { name: 'brown', numbers: true, alpha: false, full: false },
  { name: 'grey', numbers: true, alpha: false, full: false },
  { name: 'blueGrey', numbers: true, alpha: false, full: false },
  { name: 'black', numbers: true, alpha: false, full: true },
  { name: 'white', numbers: false, alpha: false, full: true },
];

const getColorListItem = (name, value) => {
  return {
    headerText: `${name}`,
    secondaryText: value,
    leftContent: (
      <View
        style={{
          backgroundColor: value,
          width: 36,
          height: 36,
          borderRadius: 18,
        }}
      />
    ),
  };
};

class ColorsPage extends React.Component {
  static propTypes = {
    componentsTheme: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
  };

  static navigationOptions = {
    headerTitle: 'Colors',
    tabBarLabel: 'Colors',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../../images/color-palette.png')}
        style={{ tintColor }}
      />
    ),
  }

  constructor(props) {
    super(props);
    this.state = {
      listItemColors: {},
    };
  }

  componentWillMount() {
    const { options } = this.props.componentsTheme;
    const listItemColors = {};
    colors.forEach((color) => {
      const themeColor = R.path(['colors', color.name], options);
      if (color.full) {
        listItemColors[themeColor.full] = getColorListItem(`${color.name} - Full`, themeColor.full);
      }
      if (color.numbers) {
        numbers.forEach((number) => {
          listItemColors[R.prop(number, themeColor)] = getColorListItem(`${color.name} - ${number}`, R.prop(number, themeColor));
        });
      }
      if (color.alpha) {
        alphas.forEach((alpha) => {
          listItemColors[R.prop(alpha, themeColor)] = getColorListItem(`${color.name} - ${alpha}`, R.prop(alpha, themeColor));
        });
      }
    });

    this.setState({ listItemColors });
  }

  updateColor(name) {
    return (value) => {
      this.props.dispatch(updateColor(name, value));
    };
  }

  toggleDarkMode() {
    return () => {
      this.props.dispatch(toggleDarkMode());
    };
  }

  render() {
    const { options } = this.props.componentsTheme;

    return (
      <Page>
        <View style={viewStyle}>
          <Picker
            header="Primary Color"
            items={this.state.listItemColors}
            selected={options.colors.primaryColor}
            onItemSelected={this.updateColor('primaryColor')}
          />
        </View>

        <View style={viewStyle}>
          <Picker
            header="Accent Color"
            items={this.state.listItemColors}
            selected={options.colors.accentColor}
            onItemSelected={this.updateColor('accentColor')}
          />
        </View>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    componentsTheme: state.componentsTheme,
  };
}

export default connect(mapStateToProps)(ColorsPage);
