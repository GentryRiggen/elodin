import { combineReducers } from 'redux';
import { reducers } from '../../ducks';

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;