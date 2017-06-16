import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import { connectStyle } from '@shoutem/theme';
import { TouchableHighlight } from 'react-native';
import Interactable from 'react-native-interactable';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Constants from './lib/constants';
import Text from './Text';
import TouchableOpacity from './TouchableOpacity';
import View from './View';

const tension = 500;
const damping = 0.6;
const bounce = 0.25;
const actionPropType = PropTypes.arrayOf(PropTypes.shape({
  type: PropTypes.oneOf(['standard', 'error', 'success']).isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}));

class ListItem extends Component {
  static propTypes = {
    headerText: PropTypes.string.isRequired,
    headerLines: PropTypes.number,
    secondaryText: PropTypes.string,
    secondaryLines: PropTypes.number,
    onPress: PropTypes.func,
    divider: PropTypes.bool,
    leftContent: PropTypes.node,
    leftSwipeButtons: actionPropType,
    rightSwipeButtons: actionPropType,
    rightContent: PropTypes.node,
    sortHandlers: PropTypes.any,
    style: PropTypes.any.isRequired,
  };

  static defaultProps = {
    headerLines: 1,
    secondaryText: '',
    secondaryLines: 1,
    onPress: () => null,
    divider: true,
    leftContent: null,
    leftSwipeButtons: [],
    rightSwipeButtons: [],
    rightContent: null,
    sortHandlers: null,
  };

  getHeaderText() {
    const {
      headerText,
      headerLines,
    } = this.props;
    return (
      <Text
        styleName="regular subheading bold"
        numberOfLines={headerLines}
        ellipsizeMode="tail"
      >
        {headerText}
      </Text>
    );
  }

  getSecondaryText() {
    const {
      secondaryText,
      secondaryLines,
      style,
    } = this.props;
    if (secondaryText) {
      return (
        <View style={style.textContent}>
          <Text
            styleName="body secondary"
            numberOfLines={secondaryLines}
            ellipsizeMode="tail"
          >
            {secondaryText}
          </Text>
        </View>
      );
    }

    return null;
  }

  getDivider() {
    const {
      divider,
      style,
    } = this.props;
    if (divider) {
      return <View style={style.divider} />;
    }

    return null;
  }

  getSnapPoint(count, negate = false) {
    const width = R.path(['style', 'listItemSwipeButtonWidth'])(this.props);
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
      const width = R.path(['style', 'listItemSwipeButtonWidth'])(this.props);
      const boundary = (count * width) + 15;
      return negate ? -boundary : boundary;
    }

    return 0;
  }

  getSwipeProps() {
    const { leftSwipeButtons, rightSwipeButtons } = this.props;
    const leftItemCount = leftSwipeButtons.length;
    const rightItemCount = rightSwipeButtons.length;
    const snapPoints = [{
      x: 0,
      damping,
      tension,
    }];

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

  actionPressed(action) {
    return () => {
      this.row.snapTo({ index: 0 });
      action.onPress();
    };
  }

  renderLeft() {
    const {
      leftContent,
      style,
    } = this.props;
    if (leftContent) {
      return (
        <View style={style.leftContainer}>
          {leftContent}
        </View>
      );
    }

    return null;
  }

  renderRight() {
    const {
      rightContent,
      style,
    } = this.props;
    if (rightContent) {
      return (
        <View style={style.rightContainer}>
          {rightContent}
        </View>
      );
    }

    return null;
  }

  renderAction = (action, index, left = true) => {
    const { style } = this.props;
    return (
      <View key={index} style={R.propOr(style.standard, action.type)(style)}>
        <TouchableOpacity style={style.action} onPress={this.actionPressed(action)}>
          <Icon name={action.icon} color="#fff" size={20} />
          <Text styleName="regular body inverse">{action.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderActions() {
    const { style, leftSwipeButtons, rightSwipeButtons } = this.props;
    return (
      <View style={style.allActionsWrapper}>
        <View style={style.leftActionsWrapper}>
          {leftSwipeButtons.map((action, index) => this.renderAction(action, index))}
        </View>
        <View style={style.rightActionsWrapper}>
          {rightSwipeButtons.map((action, index) => this.renderAction(action, index, false))}
        </View>
      </View>
    );
  }

  render() {
    const {
      onPress,
      leftSwipeButtons,
      rightSwipeButtons,
      sortHandlers,
      style,
    } = this.props;
    const content = (
      <TouchableHighlight
        {...sortHandlers}
        style={style.listItem}
        onPress={onPress}
      >
        <View style={style.container}>
          <View style={style.innerContainer}>
            {this.renderLeft()}

            <View style={style.textContainer}>
              <View style={style.headerTextContainer}>
                {this.getHeaderText()}
              </View>
              <View style={style.secondaryTextContainer}>
                {this.getSecondaryText()}
              </View>
            </View>

            {this.renderRight()}
          </View>
          {this.getDivider()}
        </View>
      </TouchableHighlight>
    );

    if (!R.isEmpty(leftSwipeButtons) || !R.isEmpty(rightSwipeButtons)) {
      const { snapPoints, boundaries } = this.getSwipeProps();
      return (
        <View style={style.listItem}>
          {this.renderActions()}
          <Interactable.View
            ref={this.setRowRef}
            horizontalOnly
            snapPoints={snapPoints}
            boundaries={boundaries}
            dragToss={0.01}
          >
            {content}
          </Interactable.View>
        </View>
      );
    }

    return content;
  }
}

export default connectStyle(Constants.components.ListItem)(ListItem);
