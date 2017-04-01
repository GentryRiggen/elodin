import TextInputState from 'react-native/lib/TextInputState';
import { findNodeHandle } from 'react-native';

export const focusTextInput = (node) => {
  const nodeHandle = findNodeHandle(node.wrappedInstance.input);
  TextInputState.focusTextInput(nodeHandle);
};
