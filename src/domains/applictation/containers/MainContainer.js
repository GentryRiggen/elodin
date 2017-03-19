import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import { StyleProvider } from '@shoutem/theme';
import ColorsPage from '../../components/containers/ColorsPage';
import TypographyPage from '../../components/containers/TypographyPage';
import componentsStackNavigation from '../constants/componentsStackNavigation';

class MainContainer extends React.Component {
  static propTypes = {
    componentsTheme: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
  }

  render() {
    const ComponentNavigator = StackNavigator(
      componentsStackNavigation,
      {
        navigationOptions: {
          tabBar: {
            label: 'Components',
            icon: ({ tintColor }) => (
              <Image
                source={require('../../../images/cog.png')}
                style={{ tintColor }}
              />
            ),
          },
        },
      },
    );
    const Content = TabNavigator({
      Components: {
        screen: ComponentNavigator,
      },
      Colors: {
        screen: StackNavigator({
          Colors: {
            screen: ColorsPage,
          },
        }),
      },
      Typography: {
        screen: StackNavigator({
          Typography: {
            screen: TypographyPage,
          },
        }),
      },
    }, {
      tabBarOptions: {
        activeTintColor: this.props.componentsTheme.options.colors.primaryColor,
      },
    });

    return (
      <StyleProvider style={this.props.componentsTheme.theme}>
        <Content />
      </StyleProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    componentsTheme: state.componentsTheme,
  };
}

export default connect(mapStateToProps)(MainContainer);
