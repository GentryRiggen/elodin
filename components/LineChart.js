import React from 'react';
import {
  ART,
  Dimensions,
  LayoutAnimation,
} from 'react-native';
import Morph from 'art/morph/path';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import graphing from './lib/graphing';
import AnimatedArtShape from './AnimatedArtShape';
import Text from './Text';
import View from './View';

const {
  Surface,
  Group,
  Shape,
} = ART;
const dimensionWindow = Dimensions.get('window');
const xLabelHeight = 48;

class LineChart extends React.Component {
  static propTypes = {
    animationDurationMs: React.PropTypes.number,
    dotSize: React.PropTypes.number,
    data: React.PropTypes.array.isRequired,
    paddingSize: React.PropTypes.number,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    style: React.PropTypes.any,
    strokeWidth: React.PropTypes.number,
    xSelector: React.PropTypes.func,
    ySelector: React.PropTypes.func,
  };

  static defaultProps = {
    animationDurationMs: 500,
    dotSize: 8,
    paddingSize: 20,
    strokeWidth: 2,
    ySelector: d => d.y,
    xSelector: d => d.x,
    width: dimensionWindow.width,
    height: Math.round(dimensionWindow.height * 0.6),
  };

  constructor(props) {
    super(props);
    this.state = {
      graphWidth: 0,
      graphHeight: 0,
      linePath: '',
    };
  }

  componentWillMount() {
    this.computeNextState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.computeNextState(nextProps);
  }

  computeNextState(nextProps) {
    const {
      animationDurationMs,
      data,
      width,
      height,
      paddingSize,
      xSelector,
      ySelector,
    } = nextProps;

    const fullPaddingSize = paddingSize * 2;
    const graphWidth = width - fullPaddingSize;
    const graphHeight = height - fullPaddingSize;

    const lineGraph = graphing.createLineGraph({
      data,
      xSelector,
      ySelector,
      width: graphWidth,
      height: graphHeight - xLabelHeight,
    });

    this.setState({
      graphWidth,
      graphHeight,
      linePath: lineGraph.path,
      ticks: lineGraph.ticks,
      scale: lineGraph.scale,
    });
  }

  render() {
    const {
      dotSize,
      ySelector,
      paddingSize,
      style,
      strokeWidth,
    } = this.props;
    const {
      graphWidth,
      graphHeight,
      linePath,
      ticks,
      scale,
    } = this.state;
    const tickWidth = paddingSize * 2;

    const {
      x: scaleX,
    } = scale;

    const tickXFormat = scaleX.tickFormat(null, '%b %d');

    return (
      <View
        style={{
          ...style.container,
          height: graphHeight,
          width: graphWidth,
        }}
      >
        <Surface width={graphWidth} height={graphHeight - xLabelHeight}>
          <Group x={0} y={0}>
            <AnimatedArtShape
              d={linePath}
              stroke={style.stroke}
              strokeWidth={strokeWidth}
              fill="#fff"
            />
          </Group>
        </Surface>

        <View style={style.ticksYContainer}>
          {ticks.map((tick, index) => {
            const value = ySelector(tick.datum);
            const tickStyles = {
              ...style.tickLabelY,
              width: tickWidth,
              left: tick.x - Math.round(tickWidth * 0.5),
              top: tick.y - Math.round(tickWidth * 0.65),
            };

            return (
              <View
                key={index}
                style={tickStyles}
              >
                <Text style={style.tickLabelYText}>
                  {value}&deg;
                </Text>
              </View>
            );
          })}
        </View>

        <View style={style.ticksYContainer}>
          {ticks.map((tick, index) => (
            <View
              key={index}
              style={{
                ...style.ticksYDot,
                width: dotSize,
                height: dotSize,
                left: tick.x - (dotSize / 2),
                top: tick.y - (dotSize / 2),
                borderRadius: (dotSize / 2)
              }}
            />
          ))}
        </View>

        <View>
          {ticks.map((tick, index) => {
            const tickStyles = {
              ...style.tickLabelX,
              width: tickWidth,
              left: tick.x - (tickWidth / 2),
            };
            return (
              <Text
                key={index}
                style={tickStyles}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {tickXFormat(new Date(tick.datum.time * 1000))}
              </Text>
            );
          })}
        </View>

      </View>
    );
  }
}

export default connectStyle(Constants.components.LineChart)(LineChart);
