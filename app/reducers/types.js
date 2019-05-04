import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type stateType = {
  +point: Array
};

export type Action = {
  +type: string
};

export type GetState = () => stateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
