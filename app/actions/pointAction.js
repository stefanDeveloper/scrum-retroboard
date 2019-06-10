// @flow
import * as types from './actionTypes';

export function update(point, pointType, sprintId) {
  return {
    type: types.UPDATE_POINT,
    point,
    pointType,
    sprintId
  };
}

export function create(pointType, sprintId) {
  return {
    type: types.CREATE_POINT,
    pointType,
    sprintId
  };
}

export function remove(point, pointType, sprintId) {
  return {
    type: types.REMOVE_POINT,
    point,
    pointType,
    sprintId
  };
}

export function incrementLike(point, pointType, sprintId) {
  return {
    type: types.INCREMENT_LIKE,
    point,
    pointType,
    sprintId
  };
}

export function incrementLikeAll(pointType, sprintId) {
  return {
    type: types.INCREMENT_LIKE_ALL,
    pointType,
    sprintId
  };
}
