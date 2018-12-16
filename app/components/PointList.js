// @flow
import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Label, Container } from 'reactstrap';
import Point from './Point';

type Props = {
  points: {
    stop: Array,
    start: Array,
    continue: Array
  },
  pointType: string,
  actions: {
    update: (point, pointType) => void,
    remove: point => void,
    incrementLike: point => void,
    decrementLike: point => void
  }
};

export default class PointList extends Component<Props> {
  props: Props;

  textChanged(event, point) {
    const newPoint = point;
    const { value } = event.target;
    const { actions } = this.props;
    const { pointType } = this.props;
    newPoint.text = value;
    actions.update(newPoint, pointType);
  }

  render() {
    const { points, pointType, actions } = this.props;
    if (points.length > 0) {
      return (
        <Container fluid>
          <ListGroup>
            {points.map(point => (
              <ListGroupItem key={point.id} flush>
                <Point
                  key={point.id}
                  point={point}
                  onChange={event => this.textChanged(event, point)}
                  onLikeClick={() => actions.incrementLike(point, pointType)}
                  onDislikeClick={() => actions.decrementLike(point, pointType)}
                  onDeleteClick={() => actions.remove(point, pointType)}
                />
              </ListGroupItem>
            ))}
          </ListGroup>
        </Container>
      );
    }
    return <Label>No Point added yet</Label>;
  }
}
