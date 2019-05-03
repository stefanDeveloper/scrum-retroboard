// @flow
import React, { Component } from 'react';
import { Label, Container } from 'reactstrap';
import { connect } from 'react-redux';
import Point from '../point/Point';
import styles from './PointList.css';
import {
  update as updatePoint,
  remove as removePoint,
  incrementLike as incrementLikePoint
} from '../../actions/points';

type Props = {
  points: {
    stop: Array,
    start: Array,
    continue: Array
  },
  pointType: string,
  update: (point: object, pointType: string) => void,
  remove: (point: object, pointType: string) => void,
  incrementLike: (point: object, pointType: string) => void
};

class PointList extends Component<Props> {
  props: Props;

  textChanged(event, point) {
    const newPoint = point;
    const { value } = event.target;
    const { update } = this.props;
    const { pointType } = this.props;
    newPoint.text = value;
    update(newPoint, pointType);
  }

  render() {
    const { points, pointType, incrementLike, remove } = this.props;
    if (points.length > 0) {
      return (
        <Container className={styles.container} fluid>
          {points.map(point => (
            <Point
              key={point.id}
              point={point}
              onChange={event => this.textChanged(event, point)}
              onLikeClick={() => incrementLike(point, pointType)}
              onDeleteClick={() => remove(point, pointType)}
            />
          ))}
        </Container>
      );
    }
    return <Label className={styles.label}>No bullet point added yet!</Label>;
  }
}

const mapDispatchToProps = dispatch => ({
  update: (point, pointType) => dispatch(updatePoint(point, pointType)),
  incrementLike: (point, pointType) =>
    dispatch(incrementLikePoint(point, pointType)),
  remove: (point, pointType) => dispatch(removePoint(point, pointType))
});

export default connect(
  null,
  mapDispatchToProps
)(PointList);
