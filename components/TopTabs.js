import React from 'react';
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

class TopTabs extends React.Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired,
    initialPage: React.PropTypes.number,
    scrollable: React.PropTypes.bool,
    style: React.PropTypes.any,
    noSwipe: React.PropTypes.bool,
  };

  static defaultProps = {
    initialPage: 0,
    scrollable: false,
    noSwipe: false,
  };

  renderTabBar() {
    return () => {
      if (this.props.scrollable) {
        return <ScrollableTabBar />;
      }

      return <DefaultTabBar />;
    };
  }

  render() {
    const {
      children,
      initialPage,
      style,
      noSwipe,
    } = this.props;
    return (
      <ScrollableTabView
        initialPage={initialPage}
        renderTabBar={this.renderTabBar()}
        tabBarUnderlineStyle={style.tabBarUnderline}
        tabBarTextStyle={style.tabBarTextStyle}
        style={style.tabBar}
        locked={noSwipe}
      >
        {children}
      </ScrollableTabView>
    );
  }
}

export default connectStyle(Constants.components.TopTabs)(TopTabs);
