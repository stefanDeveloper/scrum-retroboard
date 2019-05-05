// @flow
import * as types from './actionTypes';

export const update = (image, pointType) => ({
  type: types.UPDATE_IMAGE,
  image,
  pointType
});

export const remove = pointType => ({
  type: types.DELETE_IMAGE,
  pointType
});

export function load(store) {
  return {
    type: types.LOAD,
    store
  };
}

export function newSprint() {
  return {
    type: types.NEW_SPRINT
  };
}
