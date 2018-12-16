// @flow
import * as types from '../actions/actionTypes';
import initialState from './initialState';
import type { Action } from './types';

export default function points(
  state: object = initialState.points,
  action: Action
) {
  const newPoint = Object.assign({}, action.point);
  const newState = Object.assign([], state[action.pointType]);
  const indexOfpointToDelete = newState.findIndex(
    point => point.id === newPoint.id
  );
  switch (action.type) {
    case types.INCREMENT_LIKE:
      return {
        ...state,
        [action.pointType]: newState.map(point => {
          if (point.id !== newPoint.id) {
            // If the id is not equal, it's the point we want
            return point;
          }
          // If point is zero, it can't be possible to get negative values.
          newPoint.likes += 1;
          return {
            ...point,
            ...newPoint
          };
        })
      };
    case types.DECREMENT_LIKE:
      return {
        ...state,
        [action.pointType]: newState.map(point => {
          if (point.id !== newPoint.id) {
            // If the id is not equal, it's the point we want
            return point;
          }
          // If point is zero, it can't be possible to get negative values.
          if (newPoint.likes > 0) {
            newPoint.likes -= 1;
          }
          return {
            ...point,
            ...newPoint
          };
        })
      };
    case types.DECREMENT_LIKE_ALL:
      return {
        ...state,
        [action.pointType]: newState.map(point => {
          // If point is zero, it can't be possible to get negative values.
          if (newPoint.likes > 0) {
            newPoint.likes -= 1;
          }
          return {
            ...point
          };
        })
      };
    case types.INCREMENT_LIKE_ALL:
      return {
        ...state,
        [action.pointType]: newState.map(point => {
          const currentPoint = point;
          // If point is zero, it can't be possible to get negative values.
          currentPoint.likes += 1;
          return {
            ...currentPoint
          };
        })
      };
    case types.UPDATE_POINT:
      return {
        ...state,
        [action.pointType]: newState.map(point => {
          if (point.id !== newPoint.id) {
            return point;
          }
          // If point is zero, it can't be possible to get negative values.
          return {
            ...point,
            newPoint
          };
        })
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
