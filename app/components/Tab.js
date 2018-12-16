// @flow
import React, { Component } from 'react';
import styles from './Board.css';
import PointList from './PointList';

type Props = {
  points: Array,
  pointType: string,
  actions: {
    create: (point) => void,
    incrementLikeAll: () => void,
    decrementLikeAll: () => void
  }
};

export default class Tab extends Component<Props> {
  props: Props;

  render() {
    const {
      points,
      pointType,
      actions
    } = this.props;
    return (
      <div>
        <div>
            <PointList points={points} actions={actions} pointType={pointType}/>
        </div> 
        <div>
            <button className={styles.btn} data-tclass="btn" type="button"  onClick={() => actions.create(pointType)}><i className="fa fa-arrow-left fa-3x" data-tclass="btn" type="button"/></button>
        </div>    
        <div>
          <button type="button" onClick={() => actions.incrementLikeAll(pointType)} />
          <button type="button" onClick={() => actions.decrementLikeAll(pointType)} />
        </div>
      </div>
    );
  }
}