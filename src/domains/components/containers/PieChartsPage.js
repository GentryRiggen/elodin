import React from 'react';
import {
  Button,
  Page,
  PieChart,
} from '../../../../components';

const randomDate = (start, end) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

class PieChartsPage extends React.Component {
  static navigationOptions = { headerTitle: 'Pie Charts' };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selected: -1,
    };
  }

  componentWillMount() {
    this.getData()();
  }

  getData() {
    return () => {
      const data = [];
      let amount = 0;
      const colors = [
        '#F44336',
        '#E91E63',
        '#9C27B0',
        '#2196F3',
        '#00BCD4',
        '#4CAF50',
        '#FFC107',
        '#607D8B',
      ];
      for (let i = 0; i < 8; i++) {
        const name = randomDate(new Date(2016, 0, 1), new Date());
        const rand = Math.floor(Math.random() * 8) + 4.5;
        const left = 100 - amount;
        if (rand > left) {
          data.push({
            value: left,
            name,
            fill: colors[i],
          });
          break;
        }
        data.push({
          value: rand,
          name,
          fill: colors[i],
        });
        amount += rand;
      }

      this.setState({
        data,
        selected: -1,
      });
    };
  }

  pieSelected(selected) {
    return () => this.setState({ selected });
  }

  render() {
    return (
      <Page>
        <Button
          styleName="raised accent"
          text="New Data"
          onPress={this.getData()}
        />
        <PieChart
          data={this.state.data}
          selected={this.state.selected}
        />
        <PieChart
          data={this.state.data}
          selected={this.state.selected}
          innerRadius={100}
        />
      </Page>
    );
  }
}

export default PieChartsPage;
