import React from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import {
  List,
  Text,
} from '../../../../components';
import * as routes from '../../applictation/constants/componentsStackNavigation';

class ComponentsListPage extends React.Component {
  static navigationOptions = {
    header: {
      title: <Text styleName="title">Components</Text>,
    },
    tabBar: {
      label: 'Components',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../../images/cog.png')}
          style={{ tintColor }}
        />
      ),
    },
  }

  constructor(props) {
    super(props);
    this.state = {
      components: [],
    };
  }

  componentWillMount() {
    const defaultProps = {
      headerLines: 1,
      secondaryLines: 2,
    };
    this.setState({
      components: [
        {
          ...defaultProps,
          headerText: 'Avatars',
          secondaryText: 'An icon representing something. People, etc. Initials for people when no image is available.',
          onPress: this.goToRoute(routes.ROUTE_AVATARS),
        },
        {
          ...defaultProps,
          headerText: 'Bar Charts',
          secondaryText: 'Presents grouped data with rectangular bars with lengths proportional to the values that they represent.',
          onPress: this.goToRoute(routes.ROUTE_BAR_CHART),
        },
        {
          ...defaultProps,
          headerText: 'Buttons',
          secondaryText: 'Buttons... What more is there to say.',
          onPress: this.goToRoute(routes.ROUTE_BUTTON),
        },
        {
          ...defaultProps,
          headerText: 'Checkboxes',
          secondaryText: 'Checkboxes let a user select many of a limited number of choices.',
          onPress: this.goToRoute(routes.ROUTE_CHECKBOXES),
        },
        {
          ...defaultProps,
          headerText: 'Line Chart',
          secondaryText: "A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments. It is a basic type of chart common in many fields.",
          onPress: this.goToRoute(routes.ROUTE_LINE_CHART),
        },
        {
          ...defaultProps,
          headerText: 'Lists & List Items',
          secondaryText: 'Lists with pull to refresh and infinite scroll. Also showing off list items.',
          onPress: this.goToRoute(routes.ROUTE_LIST_ITEM),
        },
        {
          ...defaultProps,
          headerText: 'Modals',
          secondaryText: 'Views that popover the content often asking for more information.',
          onPress: this.goToRoute(routes.ROUTE_MODALS),
        },
        {
          ...defaultProps,
          headerText: 'Pickers',
          secondaryText: 'It\'s like a select list in html. Maybe it should be called that... meh.',
          onPress: this.goToRoute(routes.ROUTE_PICKERS),
        },
        {
          ...defaultProps,
          headerText: 'Pie Chart',
          secondaryText: 'A type of graph in which a circle is divided into sectors that each represent a proportion of the whole.',
          onPress: this.goToRoute(routes.ROUTE_PIE_CHART),
        },
        {
          ...defaultProps,
          headerText: 'Radio Buttons',
          secondaryText: 'Radio buttons let a user select ONE of a limited number of choices.',
          onPress: this.goToRoute(routes.ROUTE_RADIO_BUTTONS),
        },
        {
          ...defaultProps,
          headerText: 'Spinners',
          secondaryText: 'Activity indicators so the user doesn\'t think the app is stuck.',
          onPress: this.goToRoute(routes.ROUTE_SPINNERS),
        },
        {
          ...defaultProps,
          headerText: 'Text Inputs',
          secondaryText: 'Text inputs. Single line, TextAreas etc.',
          onPress: this.goToRoute(routes.ROUTE_TEXT_INPUT),
        },
        {
          ...defaultProps,
          headerText: 'Top Tabs',
          secondaryText: 'Tabs on the top of the page like a web browser.',
          onPress: this.goToRoute(routes.ROUTE_TOP_TABS),
        },
      ],
    });
    // const { navigate } = this.props.navigation;
    // navigate(routes.ROUTE_AVATARS);
  }


  goToRoute(route) {
    return () => {
      const { navigate } = this.props.navigation;
      navigate(route);
    };
  }

  render() {
    return (
      <List
        dataSource={this.state.components}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    componentsNavigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(ComponentsListPage);
