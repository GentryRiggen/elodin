import React from 'react';
import {
  ART,
  Dimensions,
} from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import graphing from './lib/graphing';
import AnimatedArtShape from './AnimatedArtShape';
import View from './View';

const {
  Surface,
  Group,
} = ART;
const windowWidth = Dimensions.get('window').width;

class PieChart extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    innerRadius: React.PropTypes.number,
    outerRadius: React.PropTypes.number,
    selected: React.PropTypes.number,
    size: React.PropTypes.number,
    style: React.PropTypes.any,
    valueSelector: React.PropTypes.func,
  };

  static defaultProps = {
    innerRadius: 10,
    selected: -1,
    size: Math.floor(windowWidth - 48),
    outerRadius: Math.floor(windowWidth - 48) / 2,
    valueSelector: d => d.value,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    this.calculate(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.calculate(nextProps);
    }
  }

  calculate(props) {
    const {
      data,
      innerRadius,
      outerRadius,
      selected,
      size,
      valueSelector,
    } = props;
    if (data.length > 0) {
      this.setState({
        data: graphing.createPieGraph({
          data,
          innerRadius,
          outerRadius,
          selected,
          size,
          valueSelector,
        }),
      });
    }
  }

  render() {
    const {
      size,
      style,
    } = this.props;
    const halfSize = size / 2;
    return (
      <View>
        <View style={style.container}>
          <Surface
            width={size}
            height={size}
          >
            <Group x={halfSize} y={halfSize}>
              {this.state.data.map((a, index) => (
                <AnimatedArtShape
                  key={index}
                  animationDurationMs={250}
                  d={a.path}
                  stroke={a.data.fill}
                  strokeWidth={1}
                  fill={a.data.fill}
                />
              ))}
            </Group>
          </Surface>
        </View>
      </View>
    );
  }
}

export default connectStyle(Constants.components.PieChart)(PieChart);
