// @flow
import * as types from '../actions/actionTypes';

import type { Action } from './types';

const points = (state: object, action: Action) => {
  const sprintMap = new Map(state.sprints.map(el => [el.id, el]));
  let newSprint = Object.assign([], sprintMap.get(action.sprintId));
  const newSprints = Object.assign([], state.sprints);
  const newPoints = Object.assign([], newSprint[action.pointType]);
  const newPoint = Object.assign({}, action.point);
  const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'dark'
  ];
  const indexOfpointToDelete = newPoints.find(pt => pt.id === newPoint.id);

  switch (action.type) {
    case types.INCREMENT_LIKE:
      newSprint = newSprint.points[action.pointType].map(point => {
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
      });

      newSprints[
        newSprints.findIndex(spr => spr.id === action.sprintId)
      ].points[action.pointType] = newSprint;
      return {
        ...state,
        sprints: newSprints
      };
    case types.UPDATE_POINT:
      newSprint.points[action.pointType].map(point => {
        if (point.id !== newPoint.id) {
          return point;
        }
        return {
          ...point,
          newPoint
        };
      });
      return {
        ...state,
        sprints: newSprints
      };
    case types.CREATE_POINT:
      newSprint.points[action.pointType].push(
        Object.assign(
          {},
          {
            id: `point${Date.now()}`,
            text: '',
            likes: 0,
            color: colors[Math.floor(Math.random() * colors.length)]
          }
        )
      );
      return {
        ...state,
        sprints: newSprints
      };
    case types.REMOVE_POINT:
      newSprint.points[action.pointType].splice(indexOfpointToDelete, 1);
      return {
        ...state,
        sprints: newSprints
      };
    case types.INCREMENT_LIKE_ALL:
      newSprint.points[action.pointType].map(point => {
        const currentPoint = point;
        // If point is zero, it can't be possible to get negative values.
        currentPoint.likes += 1;
        return {
          ...currentPoint
        };
      });
      return {
        ...state,
        sprints: newSprints
      };
    default:
      return state;
  }
};

export default points;
