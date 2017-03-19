import React from 'react';
import { View } from 'react-native';
import {
  Button,
  LineChart,
  Page,
  Text,
} from '../../../../components';

class LineChartsPage extends React.Component {
  static navigationOptions = {
    header: {
      title: <Text styleName="title">Line Chart</Text>,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    this.getData()();
  }

  getData() {
    return () => {
      const dates = [
        new Date(2016, 4, 1),
        new Date(2016, 5, 1),
        new Date(2016, 6, 1),
        new Date(2016, 7, 1),
        new Date(2016, 8, 1),
        new Date(2016, 9, 1),
        new Date(2016, 10, 1),
        new Date(2016, 11, 1),
        new Date(2016, 12, 1),
      ];
      const data = [];
      dates.forEach((date) => {
        data.push({
          y: Math.round(Math.random() * 100),
          x: date,
          time: date.getTime(),
        });
      });

      this.setState({ data });
    };
  }

  render() {
    return (
      <Page scrollable>
        <View
          style={{
            marginTop: 16,
            marginBottom: 8,
            alignItems: 'center',
          }}
        >

          <LineChart
            data={this.state.data}
            selected={this.state.selected}
          />

          <Button
            styleName="raised accent"
            text="New Data"
            onPress={this.getData()}
          />
        </View>
      </Page>
    );
  }
}

export default LineChartsPage;
