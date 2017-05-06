import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import { connectStyle } from '@shoutem/theme';
import { Animated, Dimensions, View } from 'react-native';
import Interactable from 'react-native-interactable';

import Constants from './lib/constants';

const screen = {
  height: Dimensions.get('window').height - 75,
};
const noop = () => null;
const openY = 4;
const closedY = screen.height - 100;

class BottomDrawer extends Component {
  static propTypes = {
    children: PropTypes.any,
    onOpened: PropTypes.func,
    onClosed: PropTypes.func,
    open: PropTypes.bool,
    style: PropTypes.any.isRequired,
  };

  static defaultProps = {
    children: null,
    onOpened: noop,
    onClosed: noop,
    open: false,
  };

  constructor(props) {
    super(props);
    this.deltaY = new Animated.Value(screen.height - 100);
  }

  onSnap() {
    return (event) => {
      const index = R.pathOr(false, ['nativeEvent', 'index'])(event);
      if (index !== false) {
        const { onOpened, onClosed } = this.props;
        if (index === 0) {
          onOpened();
        } else {
          onClosed();
        }
      }
    };
  }

  render() {
    const { children, open, style } = this.props;
    return (
      <View style={style.container}>
        <View style={style.panelContainer}>
          <Animated.View
            style={[style.panelContainer, {
              backgroundColor: 'black',
              opacity: this.deltaY.interpolate({
                inputRange: [0, screen.height - 100],
                outputRange: [0.5, 0],
                extrapolateRight: 'clamp',
              }),
            }]}
          />
          <Interactable.View
            verticalOnly
            snapPoints={[{ y: openY }, { y: closedY }]}
            boundaries={{ top: -300, haptics: true }}
            initialPosition={{ y: open ? openY : closedY }}
            animatedValueY={this.deltaY}
            onSnap={this.onSnap()}
          >
            <View style={[style.panel, { height: screen.height + 300 }]}>
              {children}
            </View>
          </Interactable.View>
        </View>

      </View>

    );
  }
}

export default connectStyle(Constants.components.BottomDrawer)(BottomDrawer);
