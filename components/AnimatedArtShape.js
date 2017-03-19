import React from 'react';
import {
  ART,
  LayoutAnimation,
} from 'react-native';
import Morph from 'art/morph/path';

const {
  Shape,
} = ART;

export default class AnimatedArtShape extends React.Component {
  static propTypes = {
    animationDurationMs: React.PropTypes.number,
    d: React.PropTypes.string.isRequired,
    stroke: React.PropTypes.string.isRequired,
    strokeWidth: React.PropTypes.number.isRequired,
    fill: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    strokeWidth: 0,
    animationDurationMs: 500,
    fill: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      d: '',
    };
  }

  componentWillMount() {
    this.computeNextState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.computeNextState(nextProps);
  }

  // Animations based on: https://github.com/hswolff/BetterWeather
  computeNextState(nextProps) {
    const {
      animationDurationMs,
      d,
    } = nextProps;

    this.setState({ d });

    if (!this.previousGraph) this.previousGraph = d;

    if (this.props !== nextProps) {
      const dFrom = this.previousGraph;
      const dTo = d;

      cancelAnimationFrame(this.animating);
      this.animating = null;

      const configureNext = LayoutAnimation.configureNext;
      const easeInEaseOut = LayoutAnimation.Types.easeInEaseOut;
      const opacity = LayoutAnimation.Properties.opacity;
      configureNext(LayoutAnimation.create(animationDurationMs, easeInEaseOut, opacity));

      this.setState({ d: Morph.Tween(dFrom, dTo) }, () => this.animate());
      this.previousGraph = d;
    }
  }

  // This is where we animate our graph's path value.
  animate(start) {
    this.animating = requestAnimationFrame((timestamp) => {
      // eslint-disable-next-line no-param-reassign
      if (!start) start = timestamp;

      const delta = (timestamp - start) / this.props.animationDurationMs;

      if (delta > 1) {
        this.animating = null;
        // Just to be safe set our final value to the new graph path.
        this.setState({
          d: this.previousGraph,
        });

        // Stop our animation loop.
        return;
      }

      this.state.d.tween(delta);
      this.setState(this.state, () => this.animate(start));
    });
  }

  render() {
    const { d } = this.state;
    const {
      fill,
      stroke,
      strokeWidth,
    } = this.props;
    return (
      <Shape
        d={d}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
      />
    );
  }
}
