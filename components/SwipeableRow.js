import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Interactable from 'react-native-interactable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import R from 'ramda';

import { colors } from './lib/theme';
import View from './View';
import Text from './Text';

const width = 100;const tension = 500;
const damping = 0.6;
const bounce = 0.25;

const baseActionStyle = {
  width,
  height: '100%',
};

const rightTypes = [
  'edit',
  'delete',
];

const styles = {
  allActionsWrapper: {
    position: 'absolute',
    height: '100%',
    right: 0,
    left: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftActionsWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  rightActionsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  action: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteAction: {
    ...baseActionStyle,
    backgroundColor: colors.error,
  },
  editAction: {
    ...baseActionStyle,
    backgroundColor: colors.primary,
  },
};

export default class SwipeableRow extends Component {
  static propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf(['delete', 'edit']).isRequired,
      handler: PropTypes.func.isRequired,
    })),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    actions: [],
  };

  getActionProps(type) {
    let icon = '';
    let text = '';
    let style = {};

    switch (type) {
      case 'delete':
        icon = 'delete';
        text = 'Delete';
        style = styles.deleteAction;
        break;
      case 'edit':
        icon = 'edit';
        text = 'Edit';
        style = styles.editAction;
        break;
      default:
        break;
    }

    return {
      icon,
      text,
      style,
    };
  }

  getSnapPoint(count, negate = false) {
    const snapPoint = width * count;
    const x = negate ? -snapPoint : snapPoint;

    return {
      x,
      damping,
      tension,
    };
  }

  getBoundary(count, negate = false) {
    if (count) {
      const boundary = (count * width) + 15;

      return negate ? -boundary : boundary;
    }

    return 0;
  }

  getSwipeProps() {
    const snapPoints = [{
      x: 0,
      damping,
      tension,
    }];

    const [leftActions, rightActions] = this.splitActions();
    const rightItemCount = rightActions.length;
    const leftItemCount = leftActions.length;

    if (rightItemCount) {
      snapPoints.push(this.getSnapPoint(rightItemCount, true));
    }

    if (leftItemCount) {
      snapPoints.push(this.getSnapPoint(leftItemCount));
    }

    const boundaries = {
      right: this.getBoundary(leftItemCount),
      left: this.getBoundary(rightItemCount, true),
      bounce,
    };

    return {
      snapPoints,
      boundaries,
    };
  }

  setRowRef = (e) => { this.row = e; }

  splitActions() {
    return R.splitWhen(action => rightTypes.includes(action.type), this.props.actions);
  }

  handleAction(action) {
    return () => action.handler(this.row);
  }

  renderAction = (action, index) => {
    const {
      icon,
      text,
      style,
    } = this.getActionProps(action.type);

    return (
      <View key={index} style={style}>
        <TouchableOpacity style={styles.action} onPress={this.handleAction(action)}>
          <Icon name={icon} color={colors.fullWhite} size={20} />
          <Text styleName="inverse small">{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderActions() {
    const [leftActions, rightActions] = this.splitActions();

    return (
      <View style={styles.allActionsWrapper}>
        <View style={styles.leftActionsWrapper}>
          {leftActions.map(this.renderAction)}
        </View>
        <View style={styles.rightActionsWrapper}>
          {rightActions.map(this.renderAction)}
        </View>
      </View>
    );
  }

  render() {
    const {
      snapPoints,
      boundaries,
    } = this.getSwipeProps();

    return (
      <View>
        {this.renderActions()}
        <Interactable.View
          ref={this.setRowRef}
          horizontalOnly
          snapPoints={snapPoints}
          boundaries={boundaries}
          dragToss={0.01}
        >
          <Row>
            {this.props.children}
          </Row>
        </Interactable.View>
      </View>
    );
  }
}
