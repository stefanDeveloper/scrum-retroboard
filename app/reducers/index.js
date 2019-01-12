// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import points from './points';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    points
  });
}
