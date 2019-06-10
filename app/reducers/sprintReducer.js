// @flow
import * as types from '../actions/actionTypes';

import type { Action } from './types';

const sprint = (state: object, action: Action) => {
  const newSprint = Object.assign([], action.sprint);
  const newSprints = Object.assign([], state.sprints);
  const indexOfpointToDelete = newSprints.findIndex(
    item => item.id === newSprint.id
  );
  switch (action.type) {
    case types.ADD_SPRINT:
      newSprints.push(
        Object.assign(
          {},
          {
            points: {
              stop: [],
              start: [],
              continue: []
            },
            image: {
              start: {
                url: '',
                scale: 50
              },
              stop: {
                url: '',
                scale: 50
              },
              continue: {
                url: '',
                scale: 50
              }
            },
            title: {
              name: 'New Sprint',
              start: 'Start',
              stop: 'Stop',
              continue: 'Continue'
            },
            id: `sprint${Date.now()}`
          }
        )
      );
      return {
        ...state,
        sprints: newSprints
      };
    case types.DELETE_SPRINT:
      newSprints.splice(indexOfpointToDelete, 1);
      return {
        ...state,
        sprints: newSprints
      };
    case types.LOAD:
      return action.state.scrum;
    default:
      return state;
  }
};

export default sprint;
