import React from 'react';
import R from 'ramda';
import Swipeout from 'react-native-swipeout';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import Text from './Text';
import TouchableHighlight from './TouchableHighlight';
import View from './View';

class ListItem extends React.Component {
  static propTypes = {
    headerText: React.PropTypes.string.isRequired,
    headerLines: React.PropTypes.number,
    secondaryText: React.PropTypes.string,
    secondaryLines: React.PropTypes.number,
    onPress: React.PropTypes.func,
    divider: React.PropTypes.bool,
    leftContent: React.PropTypes.node,
    leftSwipeButtons: React.PropTypes.array,
    rightSwipeButtons: React.PropTypes.array,
    rightContent: React.PropTypes.node,
    style: React.PropTypes.any,
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
  };

  getHeaderText() {
    const {
      headerText,
      headerLines,
    } = this.props;
    return (
      <Text
        styleName="regular subheading"
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
      return <View style={style.divider}/>;
    }

    return null;
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
        underlayColor={style.underlayColor}
        delayLongPress={0}
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
      return (
        <Swipeout
          left={leftSwipeButtons}
          right={rightSwipeButtons}
        >
          {content}
        </Swipeout>
      );
    }

    return content;
  }
}

export default connectStyle(Constants.components.ListItem)(ListItem);
