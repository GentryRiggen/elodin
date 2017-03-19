import React from 'react';
import {
  View,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import Icon from './Icon';
import Button from './Button';
import Text from './Text';

const noOp = () => null;

class NavBar extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    onBackButtonPress: React.PropTypes.func,
    leftTitle: React.PropTypes.string,
    leftPress: React.PropTypes.func,
    rightType: React.PropTypes.oneOf(['button', 'menu']),
    rightIsPrimary: React.PropTypes.bool,
    rightMenuOptions: React.PropTypes.shape({
      options: React.PropTypes.array,
      cancelButtonIndex: React.PropTypes.number,
      destructiveButtonIndex: React.PropTypes.number,
    }),
    rightMenuItemPress: React.PropTypes.func,
    rightTitle: React.PropTypes.string,
    rightPress: React.PropTypes.func,
    rightDisabled: React.PropTypes.bool,
    style: React.PropTypes.any,
  };

  static defaultProps = {
    title: '',
    onBackButtonPress: noOp,
    leftTitle: '',
    leftPress: noOp,
    rightType: 'button',
    rightIsPrimary: false,
    rightMenuOptions: {},
    rightMenuItemPress: noOp,
    rightTitle: '',
    rightPress: noOp,
    rightDisabled: false,
  };

  getLeftHeader() {
    const {
      leftTitle,
      leftPress,
      onBackButtonPress,
      style,
    } = this.props;
    const backButton = onBackButtonPress !== noOp;
    const content = backButton
      ? (
        <Icon
          name="md-arrow-back"
          size={24}
          styleName="regular"
          style={style.headerTouchableText}
        />
      ) : (
        <Text
          styleName="regular body"
          style={style.headerTouchableText}
        >
          {leftTitle}
        </Text>
      );
    const onPress = backButton ? onBackButtonPress : leftPress;

    if (leftTitle || backButton) {
      return (
        <Button
          onPress={onPress}
          style={style.headerTouchableLeft}
          styleName="narrow flex-start"
          noRipple
        >
          {content}
        </Button>
      );
    }

    return null;
  }

  getRightHeader() {
    const {
      rightType,
      rightTitle,
      rightPress,
      rightIsPrimary,
      rightDisabled,
      rightMenuOptions,
      rightMenuItemPress,
      style,
    } = this.props;
    const isButton = rightType === 'button';
    if (rightTitle || !isButton) {
      let textType = rightDisabled ? 'disabled' : 'regular';
      if (rightIsPrimary && !rightDisabled) {
        textType = 'primary';
      }
      const onPress = isButton ? rightPress : this.OnOpenActionSheet();
      const content = isButton
        ? (
          <Text
            styleName={`body ${textType}`}
            style={style.headerTouchableText}
          >
            {rightTitle}
          </Text>
        ) : (
          <View
            style={{paddingRight: 8}}
          >
            <Icon
              name="md-more"
              size={28}
              styleName="regular"
              style={style.headerTouchableText}
            />
            <ActionSheet
              ref={r => this.ActionSheet = r}
              {...rightMenuOptions}
              onPress={rightMenuItemPress}
            />
          </View>
        );

      return (
        <Button
          onPress={onPress}
          disabled={rightDisabled}
          style={style.headerTouchableRight}
          styleName="narrow flex-end"
          noRipple
        >
          {content}
        </Button>
      );
    }

    return null;
  }

  OnOpenActionSheet() {
    return () => {
      this.ActionSheet.show();
    };
  }


  render() {
    const { style } = this.props;
    return (
      <View style={style.header}>
        <View style={style.headerContent}>
          <View style={style.headerButton}>
            {this.getLeftHeader()}
          </View>

          <View style={style.headerTitle}>
            <Text
              styleName="regular title center"
              style={style.headerTitleText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {this.props.title}
            </Text>
          </View>

          <View style={style.headerButton}>
            {this.getRightHeader()}
          </View>
        </View>
      </View>
    );
  }
}

export default connectStyle(Constants.components.NavBar)(NavBar);
