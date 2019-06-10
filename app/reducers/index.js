// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import reduceReducers from 'reduce-reducers';
import imageReducer from './imageReducer';
import initialState from '../constants/initialState';
import pointsReducer from './pointsReducer';
import sprintReducer from './sprintReducer';
import titleReducer from './titleReducer';

export default function createRootReducer(history: History) {
  const scrum = reduceReducers(
    initialState,
    titleReducer,
    imageReducer,
    pointsReducer,
    sprintReducer
  );
  return combineReducers({
    router: connectRouter(history),
    scrum
  });
}
