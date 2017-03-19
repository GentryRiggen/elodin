import React from 'react';
import {
  View,
} from 'react-native';
import Image from 'react-native-image-progress';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import Spinner from './Spinner';
import Text from './Text';

class Avatar extends React.Component {
  static propTypes = {
    kind: React.PropTypes.oneOf(['person', 'icon']),
    image: React.PropTypes.string,
    name: React.PropTypes.string,
    style: React.PropTypes.any.isRequired,
  };

  static defaultProps = {
    kind: 'person',
    image: '',
    name: '',
  };

  getSpinner() {
    let sizeName;
    const { size } = this.props.style;
    if (size < 40) {
      sizeName = 'small';
    } else if (size < 55) {
      sizeName = 'normal';
    } else {
      sizeName = 'big';
    }
    return () => (
      <Spinner
        styleName={`primary ${sizeName}`}
      />
    );
  }

  renderPersonAvatar() {
    const {
      image,
      name,
      style,
    } = this.props;

    if (image) {
      return (
        <Image
          indicator={this.getSpinner()}
          style={[
            style.personAvatar,
            {
              width: style.size,
              height: style.size,
              borderRadius: style.size / 2,
            },
          ]}
          source={{ uri: image }}
        />
      );
    }

    const nameParts = (name || '').split(' ');
    let initials = '';
    if (nameParts.length >= 1) {
      initials += nameParts[0].charAt(0);
      if (nameParts.length > 1) {
        initials += nameParts[nameParts.length - 1].charAt(0);
      }
    }
    const textSize = style.size > 48 ? 'title' : 'body';

    return (
      <View
        style={[
          style.personAvatar,
          {
            width: style.size,
            height: style.size,
            borderRadius: style.size / 2,
          },
        ]}
      >
        <Text styleName={`bold inverse ${textSize}`}>
          {initials.toUpperCase()}
        </Text>
      </View>
    );
  }

  renderIconAvatar() {
    return null;
  }

  render() {
    const { kind } = this.props;

    const person = kind === 'person';
    if (person) {
      return this.renderPersonAvatar();
    }

    return this.renderIconAvatar();
  }
}

export default connectStyle(Constants.components.Avatar)(Avatar);
