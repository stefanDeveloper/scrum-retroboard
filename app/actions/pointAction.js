// @flow
import * as types from './actionTypes';

export const update = (point, pointType, sprintId) => ({
  type: types.UPDATE_POINT,
  point,
  pointType,
  sprintId
});

export const create = (pointType, sprintId) => ({
  type: types.CREATE_POINT,
  pointType,
  sprintId
});

export const remove = (point, pointType, sprintId) => ({
  type: types.REMOVE_POINT,
  point,
  pointType,
  sprintId
});

export const incrementLike = (point, pointType, sprintId) => ({
  type: types.INCREMENT_LIKE,
  point,
  pointType,
  sprintId
});

export const incrementLikeAll = (pointType, sprintId) => ({
  type: types.INCREMENT_LIKE_ALL,
  pointType,
  sprintId
});
