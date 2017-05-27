import React from 'react';
import { View } from 'react-native';
import {
  BarChart,
  Button,
  Page,
  Text,
} from '../../../../components';

const randomDate = (start, end) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

class BarChartsPage extends React.Component {
  static navigationOptions = { headerTitle: 'Bar Chart' };

  constructor(props) {
    super(props);
    this.state = {
      steps: [],
    };
  }

  componentWillMount() {
    this.getData()();
  }

  getData() {
    return () => {
      const amount = Math.floor(Math.random() * 50) + 50;
      const steps = [];
      for (let i = 0; i < amount; i++) {
        steps.push({
          y: (Math.random() * 10) * 1000,
          x: randomDate(new Date(2016, 0, 1), new Date()),
        });
      }

      this.setState({ steps });
    };
  }

  render() {
    return (
      <Page>
        <View style={{ marginTop: 16, marginBottom: 8 }}>
          <Text styleName="title center">Steps</Text>

          <BarChart
            yLegend="Steps"
            xLegend="Date"
            data={this.state.steps}
          />
        </View>

        <Button
          styleName="raised accent"
          text="New Data"
          onPress={this.getData()}
        />
      </Page>
    );
  }
}

export default BarChartsPage;
