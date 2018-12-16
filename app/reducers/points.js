// @flow
import * as types from '../actions/actionTypes';
import initialState from './initialState';
import type { Action } from './types';

export default function points(
  state: object = initialState.points,
  action: Action
) {
  const newPoint = Object.assign({}, action.point);
  let newState = Object.assign([], state[action.pointType]);
  const indexOfpointToDelete = newState.findIndex(
    point => point.id === newPoint.id
  );
  switch (action.type) {
    case types.INCREMENT_LIKE:
      // Add one like
      newPoint.likes += 1;
      newState = [
        ...newState.filter(point => point.id !== newPoint.id),
        Object.assign({}, newPoint)
      ];

      return {
        ...state,
        [action.pointType]: newState
      };
    case types.DECREMENT_LIKE:
      // If point is zero, it can't be possible to get negative values.
      if (newPoint.likes > 0) {
        newPoint.likes -= 1;
      }

      newState = [
        ...newState.filter(point => point.id !== newPoint.id),
        Object.assign({}, newPoint)
      ];
      return {
        ...state,
        [action.pointType]: newState
      };
    case types.DECREMENT_LIKE_ALL:
      // Check if there exists some items
      if (newState.length === 0) {
        return state;
      }

      // newState.map(item => {
      //  if (item.likes > 0) {
      //     item.likes -= 1;
      //  }
      // });

      return {
        ...state,
        [action.pointType]: newState
      };
    case types.INCREMENT_LIKE_ALL:
      // Check if there exists some items
      if (newState.length === 0) {
        return state;
      }

      // newState.map(item => {
      // item.likes += 1;
      // });

      return {
        ...state,
        [action.pointType]: newState
      };
    case types.UPDATE_POINT:
      newState = [
        ...newState.filter(point => point.id !== newPoint.id),
        Object.assign({}, newPoint)
      ];
      return {
        ...state,
        [action.pointType]: newState
      };
    case types.CREATE_POINT:
      newState.push(
        Object.assign(
          {},
          {
            id: `point${Date.now()}`,
            text: '',
            likes: 0
          }
        )
      );
      return {
        ...state,
        [action.pointType]: newState
      };
    case types.REMOVE_POINT:
      newState.splice(indexOfpointToDelete, 1);
      return {
        ...state,
        [action.pointType]: newState
      };
    default:
      return state;
  }
}
