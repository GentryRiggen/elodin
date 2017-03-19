import {
  spawn,
} from 'redux-saga/effects';
import {
  takeEvery,
} from 'redux-saga';
import {
  map,
  prop,
  propOr,
} from 'ramda';
import { sagas } from '../../sagas';
import {
  EXECUTE_SAGA,
} from '../../ducks/saga';

function* executeSaga(action) {
  const saga = prop('saga')(action);

  if (saga) {
    yield spawn.apply(spawn, [saga, ...propOr([], 'parameters')(action)]);
  }
}

function* watchSaga() {
  yield takeEvery(EXECUTE_SAGA, executeSaga);
}

export default function* rootSagas() {
  const sagaList = [
    ...sagas,
    watchSaga,
  ];

  yield map(saga => spawn(saga))(sagaList);
}
