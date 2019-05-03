// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import pointsReducer from './pointsReducer';
import titleReducer from './titleReducer';
import imageReducer from './imageReducer';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    titleReducer,
    pointsReducer,
    imageReducer
  });
}
