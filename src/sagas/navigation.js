import { put, select } from 'redux-saga/effects';
import { actions } from 'react-native-navigation-redux-helpers';

const { pushRoute } = actions;

export function* navigateTo(currentKey, key, backButton = false) {
  const navigation = yield select(state => state.navigation);
  yield put(pushRoute({
    key,
    backButton,
  }, currentKey));
}
