import React from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import AnimatedView from './AnimatedView';
import View from './View';
import Text from './Text';

const windowWidth = Dimensions.get('window').width;

class BarChart extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    size: React.PropTypes.number,
    style: React.PropTypes.any,
  };

  static defaultProps = {
    size: Math.floor(windowWidth - 36),
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      largest: 1,
      data: [],
    };
  }

  componentWillMount() {
    const { data } = this.props;
    const updated = data.map(d => ({
      ...d,
      height: new Animated.Value(0),
    }));
    this.setState({
      largest: this.getLargestValue(data),
      data: updated,
    }, this.dataUpdated(updated));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      const { data } = nextProps;
      const updated = data.map(d => ({
        ...d,
        height: new Animated.Value(0),
      }));
      this.setState({
        largest: this.getLargestValue(data),
        data: updated,
      }, this.dataUpdated(updated));
    }
  }

  getLargestValue(data) {
    let largest = 1;
    data.forEach((d) => {
      if (largest < d.y) {
        largest = d.y;
      }
    });
    return largest;
  }

  dataUpdated(data) {
    return () => {
      Animated.parallel(data.map((d, index) => {
        const size = Math.floor((d.y / this.state.largest) * this.props.size);
        return Animated.timing(this.state.data[index].height, { toValue: size });
      })).start();
    };
  }

  renderBars() {
    const {
      style,
    } = this.props;
    return this.state.data.map((bar, index) => {
      return (
        <View
          key={`${bar.x}-${bar.y}-${index}`}
          style={style.bar}
        >
          <AnimatedView
            style={{
              width: 36,
              height: this.state.data[index].height,
            }}
          />

          <View style={style.xLegend}>
            <Text
              styleName="small"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {bar.x}
            </Text>
          </View>
        </View>
      );
    });
  }

  renderYLegend() {
    const parts = [5, 4, 3, 2, 1, 0];
    const multiplier = this.state.largest / (parts.length - 1);
    return (
      <View
        style={{
          ...this.props.style.yLegend,
          height: this.props.size,
        }}
      >
        {parts.map(part => (
          <Text
            key={part}
            numberOfLines={1}
            ellipsizeMode="tail"
            styleName="small center"
          >
            {Math.floor(multiplier * part)}
          </Text>
        ))}
      </View>
    );
  }

  render() {
    const {
      style,
    } = this.props;
    return (
      <View>
        <View
          style={style.container}
        >
          {this.renderYLegend()}

          <ScrollView
            horizontal
            contentContainerStyle={{
              height: this.props.size + 72,
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}
          >
            {this.renderBars()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default connectStyle(Constants.components.BarChart)(BarChart);
