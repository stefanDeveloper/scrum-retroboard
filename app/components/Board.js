// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Board.css';
import routes from '../constants/routes';
import * as types from './TabTypes';
import Tab from './Tab';

type Props = {
  points: {
    start: Array,
    stop: Array,
    continue: Array
  },
  actions: {
    update: (point) => void,
    create: (point) => void,
    remove: (point) => void,
    incrementLike: (point) => void,
    decrementLike: (point) => void,
    incrementLikeAll: () => void,
    decrementLikeAll: () => void
  }
};


export default class Board extends Component<Props> {
  props: Props;

  render() {
    const {
      points,
      actions
    } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div>
          <Tab actions={actions} points={points.start} pointType={types.START_POINT}/>
        </div>
        <div>
          <Tab actions={actions} points={points.stop} pointType={types.STOP_POINT}/>
        </div>
        <div>
          <Tab actions={actions} points={points.continue} pointType={types.CONTINUE_POINT}/>
        </div>
      </div>
    );
  }
}
