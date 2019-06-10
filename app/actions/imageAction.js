// @flow
import * as types from './actionTypes';

export const update = (image, pointType, sprintId) => ({
  type: types.UPDATE_IMAGE,
  image,
  pointType,
  sprintId
});

export const remove = (pointType, sprintId) => ({
  type: types.DELETE_IMAGE,
  pointType,
  sprintId
});

export const setScale = (scale, pointType, sprintId) => ({
  type: types.SET_SCALE,
  scale,
  pointType,
  sprintId
});
