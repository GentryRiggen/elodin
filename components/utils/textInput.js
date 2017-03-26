import TextInputState from 'react-native/lib/TextInputState';
import { findNodeHandle } from 'react-native';

export const focusTextInput = node => {
 try {
    TextInputState.focusTextInput(findNodeHandle(node))
  } catch(e) {
    console.log("Couldn't focus text input: ", e.message)
  }
};
