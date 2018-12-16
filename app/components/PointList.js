import React, { Component } from 'react';
import Point from "./Point"

type Props = {
  points: Array,
  pointType: string,
  actions: {
    update: (point, pointType) => void,
    remove: (point) => void,
    incrementLike: (point) => void,
    decrementLike: (point) => void
  }
};

export default class PointList extends Component<Props> {
  props: Props;

  textChanged(event, point) {
    const newPoint = point;
    newPoint.text = event.target.value;
    this.props.actions.update(newPoint, this.props.pointType);
  }

  render() {
    const {
      points,
      pointType,
      actions
    } = this.props;
    return (
      <div data-tid="point">
        <div>
          {points.map(point => <Point key={point.id} point={point} onChange={event => this.textChanged(event, point)} onLikeClick={() => actions.incrementLike(point, pointType)} onDislikeClick={() => actions.decrementLike(point, pointType)} onDeleteClick={() => actions.remove(point, pointType)}/>)}
        </div>
      </div>  
    );
  }
}