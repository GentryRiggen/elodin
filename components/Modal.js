import React from 'react';
import {
  Modal as NativeModal,
} from 'react-native';
import NavBar from './NavBar';

const noOp = () => null;

class Modal extends React.Component {
  static propTypes = {
    animationType: React.PropTypes.oneOf(['none', 'slide', 'fade']),
    children: React.PropTypes.any,
    onRequestClose: React.PropTypes.func,
    title: React.PropTypes.string.isRequired,
    primaryTitle: React.PropTypes.string,
    primaryAction: React.PropTypes.func,
    secondaryTitle: React.PropTypes.string,
    secondaryAction: React.PropTypes.func,
    transparent: React.PropTypes.bool,
    visible: React.PropTypes.bool,
  };

  static defaultProps = {
    animationType: 'slide',
    children: null,
    onRequestClose: noOp,
    primaryTitle: '',
    primaryAction: noOp,
    secondaryTitle: '',
    secondaryAction: noOp,
    transparent: false,
    visible: false,
  };

  renderHeader() {
    const {
      title,
      primaryTitle,
      primaryAction,
      secondaryTitle,
      secondaryAction,
    } = this.props;

    return (
      <NavBar
        title={title}
        leftTitle={secondaryTitle}
        leftPress={secondaryAction}
        rightTitle={primaryTitle}
        rightPress={primaryAction}
        rightIsPrimary
      />
    );
  }

  render() {
    const {
      animationType,
      children,
      onRequestClose,
      transparent,
      visible,
    } = this.props;
    return (
      <NativeModal
        animationType={animationType}
        transparent={transparent}
        visible={visible}
        onRequestClose={onRequestClose}
      >
        {this.renderHeader()}
        {children}
      </NativeModal>
    );
  }
}

export default Modal;
